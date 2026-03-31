export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100">
        {children}
      </h2>
      <div className="mt-4 h-px w-16 bg-indigo-500" />
    </div>
  );
}
