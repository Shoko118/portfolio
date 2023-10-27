import { Project, Tech } from "./index.type";

export const techs: Tech[] = [
  { name: "Next JS", href: "https://nextjs.org/docs/app" },
  { name: "React", href: "https://react.dev/" },
  { name: "Vue", href: "https://vuejs.org/" },
  { name: "Nuxt", href: "https://nuxt.com/" },
  { name: "Radix UI", href: "https://www.radix-ui.com/" },
  { name: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { name: "Headless UI", href: "https://headlessui.com/" },
  { name: "cva", href: "https://cva.style/docs" },
  {
    name: "Zustand",
    href: "https://docs.pmnd.rs/zustand/getting-started/introduction",
  },
  { name: "React Hook Form", href: "https://react-hook-form.com/" },
  { name: "React Embla Carousel", href: "https://www.embla-carousel.com/" },
  { name: "Prisma", href: "https://www.prisma.io/" },
  { name: "SWR", href: "https://swr.vercel.app/" },
];

export const projects: Project[] = [
  {
    title: "Prisma NextJS Starter",
    status: "code",
    href: "https://github.com/Shoko118/next-prisma-todo",
  },
  {
    title: "Nextra NextJS Starter",
    status: "production",
    href: "https://github.com/Shoko118/nextra-docs",
  },
];
