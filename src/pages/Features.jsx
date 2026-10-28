import Reveal from "../components/Reveal";
import AppWindow from "../components/AppWindow";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { modules, highlightCards } from "../data/content";

export default function Features() {
  return (
    <>
      {/* Tiêu đề + khung app */}
      <section className="bg-[radial-gradient(60%_40%_at_50%_0%,var(--color-brand-100),transparent)] pb-10 pt-32 sm:pt-40">
        <div className="container-x text-center">
          <h1 className="h1 mx-auto max-w-3xl">Khám phá các tính năng</h1>
          <p className="lead mx-auto mt-6">
            Mô phỏng trải nghiệm giao diện và phương thức vận hành thông minh của nền tảng ImFree.
          </p>
        </div>
        <div className="container-x mt-14">
          <AppWindow />
        </div>
      </section>

      {/* 4 tính năng 2×2 */}
      <section className="section">
        <div className="container-x grid gap-x-12 gap-y-12 md:grid-cols-2">
          {modules.map((m, i) => (
            <Reveal key={m.title} delay={(i % 2) * 0.1}>
              <article className="flex items-start gap-6 p-4 rounded-2xl transition hover:bg-brand-50/50">
                <ImagePlaceholder label="Ảnh" className="size-28 shrink-0 sm:size-32" />
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-ink">{m.title}</h2>
                  <p className="mt-2 text-muted text-sm leading-relaxed">{m.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3 card lớn */}
      <section className="section bg-brand-50/60">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {highlightCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <article className="group h-full rounded-card border border-line bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <ImagePlaceholder label="Giao diện (1:1)" className="aspect-square w-full" />
                <h3 className="mt-6 px-1 text-xl font-semibold tracking-tight text-ink">{c.title}</h3>
                <p className="mb-2 mt-2 px-1 text-muted text-sm leading-relaxed">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
