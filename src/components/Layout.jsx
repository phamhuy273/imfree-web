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
    <>
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
    </>
  );
}
