# Start here — finish and submit the ByteSpace assessment

**Deadline supplied in the assessment: October 1, 2026.** No exact cutoff time or timezone was supplied. Submit early; confirm the cutoff in the portal if needed.

If you used the earlier ZIP, read `UPDATE_NOTES.md` before copying files.

The ZIP is a ready-to-run frontend project. The account-owned steps still to do are: create a public GitHub repository, push the implementation on a feature branch, create a PR, deploy to Vercel, and submit the links in the assessment portal.

## 1. Extract and run

1. Extract the ZIP. Open the inner `bytespace-new` folder (the one containing `package.json`). Do not run from inside the compressed ZIP.
2. Install Node.js 22.12+ and Git if they are not installed. Use the official sites: <https://nodejs.org/> and <https://git-scm.com/>.
3. On Windows, open Command Prompt in that folder, or use VS Code → Terminal → New Terminal. Command Prompt avoids PowerShell execution-policy issues with npm scripts.
4. Run:

```bash
node --version
npm --version
npm ci
npm run dev
```

5. Open the `http://localhost:5173` address printed in the terminal. If that port is occupied, use the alternate URL printed by Vite.
6. Keep that terminal running while reviewing the site. Press Ctrl+C when finished.

## 2. Review it before submission

Read the code and be able to explain the components, responsive CSS, URL-based filters, and form validation. Make any changes needed for the student's own understanding and follow the employer's rules on outside or AI assistance.

Check the complete landing page, login/signup validation, password visibility, hero search, course filters and sorting, mobile menu, and course-detail tabs. Try `data` and `design` in the search field.

Then run:

```bash
npm run build
npm run preview
```

For the included automated checks:

```bash
npx playwright install chromium
npm run test:e2e
```

A Node/package installation requires internet. The website itself uses bundled fonts and images.

### Design review that remains

The implementation follows the supplied screenshots, including all visible landing sections. The original Figma image exports and precise layout tokens were unavailable. The included replacement imagery and sample course metadata are documented. Footer and testimonial copy now follows the clearer September 30 screenshots. If the reviewer requires exact assets, export those from Figma and replace the corresponding files in `public/images/`; update `src/data/courses.ts` for any changed filenames. Compare the finished screen with the Figma frame at the same viewport width before submitting. Do not claim pixel-perfect fidelity without that check.

## 3. Create a PUBLIC GitHub repository, with a proper branch

Use the **student's own GitHub account**. Do not upload the ZIP itself as the source repository.

### Create the main baseline first

1. On GitHub select **New repository**.
2. Name it `bytespace-new` (or another suitable name).
3. Select **Public**.
4. Select **Add a README file**, then create the repository. This gives `main` a small baseline commit.
5. In a new local parent folder — separate from the extracted ZIP — run these commands. Replace `YOUR_USERNAME` first:

```bash
git clone https://github.com/YOUR_USERNAME/bytespace-new.git
cd bytespace-new
git switch -c feat/bytespace-website
```

6. Copy the **contents** of the extracted project into this cloned folder, replacing its initial README. Copy `.github`, `.gitignore`, `.nvmrc`, and the formatter files too. On Windows, enable File Explorer → View → Show → Hidden items if needed. Do not delete or replace the cloned repository's `.git` folder. Do not copy `node_modules`, `dist`, or test reports if you created them while trying the project.
7. Confirm that `package.json` is at the repository root, not inside another nested `bytespace-new` folder.
8. Set the student's correct Git name/email in this repository if Git is not already configured. Use the student's GitHub private commit email if desired; do not copy the placeholder values below literally:

```bash
git config user.name "YOUR NAME"
git config user.email "YOUR GITHUB COMMIT EMAIL"
git status
git branch --show-current
```

The current branch must be `feat/bytespace-website`.

9. Install and verify the copied project, then commit/push the feature branch:

```bash
npm ci
npm run build
git add .
git commit -m "feat: implement ByteSpace landing and authentication pages"
git push -u origin feat/bytespace-website
```

This puts the implementation on a separate branch. The supplied ZIP deliberately excludes `.git`, machine-specific credentials, `node_modules`, and build output. A ZIP by itself cannot preserve a hosted PR.

## 4. Create the Pull Request

