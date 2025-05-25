export default function GradientBadge({ label, from, to }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r ${from} ${to}`}
    >
      {label}
    </span>
  );
}
