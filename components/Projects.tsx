"use client";

import { projects } from "@/data";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="animate-duration-600 animate-fade-up animate-ease-in-out">
      <div className="mb-8 mt-6 flex flex-col items-center space-y-9">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="border-grey space-y-3 rounded-lg border-2 px-2 py-3 hover:border-white">
              <div className="text-grey hover:text-white">
                {project.title} -{" "}
                <Link
                  href={project.sourceCode}
                  className="cursor-pointer border-b border-b-white bg-gradient-to-r from-cyan-300 to-teal-500 bg-clip-text text-transparent"
                >
                  Souce Code
                </Link>
              </div>
              <div className="flex items-center">
                Built with:
                <div className="flex flex-wrap items-center space-x-3">
                  {project.techies.map((item, index) => (
                    <div
                      key={index}
                      className="ml-3 rounded-lg border border-white px-2 py-1"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-grey text-base hover:text-white">
                {project.description}
              </div>
              <div className="flex items-center justify-between">
                <div className="invisible" />
                <Link href={project.href}>
                  <MoveRight className="cursor-pointer text-right" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
