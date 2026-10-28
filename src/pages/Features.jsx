import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import AppWindow from "../components/AppWindow";
import { discoverSteps, transactionStages } from "../data/content";

export default function Features() {
  return (
    <>
      {/* ───────── 1. TIÊU ĐỀ + KHUNG APP SIMULATOR (SLIDE 8-16) ───────── */}
      <section className="bg-[radial-gradient(60%_40%_at_50%_0%,var(--color-brand-100),transparent)] pb-10 pt-32 sm:pt-40">
        <div className="container-x text-center">
          <h1 className="h1 mx-auto max-w-3xl">Khám phá các tính năng</h1>
          <p className="lead mx-auto mt-6">
            Mô phỏng trải nghiệm giao diện và luồng giao dịch xuyên suốt (Transaction Flow) của nền tảng ImFree.
          </p>
        </div>
        <div className="container-x mt-14">
          <AppWindow />
        </div>
      </section>

      {/* ───────── 2. GIAI ĐOẠN 1: DISCOVER & TRUST (2×2 GRID - BÁM SÁT WIREFRAME) ───────── */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Giai Đoạn 01: Discover & Trust"
              text="Từ tìm kiếm tài sản đến gửi yêu cầu thuê — minh bạch hơn ở mỗi điểm chạm nhằm giảm thiểu bất cân xứng thông tin."
            />
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {discoverSteps.map((step, i) => (
              <Reveal key={step.title} delay={(i % 2) * 0.1}>
                <article className="flex items-start gap-5 p-6 rounded-2xl border border-line bg-white shadow-xs transition hover:border-brand-300 hover:shadow-soft h-full">
                  {/* Khung ô vuông số thứ tự + icon bên trái (chuẩn wireframe ảnh vuông) */}
                  <div className="size-20 shrink-0 rounded-2xl bg-brand-50 border border-brand-100 flex flex-col items-center justify-center text-brand-600 shadow-xs">
                    <span className="text-[11px] font-mono font-bold text-accent-500 tracking-wider">
                      {step.step}
                    </span>
                    <step.icon className="size-6 mt-1 text-brand-600" aria-hidden="true" />
                  </div>

                  {/* Nội dung chi tiết bên phải */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h2 className="text-lg font-bold tracking-tight text-ink">
                        {step.title}
                      </h2>
                    </div>
                    <p className="mt-2 text-muted text-sm leading-relaxed">
                      {step.text}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 bg-brand-50/80 px-2.5 py-0.5 rounded-full">
                      <span className="size-1.5 rounded-full bg-brand-500" />
                      <span>{step.tag}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. BA GIAI ĐOẠN GIAO DỊCH TOÀN DIỆN (3 CỘT - BÁM SÁT WIREFRAME & SLIDE 7) ───────── */}
      <section className="section bg-brand-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Quy Trình Giao Dịch 3 Giai Đoạn"
              text="Tạo thành một quy trình khép kín, từ kết nối cung - cầu đến kiểm soát rủi ro và giải quyết tranh chấp."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {transactionStages.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <article className="group h-full rounded-card border border-line bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift flex flex-col justify-between">
                  <div>
                    {/* Header icon + badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white transition duration-300 shadow-xs">
                        <c.icon className="size-6" aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-muted">
                        {c.stageNum}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-ink group-hover:text-brand-600 transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-muted text-sm leading-relaxed">
                      {c.text}
                    </p>
                  </div>

                  {/* Footer card */}
                  <div className="mt-6 pt-5 border-t border-line/70 flex items-center justify-between text-xs font-medium text-brand-700">
                    <span>{c.featurePoint}</span>
                    <span className="size-2 rounded-full bg-emerald-500" />
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
