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
  { name: 'Prisma', href: 'https://www.prisma.io/' },
  { name: 'SWR', href: 'https://swr.vercel.app/' },
] as const;

export const projects = [
  {
    title: 'Todo App with SWR',
    techies: ['Javscript', 'TypeScript', 'Next', 'React', 'SWR', 'Tailwind CSS'],
    description: 'A Frontend Todo application built with React and SWR for stale-while-revalidate, and The app features SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.',
  },
] as const;