1. Open the repository on GitHub.
2. Click **Compare & pull request**, or open **Pull requests → New pull request**.
3. Select base **main** and compare **feat/bytespace-website**.
4. Title: `Build ByteSpace landing page and bonus authentication screens`.
5. Copy the prepared text from `docs/PR_DESCRIPTION.md`, then fill in the actual links and verify the checkboxes.
6. Create the PR. Copy its URL for your submission notes.
7. Wait for the build/browser checks to complete. If GitHub asks to enable Actions on a new account, follow its account-specific instructions.
8. Unless the assessment specifically asks for an open PR, review and merge it using GitHub's **Merge pull request** button. This preserves the record that the work was developed on a feature branch and merged through a PR. Do not push the implementation directly to `main`.

If the employer requires the PR to remain open, keep it open and set Vercel's production branch to `feat/bytespace-website` before the production deployment. Otherwise use the simpler merged-PR/main path below.

## 5. Deploy to Vercel

1. Sign in to <https://vercel.com/> using the student's account and connect the relevant GitHub account.
2. Choose **Add New → Project** and import the public `bytespace-new` repository.
3. Confirm the settings:

| Setting               | Value                                             |
| --------------------- | ------------------------------------------------- |
| Framework preset      | Vite                                              |
| Root directory        | Repository root (`./`)                            |
| Install command       | `npm ci`                                          |
| Build command         | `npm run build`                                   |
| Output directory      | `dist`                                            |
| Node.js               | 22.x, or another supported version at least 22.12 |
| Environment variables | None                                              |
| Production branch     | `main` after merging the PR                       |

4. Click **Deploy**. Wait for a successful/Ready status.
5. Copy the production domain shown by Vercel, normally `https://your-project.vercel.app`. This is the **Submission Link**.
6. Open the production URL in an incognito/private window while signed out of Vercel. Also open `/login`, `/signup`, and `/courses/digital-assets` directly and refresh them.
7. If a Vercel login wall appears, check Project Settings → Deployment Protection. The assessment URL must be public. Standard Protection normally leaves production domains public, while preview/deployment-specific URLs may be protected. Submit the public production domain, not a private preview link. If your account policy prevents making it public, resolve that before submission.

`vercel.json` already contains the client-side route fallback needed for direct page loads. Do not replace the output directory with `src`, `public`, or `build`.

## 6. Submit in the employer's portal

Use the **Submit Assessment** button/link in the original email. The actual portal URL was not supplied in the request, so it is not guessed here.

1. Log in using the tracking ID from the assessment email.
2. Enter the student's **full registered phone number**. The number in the prompt is masked; do not submit the hyphens or guess the missing digits.
3. In **Submission Link**, paste the public production Vercel URL.
4. In **Submission Details**, paste the public GitHub repository URL and PR URL, plus concise reviewer notes. Use `docs/SUBMISSION_DETAILS.md` as a starting point.
5. Open all three links in a private browser window and verify access.
6. Submit before the deadline and save the portal confirmation/screenshot.

Do not put the tracking ID, phone number, tokens, or passwords in the public repository or public README. They are intentionally absent from this package.

## Quick troubleshooting

- **`npm` is not recognized:** install Node.js, close/reopen the terminal, then retry.
- **PowerShell says scripts are disabled:** use Command Prompt or run `npm.cmd ci` and `npm.cmd run dev`.
- **Unsupported Node engine:** upgrade to Node 22.12+; do not bypass the check.
- **Cannot find `package.json`:** change into the inner project folder.
- **Vercel cannot find the build output:** confirm Vite, root `./`, and output `dist`.
- **PR shows no changes:** the implementation was probably copied onto `main`; create the branch from the original README baseline before adding the project. Do not rewrite published history just to fabricate a PR.
- **Login does not enter a real account:** expected. The bonus requirement is a frontend page; real authentication was not supplied or configured.
- **A course category is empty:** expected for categories outside the six-course sample dataset. The UI offers a reset.

## Official documentation

- Vite setup: <https://vite.dev/guide/>
- GitHub PR creation: <https://docs.github.com/en/pull-requests/how-tos/create-pull-requests/creating-a-pull-request>
- Vercel + Vite: <https://vercel.com/docs/frameworks/frontend/vite>
- Vercel Git deployments: <https://vercel.com/docs/git>
- Vercel public/protected deployments: <https://vercel.com/docs/deployment-protection>
