"use client";

import { projects } from "@/data";
import { Project } from "@/data/index.type";
import { twMerge } from "tailwind-merge";

export default function Projects() {
  function handleHref(href: Project["href"]) {
    window.open(href, "_blank");
  }

  return (
    <section className="mt-6 mb-10 animate-fade-up animate-ease-in-out animate-duration-1000">
      <div>Projects 💻</div>

      <div className="mt-4 space-y-4">
        {projects.map((project, index) => (
          <div key={index} onClick={() => handleHref(project.href)}>
            <div className="cursor-pointer border-b-2 pb-2 border-white md:flex items-center justify-between">
              <p>{project.title}</p>
              <div className="block">
                <div className="flex items-start md:place-content-end">
                  Status: <Tag type="status" value={project.status} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Tag({ type, value }: { type: Project["status"]; value: string }) {
  const colorMap: Record<string, string> = {
    "status-code": "text-indigo-400",
    "status-production": "text-blue-400",
  };

  const key: string = `${type}-${value}` as keyof typeof colorMap;
  const textColor: string = colorMap[key];

  return (
    <div className={twMerge("rounded-full ml-2", textColor)}>
      {capitalizeFirstLetter(value)}
    </div>
  );
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
