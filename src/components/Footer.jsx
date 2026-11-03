import { Link } from "react-router-dom";
import { Trophy, ExternalLink } from "lucide-react";
import Button from "./Button";
import { brand, competition } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75 border-t border-white/10">
      {/* Hàng điều hướng & Giới thiệu thương hiệu */}
      <div className="container-x py-10 flex flex-col md:flex-row items-center justify-between gap-6">
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

      {/* Khối giới thiệu Cuộc thi Sinh viên Kinh doanh số (DBC - VECOM) */}
      <div className="container-x pb-10">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-brand-500/[0.06] to-white/[0.02] p-5 sm:p-6 backdrop-blur-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-5 transition-all hover:border-brand-400/30">
          <div className="flex items-start gap-4">
            <div className="size-11 sm:size-12 rounded-xl bg-amber-500/15 border border-amber-400/25 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
              <Trophy className="size-5 sm:size-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-300 bg-brand-500/20 px-2.5 py-0.5 rounded-full border border-brand-400/30">
                  {competition.badge}
                </span>
                <span className="text-xs text-white/40">•</span>
                <span className="text-xs text-white/70">
                  {competition.organizer}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-white mt-1.5 tracking-tight">
                {competition.name} — {competition.code}
              </h4>
              <p className="text-xs text-white/60 mt-1 leading-relaxed max-w-2xl">
                {competition.description}
              </p>
            </div>
          </div>

          <a
            href={competition.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all hover:border-brand-400/40 hover:text-brand-300 shrink-0 group cursor-pointer"
          >
            <span>Trang chủ cuộc thi DBC</span>
            <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Dòng bản quyền dưới cùng */}
      <div className="border-t border-white/10 py-6 text-center text-xs sm:text-sm text-white/40">
        © {new Date().getFullYear()} {brand.name}. Đề tài tham dự Cuộc thi Sinh viên Kinh doanh số (DBC).
      </div>
    </footer>
  );
}
