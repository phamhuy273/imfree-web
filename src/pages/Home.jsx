import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Clock,
  Heart,
  Sparkles,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Camera,
  ShieldCheck,
  Star,
  ClipboardCheck,
} from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import Wing from "../components/Wing";
import { brand, highlights, modules, benefits } from "../data/content";

import mockupAssetSharing from "../assets/mockup-asset-sharing.png";
import mockupRiskControl from "../assets/mockup-risk-control.png";
import mockupTrustProfile from "../assets/mockup-trust-profile.png";
import mockupSkillSharing from "../assets/mockup-skill-sharing.png";

// Danh sách 4 ảnh Mockup App tương ứng 4 Module Bento Grid
const MOCKUP_IMAGES = [
  mockupAssetSharing, // Hình 1: Asset Sharing (Trọng tâm MVP)
  mockupRiskControl,  // Hình 4: Quy trình kiểm soát rủi ro (Checklist bàn giao)
  mockupTrustProfile, // Hình 2: Xây dựng niềm tin (Đánh giá giao dịch 5 sao)
  mockupSkillSharing, // Hình 3: Skill & Time Sharing (Kỹ năng & Thời gian)
];

// Thông tin chi tiết phục vụ Modal xem ảnh phóng to giao diện thực tế
const MOCKUP_DETAILS = [
  {
    index: 0,
    title: "Asset Sharing",
    subtitle: "Trọng tâm MVP",
    image: mockupAssetSharing,
    description:
      "Giao diện chia sẻ tài sản nhàn rỗi cho sinh viên UIT: Bộ lọc thông minh theo danh mục, giá thuê rõ ràng theo ngày và vị trí giao nhận gần trường.",
  },
  {
    index: 1,
    title: "Kiểm soát rủi ro",
    subtitle: "Quy trình an toàn 4 mốc",
    image: mockupRiskControl,
    description:
      "Bảo vệ 2 chiều minh bạch: Bên cho thuê và bên thuê cùng kiểm tra danh mục phụ kiện, ghi chú hiện trạng và đối soát trước khi bàn giao.",
  },
  {
    index: 2,
    title: "Xây dựng niềm tin",
    subtitle: "Hệ thống đánh giá sau giao dịch",
    image: mockupTrustProfile,
    description:
      "Chu trình uy tín khép kín: Đánh giá sao và nhận xét khách quan sau khi hoàn trả. Điểm uy tín được tích lũy vào hồ sơ cá nhân của sinh viên.",
  },
  {
    index: 3,
    title: "Skill & Time Sharing",
    subtitle: "Định hướng mở rộng",
    image: mockupSkillSharing,
    description:
      "Tầm nhìn tương lai: Mở rộng chia sẻ kỹ năng học tập (Gia sư CNTT, Thiết kế Slide) và thời gian rảnh mỗi ngày của sinh viên.",
  },
];

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
  // Trạng thái mở Lightbox Modal xem riêng phóng to giao diện di động
  const [selectedMockupIndex, setSelectedMockupIndex] = useState(null);

  // Đóng modal bằng phím Escape & chuyển ảnh bằng phím mũi tên
  useEffect(() => {
    if (selectedMockupIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedMockupIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedMockupIndex((prev) =>
          prev > 0 ? prev - 1 : MOCKUP_DETAILS.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedMockupIndex((prev) =>
          prev < MOCKUP_DETAILS.length - 1 ? prev + 1 : 0
        );
      }
    };

    // Khóa cuộn trang khi mở modal
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMockupIndex]);

  // 1. Hiệu ứng 3D Parallax Tilt cho thẻ Hero Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 220, damping: 22 });
  const mouseY = useSpring(y, { stiffness: 220, damping: 22 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3.5deg", "-3.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-4deg", "4deg"]);
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
        <div className="container-x grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            {/* Pill Badge chuẩn theo slide tiêu đề đề tài AISC2026 */}
            <motion.span
              variants={item}
              className="inline-block rounded-full border border-brand-200 bg-white/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-brand-700 shadow-xs mb-4"
            >
              Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên
            </motion.span>

            <motion.h1 variants={item} className="h1">
              Biến nguồn lực nhàn rỗi thành{" "}
              <span className="grad-text">giá trị thực</span>
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

          {/* Cột phải: Khung hiển thị sản phẩm cao cấp (Clean SaaS Showcase) */}
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none flex flex-col items-center justify-center py-4 select-none">
            {/* Vùng sáng mờ radial dịu nhẹ tôn vinh chiếc điện thoại */}
            <div
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-72 sm:size-96 rounded-full bg-brand-400/15 blur-3xl pointer-events-none -z-10"
            />

            {/* Khung điện thoại nghiêng 3D mượt mà (Desktop) */}
            <motion.div
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative perspective-1000 flex justify-center"
            >
              {/* 2 Cánh logo chuyển màu thương hiệu (Lá xanh & Lá hồng) bồng bềnh chuyển động theo chuột */}
              {/* Cánh xanh dương (Blue Wing) - Góc Trên - Trái */}
              <motion.div
                style={{ x: wingBlueX, y: wingBlueY }}
                className="absolute -top-7 sm:-top-10 -left-6 sm:-left-10 lg:-left-12 z-0 w-16 sm:w-22 lg:w-26 pointer-events-none drop-shadow-md select-none opacity-90"
              >
                <Wing variant="blue" className="w-full animate-float -rotate-6" />
              </motion.div>

              {/* Cánh hồng (Pink Wing) - Góc Dưới - Phải */}
              <motion.div
                style={{ x: wingPinkX, y: wingPinkY }}
                className="absolute -bottom-6 sm:-bottom-8 -right-6 sm:-right-9 lg:-right-11 z-0 w-16 sm:w-20 lg:w-24 pointer-events-none drop-shadow-md select-none opacity-90"
              >
                <Wing variant="pink" className="w-full animate-float-slow rotate-12" />
              </motion.div>

              {/* Thân máy điện thoại viền Titanium mỏng cao cấp */}
              <div
                onClick={() => setSelectedMockupIndex(0)}
                className="relative w-[215px] sm:w-[250px] md:w-[270px] lg:w-[285px] aspect-[393/852] rounded-[38px] sm:rounded-[42px] p-2 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-[0_24px_60px_-12px_rgba(15,26,51,0.28),0_12px_24px_-8px_rgba(47,85,212,0.18)] ring-1 ring-white/15 cursor-zoom-in group z-10 transition-transform duration-300"
              >
                {/* Màn hình app ImFree với góc bo chuẩn xác và ánh sáng phản chiếu nhẹ */}
                <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-white shadow-inner">
                  {/* Vệt ánh sáng mỏng phản chiếu trên mặt kính */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent z-10" />

                  <img
                    src={mockupAssetSharing}
                    alt="Giao diện ứng dụng ImFree"
                    className="w-full h-full object-cover object-top pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                  />

                  {/* Nút phóng to nhẹ nhàng khi hover trên Desktop */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <span className="text-xs font-bold text-white bg-slate-900/90 px-3.5 py-1.5 rounded-full shadow-lg backdrop-blur-xs flex items-center gap-1.5">
                      <Maximize2 className="size-3.5" />
                      <span>Phóng to xem rõ</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* ──────────────────────────────────────────────────────────
                  3 FLOATING CARDS NỔI XUNG QUANH TRÊN DESKTOP & TABLET (≥ md)
                  Được căn chỉnh nằm HOÀN TOÀN BÊN NGOÀI thân máy, chỉ tựa nhẹ vào viền Titanium
                  TUYỆT ĐỐI KHÔNG che khuất màn hình hay nội dung bên trong điện thoại!
                 ────────────────────────────────────────────────────────── */}
              {/* Card 1 (Trên - Trái): Quy trình bàn giao 4 mốc (Nằm ngoài bên trái) */}
              <div className="hidden md:block chip-float-1 pointer-events-none absolute top-4 lg:top-6 right-[calc(100%-8px)] lg:right-[calc(100%-12px)] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 lg:p-3 border border-slate-200/80 shadow-[0_12px_32px_-6px_rgba(15,26,51,0.09),0_2px_8px_rgba(15,26,51,0.03)] w-[215px] lg:w-[230px]">
                <div className="flex items-center gap-2 lg:gap-2.5">
                  <div className="size-8 lg:size-8.5 rounded-xl bg-blue-50 text-[#3569DF] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <ClipboardCheck className="size-4 lg:size-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs lg:text-[13px] font-bold text-ink tracking-tight truncate">Quy trình bàn giao 4 mốc</div>
                    <div className="text-[10px] lg:text-[11px] text-muted truncate">Checklist đối soát 2 chiều</div>
                  </div>
                </div>
                <div className="mt-2 lg:mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] lg:text-[11px]">
                  <span className="text-[#3569DF] font-semibold flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-[#3569DF] animate-pulse" />
                    Minh bạch phụ kiện
                  </span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md font-bold text-[9px] lg:text-[10px]">100% Số hóa</span>
                </div>
              </div>

              {/* Card 2 (Bên phải): Hoàn trả đúng hạn (Nằm ngoài bên phải) */}
              <div className="hidden md:block chip-float-3 pointer-events-none absolute top-28 lg:top-32 left-[calc(100%-8px)] lg:left-[calc(100%-12px)] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 lg:p-3 border border-slate-200/80 shadow-[0_12px_32px_-6px_rgba(15,26,51,0.09),0_2px_8px_rgba(15,26,51,0.03)] w-[190px] lg:w-[205px]">
                <div className="flex items-center gap-2 lg:gap-2.5">
                  <div className="size-8 lg:size-8.5 rounded-xl bg-amber-50 text-amber-500 border border-amber-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <Star className="size-4 lg:size-4.5 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs lg:text-[13px] font-bold text-ink tracking-tight truncate">Hoàn trả đúng hạn</div>
                    <div className="text-[10px] lg:text-[11px] font-bold text-[#3569DF] truncate">+5.0 Sao Trust Profile</div>
                  </div>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] lg:text-[11px] text-muted">
                  <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">Tích lũy uy tín sinh viên</span>
                </div>
              </div>

              {/* Card 3 (Dưới - Trái): Xác thực sinh viên (Nằm ngoài bên trái) */}
              <div className="hidden md:block chip-float-2 pointer-events-none absolute bottom-8 lg:bottom-12 right-[calc(100%-8px)] lg:right-[calc(100%-12px)] z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 lg:p-3 border border-slate-200/80 shadow-[0_12px_32px_-6px_rgba(15,26,51,0.09),0_2px_8px_rgba(15,26,51,0.03)] w-[200px] lg:w-[215px]">
                <div className="flex items-center gap-2 lg:gap-2.5">
                  <div className="size-8 lg:size-8.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                    <ShieldCheck className="size-4 lg:size-4.5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs lg:text-[13px] font-bold text-ink tracking-tight truncate">Xác thực sinh viên</div>
                    <div className="text-[10px] lg:text-[11px] text-muted truncate">Định danh tài khoản trường</div>
                  </div>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center gap-1.5 text-[10px] lg:text-[11px] text-emerald-600 font-semibold">
                  <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">Bảo mật 2 chiều an tâm</span>
                </div>
              </div>
            </motion.div>

            {/* ──────────────────────────────────────────────────────────
                TRÊN MOBILE (< md): 3 CARD SẮP XẾP GỌN GÀNG DƯỚI ĐIỆN THOẠI
                (Khắc phục triệt để lỗi che khuất màn hình hoặc tràn viền ngang)
               ────────────────────────────────────────────────────────── */}
            <div className="md:hidden mt-6 w-full max-w-[330px] space-y-2.5">
              {/* Mobile Card 1 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="size-8 rounded-xl bg-blue-50 text-[#3569DF] border border-blue-100/80 flex items-center justify-center shrink-0">
                    <ClipboardCheck className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-ink truncate">Quy trình bàn giao 4 mốc</div>
                    <div className="text-[10px] text-muted truncate">Checklist đối soát 2 chiều</div>
                  </div>
                </div>
                <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold shrink-0">
                  100% Số hóa
                </span>
              </div>

              {/* Mobile Card 2 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="size-8 rounded-xl bg-amber-50 text-amber-500 border border-amber-100/80 flex items-center justify-center shrink-0">
                    <Star className="size-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-ink truncate">Hoàn trả đúng hạn</div>
                    <div className="text-[11px] font-bold text-[#3569DF]">+5.0 Sao Trust Profile</div>
                  </div>
                </div>
                <span className="text-muted text-[10px] font-medium shrink-0 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> Tín nhiệm
                </span>
              </div>

              {/* Mobile Card 3 */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-3 border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="size-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 flex items-center justify-center shrink-0">
                    <ShieldCheck className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-ink truncate">Xác thực sinh viên</div>
                    <div className="text-[10px] text-muted truncate">Định danh tài khoản trường</div>
                  </div>
                </div>
                <span className="text-emerald-600 text-[10px] font-semibold shrink-0 flex items-center gap-1">
                  <span className="size-1.5 rounded-full bg-emerald-500" /> Bảo mật
                </span>
              </div>
            </div>
          </div>
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

          {/* Lưới 2x2 cân xứng hoàn hảo, tối ưu không gian, không còn ô to trống trải */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {modules.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.08} className="h-full">
                <BentoSpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-5 sm:gap-6 h-full">
                    {/* Cột thông tin bên trái (chiếm ~58% không gian, đã bỏ tag theo yêu cầu) */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-start gap-3">
                          <span className="grid size-10 sm:size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white shadow-2xs mt-0.5">
                            <m.icon className="size-5" aria-hidden="true" />
                          </span>
                          <div className="min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">
                              {m.title}
                            </h3>
                            {m.subtitle && (
                              <p className="text-xs font-semibold text-brand-600 mt-0.5">
                                {m.subtitle}
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="mt-2.5 text-muted text-xs sm:text-sm leading-relaxed">
                          {m.text}
                        </p>

                        {m.highlights && (
                          <ul className="mt-3.5 space-y-1.5">
                            {m.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                                <CheckCircle2 className="size-3.5 text-brand-600 shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center">
                        <button
                          type="button"
                          onClick={() => setSelectedMockupIndex(i)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors cursor-pointer group/btn"
                        >
                          <Maximize2 className="size-3.5 transition-transform group-hover/btn:scale-110" />
                          <span>Xem giao diện</span>
                        </button>
                      </div>
                    </div>

                    {/* Cột Mockup Điện thoại bên phải: VIỀN SIÊU MỎNG TITANIUM, HIỂN THỊ TRỌN VẸN 100% GIAO DIỆN GỐC FIGMA */}
                    <div className="shrink-0 flex justify-center items-center py-1">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedMockupIndex(i)}
                        onKeyDown={(e) => e.key === "Enter" && setSelectedMockupIndex(i)}
                        className="group/phone relative cursor-zoom-in rounded-[24px] sm:rounded-[26px] p-[3.5px] sm:p-1 bg-slate-900 shadow-[0_16px_36px_-8px_rgba(15,26,51,0.22)] ring-1 ring-slate-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_45px_-6px_rgba(42,86,204,0.3)]"
                      >
                        {/* Màn hình hiển thị tràn viền trọn vẹn, không bị che tiêu đề */}
                        <div className="relative overflow-hidden rounded-[21px] sm:rounded-[23px] w-[155px] sm:w-[170px] lg:w-[185px] aspect-[393/852] bg-slate-100 shadow-inner">
                          <img
                            src={MOCKUP_IMAGES[i]}
                            alt={m.title}
                            className="w-full h-full object-cover object-top select-none pointer-events-none"
                          />

                          {/* Hover overlay hint */}
                          <div className="absolute inset-0 bg-slate-950/25 backdrop-blur-[1px] opacity-0 group-hover/phone:opacity-100 transition-opacity flex flex-col items-center justify-center text-white gap-1 z-20">
                            <div className="size-8 rounded-full bg-white/90 text-brand-700 flex items-center justify-center shadow-md">
                              <Maximize2 className="size-4" />
                            </div>
                            <span className="text-[11px] font-bold bg-slate-900/80 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                              Phóng to
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BentoSpotlightCard>
              </Reveal>
            ))}
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

      {/* ───────── LIGHTBOX MODAL: CHỈ HIỆN MÀN HÌNH ĐIỆN THOẠI GIAO DIỆN (THEO YÊU CẦU NGƯỜI DÙNG) ───────── */}
      <AnimatePresence>
        {selectedMockupIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            {/* Lớp nền tối mờ kính, bấm vào nền để đóng */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedMockupIndex(null)}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Nút đóng ở góc trên bên phải */}
            <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center">
              <button
                type="button"
                onClick={() => setSelectedMockupIndex(null)}
                className="size-10 sm:size-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Đóng xem giao diện"
              >
                <X className="size-5 sm:size-6" />
              </button>
            </div>

            {/* Khung trung tâm CHỈ HIỆN MÀN HÌNH ĐT GIAO DIỆN */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              transition={{ type: "spring", damping: 28, stiffness: 350 }}
              className="relative z-20 flex flex-col items-center max-h-[96vh] select-none"
            >
              {/* Tiêu đề ngắn gọn dạng Pill phía trên điện thoại */}
              <div className="mb-3 text-center">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/15 text-white border border-white/20 backdrop-blur-md shadow-lg">
                  <span className="size-2 rounded-full bg-brand-400 animate-pulse" />
                  <span>{MOCKUP_DETAILS[selectedMockupIndex].title}</span>
                  <span className="text-white/50">•</span>
                  <span className="text-white/80 font-normal">{MOCKUP_DETAILS[selectedMockupIndex].subtitle}</span>
                </span>
              </div>

              {/* Hàng chứa Nút Trái + Điện thoại lớn + Nút Phải */}
              <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
                {/* Mũi tên Trái */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedMockupIndex((prev) =>
                      prev > 0 ? prev - 1 : MOCKUP_DETAILS.length - 1
                    )
                  }
                  className="size-10 sm:size-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/15 shadow-2xl flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shrink-0"
                  aria-label="Giao diện trước"
                >
                  <ChevronLeft className="size-6 sm:size-7" />
                </button>

                {/* Khung điện thoại viền siêu mỏng Titanium Pro (không dày viền) */}
                <div className="relative rounded-[32px] sm:rounded-[40px] p-1 sm:p-1.5 bg-slate-950 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/20 max-h-[82vh] flex flex-col">
                  {/* Màn hình hiển thị tràn viền sắc nét, 100% nguyên bản Figma */}
                  <div className="relative overflow-hidden rounded-[29px] sm:rounded-[36px] w-[260px] sm:w-[310px] md:w-[340px] aspect-[393/852] bg-white shadow-inner">
                    <img
                      src={MOCKUP_DETAILS[selectedMockupIndex].image}
                      alt={MOCKUP_DETAILS[selectedMockupIndex].title}
                      className="w-full h-full object-contain select-none pointer-events-none"
                    />
                  </div>
                </div>

                {/* Mũi tên Phải */}
                <button
                  type="button"
                  onClick={() =>
                    setSelectedMockupIndex((prev) =>
                      prev < MOCKUP_DETAILS.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="size-10 sm:size-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/15 shadow-2xl flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shrink-0"
                  aria-label="Giao diện tiếp theo"
                >
                  <ChevronRight className="size-6 sm:size-7" />
                </button>
              </div>

              {/* Thanh 4 Tab chuyển nhanh dưới đáy */}
              <div className="mt-4 flex items-center gap-1.5 sm:gap-2 bg-black/50 p-1.5 rounded-full border border-white/15 backdrop-blur-md overflow-x-auto max-w-full">
                {MOCKUP_DETAILS.map((item, idx) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedMockupIndex(idx)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      selectedMockupIndex === idx
                        ? "bg-brand-500 text-white shadow-md scale-105"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{`0${idx + 1}. ${item.title.split("—")[0].trim()}`}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
