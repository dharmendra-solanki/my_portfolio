import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { navItems } from "../data/siteData";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}

        <a href="#home">
          <Logo />
        </a>

        {/* Desktop */}

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                relative
                font-semibold
                text-slate-300
                transition
                duration-300
                hover:text-cyan-400

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:w-0
                after:bg-cyan-400
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}
        </div>

        {/* Resume */}

        <a
          href="/resume.pdf"
          className="
            hidden
            rounded-full
            border
            border-cyan-400
            px-6
            py-3
            font-semibold
            text-cyan-300
            transition
            duration-300

            hover:bg-cyan-400
            hover:text-black

            lg:block
          "
        >
          Resume
        </a>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white md:hidden"
        >
          {open ? <HiXMark /> : <HiBars3 />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="space-y-6 border-t border-white/10 bg-[#050816]/95 px-6 py-8 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-lg font-semibold text-slate-300 hover:text-cyan-400"
            >
              {item}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="inline-block rounded-full border border-cyan-400 px-6 py-3 text-cyan-300"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
