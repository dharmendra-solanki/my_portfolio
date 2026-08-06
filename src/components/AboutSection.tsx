import { HiCheckCircle } from "react-icons/hi2";
import { FiDownload } from "react-icons/fi";
import { Portrait } from "./Portrait";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            About Me
          </p>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-[420px_1fr]">
          {/* LEFT */}

          <div className="flex justify-center">
            <div
              className="
              group
              relative
              w-full
              max-w-[430px]
              overflow-hidden
              rounded-[34px]
              shadow-[0_30px_80px_rgba(0,0,0,.35)]
              transition-all
              duration-700
              hover:-translate-y-4
              hover:shadow-[0_40px_100px_rgba(6,182,212,.35)]
            "
            >
              {/* Image */}

              <img
                src="/images/profile4.png"
                alt="Dharmendra"
                className="
                h-[620px]
                w-full
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
              "
              />

              {/* Hover Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/75
                via-black/20
                to-transparent

                opacity-0
                transition-all
                duration-500

                group-hover:opacity-100
              "
              />

              {/* Animated Border */}

              <div
                className="
                  absolute
                  inset-0
                  rounded-[34px]
                  border-2
                  border-transparent
                  transition-all
                  duration-500

                  group-hover:border-cyan-400
                "
              />

              {/* Glass Card */}

              <div
                className="
                  absolute
                  bottom-7
                  left-1/2
                  flex
                  w-[88%]
                  -translate-x-1/2
                  translate-y-10
                  items-center
                  justify-between
                  rounded-2xl
                  border
                  border-white/20
                  bg-white/10
                  px-5
                  py-4
                  opacity-0
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  group-hover:translate-y-0
                  group-hover:opacity-100
                "
              >
                <div className="flex items-center gap-3">
                  <img
                    src="/images/profile4.png"
                    alt=""
                    className="h-12 w-12 rounded-full border-2 border-cyan-400 object-cover"
                  />

                  <div>
                    <p className="font-bold text-white">@dharmendra</p>

                    <p className="text-sm text-slate-300">
                      Full Stack Developer
                    </p>
                  </div>
                </div>

                <button
                  className="
                      rounded-xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600
                      px-5
                      py-3
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:scale-105
                    "
                >
                  View
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Dharmendra <span className="text-cyan-600">Solanki</span>
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              I'm a passionate Full Stack Developer who loves building
              responsive, scalable and modern web applications. My primary focus
              is React, TypeScript, Node.js, Express, MongoDB and modern UI
              development.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Alongside development, I regularly practice Data Structures &
              Algorithms and enjoy learning DevOps, AI and cloud technologies.
            </p>

            {/* Skills */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "React & TypeScript",
                "Node.js & Express",
                "REST APIs",
                "MongoDB / SQL",
                "Tailwind CSS",
                "Problem Solving",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <HiCheckCircle className="text-2xl text-cyan-600" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Info Cards */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Email
                </p>

                <p className="mt-2 font-semibold text-slate-900">
                  dsolanki10211@gmail.com
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm uppercase tracking-widest text-slate-500">
                  Location
                </p>

                <p className="mt-2 font-semibold text-slate-900">India</p>
              </div>
            </div>

            {/* Resume */}

            <a
              href="/resume.pdf"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
