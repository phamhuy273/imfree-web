import { motion } from "framer-motion";
import { ArrowRight, Camera, CheckCircle2, Star, ShieldCheck } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
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
            <motion.span
              variants={item}
              className="inline-block rounded-full border border-brand-200 bg-white/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-brand-700 shadow-xs mb-4"
            >
              Nền tảng chia sẻ nguồn lực nhàn rỗi cho sinh viên
            </motion.span>

            <motion.h1 variants={item} className="h1">
              Biến Nguồn Lực Nhàn Rỗi Thành Giá Trị Thực
            </motion.h1>

            <motion.p variants={item} className="lead mt-4">
              ImFree kết nối sinh viên sở hữu tài sản, kỹ năng và thời gian nhàn rỗi với những ai đang có nhu cầu. Giao dịch an tâm với hệ thống xác thực sinh viên, giữ cọc và tích lũy điểm uy tín.
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

          {/* Card xem trước sản phẩm thực tế ImFree (Gọn gàng, tinh tế, không tràn màn hình) */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Card chính: Listing cho thuê máy ảnh theo câu chuyện đề tài */}
            <div className="relative rounded-2xl bg-white border border-line shadow-lift p-5 sm:p-6 overflow-hidden">
              {/* Header card */}
              <div className="flex items-center justify-between pb-3.5 border-b border-line mb-4">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Sẵn sàng bàn giao
                  </span>
                </div>
                <span className="text-xs font-medium text-muted">
                  Khuôn viên Campus • KTX
                </span>
              </div>

              {/* Product preview box */}
              <div className="rounded-xl bg-gradient-to-br from-brand-50 to-white border border-brand-100 p-5 flex flex-col items-center justify-center text-center relative overflow-hidden mb-4">
                <div className="size-14 rounded-2xl bg-brand-100 text-brand-600 flex items-center justify-center mb-2.5 shadow-xs">
                  <Camera className="size-7" />
                </div>
                <h4 className="text-base font-bold text-ink">
                  Canon EOS 700D + Lens 18-55mm
                </h4>
                <p className="text-xs text-muted mt-1">
                  Kèm thẻ nhớ 64GB, 2 pin & túi chống sốc
                </p>
                <div className="mt-3 inline-flex items-baseline gap-1 text-brand-700">
                  <span className="text-xl font-extrabold">70.000đ</span>
                  <span className="text-xs text-muted">/ ngày</span>
                </div>
              </div>

              {/* Provider & Trust Score */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2.5">
                  <div className="size-9 rounded-full bg-brand-600 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    H
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                      <span>Phạm Huy</span>
                      <CheckCircle2 className="size-3.5 text-brand-600" />
                    </div>
                    <span className="text-[11px] text-muted">Sinh viên UIT</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                    <Star className="size-3 fill-amber-500 text-amber-500" />
                    <span>Trust Score 98</span>
                  </div>
                  <div className="text-[10px] text-muted mt-0.5">14 giao dịch thành công</div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-2 bg-ink text-white px-3.5 py-2 rounded-xl shadow-lg border border-white/10 text-xs font-medium">
              <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
              <span>Bảo chứng giữ cọc (Deposit)</span>
            </div>
          </motion.div>
        </div>

        {/* Hàng 4 chip */}
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

      {/* ───────── FEATURE SECTION 1: BENTO ───────── */}
      <section className="section bg-brand-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Hệ Sinh Thái Tính Năng"
              text="Bốn trụ cột cốt lõi tạo nên giá trị và tính ứng dụng thực tiễn của đề tài ImFree."
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

      {/* ───────── FEATURE SECTION 2: 4 CARD ───────── */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading title="Vì Sao Nên Chọn ImFree" text="Bốn giá trị thiết thực mang lại cho sinh viên và cộng đồng trẻ." />
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
