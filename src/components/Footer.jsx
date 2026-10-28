import { Link } from "react-router-dom";
import Button from "./Button";
import { brand } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75 border-t border-white/10">
      <div className="container-x py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="h-9 w-auto object-contain" />
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </Link>
          <span className="hidden sm:inline text-white/20">|</span>
          <p className="max-w-md text-xs sm:text-sm text-white/60 leading-relaxed">
            {brand.footerText}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            to="/tinh-nang"
            variant="secondary"
            className="!border-white/20 !bg-white/10 !text-white hover:!bg-white/20 !py-2 !px-4 text-xs font-semibold"
          >
            Tính năng
          </Button>
          <Button
            to="/ve-chung-toi"
            className="!py-2 !px-4 text-xs font-semibold"
          >
            Về chúng tôi
          </Button>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs sm:text-sm text-white/40">
        © {new Date().getFullYear()} {brand.name}. Bản quyền thuộc về {brand.name}.
      </div>
    </footer>
  );
}
