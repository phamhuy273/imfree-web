import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { team, values } from "../data/content";

export default function About() {
  return (
    <>
      {/* Tiêu đề + banner */}
      <section className="bg-[radial-gradient(60%_40%_at_50%_0%,var(--color-brand-100),transparent)] pb-12 pt-32 sm:pt-40">
        <div className="container-x text-center">
          <h1 className="h1 mx-auto max-w-3xl">Về chúng tôi</h1>
          <p className="lead mx-auto mt-6">
            Dự án xuất phát từ nhu cầu thực tế của người dùng trong việc tiếp cận và chia sẻ tài nguyên hiệu quả.
          </p>
          <Button to="/tinh-nang" className="mt-8">
            Xem sản phẩm
          </Button>
        </div>
        <div className="container-x mt-14">
          <div className="relative rounded-card overflow-hidden shadow-lift bg-white border border-brand-100 p-2">
            <ImagePlaceholder
              label="Ảnh banner / Ảnh tập thể nhóm phát triển (tỉ lệ 21:9)"
              className="aspect-[16/9] w-full md:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* Mục tiêu & Thị trường */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <h2 className="h2 text-ink">Mục tiêu và thị trường</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <Reveal>
              <div className="rounded-2xl border border-line bg-brand-50/40 p-8 h-full">
                <h3 className="text-xl font-bold text-ink">Mục tiêu dự án</h3>
                <p className="mt-4 max-w-[60ch] text-muted leading-relaxed">
                  Xây dựng một nền tảng kinh tế chia sẻ an toàn và minh bạch dành cho sinh viên; giảm thiểu gánh nặng tài chính trong việc mua sắm trang thiết bị công nghệ và nâng cao tinh thần học hỏi lẫn nhau trong môi trường học thuật.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-brand-50/40 p-8 h-full">
                <h3 className="text-xl font-bold text-ink">Thị trường mục tiêu</h3>
                <p className="mt-4 max-w-[60ch] text-muted leading-relaxed">
                  Tập trung vào cộng đồng sinh viên tại các trường đại học, cao đẳng (đặc biệt là khối ngành kỹ thuật, công nghệ), các câu lạc bộ học thuật và giới trẻ có nhu cầu sử dụng công cụ ngắn hạn với chi phí hợp lý.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Đội ngũ */}
      <section className="section bg-brand-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Đội ngũ của chúng tôi"
              text="Những thành viên nhiệt huyết xây dựng và phát triển sản phẩm."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <article className="group text-center bg-white p-4 rounded-2xl border border-line shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <ImagePlaceholder
                    label="Ảnh đại diện"
                    className="aspect-[4/5] w-full transition duration-300 group-hover:scale-[1.02]"
                  />
                  <h3 className="mt-4 font-bold text-ink text-base">{m.name}</h3>
                  <p className="text-xs text-brand-600 font-medium mt-1">{m.major}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Giá trị cốt lõi */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Giá trị cốt lõi"
              text="Sáu nguyên tắc kim chỉ nam định hình chất lượng và văn hóa của ImFree."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.08}>
                <article className="flex h-full items-start gap-5 rounded-card border border-line p-6 transition duration-300 hover:border-brand-300 hover:shadow-soft bg-white">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <v.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-ink">{v.title}</h3>
                    <p className="mt-1.5 text-muted text-sm leading-relaxed">{v.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
