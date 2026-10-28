import { Link } from "react-router-dom";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold " +
  "transition duration-200 hover:-translate-y-0.5 active:translate-y-0";

const variants = {
  primary: "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-lift",
  secondary: "border border-line bg-white text-ink hover:border-brand-300 hover:text-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50",
};

export default function Button({ to, href, variant = "primary", className = "", children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...props}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  return <button className={cls} {...props}>{children}</button>;
}
