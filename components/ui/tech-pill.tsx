export function TechPill({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-sm font-mono font-medium text-zinc-300 bg-zinc-800 rounded-full">
      {label}
    </span>
  );
}
