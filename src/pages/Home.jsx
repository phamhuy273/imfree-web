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

import assetSharing1 from "../assets/asset-sharing-1-tai-san.png";
import assetSharing2 from "../assets/asset-sharing-2-chi-tiet.png";
import assetSharing3 from "../assets/asset-sharing-3-yeu-cau-thue.png";
import assetSharing4 from "../assets/asset-sharing-4-usage.png";

import risk1Confirmed from "../assets/risk-1-confirmed.png";
import risk2BeforeVerification from "../assets/risk-2-before-verification.png";
import risk3ConfirmHandover from "../assets/risk-3-confirm-handover.png";
import risk4GracePeriod from "../assets/risk-4-grace-period.png";
import risk5ConfirmReturn from "../assets/risk-5-confirm-return.png";
import risk6ProviderGracePeriod from "../assets/risk-6-provider-grace-period.png";

import trust1Profile from "../assets/trust-1-profile.png";
import trust2Reviews from "../assets/trust-2-reviews.png";
import trust3Rating from "../assets/trust-3-rating.png";

import skill1Homepage from "../assets/skill-1-homepage.png";
import skill2Explore from "../assets/skill-2-explore.png";

// Danh sách dữ liệu Mockup App chi tiết theo từng phân hệ (Hỗ trợ nhiều màn hình)
const MODULE_SHOWCASES = [
  {
    id: "asset-sharing",
    title: "Asset Sharing",
    subtitle: "Trọng tâm MVP",
    description:
      "Giao diện chia sẻ tài sản nhàn rỗi cho sinh viên UIT: Từ danh sách tài sản, chi tiết thiết bị, xác nhận yêu cầu thuê đến màn hình theo dõi sử dụng thực tế.",
    screens: [
      {
        id: "tai-san",
        num: "01",
        label: "Tài sản",
        title: "1. Tài sản",
        subtitle: "Danh sách tài sản của tôi • Lọc trạng thái Còn trống & Đang cho thuê",
        image: assetSharing1,
      },
      {
        id: "chi-tiet-tai-san",
        num: "02",
        label: "Chi tiết tài sản",
        title: "2. Chi tiết tài sản",
        subtitle: "Chi tiết máy ảnh, giá thuê, phụ kiện đi kèm & nút gửi yêu cầu thuê",
        image: assetSharing2,
      },
      {
        id: "chi-tiet-yeu-cau-thue",
        num: "03",
        label: "Yêu cầu thuê",
        title: "3. Chi tiết yêu cầu thuê — Người thuê • Đã chấp nhận",
        subtitle: "Xác nhận lịch hẹn nhận/trả, tiền cọc bảo chứng và tổng thanh toán",
        image: assetSharing3,
      },
      {
        id: "usage-screen",
        num: "04",
        label: "Usage Screen",
        title: "4. Usage Screen",
        subtitle: "Chi tiết giao dịch đang sử dụng • Đếm ngược hạn trả 3 ngày & Gia hạn",
        image: assetSharing4,
      },
    ],
  },
  {
    id: "risk-control",
    title: "Kiểm soát rủi ro",
    subtitle: "Quy trình an toàn 4 mốc",
    description:
      "Bảo vệ 2 chiều minh bạch: Từ thỏa thuận thuê, kiểm tra phụ kiện trước bàn giao, đối soát khi nhận máy, đến thời gian kiểm tra lỗi ẩn và xác nhận hoàn trả an toàn.",
    screens: [
      {
        id: "confirmed",
        num: "01",
        label: "Confirmed",
        title: "1. Confirmed",
        subtitle: "Thỏa thuận thuê máy ảnh (Sony A7R IV) • Đặt cọc 500.000đ & xác nhận thời gian",
        image: risk1Confirmed,
      },
      {
        id: "before-verification",
        num: "02",
        label: "Before Verif.",
        title: "2. Before Verification",
        subtitle: "Checklist bàn giao phụ kiện • Chụp ảnh hiện trạng trước khi bàn giao",
        image: risk2BeforeVerification,
      },
      {
        id: "confirm-handover",
        num: "03",
        label: "Confirm Handover",
        title: "3. Confirm Handover",
        subtitle: "Kiểm tra tình trạng thiết bị • Đối soát ảnh và xác nhận bàn giao",
        image: risk3ConfirmHandover,
      },
      {
        id: "grace-period",
        num: "04",
        label: "Grace Period",
        title: "4. Grace Period",
        subtitle: "Thời gian kiểm tra lỗi ẩn 02:00:00 • Báo cáo bất thường kịp thời",
        image: risk4GracePeriod,
      },
      {
        id: "confirm-return",
        num: "05",
        label: "Confirm Return",
        title: "5. Provider Confirm Return",
        subtitle: "Kiểm tra hoàn trả • Đối soát checklist phụ kiện và ảnh từ người thuê",
        image: risk5ConfirmReturn,
      },
      {
        id: "provider-grace-period",
        num: "06",
        label: "Provider Grace",
        title: "6. Provider Grace Period",
        subtitle: "Kiểm tra vận hành sau hoàn trả 04:00:00 • Thử máy và xác nhận hoàn tất",
        image: risk6ProviderGracePeriod,
      },
    ],
  },
  {
    id: "trust-profile",
    title: "Xây dựng niềm tin",
    subtitle: "Hệ thống đánh giá sau giao dịch",
    description:
      "Chu trình uy tín khép kín: Hồ sơ cá nhân minh bạch, tỷ lệ hoàn tất giao dịch, phản hồi từ sinh viên cùng trường và cơ chế chấm điểm sao sau hoàn trả.",
    screens: [
      {
        id: "trust-profile-1",
        num: "01",
        label: "Trust profile 1",
        title: "1. Trust profile 1",
        subtitle: "Hồ sơ người dùng • Đánh giá 4.8/5, tỷ lệ hoàn tất 9/10 và tài sản cho thuê",
        image: trust1Profile,
      },
      {
        id: "trust-profile-2",
        num: "02",
        label: "Trust profile 2",
        title: "2. Trust profile 2",
        subtitle: "Chi tiết nhận xét uy tín từ sinh viên cùng trường & thông tin liên hệ",
        image: trust2Reviews,
      },
      {
        id: "rating",
        num: "03",
        label: "Rating",
        title: "3. Rating",
        subtitle: "Đánh giá giao dịch sau hoàn trả • Chấm sao và phản hồi chất lượng",
        image: trust3Rating,
      },
    ],
  },
  {
    id: "skill-sharing",
    title: "Skill & Time Sharing",
    subtitle: "Định hướng mở rộng",
    description:
      "Tầm nhìn mở rộng tương lai: Kết nối kỹ năng chuyên môn (gia sư, thiết kế, lập trình) và chia sẻ thời gian rảnh theo lịch học linh hoạt.",
    screens: [
      {
        id: "homepage",
        num: "01",
        label: "Homepage",
        title: "1. Homepage",
        subtitle: "Trang chủ dịch vụ • Nền tảng chia sẻ thiết bị học tập và kỹ năng sinh viên",
        image: skill1Homepage,
      },
      {
        id: "explore",
        num: "02",
        label: "Khám phá",
        title: "2. Khám phá",
        subtitle: "Bộ lọc khám phá: Tất cả, Tài sản, Kỹ năng, Thời gian & Gợi ý cho bạn",
        image: skill2Explore,
      },
    ],
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
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-ink tabular-nums font-sans">
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
  // Trạng thái mở Lightbox Modal xem riêng phóng to giao diện di động theo từng phân hệ & màn hình
  const [selectedModuleIndex, setSelectedModuleIndex] = useState(null);
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  const [cardScreenIndices, setCardScreenIndices] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

  const handleOpenModal = (moduleIdx, screenIdx = null) => {
    setSelectedModuleIndex(moduleIdx);
    setSelectedScreenIndex(
      screenIdx !== null ? screenIdx : (cardScreenIndices[moduleIdx] || 0)
    );
  };

  const handleCloseModal = () => {
    setSelectedModuleIndex(null);
  };

  // Đóng modal bằng phím Escape & chuyển màn hình bằng phím mũi tên
  useEffect(() => {
    if (selectedModuleIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      } else if (e.key === "ArrowLeft") {
        const screens = MODULE_SHOWCASES[selectedModuleIndex].screens;
        setSelectedScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
      } else if (e.key === "ArrowRight") {
        const screens = MODULE_SHOWCASES[selectedModuleIndex].screens;
        setSelectedScreenIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
      }
    };

    // Khóa cuộn trang khi mở modal
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedModuleIndex]);

  // 1. Hiệu ứng 3D Parallax Tilt cho thẻ Hero Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 200, damping: 20 });

  // Hiệu ứng nghiêng 3D rõ nét, sống động hơn khi tương tác chuột (7.5deg - 8.5deg)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-8.5deg", "8.5deg"]);
  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);

  // Ánh sáng lướt kính phản chiếu 3D chân thực trên màn hình điện thoại
  const glareBackground = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(380px circle at ${gx} ${gy}, rgba(255,255,255,0.4), transparent 70%)`
  );

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
      <section
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
        className="relative overflow-hidden bg-[radial-gradient(60%_50%_at_85%_0%,var(--color-brand-100),transparent)] pb-16 pt-24 sm:pt-28 lg:pt-32"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 grid items-center gap-12 lg:gap-16 xl:gap-20 lg:grid-cols-2">
          <motion.div variants={container} initial="hidden" animate="show" className="relative max-w-xl">
            {/* 2 Cánh logo chuyển màu thương hiệu (Lá xanh & Lá hồng) trôi bồng bềnh nghệ thuật quanh Tiêu Đề */}
            {/* Cánh xanh dương (Blue Wing) - Đặt cao hẳn ở góc Trên - Trái, hoàn toàn không chạm badge hay chữ */}
            <motion.div
              style={{ x: wingBlueX, y: wingBlueY }}
              className="absolute -top-14 sm:-top-18 -left-6 sm:-left-10 lg:-left-12 z-0 w-16 sm:w-20 lg:w-24 pointer-events-none drop-shadow-md select-none opacity-85"
            >
              <Wing variant="blue" className="w-full animate-float -rotate-12" />
            </motion.div>

            {/* Cánh hồng (Pink Wing) - Đặt ở khoảng trống bên phải dòng 'giá trị thực', nằm thấp dưới dòng 1 hoàn toàn không che chữ */}
            <motion.div
              style={{ x: wingPinkX, y: wingPinkY }}
              className="absolute top-[120px] sm:top-[138px] lg:top-[150px] right-2 sm:right-6 lg:right-4 z-0 w-14 sm:w-18 lg:w-20 pointer-events-none drop-shadow-md select-none opacity-85"
            >
              <Wing variant="pink" className="w-full animate-float-slow rotate-12" />
            </motion.div>

            {/* Pill Badge chuẩn theo slide tiêu đề đề tài AISC2026 */}
            <motion.span
              variants={item}
              className="relative z-10 inline-flex max-w-full items-center rounded-full border border-brand-200 bg-white/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-brand-700 shadow-xs mb-4"
            >
              Nền tảng kết nối và chia sẻ nguồn lực nhàn rỗi dành cho sinh viên
            </motion.span>

            {/* Tiêu đề H1 CHUẨN 2 DÒNG DUY NHẤT: Biến nguồn lực nhàn rỗi / thành giá trị thực (Cỡ chữ lớn đầy đặn) */}
            <motion.h1
              variants={item}
              className="relative z-10 text-[28px] sm:text-[38px] md:text-[44px] lg:text-[48px] xl:text-[54px] font-extrabold text-ink tracking-tight leading-[1.14]"
            >
              <span className="block whitespace-nowrap">Biến nguồn lực nhàn rỗi</span>
              <span className="block mt-1 sm:mt-2 whitespace-nowrap">
                thành <span className="grad-text">giá trị thực</span>
              </span>
            </motion.h1>

            <motion.p variants={item} className="relative z-10 lead mt-5 sm:mt-6">
              ImFree kết nối sinh viên có tài sản nhàn rỗi với người đang có nhu cầu sử dụng. Giao dịch an tâm với quy trình kiểm soát rủi ro 3 giai đoạn, đối chiếu hiện trạng và bảo chứng đặt cọc.
            </motion.p>

            <motion.div variants={item} className="relative z-10 mt-8 flex flex-wrap gap-3.5">
              <Button to="/tinh-nang">
                Khám phá tính năng <ArrowRight className="size-4" />
              </Button>
              <Button to="/ve-chung-toi" variant="secondary">
                Về chúng tôi
              </Button>
            </motion.div>
          </motion.div>

          {/* Cột phải: Khung hiển thị sản phẩm cao cấp (Clean SaaS Showcase) */}
          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-none flex flex-col items-center justify-center lg:pl-10 xl:pl-6 py-4 select-none">
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
              {/* Đổ bóng tiếp xúc 3D có chiều sâu ở phía sau */}
              <div
                style={{ transform: "translateZ(-25px)" }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-slate-950/30 blur-xl rounded-full pointer-events-none"
              />

              {/* Thân máy điện thoại viền Titanium mỏng cao cấp nâng nổi trong không gian 3D */}
              <div
                style={{ transform: "translateZ(25px)", transformStyle: "preserve-3d" }}
                role="button"
                tabIndex={0}
                onClick={() => handleOpenModal(0, 0)}
                onKeyDown={(e) => e.key === "Enter" && handleOpenModal(0, 0)}
                className="relative w-[215px] sm:w-[250px] md:w-[270px] lg:w-[285px] aspect-[393/852] rounded-[38px] sm:rounded-[42px] p-2 bg-gradient-to-b from-slate-700 via-slate-900 to-slate-950 shadow-[0_32px_80px_-15px_rgba(15,26,51,0.38),0_16px_36px_-8px_rgba(47,85,212,0.25),inset_0_1px_1px_rgba(255,255,255,0.25)] ring-1 ring-white/20 cursor-zoom-in group z-10 transition-transform duration-300"
              >
                {/* Màn hình app ImFree với góc bo chuẩn xác và ánh sáng phản chiếu nhẹ */}
                <div className="relative w-full h-full rounded-[30px] sm:rounded-[34px] overflow-hidden bg-white shadow-inner">
                  {/* Dynamic Island 3D thanh mảnh cao cấp */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-black rounded-full z-30 flex items-center justify-end pr-1.5 shadow-xs pointer-events-none">
                    <span className="size-1.5 rounded-full bg-slate-900 border border-slate-700/60" />
                  </div>

                  {/* Lớp ánh sáng phản chiếu 3D chân thực lướt theo chuột */}
                  <motion.div
                    className="pointer-events-none absolute -inset-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                    style={{ background: glareBackground }}
                  />

                  {/* Vệt ánh sáng mỏng phản chiếu trên mặt kính */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/15 to-transparent z-10" />

                  <img
                    src={assetSharing1}
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
                  Được căn chỉnh nằm HOÀN TOÀN BÊN NGOÀI thân máy, nâng nổi tầng Z (translateZ 55px)
                  TUYỆT ĐỐI KHÔNG che khuất màn hình hay nội dung bên trong điện thoại!
                  CHỮ HIỂN THỊ TRỌN VẸN 100%, KHÔNG BỊ RÚT GỌN BA CHẤM (...)
                 ────────────────────────────────────────────────────────── */}
              {/* Card 1 (Trên - Trái): Quy trình bàn giao 4 mốc (Nằm ngoài bên trái) */}
              <div
                style={{ transform: "translateZ(55px)" }}
                className="hidden md:block pointer-events-none absolute top-5 lg:top-7 right-[calc(100%-16px)] lg:right-[calc(100%-22px)] z-20 w-[218px] lg:w-[232px]"
              >
                <div className="chip-float-1 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 lg:p-3 border border-slate-200/80 shadow-[0_16px_36px_-6px_rgba(15,26,51,0.12),0_4px_12px_rgba(15,26,51,0.04)]">
                  <div className="flex items-center gap-2">
                    <div className="size-7.5 lg:size-8 rounded-xl bg-blue-50 text-[#3569DF] border border-blue-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                      <ClipboardCheck className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-bold text-ink tracking-tight whitespace-nowrap">Quy trình bàn giao 4 mốc</div>
                      <div className="text-[10.5px] text-muted whitespace-nowrap">Checklist đối soát 2 chiều</div>
                    </div>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[10.5px]">
                    <span className="text-[#3569DF] font-semibold flex items-center gap-1.5 whitespace-nowrap">
                      <span className="size-1.5 rounded-full bg-[#3569DF] animate-pulse" />
                      Minh bạch phụ kiện
                    </span>
                    <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold text-[9.5px] whitespace-nowrap">100% Số hóa</span>
                  </div>
                </div>
              </div>

              {/* Card 2 (Bên phải): Hoàn trả đúng hạn (Nằm ngoài bên phải) */}
              <div
                style={{ transform: "translateZ(55px)" }}
                className="hidden md:block pointer-events-none absolute top-30 lg:top-34 left-[calc(100%-16px)] lg:left-[calc(100%-22px)] z-20 w-[196px] lg:w-[210px]"
              >
                <div className="chip-float-3 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 lg:p-3 border border-slate-200/80 shadow-[0_16px_36px_-6px_rgba(15,26,51,0.12),0_4px_12px_rgba(15,26,51,0.04)]">
                  <div className="flex items-center gap-2">
                    <div className="size-7.5 lg:size-8 rounded-xl bg-amber-50 text-amber-500 border border-amber-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                      <Star className="size-4 fill-amber-400 text-amber-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-bold text-ink tracking-tight whitespace-nowrap">Hoàn trả đúng hạn</div>
                      <div className="text-[10.5px] font-bold text-[#3569DF] whitespace-nowrap">+5.0 Sao Trust Profile</div>
                    </div>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center gap-1 text-[10.5px] text-muted whitespace-nowrap">
                    <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Tích lũy uy tín sinh viên</span>
                  </div>
                </div>
              </div>

              {/* Card 3 (Dưới - Trái): Xác thực sinh viên (Nằm ngoài bên trái) */}
              <div
                style={{ transform: "translateZ(55px)" }}
                className="hidden md:block pointer-events-none absolute bottom-10 lg:bottom-14 right-[calc(100%-16px)] lg:right-[calc(100%-22px)] z-20 w-[196px] lg:w-[210px]"
              >
                <div className="chip-float-2 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 lg:p-3 border border-slate-200/80 shadow-[0_16px_36px_-6px_rgba(15,26,51,0.12),0_4px_12px_rgba(15,26,51,0.04)]">
                  <div className="flex items-center gap-2">
                    <div className="size-7.5 lg:size-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/80 flex items-center justify-center shrink-0 shadow-2xs">
                      <ShieldCheck className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-bold text-ink tracking-tight whitespace-nowrap">Xác thực sinh viên</div>
                      <div className="text-[10.5px] text-muted whitespace-nowrap">Định danh tài khoản trường</div>
                    </div>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center gap-1 text-[10.5px] text-emerald-600 font-semibold whitespace-nowrap">
                    <span className="size-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <span>Bảo mật 2 chiều an tâm</span>
                  </div>
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

          {/* Lưới 2x2 cân xứng hoàn hảo, tối ưu không gian, hỗ trợ lướt xem nhiều màn hình */}
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {modules.map((m, i) => {
              const mShowcase = MODULE_SHOWCASES[i] || MODULE_SHOWCASES[0];
              const activeScreenIdx = cardScreenIndices[i] || 0;
              const activeScreen = mShowcase.screens[activeScreenIdx] || mShowcase.screens[0];
              const hasMultipleScreens = mShowcase.screens.length > 1;

              return (
                <Reveal key={m.title} delay={i * 0.08} className="h-full">
                  <BentoSpotlightCard className="h-full flex flex-col justify-between p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-5 sm:gap-6 h-full">
                      {/* Cột thông tin bên trái */}
                      <div className="flex-1 flex flex-col justify-between min-w-0">
                        <div>
                          <div className="flex items-start gap-3">
                            <span className="grid size-10 sm:size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white shadow-2xs mt-0.5">
                              <m.icon className="size-5" aria-hidden="true" />
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">
                                  {m.title}
                                </h3>
                                {hasMultipleScreens && (
                                  <span className="text-[10px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full border border-brand-200/80">
                                    {mShowcase.screens.length} màn hình
                                  </span>
                                )}
                              </div>
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

                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 flex-wrap">
                          <button
                            type="button"
                            onClick={() => handleOpenModal(i, activeScreenIdx)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700 transition-colors cursor-pointer group/btn"
                          >
                            <Maximize2 className="size-3.5 transition-transform group-hover/btn:scale-110" />
                            <span>
                              {hasMultipleScreens
                                ? `Xem ${mShowcase.screens.length} màn hình chi tiết`
                                : "Xem giao diện"}
                            </span>
                          </button>
                        </div>
                      </div>

                      {/* Cột Mockup Điện thoại bên phải: VIỀN SIÊU MỎNG TITANIUM, HIỂN THỊ TRỌN VẸN 100% GIAO DIỆN GỐC FIGMA */}
                      <div className="shrink-0 flex flex-col justify-center items-center py-1">
                        <div
                          role="button"
                          tabIndex={0}
                          onClick={() => handleOpenModal(i, activeScreenIdx)}
                          onKeyDown={(e) => e.key === "Enter" && handleOpenModal(i, activeScreenIdx)}
                          className="group/phone relative cursor-zoom-in rounded-[24px] sm:rounded-[26px] p-[3.5px] sm:p-1 bg-slate-900 shadow-[0_16px_36px_-8px_rgba(15,26,51,0.22)] ring-1 ring-slate-800 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_20px_45px_-6px_rgba(42,86,204,0.3)]"
                        >
                          {/* Màn hình hiển thị tràn viền trọn vẹn, không bị che tiêu đề */}
                          <div className="relative overflow-hidden rounded-[21px] sm:rounded-[23px] w-[155px] sm:w-[170px] lg:w-[185px] aspect-[393/852] bg-slate-100 shadow-inner">
                            <img
                              src={activeScreen.image}
                              alt={activeScreen.title}
                              className="w-full h-full object-cover object-top select-none pointer-events-none transition-all duration-300"
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

                        {/* Thanh mini tab chuyển màn hình trên Card nếu có nhiều hơn 1 màn hình */}
                        {hasMultipleScreens && (
                          <div className="mt-2.5 flex flex-col items-center gap-1 w-full max-w-[185px]">
                            <div className="flex items-center justify-center gap-0.5 sm:gap-1 w-full">
                              {mShowcase.screens.map((sc, scIdx) => {
                                const isActive = activeScreenIdx === scIdx;
                                return (
                                  <button
                                    key={sc.id}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setCardScreenIndices((prev) => ({ ...prev, [i]: scIdx }));
                                    }}
                                    title={sc.title}
                                    className={`flex-1 py-1 px-0.5 rounded-md text-[9px] sm:text-[10px] font-bold transition-all cursor-pointer text-center ${
                                      isActive
                                        ? "bg-brand-600 text-white shadow-2xs scale-102"
                                        : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-ink"
                                    }`}
                                  >
                                    {sc.num}
                                  </button>
                                );
                              })}
                            </div>
                            <span className="text-[10px] font-medium text-slate-500 truncate max-w-full text-center">
                              {activeScreen.num}. {activeScreen.label}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
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

      {/* ───────── LIGHTBOX MODAL: HIỂN THỊ MÀN HÌNH ĐIỆN THOẠI CHI TIẾT THEO PHÂN HỆ ───────── */}
      <AnimatePresence>
        {selectedModuleIndex !== null && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
            {/* Lớp nền tối mờ kính, bấm vào nền để đóng */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
              aria-hidden="true"
            />

            {/* Nút đóng ở góc trên bên phải */}
            <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center">
              <button
                type="button"
                onClick={handleCloseModal}
                className="size-10 sm:size-11 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Đóng xem giao diện"
              >
                <X className="size-5 sm:size-6" />
              </button>
            </div>

            {/* Khung trung tâm CHỈ HIỆN MÀN HÌNH ĐT GIAO DIỆN */}
            {(() => {
              const currentMod = MODULE_SHOWCASES[selectedModuleIndex];
              const screens = currentMod.screens;
              const currentScr = screens[selectedScreenIndex] || screens[0];

              const handlePrev = () => {
                setSelectedScreenIndex((prev) => (prev > 0 ? prev - 1 : screens.length - 1));
              };

              const handleNext = () => {
                setSelectedScreenIndex((prev) => (prev < screens.length - 1 ? prev + 1 : 0));
              };

              return (
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ type: "spring", damping: 28, stiffness: 350 }}
                  className="relative z-20 flex flex-col items-center max-h-[96vh] select-none"
                >
                  {/* Tiêu đề ngắn gọn dạng Pill phía trên điện thoại */}
                  <div className="mb-2 text-center flex flex-col items-center">
                    <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/15 text-white border border-white/20 backdrop-blur-md shadow-lg">
                      <span className="size-2 rounded-full bg-brand-400 animate-pulse" />
                      <span>{currentMod.title}</span>
                      <span className="text-white/50">•</span>
                      <span className="text-white/90 font-medium">
                        {currentScr.num}/{String(screens.length).padStart(2, "0")}: {currentScr.label}
                      </span>
                    </span>
                    {currentScr.subtitle && (
                      <p className="text-white/70 text-[11px] sm:text-xs mt-1.5 max-w-[340px] truncate">
                        {currentScr.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Hàng chứa Nút Trái + Điện thoại lớn + Nút Phải */}
                  <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
                    {/* Mũi tên Trái */}
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="size-10 sm:size-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/15 shadow-2xl flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shrink-0"
                      aria-label="Màn hình trước"
                    >
                      <ChevronLeft className="size-6 sm:size-7" />
                    </button>

                    {/* Khung điện thoại viền siêu mỏng Titanium Pro (không dày viền) */}
                    <div className="relative rounded-[32px] sm:rounded-[40px] p-1 sm:p-1.5 bg-slate-950 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.85)] ring-1 ring-white/20 max-h-[76vh] flex flex-col">
                      {/* Màn hình hiển thị tràn viền sắc nét, 100% nguyên bản Figma */}
                      <div className="relative overflow-hidden rounded-[29px] sm:rounded-[36px] w-[260px] sm:w-[305px] md:w-[335px] aspect-[393/852] bg-white shadow-inner">
                        <img
                          key={`${selectedModuleIndex}-${selectedScreenIndex}`}
                          src={currentScr.image}
                          alt={currentScr.title}
                          className="w-full h-full object-contain select-none pointer-events-none"
                        />
                      </div>
                    </div>

                    {/* Mũi tên Phải */}
                    <button
                      type="button"
                      onClick={handleNext}
                      className="size-10 sm:size-12 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/15 shadow-2xl flex items-center justify-center backdrop-blur-md transition-all hover:scale-110 cursor-pointer shrink-0"
                      aria-label="Màn hình tiếp theo"
                    >
                      <ChevronRight className="size-6 sm:size-7" />
                    </button>
                  </div>

                  {/* Thanh Tab chọn màn hình trong phân hệ đang xem */}
                  {screens.length > 1 && (
                    <div className="mt-3 flex items-center gap-1.5 bg-black/60 p-1.5 rounded-full border border-white/15 backdrop-blur-md overflow-x-auto max-w-full">
                      {screens.map((sc, scIdx) => (
                        <button
                          key={sc.id}
                          type="button"
                          onClick={() => setSelectedScreenIndex(scIdx)}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                            selectedScreenIndex === scIdx
                              ? "bg-brand-500 text-white shadow-md scale-105"
                              : "text-white/70 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          <span>{`${sc.num}. ${sc.label}`}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Thanh chọn 4 phân hệ chính bên dưới cùng */}
                  <div className="mt-2.5 flex items-center gap-1 sm:gap-1.5 bg-black/40 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md overflow-x-auto max-w-full">
                    <span className="text-[11px] text-white/50 uppercase font-mono mr-1 hidden sm:inline">Phân hệ:</span>
                    {MODULE_SHOWCASES.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedModuleIndex(idx);
                          setSelectedScreenIndex(0);
                        }}
                        className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                          selectedModuleIndex === idx
                            ? "bg-white/20 text-white font-bold"
                            : "text-white/60 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        <span>{item.title}</span>
                        {item.screens.length > 1 && (
                          <span className="ml-1 text-[10px] text-brand-300 font-bold">({item.screens.length})</span>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
