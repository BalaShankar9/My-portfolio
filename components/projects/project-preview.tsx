export function ProjectPreview({ slug }: { slug: string }) {
  return (
    <div className="aspect-video bg-[#0f1115] flex items-center justify-center">
      <span className="text-5xl font-bold text-[#2a2d35] font-mono">{slug[0]?.toUpperCase()}</span>
    </div>
  );
}
