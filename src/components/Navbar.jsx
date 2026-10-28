import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "./Button";
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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-white/85 backdrop-blur-xl shadow-xs"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="h-9 w-auto object-contain" />
          <span className="text-lg font-bold tracking-tight text-ink">{brand.name}</span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Điều hướng chính">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="relative isolate rounded-full px-4 py-2 text-[15px] font-medium text-muted transition hover:text-ink aria-[current=page]:text-brand-700"
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/ve-chung-toi" className="!px-5 !py-2.5">
            Liên hệ
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="grid size-10 place-items-center rounded-full hover:bg-brand-50 md:hidden"
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
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-muted aria-[current=page]:bg-brand-50 aria-[current=page]:text-brand-700"
                >
                  {l.label}
                </NavLink>
              ))}
              <Button to="/ve-chung-toi" className="mt-2" onClick={() => setOpen(false)}>
                Liên hệ
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
