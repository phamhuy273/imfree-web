import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search } from "lucide-react";

const Sk = ({ className = "" }) => <div className={`skeleton rounded-lg ${className}`} />;

export default function AppWindow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [48, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y }}
      className="mx-auto max-w-5xl overflow-hidden rounded-card border border-line bg-white shadow-lift"
    >
      {/* Thanh trên */}
      <div className="flex items-center gap-4 border-b border-line bg-brand-50/60 px-5 py-4">
        <div className="hidden gap-1.5 sm:flex" aria-hidden="true">
          <span className="size-3 rounded-full bg-accent-400" />
          <span className="size-3 rounded-full bg-brand-200" />
          <span className="size-3 rounded-full bg-brand-200" />
        </div>
        <div className="flex h-10 flex-1 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm text-muted">
          <Search className="size-4" aria-hidden="true" /> Tìm kiếm tài sản, kỹ năng...
        </div>
        <div className="size-10 rounded-full bg-gradient-to-br from-brand-300 to-brand-500 overflow-hidden p-1 flex items-center justify-center" aria-hidden="true">
          <img src="/logo.png" alt="" className="size-full object-contain brightness-0 invert" />
        </div>
      </div>

      {/* Thân */}
      <div className="grid gap-6 p-5 sm:grid-cols-[180px_1fr] sm:p-8">
        <div className="hidden space-y-3 sm:block">
          <div className="h-10 rounded-xl bg-brand-100" />
          <Sk className="h-8" />
          <Sk className="h-8" />
          <Sk className="h-8" />
        </div>
        <div className="space-y-5">
          <div className="flex gap-3">
            <Sk className="h-8 w-28 !rounded-full" />
            <Sk className="h-8 w-20 !rounded-full" />
            <Sk className="h-8 w-24 !rounded-full" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-3 rounded-2xl border border-line p-3">
                <Sk className="aspect-[4/3] w-full !rounded-xl" />
                <Sk className="h-4 w-3/4" />
                <Sk className="h-3 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
