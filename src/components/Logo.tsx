export function Logo() {
  return (
    <div className="group flex items-center gap-3">
      <div
        className="
          h-12
          w-12
          overflow-hidden
          rounded-full
          border-2
          border-cyan-400
          shadow-lg
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:rotate-6
          group-hover:border-violet-500
        "
      >
        <img
          src="/images/profile.jpg"
          alt="Dharmendra"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="leading-none">
        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-white">Dharm</span>
          <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            endra
          </span>
        </h1>

        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
          Developer
        </p>
      </div>
    </div>
  );
}