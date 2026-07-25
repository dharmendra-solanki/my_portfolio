import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

type ProjectCardProps = {
  project: {
    title: string;
    category: string;
    image: string;
    logo: string;
    description: string;
    github: string;
    live: string;
    technologies: React.ElementType[];
  };
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
        group
        relative
        flex
        h-[560px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-lg
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-cyan-400
        hover:shadow-[0_30px_70px_rgba(6,182,212,.18)]
      "
    >
      {/* ================= IMAGE ================= */}

      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Hover Buttons */}

        <div
          className="
            absolute
            right-4
            top-4
            flex
            gap-3
            opacity-0
            translate-y-4
            transition-all
            duration-500
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
              grid
              h-11
              w-11
              place-items-center
              rounded-full
              bg-white
              text-black
              shadow-lg
              transition-all
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            <FaGithub />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
              grid
              h-11
              w-11
              place-items-center
              rounded-full
              bg-cyan-500
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
            "
          >
            <HiArrowUpRight />
          </a>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="flex flex-1 flex-col p-6">
        {/* Category */}

        <span className="w-fit rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-700">
          {project.category}
        </span>

        {/* Title */}

        <h3 className="mt-5 text-2xl font-bold text-slate-900">
          {project.title}
        </h3>

        {/* Description */}

        <p className="mt-4 min-h-[84px] text-[15px] leading-7 text-slate-600 line-clamp-3">
          {project.description}
        </p>

        {/* Push Bottom */}

        <div className="mt-auto">
          {/* Technologies */}

          <div className="mt-6 flex min-h-[52px] flex-wrap gap-3">
            {project.technologies.map((Icon, index) => (
              <div
                key={index}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-100
                  text-xl
                  text-slate-700
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:bg-cyan-500
                  hover:text-white
                "
              >
                <Icon />
              </div>
            ))}
          </div>

          {/* Bottom */}

          <div className="mt-8 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-500">
              Full Stack Project
            </span>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-slate-900
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:gap-3
                hover:bg-cyan-500
              "
            >
              View
              <HiArrowUpRight className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}