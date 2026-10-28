import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AppWindow from "../components/AppWindow";
import { stage1Discover, stage2Exchange, stage3Resolution } from "../data/content";
import {
  Search,
  ShieldCheck,
  Scale,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const STAGES = [
  {
    id: "stage1",
    num: "01",
    shortLabel: "Khám phá & Đánh giá",
    name: "Discover & Trust",
    subtitle: "Khám phá & Đánh giá",
    icon: Search,
    glowColor: "from-blue-500/10 via-brand-500/5 to-transparent",
    headingTitle: "Giai Đoạn 01: Discover & Trust",
    headingText:
      "Từ tìm kiếm tài sản đến gửi yêu cầu thuê — minh bạch hơn ở mỗi điểm chạm nhằm giảm thiểu bất cân xứng thông tin.",
  },
  {
    id: "stage2",
    num: "02",
    shortLabel: "Giao dịch an toàn",
    name: "Secure Exchange",
    subtitle: "Giao dịch an toàn",
    icon: ShieldCheck,
    glowColor: "from-indigo-500/10 via-brand-500/5 to-transparent",
    headingTitle: "Giai Đoạn 02: Secure Exchange",
    headingText:
      "Một giao dịch an toàn được ghi nhận ở từng mốc: trước khi dùng, trong khi dùng và sau khi hoàn trả.",
  },
  {
    id: "stage3",
    num: "03",
    shortLabel: "Bảo vệ & Trọng tài",
    name: "Protection & Resolution",
    subtitle: "Bảo vệ & Trọng tài",
    icon: Scale,
    glowColor: "from-teal-500/10 via-brand-500/5 to-transparent",
    headingTitle: "Giai Đoạn 03: Protection & Resolution",
    headingText:
      "Bảo vệ giao dịch bằng bằng chứng, đối thoại và quy trình giải quyết tranh chấp minh bạch.",
  },
];

// Motion Variants for Directional Slide + Spring + Blur
const stageSlideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 60 : dir < 0 ? -60 : 0,
    opacity: 0,
    filter: "blur(6px)",
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 350, damping: 32 },
      opacity: { duration: 0.35 },
      filter: { duration: 0.3 },
      scale: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  },
  exit: (dir) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
    filter: "blur(6px)",
    scale: 0.98,
    transition: {
      x: { type: "spring", stiffness: 350, damping: 32 },
      opacity: { duration: 0.25 },
      filter: { duration: 0.2 },
    },
  }),
};

const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 26,
    },
  },
};

