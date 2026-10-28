export default function Wing({ variant = "blue", className = "" }) {
  const id = `wing-${variant}`;
  const stops = variant === "blue" ? ["#9CC2FF", "#4F8BF0"] : ["#FF9DB0", "#FF5C7C"];
  return (
    <svg viewBox="0 0 220 130" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={stops[0]} />
          <stop offset="1" stopColor={stops[1]} />
        </linearGradient>
      </defs>
      <path d="M0 130 C12 44 96 0 220 0 C206 78 128 130 0 130Z" fill={`url(#${id})`} />
    </svg>
  );
}
