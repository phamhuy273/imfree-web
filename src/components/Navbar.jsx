import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand, navLinks } from "../data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Đổi sang nền kính mờ khi cuộn qua 12px
      setScrolled(currentScrollY > 12);

      // Kéo xuống thì ẩn (khi đã cuộn hơn 80px), kéo lên thì hiện lại ngay lập tức
      if (currentScrollY > lastScrollY && currentScrollY > 80 && !open) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(15,26,51,0.07),0_2px_6px_-1px_rgba(15,26,51,0.04)]"
          : "border-b border-slate-200/60 bg-white/85 backdrop-blur-md shadow-[0_2px_8px_-2px_rgba(15,26,51,0.04)]"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="h-9 w-auto object-contain" />
          <span className="text-lg font-bold tracking-tight text-ink">{brand.name}</span>
        </Link>

        {/* Desktop Nav: Vỏ bọc Pill tinh tế, chuyển tab tức thì không delay, không lệch layout */}
        <nav
          className="hidden items-center p-1 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] md:flex"
          aria-label="Điều hướng chính"
        >
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-1.5 text-sm font-semibold transition-colors duration-150 border ${
                  isActive
                    ? "text-brand-700 bg-white shadow-xs border-slate-200/70"
                    : "text-slate-600 hover:text-ink hover:bg-white/60 border-transparent"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* Huy hiệu giá trị cốt lõi: Connect • Share • Value với hiệu ứng radar ping */}
        <div className="hidden md:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-brand-50/50 via-white to-emerald-50/40 border border-slate-200/90 shadow-[0_1px_3px_rgba(15,26,51,0.06),0_1px_2px_rgba(15,26,51,0.03)] text-xs select-none backdrop-blur-md hover:border-brand-200/80 transition-all duration-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 duration-1000" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
          </span>
          <div className="flex items-center gap-1.5 text-xs font-bold tracking-tight">
            <span className="text-brand-700">Connect</span>
            <span className="text-slate-300 text-[10px]">•</span>
            <span className="text-accent-600">Share</span>
            <span className="text-slate-300 text-[10px]">•</span>
            <span className="text-emerald-600">Value</span>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid size-10 place-items-center rounded-full hover:bg-slate-100 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden bg-white/95 backdrop-blur-xl border-b border-line"
            aria-label="Điều hướng mobile"
          >
            <div className="container-x flex flex-col gap-1 pb-5 pt-2">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted aria-[current=page]:bg-brand-50 aria-[current=page]:text-brand-700"
                >
                  {l.label}
                </NavLink>
              ))}
              <div className="mt-3 flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-gradient-to-r from-brand-50/50 via-white to-emerald-50/40 border border-slate-200/80 text-xs shadow-2xs">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                </span>
                <div className="flex items-center gap-1.5 text-xs font-bold tracking-tight">
                  <span className="text-brand-700">Connect</span>
                  <span className="text-slate-300 text-[10px]">•</span>
                  <span className="text-accent-600">Share</span>
                  <span className="text-slate-300 text-[10px]">•</span>
                  <span className="text-emerald-600">Value</span>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