export default function Features() {
  const [[currentStageIndex, direction], setStageWithDirection] = useState([0, 0]);

  const goToStage = (targetIndex) => {
    if (targetIndex === currentStageIndex) return;
    const dir = targetIndex > currentStageIndex ? 1 : -1;
    setStageWithDirection([targetIndex, dir]);
  };

  const currentStage = STAGES[currentStageIndex];

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

      {/* ───────── 2. HỆ THỐNG GIAI ĐOẠN XỊN SÒ VỚI HIỆU ỨNG CHUYỂN CẢNH MƯỢT MÀ ───────── */}
      <section className="section bg-gradient-to-b from-white via-brand-50/40 to-white relative overflow-hidden">
        {/* Ambient Glow đổi màu theo từng giai đoạn */}
        <div
          className={`absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-72 bg-gradient-to-b ${currentStage.glowColor} blur-3xl pointer-events-none transition-all duration-700`}
          aria-hidden="true"
        />

        <div className="container-x relative z-10">
          {/* Thanh Tiến Trình Stepper Kết Nối (Visual Progress Timeline) */}
          <div className="max-w-2xl mx-auto mb-10 hidden sm:block">
            <div className="relative flex items-center justify-between">
              {/* Đường ray nền */}
              <div className="absolute left-4 right-4 top-4 h-1 bg-slate-200/80 rounded-full -translate-y-1/2 z-0" />
              
              {/* Đường tiến trình sáng màu animate mượt mà */}
              <motion.div
                className="absolute left-4 top-4 h-1 bg-gradient-to-r from-brand-600 to-brand-500 rounded-full -translate-y-1/2 z-0 shadow-xs"
                initial={false}
                animate={{
                  width:
                    currentStageIndex === 0
                      ? "0%"
                      : currentStageIndex === 1
                      ? "50%"
                      : "calc(100% - 32px)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />

              {/* Các điểm mốc giai đoạn */}
              {STAGES.map((stage, idx) => {
                const isPast = idx < currentStageIndex;
                const isCurrent = idx === currentStageIndex;
                const isPastOrCurrent = idx <= currentStageIndex;

                return (
                  <button
                    key={stage.id}
                    onClick={() => goToStage(idx)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <motion.div
                      animate={{
                        scale: isCurrent ? 1.12 : 1,
                        backgroundColor: isCurrent ? "#2A56CC" : isPast ? "#2A56CC" : "#ffffff",
                        borderColor: isPastOrCurrent ? "#2A56CC" : "#e2e8f0",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`size-8 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-shadow ${
                        isPastOrCurrent ? "text-white shadow-soft" : "text-slate-400 bg-white"
                      } ${isCurrent ? "ring-4 ring-brand-100 shadow-md" : ""}`}
                    >
                      {isPast ? (
                        <CheckCircle2 className="size-4 text-white" />
                      ) : (
                        <span>{stage.num}</span>
                      )}
                    </motion.div>
                    <span
                      className={`mt-2 text-xs font-semibold tracking-tight transition-colors ${
                        isCurrent ? "text-brand-700" : isPastOrCurrent ? "text-ink" : "text-muted"
                      }`}
                    >
                      {stage.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Thanh Tab Chuyển Giai Đoạn (Segmented Control với Spring Physics) */}
          <div className="max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-between p-1.5 rounded-2xl bg-white/90 border border-line shadow-soft backdrop-blur-md">
              {STAGES.map((stage, idx) => {
                const isActive = idx === currentStageIndex;
                const Icon = stage.icon;
                return (
                  <button
                    key={stage.id}
                    onClick={() => goToStage(idx)}
                    className={`relative flex-1 py-3 px-3 sm:px-5 rounded-xl text-left transition-colors duration-200 focus:outline-none flex items-center gap-3 cursor-pointer ${
                      isActive ? "text-white" : "text-muted hover:text-ink"
                    }`}
                  >
                    {/* Nền Active trượt lò xo xịn sò */}
                    {isActive && (
                      <motion.div
                        layoutId="activeStageTabIndicator"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-600 to-brand-700 shadow-md shadow-brand-500/25"
                        transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      />
                    )}

                    <div
                      className={`relative z-10 hidden sm:flex size-9 rounded-lg items-center justify-center transition-colors ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-muted"
                      }`}
                    >
                      <Icon className="size-5 shrink-0" />
                    </div>

                    <div className="relative z-10 min-w-0">
                      <div className="text-[11px] font-mono uppercase tracking-wider opacity-80">
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

          {/* Vùng Hiển Thị Nội Dung Có Hiệu Ứng Chuyển Cảnh Theo Chiều (Direction-aware) */}
          <div className="relative min-h-[480px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStage.id}
                custom={direction}
                variants={stageSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full"
              >
                {/* Tiêu đề giai đoạn */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-brand-700 uppercase bg-brand-50 rounded-full border border-brand-200">
                    Giai đoạn {currentStage.num} • {currentStage.subtitle}
                  </span>
                  <h2 className="h2">{currentStage.headingTitle}</h2>
                  <p className="lead mt-3 mx-auto">{currentStage.headingText}</p>
                </div>

                {/* ───────── NỘI DUNG GIAI ĐOẠN 01 (4 CARD 2×2 CÂN ĐỐI) ───────── */}
                {currentStage.id === "stage1" && (
                  <motion.div
                    variants={cardContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-6 md:grid-cols-2"
                  >
                    {stage1Discover.map((item, idx) => (
                      <motion.article
                        key={item.title}
                        variants={cardItemVariants}
                        className="group flex flex-col justify-between p-6 rounded-2xl border border-line bg-white shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                      >
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

                        <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                          <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600 bg-brand-50/90 px-2.5 py-1 rounded-full border border-brand-100/60">
                            <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
                            <span>{item.tag}</span>
                          </span>
                          <span className="text-muted/70 font-mono text-[11px] font-medium">
                            Bước 0{idx + 1}
                          </span>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                )}

                {/* ───────── NỘI DUNG GIAI ĐOẠN 02 (5 CARD CÂN XỨNG HOÀN TOÀN: HÀNG 1 CÓ 3 Ô, HÀNG 2 CÓ 2 Ô RỘNG 50%) ───────── */}
                {currentStage.id === "stage2" && (
                  <div className="space-y-6">
                    <motion.div
                      variants={cardContainerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid gap-6 md:grid-cols-2 lg:grid-cols-6"
                    >
                      {stage2Exchange.map((item, idx) => {
                        // Hàng 1 (3 card đầu): mỗi card chiếm 2/6 cột (33.3%)
                        // Hàng 2 (2 card sau): mỗi card chiếm 3/6 cột (50%) -> lấp đầy 100% hàng, không bao giờ bị lệch hay trống góc!
                        const isRow2 = idx >= 3;

                        return (
                          <motion.article
                            key={item.title}
                            variants={cardItemVariants}
                            className={`group flex flex-col justify-between p-6 rounded-2xl border border-line bg-white shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 ${
                              isRow2 ? "lg:col-span-3" : "lg:col-span-2"
                            }`}
                          >
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

                            <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                              <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600 bg-brand-50/90 px-2.5 py-1 rounded-full border border-brand-100/60">
                                <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
                                <span>{item.tag}</span>
                              </span>
                              <span className="text-muted/70 font-mono text-[11px] font-medium">
                                Mốc 0{idx + 1}
                              </span>
                            </div>
                          </motion.article>
                        );
                      })}
                    </motion.div>

                    {/* Banner Quy Chuẩn Đối Chiếu Before & After Verification (Slide 16) */}
                    <motion.div
                      variants={cardItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="p-5 rounded-2xl bg-gradient-to-r from-brand-50/80 via-white to-brand-50/80 border border-brand-200/80 shadow-xs flex items-start sm:items-center gap-4 text-sm text-ink"
                    >
                      <div className="size-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                        <ShieldCheck className="size-5" />
                      </div>
                      <div className="flex-1">
                        <strong className="text-brand-900 font-semibold">Quy chuẩn đối chiếu Before & After Verification (Slide 16):</strong>{" "}
                        <span className="text-muted">
                          Bắt buộc đối chiếu ảnh và checklist trước khi nhận và sau khi hoàn trả. Nếu phát hiện hư hỏng ở bước kiểm tra sau hoàn trả, hệ thống chuyển sang giai đoạn <strong>Protection & Resolution</strong> — tuyệt đối không tự động đóng giao dịch.
                        </span>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* ───────── NỘI DUNG GIAI ĐOẠN 03 (4 CARD 2×2 CÂN ĐỐI) ───────── */}
                {currentStage.id === "stage3" && (
                  <div className="space-y-6">
                    <motion.div
                      variants={cardContainerVariants}
                      initial="hidden"
                      animate="visible"
                      className="grid gap-6 md:grid-cols-2"
                    >
                      {stage3Resolution.map((item, idx) => (
                        <motion.article
                          key={item.title}
                          variants={cardItemVariants}
                          className="group flex flex-col justify-between p-6 rounded-2xl border border-line bg-white shadow-xs hover:border-brand-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                        >
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

                          <div className="mt-5 pt-3 border-t border-line/60 flex items-center justify-between text-xs">
                            <span className="inline-flex items-center gap-1.5 font-semibold text-brand-600 bg-brand-50/90 px-2.5 py-1 rounded-full border border-brand-100/60">
                              <span className="size-1.5 rounded-full bg-brand-500 animate-pulse" />
                              <span>{item.tag}</span>
                            </span>
                            <span className="text-muted/70 font-mono text-[11px] font-medium">
                              Bước 0{idx + 1}
                            </span>
                          </div>
                        </motion.article>
                      ))}
                    </motion.div>

                    {/* Banner Lưu ý Chờ xử lý (Slide 20) */}
                    <motion.div
                      variants={cardItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs flex items-start sm:items-center gap-4 text-sm text-ink"
                    >
                      <div className="size-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                        <AlertCircle className="size-5" />
                      </div>
                      <div className="flex-1">
                        <strong className="text-amber-900 font-semibold">Lưu ý / Trạng thái Chờ xử lý (Slide 20):</strong>{" "}
                        <span className="text-ink/80">
                          Nếu bằng chứng chưa đủ hoặc hai bên chưa đạt được phương án giải quyết, vụ việc tiếp tục duy trì trạng thái <em>“Chờ xử lý”</em> — không tự động đóng vụ việc nhằm đảm bảo quyền lợi tối đa cho sinh viên.
                        </span>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Nút Điều Hướng Tiến / Lùi Giữa Các Giai Đoạn */}
                <div className="mt-14 pt-8 border-t border-line flex items-center justify-between flex-wrap gap-4">
                  {currentStageIndex > 0 ? (
                    <motion.button
                      whileHover={{ x: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => goToStage(currentStageIndex - 1)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-line hover:border-brand-300 text-sm font-semibold text-muted hover:text-ink shadow-xs transition cursor-pointer"
                    >
                      <ArrowLeft className="size-4" />
                      <span>Giai đoạn trước: {STAGES[currentStageIndex - 1].name}</span>
                    </motion.button>
                  ) : (
                    <div />
                  )}

                  <div className="text-xs font-semibold text-muted tracking-wider uppercase hidden sm:block">
                    Giai đoạn {currentStageIndex + 1} / 3
                  </div>

                  {currentStageIndex < STAGES.length - 1 && (
                    <motion.button
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => goToStage(currentStageIndex + 1)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-soft hover:shadow-lift transition ml-auto cursor-pointer"
                    >
                      <span>Tiếp tục: Giai đoạn {STAGES[currentStageIndex + 1].num}</span>
                      <ArrowRight className="size-4" />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}
