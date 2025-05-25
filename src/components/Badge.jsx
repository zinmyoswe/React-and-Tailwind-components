// components/Badge.jsx
export default function Badge({ label, variant = "primary" }) {
  const baseStyles = "inline-block px-2 py-1 text-xs font-semibold rounded";

  const variants = {
    primary: "text-white bg-blue-600",
    secondary: "text-white bg-gray-600",
    success: "text-white bg-green-600",
    danger: "text-white bg-red-600",
    warning: "text-black bg-yellow-400",
    info: "text-white bg-cyan-600",
    light: "text-gray-800 bg-gray-100",
    dark: "text-white bg-gray-900",
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.primary}`}>
      {label}
    </span>
  );
}
