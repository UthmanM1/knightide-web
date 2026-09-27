export default function Media({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={`placeholder-media ${ratio} ${className}`}>
      <span className="px-6">{label}</span>
    </div>
  );
}
