'use client';

import { techs } from '@/data';

export default function TechStacks() {
  function openLink(url: string): Window | null {
    return window.open(url, '_blank');
  }

  return (
    <section className="mt-6 w-full animate-fade-up animate-ease-in-out animate-duration-600">
      <div>Techs 💥</div>

      <div className="mt-4 space-y-4 md:space-y-0 md:grid grid-cols-2 gap-4">
        {techs.map((tech, index) => (
          <div key={index} className="border-2 border-grey px-2 py-3 rounded-lg cursor-pointer hover:border-white">
            <div className="text-grey hover:text-white" onClick={() => openLink(tech.href)}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
