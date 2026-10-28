import { Sparkles, Monitor, Tablet, Smartphone, Check } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import Container from "../common/Container";

export default function FeatureShowcase() {
  return (
    <section className="pt-12 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-200">
            Trải Nghiệm Hệ Thống
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Khám Phá Các Tính Năng
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Xem trước mô phỏng giao diện và phương thức vận hành của sản phẩm trong thực tế.
          </p>
        </div>

        {/* Large Mockup Showcase Window (Bám sát khung to trong wireframe) */}
        <div className="rounded-2xl border border-slate-300/80 bg-white shadow-2xl overflow-hidden max-w-5xl mx-auto">
          {/* Top Browser Bar */}
          <div className="bg-slate-100/90 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
              <span className="ml-3 text-xs font-mono text-slate-500 bg-white px-4 py-1 rounded-md border border-slate-200">
                https://{siteConfig.domain}/app/demo
              </span>
            </div>
            <div className="flex items-center gap-3 text-slate-400">
              <Monitor className="w-4 h-4 text-blue-600" />
              <Tablet className="w-4 h-4" />
              <Smartphone className="w-4 h-4" />
            </div>
          </div>

          {/* Inner Content Area */}
          <div className="p-8 sm:p-12 bg-slate-900 text-white min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-xl space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Bản xem trước nguyên mẫu v1.0</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  Không gian làm việc & Tương tác tập trung
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Tất cả công cụ cần thiết cho việc xử lý bài toán đề tài đều được quy về một trung tâm chỉ huy duy nhất, giảm thiểu tối đa các bước thao tác thừa.
                </p>
              </div>

              <div className="hidden md:flex flex-col items-center justify-center p-6 bg-slate-800/80 rounded-2xl border border-slate-700/80 shadow-lg min-w-[160px]">
                <img src={siteConfig.logo} alt="Logo" className="w-20 h-20 object-contain drop-shadow-md" />
                <span className="mt-3 text-xs font-bold text-slate-200 tracking-wide">{siteConfig.name}</span>
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Xử lý tự động 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Không cần cài đặt phức tạp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Đồng bộ tức thời</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
