export function Portrait({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative mx-auto ${
        compact ? "w-full max-w-72" : "w-[min(75vw,30rem)]"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 scale-110 rounded-full bg-cyan-500/20 blur-[90px]" />

      {/* Outer Rotating Ring */}
      <div
        className="
          absolute
          inset-[-18px]
          rounded-full
          border
          border-cyan-400/20
          animate-[spin_18s_linear_infinite]
        "
      >
        <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
      </div>

      {/* Second Ring */}
      <div
        className="
          absolute
          inset-[-36px]
          rounded-full
          border
          border-violet-500/20
          animate-[spin_30s_linear_infinite_reverse]
        "
      >
        <div className="absolute bottom-0 left-8 h-3 w-3 rounded-full bg-violet-500 shadow-[0_0_18px_#8b5cf6]" />
      </div>

      {/* Main Image */}
      <div
        className="
          relative
          overflow-hidden
          rounded-full
          border-4
          border-white/10
          bg-slate-900
          shadow-[0_0_60px_rgba(34,211,238,.25)]
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-[0_0_80px_rgba(34,211,238,.45)]
        "
      >
        <img
          src="/images/profile4.png"
          alt="Dharmendra"
          className="aspect-square w-full object-cover"
        />
      </div>

      {/* React Badge */}
      <div
        className="
          absolute
          -left-10
          top-12
          rounded-full
          border
          border-cyan-400/20
          bg-slate-900/80
          px-4
          py-2
          text-sm
          font-semibold
          text-cyan-300
          backdrop-blur-xl
          shadow-lg
          animate-bounce
        "
      >
        ⚛ React
      </div>

      {/* TypeScript Badge */}
      <div
        className="
          absolute
          -right-12
          top-20
          rounded-full
          border
          border-blue-400/20
          bg-slate-900/80
          px-4
          py-2
          text-sm
          font-semibold
          text-blue-300
          backdrop-blur-xl
          shadow-lg
          animate-pulse
        "
      >
        TS
      </div>

      {/* Node Badge */}
      <div
        className="
          absolute
          -left-6
          bottom-16
          rounded-full
          border
          border-green-400/20
          bg-slate-900/80
          px-4
          py-2
          text-sm
          font-semibold
          text-green-300
          backdrop-blur-xl
          shadow-lg
        "
      >
        Node.js
      </div>

      {/* Available Badge */}
      <div
        className="
          absolute
          -right-4
          bottom-4
          flex
          items-center
          gap-2
          rounded-full
          border
          border-emerald-400/30
          bg-emerald-500
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          shadow-xl
        "
      >
        <span className="h-2.5 w-2.5 rounded-full bg-white animate-pulse"></span>
        SQL
      </div>
    </div>
  );
}