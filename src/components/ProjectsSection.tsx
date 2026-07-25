import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-3xl text-start">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            My Projects
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
            Some Things I've Built
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A collection of full-stack applications, AI products and modern
            web experiences built using React, TypeScript, Node.js,
            Python and Cloud technologies.
          </p>

        </div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

        {/* Bottom Button */}

        <div className="mt-20 flex justify-center">

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-slate-900
              px-8
              py-4
              text-lg
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-cyan-600
              hover:shadow-xl
            "
          >
            View All Projects

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </a>

        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;