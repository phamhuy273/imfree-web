import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWindow from "../components/AppWindow";
import Reveal from "../components/Reveal";
import { stage1Discover, stage2Exchange, stage3Resolution } from "../data/content";
import { Search, ShieldCheck, Scale, AlertCircle } from "lucide-react";

const STAGES = [
  {
    id: "stage-1",
    num: "01",
    name: "Discover & Trust",
    shortLabel: "Khám phá & Đánh giá",
    icon: Search,
    headingTitle: "Giai Đoạn 01: Discover & Trust",
    headingText:
      "Từ tìm kiếm tài sản đến gửi yêu cầu thuê — minh bạch hơn ở mỗi điểm chạm nhằm giảm thiểu bất cân xứng thông tin.",
  },
  {
    id: "stage-2",
    num: "02",
    name: "Secure Exchange",
    shortLabel: "Giao dịch an toàn",
    icon: ShieldCheck,
    headingTitle: "Giai Đoạn 02: Secure Exchange",
    headingText:
      "Một giao dịch an toàn được ghi nhận ở từng mốc: trước khi dùng, trong khi dùng và sau khi hoàn trả.",
  },
  {
    id: "stage-3",
    num: "03",
    name: "Protection & Resolution",
    shortLabel: "Bảo vệ & Trọng tài",
    icon: Scale,
    headingTitle: "Giai Đoạn 03: Protection & Resolution",
    headingText:
      "Bảo vệ giao dịch bằng bằng chứng, đối thoại và quy trình giải quyết tranh chấp minh bạch.",
  },
];

