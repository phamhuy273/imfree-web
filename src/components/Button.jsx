import { Link } from "react-router-dom";

const base =
  "relative overflow-hidden group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold " +
  "transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0";

const variants = {
  primary: "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-soft hover:shadow-lift hover:brightness-105",
  secondary: "border border-line bg-white text-ink hover:border-brand-300 hover:text-brand-700 hover:bg-slate-50/80 shadow-2xs",
  ghost: "text-brand-700 hover:bg-brand-50",
};

export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
        />
      )}
      {children}
    </>
  );

  if (to) return <Link to={to} className={cls} {...props}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{content}</a>;
  return <button className={cls} {...props}>{content}</button>;
}
