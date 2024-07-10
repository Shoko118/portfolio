import { Product } from '@/types/store/cart.store';

export const techs = [
  { name: 'Next JS', href: 'https://nextjs.org/docs/app' },
  { name: 'React', href: 'https://react.dev/' },
  { name: 'Vue', href: 'https://vuejs.org/' },
  { name: 'Nuxt', href: 'https://nuxt.com/' },
  { name: 'Radix UI', href: 'https://www.radix-ui.com/' },
  { name: 'Tailwind CSS', href: 'https://tailwindcss.com/' },
  { name: 'Headless UI', href: 'https://headlessui.com/' },
  { name: 'cva', href: 'https://cva.style/docs' },
  {
    name: 'Zustand',
    href: 'https://docs.pmnd.rs/zustand/getting-started/introduction',
  },
  { name: 'React Hook Form', href: 'https://react-hook-form.com/' },
  { name: 'React Embla Carousel', href: 'https://www.embla-carousel.com/' },
  { name: 'Drizzle ORM', href: 'https://orm.drizzle.team/' },
  { name: 'SWR', href: 'https://swr.vercel.app/' },
  { name: 'Tailwind Variants', href: 'https://www.tailwind-variants.org/' },
] as const;

export const projects = [
  {
    title: 'Todo App with SWR',
    techies: ['Javscript', 'TypeScript', 'Next', 'React', 'SWR', 'Tailwind CSS'],
    description:
      'A Frontend Todo application built with React and SWR for stale-while-revalidate, and The app features SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.',
    href: '/project/swr',
    sourceCode: 'https://github.com/Shoko118/portfolio/blob/main/app/project/(public)/swr/page.tsx',
  },
  {
    title: 'Shopping Cart with Zustand',
    techies: ['Javscript', 'TypeScript', 'Next', 'React', 'Zustand'],
    description:
      'This shopping cart application, built with React and Next.js, utilizes Zustand for state management, enhancing performance with its dev tools and utilities API. The project showcases efficient state synchronization and debugging capabilities.',
    href: '/project/zustand',
    sourceCode: 'https://github.com/Shoko118/portfolio/blob/main/app/project/(public)/zustand/page.tsx',
  },
  {
    title: 'Authentication with JWT',
    techies: ['Javscript', 'TypeScript', 'Next', 'React', 'Zod', 'Jose', 'bcrypt'],
    description:
      'A secure user authentication system using Next.js and React. Features JWT for session management, Zod for schema validation, and bcrypt for password hashing, highlighting best practices in web security and user data handling.',
    href: '/project/signup',
    sourceCode: 'https://github.com/Shoko118/portfolio/blob/main/app/project/(public)/signup/page.tsx',
  },
] as const;

export const products: Product[] = [
  { id: '1', price: 1100, title: 'S24 Ultra' },
  { id: '2', price: 1000, title: 'iPhone 15' },
  { id: '3', price: 250, title: 'AirPods Pro 2' },
  { id: '4', price: 1500, title: 'Galaxy Tab S9' },
  { id: '5', price: 900, title: 'Apple IPad Pro 2024' },
  { id: '6', price: 1800, title: 'MacBook Pro 2024' },
  { id: '7', price: 900, title: 'Apple Watch Ultra 2' },
  { id: '8', price: 400, title: 'Sony PlayStation 5' },
];
