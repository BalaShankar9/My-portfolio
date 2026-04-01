export function Footer() {
  return (
    <footer className="relative flex justify-between items-center px-[clamp(24px,5vw,80px)] py-6 border-t border-[#2a2d35] font-mono text-[11px] text-[#52525b]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/20 to-transparent" />
      <span>Bala Sankar Bollineni &copy; {new Date().getFullYear()}</span>
      <span>Built with Next.js &middot; Deployed on Vercel</span>
    </footer>
  );
}
