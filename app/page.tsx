import Projects from '@/components/Projects';
import TechStacks from '@/components/TechStacks';

export default function HomePage() {
  return (
    <section>
      <div className="animate-fade-up animate-ease-in-out animate-duration-500">Hey lads👋, I'm Bryan</div>
      <div className="animate-fade-up animate-ease-in-out animate-duration-500">I built stuff</div>

      <TechStacks />

      <div className="mt-20 mb-3 animate-fade-up animate-ease-in-out animate-duration-700">Projects</div>
      <div className="w-full h-0.5 bg-white" />
      <Projects />
    </section>
  );
}
