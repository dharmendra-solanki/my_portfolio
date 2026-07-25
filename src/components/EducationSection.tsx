export function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-[#0f172a] py-24"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Education
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Academic Journey
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My learning journey, academic achievements and continuous growth
            in Computer Science.
          </p>
        </div>

        {/* Card */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.45)]">
          {/* Increased image width + reduced card height */}
          <div className="grid lg:grid-cols-[520px_1fr]">
            {/* Left Image */}
            <div className="relative h-[320px] lg:h-[460px] overflow-hidden">
              <img
                src="/images/collage.jpg"
                alt="College"
                className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-full bg-cyan-500 px-5 py-2 text-sm font-bold text-white shadow-lg">
                🎓 Current Student
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center px-10 py-8 lg:px-12">
              <span className="w-fit rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
                2024 - Present
              </span>

              <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Indian Institute of Information Technology, Kota (IIIT Kota)
              </h3>

              <h4 className="mt-2 text-xl font-semibold text-cyan-400">
                Computer Science & Engineering
              </h4>

              <p className="mt-3 text-lg font-medium text-slate-300">
                B.TECH IN CSE
              </p>

              <p className="mt-6 leading-7 text-slate-400">
                Pursuing a Bachelor's degree in Computer Science while focusing
                on Full Stack Development, Data Structures & Algorithms,
                Computer Networks, Operating Systems, Database Management
                Systems and Cloud Technologies.
              </p>

              {/* Subjects */}
              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "DSA",
                  "Web Development",
                  "DBMS",
                  "OS",
                  "CN",
                  "DevOps",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-500 hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}