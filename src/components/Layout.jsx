import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  // Chuyển trang thì về đầu trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-[#FBFDFF] text-ink selection:bg-brand-100">
      {/* 1. Lớp hình nền Ambient Glow & Tech Grid cố định toàn bộ website */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
        {/* Vầng hào quang xanh thương hiệu ImFree phía trên bên phải */}
        <div className="absolute -top-32 right-[-5%] size-[600px] rounded-full bg-brand-200/40 blur-[120px]" />
        {/* Vầng hào quang hồng phấn thương hiệu ở giữa bên trái */}
        <div className="absolute top-[35%] -left-36 size-[550px] rounded-full bg-accent-400/15 blur-[140px]" />
        {/* Vầng hào quang xanh chuyển sắc ở dưới cùng */}
        <div className="absolute bottom-10 right-[15%] size-[650px] rounded-full bg-brand-300/25 blur-[150px]" />
        {/* Lưới vi điểm kiến trúc công nghệ (Architectural dot matrix) */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(42,86,204,0.07)_1px,transparent_1px)] [background-size:28px_28px] opacity-80" />
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Bỏ qua điều hướng
      </a>
      <Navbar />
      <motion.main
        id="main"
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
