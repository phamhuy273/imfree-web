import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { ArrowRight, Clock, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Wing from "../components/Wing";
import { brand, highlights, modules, benefits } from "../data/content";

// Component Đếm số phần trăm mượt mà (Animated Counter với Progress Bar)
function AnimatedMetric({ item, index }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  // Tách số % và nội dung từ title (VD: "58,1% Có nhu cầu thuê thiết bị")
  const match = item.title.match(/([\d,]+)%\s*(.*)/);
  const numericValue = match ? parseFloat(match[1].replace(",", ".")) : 50;
  const label = match ? match[2] : item.title;
  const Icon = item.icon;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = numericValue;
    const duration = 1400; // ms
    const steps = 45;
    const stepDuration = duration / steps;
    const increment = end / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      start += increment;
      if (currentStep >= steps) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(parseFloat(start.toFixed(1)));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, numericValue]);

  return (
    <Reveal delay={index * 0.08}>
      <article
        ref={ref}
        className="group relative h-full rounded-2xl border border-line bg-white p-6 shadow-xs transition-all duration-300 hover:border-brand-300 hover:shadow-card hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
      >
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="grid size-11 place-items-center rounded-xl bg-accent-500/10 text-accent-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-2xs">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full border border-brand-100/60 font-mono">
              UIT Survey
            </span>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink font-mono">
              {isInView ? count.toFixed(1) : "0.0"}%
            </span>
          </div>

          <h3 className="mt-2 text-base font-bold text-ink group-hover:text-brand-600 transition-colors">
            {label}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
            {item.text}
          </p>
        </div>

        {/* Thanh tiến trình phần trăm tự động chạy khi cuộn vào tầm nhìn */}
        <div className="mt-5 pt-3 border-t border-line/60">
          <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-600 to-accent-500 rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: `${numericValue}%` } : { width: "0%" }}
              transition={{ duration: 1.4, delay: index * 0.1 + 0.2, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

// Component Thẻ Bento với hiệu ứng vệt sáng đèn rọi theo con trỏ chuột (Cursor Spotlight)
function BentoSpotlightCard({ children, className = "" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-card border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift hover:border-brand-300 ${className}`}
    >
      {/* Vệt sáng Spotlight phản chiếu vị trí con trỏ chuột */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(42, 86, 204, 0.08), transparent 75%)`,
        }}
      />
      {children}
    </div>
  );
}

