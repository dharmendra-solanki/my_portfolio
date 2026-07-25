import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiCodeBracket } from "react-icons/hi2";

import Particles from "./Particles";
import { Portrait } from "./Portrait";

function IconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
      grid
      h-12
      w-12
      place-items-center
      rounded-full
      border
      border-white/10
      bg-white/5
      text-xl
      text-cyan-300
      backdrop-blur-md
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400
      hover:bg-cyan-500/10
      hover:text-white
    "
    >
      {children}
    </a>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#030712]"
    >
      {/* Background Glow */}
      <div
        className="
        absolute
        inset-0
        -z-30
        bg-[radial-gradient(circle_at_top_left,#2563eb33,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed33,transparent_40%)]
      "
      />

      {/* Particle Background */}
      <div className="absolute inset-0 -z-20">
        <Particles
          particleColors={[
            "#38bdf8",
            "#60a5fa",
            "#818cf8",
            "#22d3ee",
          ]}
          particleCount={120}
          particleSpread={8}
          speed={0.14}
          particleBaseSize={120}
          particleHoverFactor={0.6}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1fr_.9fr]">
        {/* Left */}
        <div>
          <p className="text-lg font-medium text-cyan-400">
            Hi There,
          </p>

          <h1 className="mt-5 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl">
            I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Dharmendra
            </span>
          </h1>

          <h2 className="mt-7 text-2xl font-semibold text-slate-300 sm:text-3xl">
            I Am Into{" "}
            <span className="text-cyan-400">
              Full Stack Development
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            Passionate Full Stack Developer focused on building scalable
            web applications, AI-powered products and modern user
            experiences using React, TypeScript, Node.js and Python.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="#about"
              className="
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-violet-600
              px-8
              py-4
              font-bold
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-[0_0_35px_rgba(59,130,246,.45)]
            "
            >
              About Me

              <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-blue-700">
                ↓
              </span>
            </a>
          </div>

          <div className="mt-10 flex gap-4">
            <IconButton
              href="https://www.linkedin.com/in/dharmendra-6a8437323/"
              label="LinkedIn"
            >
              <FaLinkedinIn />
            </IconButton>

            <IconButton
              href="https://github.com/dharmendra-solanki"
              label="GitHub"
            >
              <FaGithub />
            </IconButton>

            <IconButton
              href="https://leetcode.com/u/dharmendra_21/"
              label="LeetCode"
            >
              <HiCodeBracket />
            </IconButton>
          </div>
        </div>

        {/* Right */}
        <div className="flex justify-center lg:justify-end">
          <Portrait />
        </div>
      </div>
    </section>
  );
}