export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
  className = "",
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""} ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-200">
          {badge}
        </span>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
