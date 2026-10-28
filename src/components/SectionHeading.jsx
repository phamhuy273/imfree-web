export default function SectionHeading({ title, text, center = true, as: Tag = "h2" }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Tag className="h2">{title}</Tag>
      {text && <p className={`lead mt-4 ${center ? "mx-auto" : ""}`}>{text}</p>}
    </div>
  );
}
