export function StatusBar() {
  return (
    <div className="fixed top-14 left-0 right-0 z-40 flex gap-4 items-center px-[clamp(24px,5vw,80px)] py-1.5 bg-[#16181d] border-b border-[#2a2d35] font-mono text-[11px] text-[#52525b]">
      <span className="flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
        Open to opportunities
      </span>
      <span>Cardiff, UK</span>
      <span className="hidden sm:inline">Eligible to work in the UK</span>
      <span className="hidden md:inline">Full-stack · AI · Python · TypeScript</span>
    </div>
  );
}
