import { ImageIcon } from "lucide-react";

export default function ImagePlaceholder({ label = "Ảnh minh hoạ", className = "" }) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white text-brand-400 ${className}`}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center text-sm font-medium">
        <ImageIcon className="size-7" aria-hidden="true" />
        <span>{label}</span>
      </div>
    </div>
  );
}
