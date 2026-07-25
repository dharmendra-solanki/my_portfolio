import { particles } from "../data/siteData";

export function NetworkBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-35">
        <div className="network-line left-[8%] top-[20%] w-44 rotate-[24deg]" />
        <div className="network-line left-[24%] top-[68%] w-64 -rotate-[16deg]" />
        <div className="network-line left-[41%] top-[34%] w-80 rotate-[-28deg]" />
        <div className="network-line left-[63%] top-[18%] w-56 rotate-[18deg]" />
        <div className="network-line left-[74%] top-[65%] w-72 rotate-[-35deg]" />
        <div className="network-line left-[84%] top-[39%] w-44 rotate-[42deg]" />
      </div>
      {particles.map((dot) => (
        <span
          key={`${dot.left}-${dot.top}`}
          className="particle-dot"
          style={{ left: dot.left, top: dot.top, animationDelay: dot.delay }}
        />
      ))}
    </div>
  );
}
