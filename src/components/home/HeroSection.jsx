import { ArrowRight, Play, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import Container from "../common/Container";
import Button from "../common/Button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Đề tài Nghiên cứu Khoa học 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Khám Phá Giải Pháp{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {siteConfig.name}
              </span>{" "}
              Đột Phá
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {siteConfig.tagline}. Nền tảng được xây dựng nhằm giải quyết triệt để các thách thức trong quản lý và tối ưu hóa trải nghiệm người dùng.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/features"
                size="lg"
                className="gap-2 shadow-lg shadow-blue-500/25 group"
              >
                <span>Khám phá tính năng</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="lg"
                className="gap-2"
              >
                <span>Về nhóm chúng tôi</span>
              </Button>
            </div>

            {/* Key badges list */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-xs font-medium text-slate-500 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hoàn toàn miễn phí</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <Shield className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Bảo mật dữ liệu</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>Hỗ trợ đa nền tảng</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual / Mockup Preview (Khung ảnh/video wireframe) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Device Mockup Box */}
              <div className="relative rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-800 p-3 shadow-2xl ring-1 ring-slate-800/50">
                {/* Header bar of mockup */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/60">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-[11px] text-slate-400 ml-2 font-mono">{siteConfig.domain}</span>
                </div>
                {/* Inner screen content */}
                <div className="p-6 bg-slate-900 rounded-xl space-y-4 text-slate-300">
                  <div className="h-32 bg-slate-800/80 rounded-lg flex flex-col items-center justify-center border border-dashed border-slate-700">
                    <img src={siteConfig.logo} alt="Logo Preview" className="w-12 h-12 mb-2 object-contain filter drop-shadow-md animate-bounce" />
                    <span className="text-xs text-slate-300 font-semibold tracking-wide">Hệ Thống {siteConfig.name}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
                      <div className="w-6 h-6 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs mb-2">01</div>
                      <div className="h-2 w-16 bg-slate-700 rounded mb-1.5" />
                      <div className="h-2 w-10 bg-slate-800 rounded" />
                    </div>
                    <div className="p-3 bg-slate-800/60 rounded-lg border border-slate-700/50">
                      <div className="w-6 h-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs mb-2">02</div>
                      <div className="h-2 w-16 bg-slate-700 rounded mb-1.5" />
                      <div className="h-2 w-10 bg-slate-800 rounded" />
                    </div>
                  </div>
                  <div className="h-8 bg-blue-600/20 border border-blue-500/30 rounded-lg flex items-center justify-between px-3 text-xs text-blue-300">
                    <span>Trạng thái hệ thống: Sẵn sàng</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                </div>
              </div>

              {/* Floating decorative badge */}
              <div className="absolute -bottom-4 -left-4 bg-white p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Hiệu quả kiểm nghiệm</div>
                  <div className="text-[11px] text-slate-500">Đã kiểm thử trên thực tế</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
