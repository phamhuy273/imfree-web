import { motion } from "framer-motion";
import { ArrowRight, Clock, Heart } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Wing from "../components/Wing";
import { brand, highlights, modules, benefits } from "../data/content";

// Hero vào lần lượt: đây là "khoảnh khắc nổi bật" duy nhất khi tải trang
const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
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

          {/* Khung xem trước với hiệu ứng cánh logo trôi bồng bềnh */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* 2 Cánh logo chuyển màu trôi nhẹ nhàng - Đặt z-20 lên phía trước và căn chỉnh tọa độ chính xác để không che nội dung */}
            <Wing
              variant="blue"
              className="absolute -left-9 -top-9 sm:-left-11 sm:-top-11 z-20 w-22 sm:w-26 animate-float pointer-events-none drop-shadow-md"
            />
            <Wing
              variant="pink"
              className="absolute -bottom-9 -right-8 sm:-bottom-10 sm:-right-9 z-20 w-20 sm:w-24 animate-float-slow pointer-events-none drop-shadow-md"
            />

            {/* Khung Card chính: Thẻ Máy ảnh chuẩn xác 100% theo giao diện ứng dụng ImFree */}
            <div className="relative z-10 rounded-3xl bg-white border border-line/80 shadow-[0_20px_50px_-10px_rgba(15,26,51,0.09),0_10px_20px_-5px_rgba(15,26,51,0.04)] p-4 sm:p-5 flex items-center gap-4 sm:gap-5 transition-all duration-300 hover:shadow-[0_25px_60px_-10px_rgba(42,86,204,0.14)]">
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

                  <button
                    className="size-8 sm:size-9 rounded-full bg-slate-50 hover:bg-rose-50 border border-slate-200/70 flex items-center justify-center text-slate-400 hover:text-rose-500 transition-colors shadow-2xs cursor-pointer group"
                    aria-label="Yêu thích"
                  >
                    <Heart className="size-4 sm:size-4.5 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hàng 4 chip: 4 giá trị cốt lõi slide 1 */}
        <div className="container-x mt-12">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {highlights.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white/80 px-4 py-3.5 text-sm font-semibold backdrop-blur transition hover:border-brand-300 hover:shadow-soft text-ink"
              >
                <span className="grid size-9 place-items-center rounded-xl bg-brand-50 text-brand-600 shrink-0">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── FEATURE SECTION 1: BENTO GRID (GIẢI PHÁP & KIỂM SOÁT RỦI RO) ───────── */}
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
                  <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                      <m.icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{m.title}</h3>
                    <p className="mt-2 max-w-[48ch] text-muted text-sm leading-relaxed">{m.text}</p>
                    <ImagePlaceholder label={`Minh hoạ ${m.title}`} className="mt-6 min-h-44 flex-1" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ───────── FEATURE SECTION 2: 4 CARD (KẾT QUẢ KHẢO SÁT 105 SINH VIÊN UIT) ───────── */}
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
              <Reveal key={b.title} delay={i * 0.08}>
                <article className="h-full rounded-card border border-line p-6 transition duration-300 hover:border-brand-300 hover:shadow-soft bg-white">
                  <span className="grid size-11 place-items-center rounded-full bg-accent-500/10 text-accent-600">
                    <b.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{b.title}</h3>
                  <p className="mt-2 text-[15px] text-muted leading-relaxed">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