// Hero vào lần lượt
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  // 1. Hiệu ứng 3D Parallax Tilt cho thẻ Hero Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  // Parallax đa tầng cho 2 cánh logo bồng bềnh
  const wingBlueX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const wingBlueY = useTransform(mouseY, [-0.5, 0.5], [-6, 6]);
  const wingPinkX = useTransform(mouseX, [-0.5, 0.5], [8, -8]);
  const wingPinkY = useTransform(mouseY, [-0.5, 0.5], [6, -6]);

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleCardMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // 2. Tương tác thả tim (Interactive Like Button)
  const [liked, setLiked] = useState(false);
  const [showLikeToast, setShowLikeToast] = useState(false);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    setLiked((prev) => !prev);
    setShowLikeToast(true);
    setTimeout(() => setShowLikeToast(false), 1400);
  };

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-[radial-gradient(60%_50%_at_85%_0%,var(--color-brand-100),transparent)] pb-16 pt-24 sm:pt-28 lg:pt-32">
        <div className="container-x grid items-center gap-10 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Pill Badge chuẩn theo slide tiêu đề đề tài AISC2026 */}
            <motion.span
              variants={item}
              className="inline-block rounded-full border border-brand-200 bg-white/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-brand-700 shadow-xs mb-4"
            >
              Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên
            </motion.span>

            <motion.h1 variants={item} className="h1">
              Biến Nguồn Lực Nhàn Rỗi Thành Giá Trị Thực
            </motion.h1>

            <motion.p variants={item} className="lead mt-4">
              ImFree kết nối sinh viên có tài sản nhàn rỗi với người đang có nhu cầu sử dụng. Giao dịch an tâm với quy trình kiểm soát rủi ro 3 giai đoạn, đối chiếu hiện trạng và bảo chứng đặt cọc.
            </motion.p>

            <motion.div variants={item} className="mt-7 flex flex-wrap gap-3">
              <Button to="/tinh-nang">
                Khám phá tính năng <ArrowRight className="size-4" />
              </Button>
              <Button to="/ve-chung-toi" variant="secondary">
                Về chúng tôi
              </Button>
            </motion.div>
          </motion.div>

          {/* Khung xem trước với hiệu ứng 3D Parallax Tilt & Cánh logo trôi bồng bềnh */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none perspective-1000"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 2 Cánh logo chuyển màu trôi nhẹ nhàng với hiệu ứng Parallax chuyển động theo chuột */}
            <motion.div
              style={{ x: wingBlueX, y: wingBlueY }}
              className="absolute -left-9 -top-9 sm:-left-11 sm:-top-11 z-20 w-22 sm:w-26 pointer-events-none drop-shadow-md"
            >
              <Wing variant="blue" className="w-full animate-float" />
            </motion.div>

            <motion.div
              style={{ x: wingPinkX, y: wingPinkY }}
              className="absolute -bottom-9 -right-8 sm:-bottom-10 sm:-right-9 z-20 w-20 sm:w-24 pointer-events-none drop-shadow-md"
            >
              <Wing variant="pink" className="w-full animate-float-slow" />
            </motion.div>

            {/* Khung Card chính: Nghiêng 3D theo con trỏ chuột (3D Mouse Tilt) */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative z-10 rounded-3xl bg-white border border-line/80 shadow-[0_20px_50px_-10px_rgba(15,26,51,0.09),0_10px_20px_-5px_rgba(15,26,51,0.04)] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 overflow-hidden transition-shadow duration-300 hover:shadow-[0_25px_60px_-10px_rgba(42,86,204,0.16)] cursor-pointer"
            >
              {/* Lớp ánh kim lướt nhẹ theo chuột (Specular Glare) */}
              <motion.div
                className="pointer-events-none absolute -inset-full opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(350px circle at ${glareX} ${glareY}, rgba(255,255,255,0.6), transparent 70%)`,
                }}
              />

              {/* Hình ảnh máy ảnh thực tế */}
              <div className="size-28 sm:size-32 rounded-2xl overflow-hidden shrink-0 bg-slate-100 border border-slate-100 shadow-xs">
                <img
                  src="/camera.png"
                  alt="Máy ảnh"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Thông tin chi tiết tài sản */}
              <div className="flex-1 min-w-0 flex flex-col justify-between self-stretch py-0.5">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-ink truncate">
                      Máy ảnh
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 shrink-0">
                      Còn trống
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1">
                    Quận 1, TP.HCM
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1.5">
                    <Clock className="size-3.5 text-slate-400 shrink-0" />
                    <span>Cập nhật 2 giờ trước</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-1">
                  <div className="text-lg sm:text-xl font-extrabold text-brand-600">
                    500.000đ/ngày
                  </div>

                  {/* Nút Yêu thích có tương tác thả tim & hoạt ảnh nổi bọt */}
                  <div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85 }}
                      onClick={handleLikeClick}
                      className={`size-8 sm:size-9 rounded-full border flex items-center justify-center transition-all duration-300 shadow-2xs cursor-pointer ${
                        liked
                          ? "bg-rose-50 border-rose-200 text-rose-500 shadow-xs"
                          : "bg-slate-50 hover:bg-rose-50/70 border-slate-200/70 text-slate-400 hover:text-rose-500"
                      }`}
                      aria-label="Yêu thích"
                    >
                      <Heart
                        className={`size-4 sm:size-4.5 transition-all duration-300 ${
                          liked ? "fill-rose-500 text-rose-500 scale-110" : ""
                        }`}
                      />
                    </motion.button>

                    {/* Hoạt ảnh thông báo nổi bọt khi thả tim */}
                    <AnimatePresence>
                      {showLikeToast && (
                        <motion.div
                          initial={{ opacity: 0, y: 0, scale: 0.6 }}
                          animate={{ opacity: 1, y: -28, scale: 1 }}
                          exit={{ opacity: 0, y: -36 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-bold text-rose-500 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full shadow-xs pointer-events-none"
                        >
                          {liked ? "+1 Thích!" : "Bỏ thích"}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Hàng 4 chip: 4 giá trị cốt lõi slide 1 với tương tác nhấp nháy nhẹ */}
        <div className="container-x mt-12">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {highlights.map(({ icon: Icon, label }) => (
              <motion.li
                key={label}
                whileHover={{ y: -2 }}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white/80 px-4 py-3.5 text-sm font-semibold backdrop-blur transition-all hover:border-brand-300 hover:shadow-soft text-ink cursor-default"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-600 shrink-0">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className="truncate">{label}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── FEATURE SECTION 1: BENTO GRID VỚI SPOTLIGHT CURSOR THEO CHUỘT ───────── */}
      <section className="section bg-brand-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Hệ Sinh Thái Giải Pháp ImFree"
              text="Mô hình P2P khai thác nguồn lực nhàn rỗi dựa trên quy trình kiểm soát rủi ro và xây dựng niềm tin sinh viên."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {modules.map((m, i) => {
              // Hàng 1: to + nhỏ, hàng 2: nhỏ + to (đúng wireframe)
              const wide = i === 0 || i === 3;
              return (
                <Reveal key={m.title} delay={i * 0.08} className={wide ? "md:col-span-2" : ""}>
                  <BentoSpotlightCard className="h-full flex flex-col justify-between">
                    <div>
                      <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white shadow-2xs">
                        <m.icon className="size-6" aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink group-hover:text-brand-600 transition-colors">
                        {m.title}
                      </h3>
                      <p className="mt-2 max-w-[48ch] text-muted text-sm leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                    <ImagePlaceholder label={`Minh hoạ ${m.title}`} className="mt-6 min-h-44 flex-1" />
                  </BentoSpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── FEATURE SECTION 2: 4 CARD ĐẾM SỐ KHẢO SÁT 105 SINH VIÊN UIT TỰ ĐỘNG CHẠY ───────── */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Kiểm Chứng Nhu Cầu Thực Tế"
              text="Dữ liệu khảo sát từ 105 sinh viên trường Đại học Công nghệ Thông tin (UIT) trong 12 tháng gần đây."
            />
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <AnimatedMetric key={b.title} item={b} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
