import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import Wing from "../components/Wing";
import { brand, highlights, modules, benefits } from "../data/content";

// Hero vào lần lượt: đây là "khoảnh khắc nổi bật" duy nhất khi tải trang
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden bg-[radial-gradient(60%_50%_at_85%_0%,var(--color-brand-100),transparent)] pb-20 pt-32 sm:pt-40">
        <div className="container-x grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-sm font-medium text-brand-700 shadow-xs"
            >
              <span className="size-2 rounded-full bg-accent-500 animate-pulse" />
              Đề tài nghiên cứu khoa học sinh viên UIT
            </motion.span>

            <motion.h1 variants={item} className="h1 mt-6">
              Giải pháp kết nối & tối ưu hóa tài nguyên
            </motion.h1>

            <motion.p variants={item} className="lead mt-6">
              {brand.slogan}. Nền tảng chia sẻ thiết bị, trao đổi kỹ năng và đồng hành học tập dành riêng cho sinh viên và giới trẻ.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <Button to="/tinh-nang">
                Khám phá tính năng <ArrowRight className="size-4" />
              </Button>
              <Button to="/ve-chung-toi" variant="secondary">
                Về chúng tôi
              </Button>
            </motion.div>
          </motion.div>

          {/* Ảnh hero + cánh logo trôi nhẹ */}
          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Wing variant="blue" className="absolute -left-10 -top-8 z-10 w-32 animate-float sm:w-40 pointer-events-none drop-shadow-md" />
            <Wing variant="pink" className="absolute -bottom-8 -right-6 z-10 w-28 animate-float-slow sm:w-36 pointer-events-none drop-shadow-md" />
            <div className="relative rounded-2xl overflow-hidden shadow-lift bg-white border border-brand-100 p-2">
              <ImagePlaceholder label="Ảnh hero / Mockup ứng dụng ImFree (tỉ lệ 4:5)" className="aspect-[4/5] w-full" />
            </div>
          </motion.div>
        </div>

        {/* Hàng 4 chip */}
        <div className="container-x mt-16">
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