export default function Features() {
  const [activeStageId, setActiveStageId] = useState("stage-1");
  const [navHidden, setNavHidden] = useState(false);

  // ScrollSpy & Đồng bộ vị trí với Navbar khi người dùng lướt trang
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Đồng bộ trạng thái ẩn/hiện của Navbar:
      // Kéo xuống quá 80px: Navbar ẩn -> Stage bar dịch lên sát top (top-4)
      // Kéo lên: Navbar hiện (h-16 = 64px) -> Stage bar tự động dạt xuống (top-20 = 80px) để không bao giờ bị đè/dính
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }
      lastScrollY = currentScrollY;

      // ScrollSpy: Tự động cập nhật giai đoạn theo vị trí cuộn
      const stageIds = ["stage-1", "stage-2", "stage-3"];
      const scrollPosition = currentScrollY + 240;

      for (let i = stageIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(stageIds[i]);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            setActiveStageId(stageIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // kích hoạt ngay khi mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cuộn mượt mà đến giai đoạn tương ứng khi bấm vào thanh
  const scrollToStage = (id) => {
    setActiveStageId(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ───────── 1. TIÊU ĐỀ + KHUNG APP SIMULATOR (SLIDE 8-16) ───────── */}
      <section className="bg-[radial-gradient(60%_40%_at_50%_0%,var(--color-brand-100),transparent)] pb-10 pt-32 sm:pt-40">
        <div className="container-x text-center">
          <span className="inline-block rounded-full border border-brand-200 bg-white/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-brand-700 shadow-xs mb-4">
            Transaction Flow • Luồng giao dịch 3 giai đoạn
          </span>
          <h1 className="h1 mx-auto max-w-3xl">Khám phá các tính năng</h1>
          <p className="lead mx-auto mt-4">
            Mô phỏng trải nghiệm giao diện và toàn bộ quy trình giao dịch khép kín từ lúc tìm kiếm đến bàn giao, hoàn trả và xử lý tranh chấp của ImFree.
          </p>
        </div>

        <div className="container-x mt-12">
          <AppWindow />
        </div>
      </section>

      {/* ───────── 2. HỆ THỐNG 3 GIAI ĐOẠN CUỘN LIÊN TỤC VỚI THANH ĐIỀU HƯỚNG DÍNH TỰ ĐỘNG CHẠY ───────── */}
      <section className="section bg-gradient-to-b from-white via-brand-50/40 to-white relative pb-24">
        {/* Thanh Điều Hướng Dính Nổi: Tự động tránh Navbar khi kéo lên */}
        <div
          className={`sticky z-40 mb-16 transition-all duration-300 ease-out ${
            navHidden ? "top-4 sm:top-5" : "top-20 sm:top-22"
          }`}
        >
          <div className="container-x">
            <div className="max-w-3xl mx-auto p-1.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-line shadow-soft">
              <div className="flex items-center justify-between gap-1 sm:gap-2">
                {STAGES.map((stage) => {
                  const isActive = stage.id === activeStageId;
                  const Icon = stage.icon;

                  return (
                    <button
                      key={stage.id}
                      onClick={() => scrollToStage(stage.id)}
                      className={`relative flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-left transition-colors duration-200 focus:outline-none flex items-center gap-2.5 sm:gap-3 cursor-pointer ${
                        isActive ? "text-white" : "text-muted hover:text-ink hover:bg-slate-50/80"
                      }`}
                    >
                      {/* Nền Active trượt lò xo theo từng giai đoạn khi lướt trang */}
                      {isActive && (
                        <motion.div
                          layoutId="activeScrollSpyTab"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 shadow-md shadow-brand-500/25"
                          transition={{ type: "spring", stiffness: 450, damping: 35 }}
                        />
                      )}

                      <div
                        className={`relative z-10 hidden sm:flex size-8 rounded-lg items-center justify-center transition-colors ${
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-muted"
                        }`}
                      >
                        <Icon className="size-4 shrink-0" />
                      </div>

                      <div className="relative z-10 min-w-0">
                        <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider opacity-80">
                          Giai đoạn {stage.num}
                        </div>
                        <div className="text-xs sm:text-sm font-bold truncate">
                          {stage.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Nội Dung 3 Giai Đoạn Hiển Thị Đầy Đủ Để Người Dùng Tự Do Lướt */}
        <div className="container-x space-y-24">
          {/* ───────── GIAI ĐOẠN 01: DISCOVER & TRUST ───────── */}
          <section id="stage-1" className="scroll-mt-36">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-50 rounded-full border border-brand-200">
                Giai đoạn 01 • Khám phá & Đánh giá
              </span>
              <h2 className="h2">{STAGES[0].headingTitle}</h2>
              <p className="lead mt-3 mx-auto">{STAGES[0].headingText}</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {stage1Discover.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 0.06}>
                  <article className="group flex flex-col justify-between p-6 rounded-2xl border border-line bg-white shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                    <div>
                      <div className="flex items-start gap-4">
                        <div className="size-12 shrink-0 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-xs transition-all duration-300">
                          <item.icon className="size-5" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-muted text-sm leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-line/50 flex items-center">
                      <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600 bg-brand-50/90 px-2.5 py-1 rounded-full border border-brand-100/60 text-xs">
                        <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
                        <span>{item.tag}</span>
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ───────── GIAI ĐOẠN 02: SECURE EXCHANGE (5 CARD CÂN XỨNG: 3 TRÊN + 2 DƯỚI RỘNG 50%) ───────── */}
          <section id="stage-2" className="scroll-mt-36">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-50 rounded-full border border-brand-200">
                Giai đoạn 02 • Giao dịch an toàn
              </span>
              <h2 className="h2">{STAGES[1].headingTitle}</h2>
              <p className="lead mt-3 mx-auto">{STAGES[1].headingText}</p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
                {stage2Exchange.map((item, idx) => {
                  // Hàng 1 (3 card đầu): mỗi card chiếm 2/6 cột (33.3%)
                  // Hàng 2 (2 card sau): mỗi card chiếm 3/6 cột (50%) -> lấp đầy 100% hàng, không bao giờ bị lệch
                  const isRow2 = idx >= 3;

                  return (
                    <Reveal
                      key={item.title}
                      delay={idx * 0.05}
                      className={`h-full ${isRow2 ? "lg:col-span-3" : "lg:col-span-2"}`}
                    >
                      <article className="group flex flex-col justify-between p-6 rounded-2xl border border-line bg-white shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                        <div>
                          <div className="flex items-start gap-4">
                            <div className="size-12 shrink-0 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-xs transition-all duration-300">
                              <item.icon className="size-5" aria-hidden="true" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">
                                {item.title}
                              </h3>
                              <p className="mt-2 text-muted text-sm leading-relaxed">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-5 pt-3 border-t border-line/50 flex items-center">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600 bg-brand-50/90 px-2.5 py-1 rounded-full border border-brand-100/60 text-xs">
                            <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
                            <span>{item.tag}</span>
                          </span>
                        </div>
                      </article>
                    </Reveal>
                  );
                })}
              </div>

              {/* Banner Quy Chuẩn Đối Chiếu Before & After Verification (Slide 16) */}
              <Reveal delay={0.2}>
                <div className="p-5 rounded-2xl bg-gradient-to-r from-brand-50/80 via-white to-brand-50/80 border border-brand-200/80 shadow-xs flex items-start sm:items-center gap-4 text-sm text-ink">
                  <div className="size-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-brand-900 font-semibold">Quy chuẩn đối chiếu Before & After Verification (Slide 16):</strong>{" "}
                    <span className="text-muted">
                      Bắt buộc đối chiếu ảnh và checklist trước khi nhận và sau khi hoàn trả. Nếu phát hiện hư hỏng ở bước kiểm tra sau hoàn trả, hệ thống chuyển sang giai đoạn <strong>Protection & Resolution</strong> — tuyệt đối không tự động đóng giao dịch.
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ───────── GIAI ĐOẠN 03: PROTECTION & RESOLUTION ───────── */}
          <section id="stage-3" className="scroll-mt-36">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-50 rounded-full border border-brand-200">
                Giai đoạn 03 • Bảo vệ & Trọng tài
              </span>
              <h2 className="h2">{STAGES[2].headingTitle}</h2>
              <p className="lead mt-3 mx-auto">{STAGES[2].headingText}</p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {stage3Resolution.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 0.06}>
                    <article className="group flex flex-col justify-between p-6 rounded-2xl border border-line bg-white shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
                      <div>
                        <div className="flex items-start gap-4">
                          <div className="size-12 shrink-0 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-xs transition-all duration-300">
                            <item.icon className="size-5" aria-hidden="true" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="mt-2 text-muted text-sm leading-relaxed">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-5 pt-3 border-t border-line/50 flex items-center">
                        <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600 bg-brand-50/90 px-2.5 py-1 rounded-full border border-brand-100/60 text-xs">
                          <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
                          <span>{item.tag}</span>
                        </span>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              {/* Banner Lưu ý Chờ xử lý (Slide 20) */}
              <Reveal delay={0.2}>
                <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs flex items-start sm:items-center gap-4 text-sm text-ink">
                  <div className="size-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <AlertCircle className="size-5" />
                  </div>
                  <div className="flex-1">
                    <strong className="text-amber-900 font-semibold">Lưu ý / Trạng thái Chờ xử lý (Slide 20):</strong>{" "}
                    <span className="text-ink/80">
                      Nếu bằng chứng chưa đủ hoặc hai bên chưa đạt được phương án giải quyết, vụ việc tiếp tục duy trì trạng thái <em>“Chờ xử lý”</em> — không tự động đóng vụ việc nhằm đảm bảo quyền lợi tối đa cho sinh viên.
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
