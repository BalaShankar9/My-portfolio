export function Footer() {
  return (
    <footer className="flex justify-between items-center px-[clamp(24px,5vw,80px)] py-6 border-t border-[#2a2d35] font-mono text-[11px] text-[#52525b]">
      <span>Bala Sankar Bollineni &copy; {new Date().getFullYear()}</span>
      <span>Built with Next.js &middot; Deployed on Vercel</span>
    </footer>
  );
}
