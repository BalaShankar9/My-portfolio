export function MetricCallout({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="text-3xl font-mono font-bold text-zinc-100">
        {value}
      </span>
      <span className="text-sm font-mono text-zinc-500">{label}</span>
    </div>
  );
}
