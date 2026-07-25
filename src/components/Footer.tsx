import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#020617]">
      {/* Glow Background */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Logo */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent">
              Dharmendra
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Passionate Full Stack Developer focused on building scalable web
              applications, AI-powered products and beautiful user experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>
                <a href="#home" className="transition hover:text-cyan-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="transition hover:text-cyan-400">
                  About
                </a>
              </li>

              <li>
                <a href="#skills" className="transition hover:text-cyan-400">
                  Skills
                </a>
              </li>

              <li>
                <a href="#projects" className="transition hover:text-cyan-400">
                  Projects
                </a>
              </li>

              <li>
                <a href="#contact" className="transition hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Connect With Me
            </h3>

            <p className="mt-5 text-slate-400">
              Let's build something amazing together.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/dharmendra-solanki"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/dharmendra-6a8437323/"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://www.instagram.com/_dheeraj018/"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <p className="text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Dharmendra. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/40"
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}