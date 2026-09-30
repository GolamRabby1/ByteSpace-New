export interface Course {
  id: string;
  title: string;
  category: string;
  image: string;
  creator: string;
  rating: number;
  reviews: number;
  students: number;
  lessons: number;
  minutes: number;
  level: 'Beginner' | 'Intermediate';
  price: number;
  oldPrice: number;
  description: string;
}

export const categories = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
];

export const courses: Course[] = [
  {
    id: 'drawing-basics',
    title: 'Learn Figma from Basic',
    category: 'UI/UX Design',
    image: 'design',
    creator: 'purepearl studio',
    rating: 4.5,
    reviews: 72,
    students: 299,
    lessons: 17,
    minutes: 136,
    level: 'Beginner',
    price: 25,
    oldPrice: 50,
    description:
      'Turn your first idea into a thoughtful digital design. Learn the Figma essentials, build reusable components, and create a complete interface step by step.',
  },
  {
    id: 'digital-assets',
    title: 'Build Digital Asset',
    category: 'Graphic Design',
    image: 'digital',
    creator: 'purepearl studio',
    rating: 4.8,
    reviews: 122,
    students: 399,
    lessons: 17,
    minutes: 136,
    level: 'Intermediate',
    price: 25,
    oldPrice: 50,
    description:
      'Explore the world of digital creation with a practical introduction to building your own assets. Develop your visual ideas, master essential design principles, and bring a personal project to life.',
  },
  {
    id: 'big-data',
    title: 'The Power of Big Data',
    category: 'Data Science',
    image: 'data',
    creator: 'purepearl studio',
    rating: 4.5,
    reviews: 89,
    students: 320,
    lessons: 17,
    minutes: 136,
    level: 'Beginner',
    price: 25,
    oldPrice: 50,
    description:
      'Make sense of the stories behind the numbers. Explore data, discover patterns, and communicate your findings with clear, useful visualizations.',
  },
  {
    id: 'productivity',
    title: 'Balancing Productivity and Creativity',
    category: 'Productivity',
    image: 'productivity',
    creator: 'purepearl studio',
    rating: 4.5,
    reviews: 68,
    students: 240,
    lessons: 17,
    minutes: 136,
    level: 'Beginner',
    price: 25,
    oldPrice: 50,
    description:
      'Build a routine that makes space for your best work. Learn practical techniques for focused work, thoughtful planning, and sustainable creative habits.',
  },
  {
    id: 'money-management',
    title: 'Mastering Money Management',
    category: 'Freelance & Entrepreneurship',
    image: 'finance',
    creator: 'purepearl studio',
    rating: 4.7,
    reviews: 96,
    students: 310,
    lessons: 17,
    minutes: 136,
    level: 'Beginner',
    price: 25,
    oldPrice: 50,
    description:
      'Get organized with a practical introduction to budgets, cash flow, and financial goals for independent creative work.',
  },
  {
    id: 'startup',
    title: 'From Idea to Startup Success',
    category: 'Marketing',
    image: 'startup',
    creator: 'purepearl studio',
    rating: 4.5,
    reviews: 81,
    students: 275,
    lessons: 17,
    minutes: 136,
    level: 'Intermediate',
    price: 25,
    oldPrice: 50,
    description:
      'Give your idea a strong start. Understand your audience, shape your value proposition, and plan a simple launch with hands-on exercises.',
  },
];

export function filterCourses(
  query = '',
  category = 'Featured',
  level = 'All levels',
  sort = 'relevant',
) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const result = courses.filter((course) => {
    const text = `${course.title} ${course.category} ${course.creator}`.toLowerCase();
    return (
      words.every((word) => text.includes(word)) &&
      (category === 'Featured' || course.category === category) &&
      (level === 'All levels' || course.level === level)
    );
  });
  return sort === 'rating'
    ? result.sort((a, b) => b.rating - a.rating)
    : sort === 'popular'
      ? result.sort((a, b) => b.students - a.students)
      : result;
}

export const formatDuration = (minutes: number) => `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
