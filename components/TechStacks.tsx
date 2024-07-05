'use client';

import { techs } from '@/data';
import Link from 'next/link';

export default function TechStacks() {
  return (
    <section className="mt-6 w-full animate-fade-up animate-ease-in-out animate-duration-600">
      <div>Techs 💥</div>

      <div className="mt-4 space-y-4 md:space-y-0 md:grid grid-cols-2 gap-4">
        {techs.map((tech, index) => (
          <Link href={tech.href} key={index} className="border-2 border-grey px-2 py-3 rounded-lg cursor-pointer hover:border-white">
            <div>{tech.name}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
