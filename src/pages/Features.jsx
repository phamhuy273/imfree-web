import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AppWindow from "../components/AppWindow";
import Reveal from "../components/Reveal";
import { stage1Discover, stage2Exchange, stage3Resolution } from "../data/content";
import { Search, ShieldCheck, Scale } from "lucide-react";

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
  const [progressPercent, setProgressPercent] = useState(0);

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

      // Kiểm tra nếu cuộn xuống gần cuối trang thì tự động chọn giai đoạn cuối cùng
      const isBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 100;
      if (isBottom) {
        setActiveStageId("stage-3");
        setProgressPercent(100);
        return;
      }

      // Đo vị trí thực tế của 3 giai đoạn để thanh tiến trình chạy mượt mà theo từng pixel cuộn
      const s1 = document.getElementById("stage-1");
      const s2 = document.getElementById("stage-2");
      const s3 = document.getElementById("stage-3");

      if (s1 && s2 && s3) {
        const s1Rect = s1.getBoundingClientRect();
        const s2Rect = s2.getBoundingClientRect();
        const s3Rect = s3.getBoundingClientRect();

        // Điểm kích hoạt chuẩn: ngay dưới thanh Stepper đang neo (~35% chiều cao màn hình)
        const trigger = Math.min(280, Math.max(160, window.innerHeight * 0.35));

        if (s1Rect.top > trigger) {
          // Chưa cuộn tới giai đoạn 1
          setActiveStageId("stage-1");
          setProgressPercent(0);
        } else if (s2Rect.top > trigger) {
          // Đang cuộn trong Giai đoạn 1 -> Vạch chạy liên tục từ 0% đến 50%
          const dist = s2Rect.top - s1Rect.top;
          const passed = trigger - s1Rect.top;
          const ratio = Math.max(0, Math.min(1, passed / dist));
          setProgressPercent(ratio * 50);
          setActiveStageId(ratio >= 0.8 ? "stage-2" : "stage-1");
        } else if (s3Rect.top > trigger) {
          // Đang cuộn trong Giai đoạn 2 -> Vạch chạy liên tục từ 50% đến 100%
          const dist = s3Rect.top - s2Rect.top;
          const passed = trigger - s2Rect.top;
          const ratio = Math.max(0, Math.min(1, passed / dist));
          setProgressPercent(50 + ratio * 50);
          setActiveStageId(ratio >= 0.8 ? "stage-3" : "stage-2");
        } else {
          // Đã cuộn đến hoặc vượt qua Giai đoạn 3
          setProgressPercent(100);
          setActiveStageId("stage-3");
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
    const targetIdx = STAGES.findIndex((s) => s.id === id);
    setProgressPercent(targetIdx === 0 ? 0 : targetIdx === 1 ? 50 : 100);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const currentStageIndex = STAGES.findIndex((s) => s.id === activeStageId);

  return (
    <>
      {/* ───────── 1. TIÊU ĐỀ + KHUNG APP SIMULATOR (SLIDE 8-16) ───────── */}
      <section className="bg-[radial-gradient(60%_40%_at_50%_0%,var(--color-brand-100),transparent)] pb-10 pt-28 sm:pt-40">
        <div className="container-x text-center">
          <span className="inline-block rounded-full border border-brand-200 bg-white/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-brand-700 shadow-xs mb-4">
            Transaction Flow • Luồng giao dịch 3 giai đoạn
          </span>
          <h1 className="h1 mx-auto max-w-4xl text-center">
            <span className="whitespace-nowrap">Trải nghiệm quy trình</span>{" "}
            <span className="grad-text whitespace-nowrap">ImFree</span>
          </h1>
          <p className="lead mx-auto mt-4">
            Mô phỏng trải nghiệm giao diện và toàn bộ quy trình giao dịch khép kín từ lúc tìm kiếm đến bàn giao, hoàn trả và xử lý tranh chấp của ImFree.
          </p>
        </div>

        <div className="container-x mt-12">
          <AppWindow />
        </div>
      </section>

      {/* ───────── 2. HỆ THỐNG 3 GIAI ĐOẠN CUỘN LIÊN TỤC VỚI THANH TIẾN TRÌNH STEPPER DÍNH TỰ ĐỘNG CHẠY ───────── */}
      <section className="section bg-gradient-to-b from-white via-brand-50/40 to-white relative pb-24">
        {/* Thanh Điều Hướng Dính Dạng Stepper Vòng Tròn (Thay cho ô chữ nhật theo đúng ảnh người dùng) */}
        <div
          className={`sticky z-40 mb-16 transition-all duration-300 ease-out ${
            navHidden ? "top-4 sm:top-5" : "top-20 sm:top-22"
          }`}
        >
          <div className="container-x">
            <div className="max-w-2xl mx-auto relative rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,26,51,0.08),0_2px_8px_-2px_rgba(15,26,51,0.04)] px-4 sm:px-10 py-3 sm:py-4">
              {/* Đường ray nền & Vạch chạy tiến trình kết nối 3 mốc */}
              <div className="absolute left-7 sm:left-14 right-7 sm:right-14 top-7.5 sm:top-8.5 h-1.5 bg-slate-200/90 rounded-full z-0 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-brand-600 via-brand-500 to-indigo-500 rounded-full"
                  initial={false}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              </div>

              {/* 3 Mốc Vòng Tròn Giai Đoạn (01, 02, 03) */}
              <div className="relative z-10 flex items-center justify-between">
                {STAGES.map((stage, idx) => {
                  const isCurrent = idx === currentStageIndex;
                  const isReached =
                    progressPercent >= (idx === 0 ? 0 : idx === 1 ? 48 : 96) ||
                    idx <= currentStageIndex;

                  return (
                    <button
                      key={stage.id}
                      onClick={() => scrollToStage(stage.id)}
                      className="flex flex-col items-center group cursor-pointer focus:outline-none"
                    >
                      {/* Vòng tròn số 01, 02, 03 */}
                      <motion.div
                        animate={{
                          scale: isCurrent ? 1.15 : 1,
                          backgroundColor: isReached ? "#2A56CC" : "#ffffff",
                          borderColor: isReached ? "#2A56CC" : "#e2e8f0",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        className={`size-9 sm:size-10 rounded-full border-2 flex items-center justify-center text-xs sm:text-sm font-bold transition-all duration-300 ${
                          isReached
                            ? "text-white shadow-soft"
                            : "text-slate-400 bg-white"
                        } ${isCurrent ? "ring-4 ring-brand-100 shadow-md" : ""}`}
                      >
                        <span>{stage.num}</span>
                      </motion.div>

                      {/* Tên giai đoạn chỉ để Tiếng Anh theo yêu cầu */}
                      <div className="mt-2 text-center">
                        <div
                          className={`text-xs sm:text-sm font-bold tracking-tight transition-colors duration-200 ${
                            isCurrent
                              ? "text-brand-700"
                              : isReached
                              ? "text-ink"
                              : "text-muted group-hover:text-ink"
                          }`}
                        >
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
                  <article className="group flex flex-col justify-between p-6 rounded-2xl border border-brand-100/90 bg-white/95 backdrop-blur-xs shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
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

          {/* ───────── GIAI ĐOẠN 02: SECURE EXCHANGE (5 CARD CÂN XỨNG TRONG KHUNG CHUYỂN SẮC) ───────── */}
          <section id="stage-2" className="scroll-mt-36">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-brand-50/60 via-white/80 to-brand-50/40 border border-brand-100/80 shadow-xs backdrop-blur-xs">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-100/80 rounded-full border border-brand-200">
                  Giai đoạn 02 • Giao dịch an toàn
                </span>
                <h2 className="h2">{STAGES[1].headingTitle}</h2>
                <p className="lead mt-3 mx-auto">{STAGES[1].headingText}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
                {stage2Exchange.map((item, idx) => {
                  const isRow2 = idx >= 3;

                  return (
                    <Reveal
                      key={item.title}
                      delay={idx * 0.05}
                      className={`h-full ${isRow2 ? "lg:col-span-3" : "lg:col-span-2"}`}
                    >
                      <article className="group flex flex-col justify-between p-6 rounded-2xl border border-brand-100/90 bg-white/95 backdrop-blur-xs shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
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

            <div className="grid gap-6 md:grid-cols-2">
                {stage3Resolution.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 0.06}>
                    <article className="group flex flex-col justify-between p-6 rounded-2xl border border-brand-100/90 bg-white/95 backdrop-blur-xs shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 h-full">
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
        </div>
      </section>
    </>
  );
}
