import { projects } from '@/data';

export default function Projects() {
  return (
    <section className="animate-fade-up animate-ease-in-out animate-duration-600">
      <div className="flex flex-col mt-6 space-y-9 items-center">
        {projects.map((project, index) => (
          <div key={index} className="space-y-3 border-2 border-grey px-2 py-3 rounded-lg cursor-pointer hover:border-white">
            <div className="text-grey hover:text-white">{project.title}</div>
            <div className="flex items-center">
              Built with:
              <div className="flex-wrap space-x-3 flex items-center">
                {project.techies.map((item, index) => (
                  <div key={index} className="border border-white px-2 py-1 rounded-lg ml-3">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-grey hover:text-white text-base">{project.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
