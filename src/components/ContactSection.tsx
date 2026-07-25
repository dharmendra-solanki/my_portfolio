import {
  HiEnvelope,
  HiMapPin,
  HiPhone,
} from "react-icons/hi2";

import {
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black py-24"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-start">
          <p className="font-semibold uppercase tracking-[5px] text-cyan-400">
            CONTACT
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-white">
            Let's Build Something Amazing
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Have a project, internship opportunity or freelance work?
            Feel free to contact me anytime.
          </p>
        </div>

        {/* Main Card */}

        <div className="grid overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(0,0,0,.4)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT */}

          <div className="flex flex-col justify-between bg-gradient-to-br from-cyan-500 to-indigo-700 p-10 text-white">
            <div>
              <h3 className="text-3xl font-bold">
                Get In Touch
              </h3>

              <p className="mt-4 leading-8 text-cyan-100">
                I enjoy discussing new ideas, collaborating on exciting
                projects, and solving real-world problems through technology.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-center gap-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20">
                  <HiEnvelope size={26} />
                </div>

                <div>
                  <p className="text-sm text-cyan-100">
                    Email
                  </p>

                  <p className="font-semibold">
                    your@email.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20">
                  <HiPhone size={26} />
                </div>

                <div>
                  <p className="text-sm text-cyan-100">
                    Phone
                  </p>

                  <p className="font-semibold">
                    +91 9876543210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20">
                  <HiMapPin size={26} />
                </div>

                <div>
                  <p className="text-sm text-cyan-100">
                    Location
                  </p>

                  <p className="font-semibold">
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}

            <div className="mt-12 flex gap-5">
              <a
                href="#"
                className="grid h-12 w-12 place-items-center rounded-full bg-white/20 transition hover:scale-110 hover:bg-white hover:text-indigo-700"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="grid h-12 w-12 place-items-center rounded-full bg-white/20 transition hover:scale-110 hover:bg-white hover:text-indigo-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* RIGHT */}

          <div className="p-10">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="h-16 w-full rounded-2xl border border-white/10 bg-slate-900 px-6 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="h-16 w-full rounded-2xl border border-white/10 bg-slate-900 px-6 text-white outline-none transition focus:border-cyan-400"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-16 w-full rounded-2xl border border-white/10 bg-slate-900 px-6 text-white outline-none transition focus:border-cyan-400"
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-slate-900 p-6 text-white outline-none transition focus:border-cyan-400"
              />

              <button
                type="submit"
                className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
              >
                Send Message

                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}