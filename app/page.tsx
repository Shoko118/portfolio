import Projects from "@/components/Projects";
import TechStacks from "@/components/TechStacks";

export default function HomePage() {
  return (
    <section>
      <div className="">Hey lads👋, I'm Bryan</div>
      <div className="">I built stuff</div>

      <TechStacks />
      <Projects />
    </section>
  );
}
