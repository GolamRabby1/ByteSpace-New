import { test, expect } from '@playwright/test';

test('footer navigation, cookie dialog and restored testimonials', async ({ page }) => {
  await page.goto('/');
  const footer = page.getByRole('navigation', { name: 'Footer navigation' });
  await expect(footer.locator('a, button')).toHaveText([
    'Featured Courses',
    'Featured Categories',
    'Business',
    'IT',
    'Design',
    'Development',
    'Marketing',
    'Photography',
    'Finance',
    'Sport',
    'Become a Creator',
    'Affiliate Program',
    'Contact',
    'Help',
    'About',
  ]);
  await expect(page.locator('.testimonial-grid figcaption strong')).toHaveText([
    'Sarah M.',
    'James L.',
    'Alex B.',
  ]);
  await expect(page.locator('.testimonial-grid blockquote').first()).toContainText(
    'ByteSpace has transformed my approach to learning.',
  );
  const cookies = page.getByRole('button', { name: 'Cookies Settings', exact: true });
  await cookies.click();
  await expect(page.getByRole('dialog', { name: 'Cookies Settings' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Close', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await expect(cookies).toBeFocused();
  await footer.getByRole('button', { name: 'Help', exact: true }).click();
  await expect(page.getByRole('dialog', { name: 'Help', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Close', exact: true }).click();
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await footer.getByRole('link', { name: 'Featured Categories' }).click();
  await expect(page).toHaveURL(/#learning-paths$/);
  await expect(page.locator('#learning-paths')).toBeInViewport();
  await page
    .getByRole('navigation', { name: 'Footer navigation' })
    .getByRole('link', { name: 'IT', exact: true })
    .click();
  await expect(page.getByRole('heading', { name: 'The Power of Big Data' })).toBeVisible();
});

test('complete landing, images, responsive width, and navigation', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Get Access to Hundreds');
  await expect(page.getByRole('heading', { name: /Professional Growth/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Create & Manage/ })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Community Is Saying/ })).toBeVisible();
  await page.locator('footer').scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    for (const image of document.images) image.loading = 'eager';
  });
  await page.waitForFunction(() =>
    [...document.images].every((image) => image.complete && image.naturalWidth > 0),
  );
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth,
  );
  expect(overflow).toBe(false);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-landing.png`,
    fullPage: true,
  });
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open menu' }).click();
    await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    );
  }
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Courses', exact: true })
    .click();
  await expect(page).toHaveURL(/\/courses$/);
  expect(errors).toEqual([]);
});

test('search, sorting, filter empty state and reset', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('searchbox').fill('data');
  await page.getByRole('search').getByRole('button', { name: 'Search', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('1 course');
  await expect(page.getByRole('heading', { name: 'The Power of Big Data' })).toBeVisible();
  await page.getByLabel('Course level').selectOption('Intermediate');
  await expect(page.getByRole('heading', { name: 'No courses found' })).toBeVisible();
  await page.getByRole('button', { name: 'Reset all filters' }).click();
  await expect(page.getByRole('status')).toContainText('6 courses');
  await page.getByLabel('Sort courses').selectOption('rating');
  await expect(page.locator('.course-card h3').first()).toHaveText('Build Digital Asset');
  await page.reload();
  await expect(page.getByLabel('Sort courses')).toHaveValue('rating');
});

test('signup validates, toggles password, and explains demo boundary', async ({
  page,
}, testInfo) => {
  await page.goto('/signup');
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page.getByText('Please enter your full name')).toBeVisible();
  await page.getByLabel('Full Name', { exact: true }).fill('Jamie Davis');
  await page.getByLabel('Email', { exact: true }).fill('jamie@example.com');
  await page.getByLabel('Password', { exact: true }).fill('SamplePassword123');
  await page.getByRole('button', { name: 'Show password' }).click();
  await expect(page.getByLabel('Password', { exact: true })).toHaveAttribute('type', 'text');
  await page.getByRole('button', { name: 'Hide password' }).click();
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-signup.png`,
    fullPage: true,
  });
  await page.getByRole('button', { name: 'Continue', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('No account was created');
  expect(await page.evaluate(() => localStorage.length)).toBe(0);
});

test('login, password reset and direct nested route loading', async ({ page }, testInfo) => {
  await page.goto('/login');
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-login.png`,
    fullPage: true,
  });
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
  await page.getByLabel('Email', { exact: true }).fill('jamie@example.com');
  await page.getByLabel('Password', { exact: true }).fill('SamplePassword123');
  await page.getByRole('button', { name: 'Sign In', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('no credentials were sent or saved');
  await page.goto('/forgot-password');
  await page.getByLabel('Email', { exact: true }).fill('jamie@example.com');
  await page.getByRole('button', { name: 'Check Reset Form' }).click();
  await expect(page.getByRole('status')).toContainText('does not send reset emails');
  await page.goto('/courses/digital-assets');
  await page.reload();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Build Digital Asset');
  await page.getByRole('tab', { name: 'Lessons' }).click();
  await expect(page.getByRole('tabpanel')).toContainText('Course Curriculum');
  await page.getByRole('tab', { name: 'Lessons' }).press('ArrowRight');
  await expect(page.getByRole('tabpanel')).toContainText('Learner Reviews');
});

test('newsletter, categories and unknown routes have clear outcomes', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: '+ More' }).click();
  await page.getByRole('button', { name: 'Cooking', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'More courses are on the way' })).toBeVisible();
  await page.getByRole('button', { name: 'Show featured courses' }).click();
  await expect(page.locator('.course-section > .course-grid > .course-card')).toHaveCount(6);
  await page.getByLabel('Your email address').fill('demo@example.com');
  await page
    .getByRole('form', { name: 'Newsletter' })
    .getByRole('button', { name: 'Search', exact: true })
    .click();
  await expect(page.getByRole('status')).toContainText('does not send or store subscriptions');
  await page.goto('/page-that-does-not-exist');
  await expect(page.getByRole('heading', { name: "Let's find your way back." })).toBeVisible();
});
