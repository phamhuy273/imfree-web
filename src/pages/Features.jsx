import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import AppWindow from "../components/AppWindow";
import { stage1Discover, stage2Exchange, stage3Resolution } from "../data/content";
import { ArrowDown, AlertCircle, Info, ShieldCheck } from "lucide-react";

export default function Features() {
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

          {/* Thanh chuyển nhanh đến 3 giai đoạn */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-medium">
            <a
              href="#giai-doan-1"
              className="px-4 py-2 rounded-full bg-white border border-line hover:border-brand-300 text-ink shadow-xs hover:text-brand-700 transition"
            >
              Giai đoạn 01: Discover & Trust
            </a>
            <a
              href="#giai-doan-2"
              className="px-4 py-2 rounded-full bg-white border border-line hover:border-brand-300 text-ink shadow-xs hover:text-brand-700 transition"
            >
              Giai đoạn 02: Secure Exchange
            </a>
            <a
              href="#giai-doan-3"
              className="px-4 py-2 rounded-full bg-white border border-line hover:border-brand-300 text-ink shadow-xs hover:text-brand-700 transition"
            >
              Giai đoạn 03: Protection & Resolution
            </a>
          </div>
        </div>

        <div className="container-x mt-12">
          <AppWindow />
        </div>
      </section>

      {/* ───────── 2. GIAI ĐOẠN 01: DISCOVER & TRUST (SLIDE 8-11) ───────── */}
      <section id="giai-doan-1" className="section scroll-mt-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Giai Đoạn 01: Discover & Trust"
              text="Từ tìm kiếm tài sản đến gửi yêu cầu thuê — minh bạch hơn ở mỗi điểm chạm nhằm giảm thiểu bất cân xứng thông tin."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {stage1Discover.map((item) => (
              <Reveal key={item.title}>
                <article className="flex items-start gap-4 p-6 rounded-2xl border border-line bg-white shadow-xs transition hover:border-brand-300 hover:shadow-soft h-full">
                  {/* Icon box tinh giản, KHÔNG CÓ CON SỐ HỒNG */}
                  <div className="size-13 shrink-0 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-xs">
                    <item.icon className="size-6 text-brand-600" aria-hidden="true" />
                  </div>

                  {/* Nội dung */}
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg font-bold tracking-tight text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-muted text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 bg-brand-50/80 px-2.5 py-0.5 rounded-full">
                      <span className="size-1.5 rounded-full bg-brand-500" />
                      <span>{item.tag}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 3. GIAI ĐOẠN 02: SECURE EXCHANGE (SLIDE 12-16) ───────── */}
      <section id="giai-doan-2" className="section bg-brand-50/60 scroll-mt-20 border-y border-line/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Giai Đoạn 02: Secure Exchange"
              text="Một giao dịch an toàn được ghi nhận ở từng mốc: trước khi dùng, trong khi dùng và sau khi hoàn trả."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stage2Exchange.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.05} className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                <article className="flex items-start gap-4 p-6 rounded-2xl border border-line bg-white shadow-xs transition hover:border-brand-300 hover:shadow-soft h-full">
                  {/* Icon box tinh giản, KHÔNG CÓ CON SỐ HỒNG */}
                  <div className="size-13 shrink-0 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-xs">
                    <item.icon className="size-6 text-brand-600" aria-hidden="true" />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg font-bold tracking-tight text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-muted text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 bg-brand-50/80 px-2.5 py-0.5 rounded-full">
                      <span className="size-1.5 rounded-full bg-brand-500" />
                      <span>{item.tag}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Banner Mốc quan trọng (Slide 16) */}
          <div className="mt-10 p-5 rounded-2xl bg-white border border-brand-200/80 shadow-xs flex items-start sm:items-center gap-3.5 text-sm text-ink">
            <Info className="size-5 text-brand-600 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <strong className="text-brand-700">Mốc quan trọng:</strong>{" "}
              <span>
                <strong>Before Verification</strong> → ghi nhận trước sử dụng •{" "}
                <strong>After Verification</strong> → đối chiếu khi hoàn trả. Nếu phát hiện hư hỏng hoặc bất đồng ở bước 05, giao dịch chuyển sang Protection & Resolution — không tự động hoàn tất.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 4. GIAI ĐOẠN 03: PROTECTION & RESOLUTION (SLIDE 17-20) ───────── */}
      <section id="giai-doan-3" className="section scroll-mt-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Giai Đoạn 03: Protection & Resolution"
              text="Bảo vệ giao dịch bằng bằng chứng, đối thoại và quy trình giải quyết tranh chấp minh bạch."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {stage3Resolution.map((item) => (
              <Reveal key={item.title}>
                <article className="flex items-start gap-4 p-6 rounded-2xl border border-line bg-white shadow-xs transition hover:border-brand-300 hover:shadow-soft h-full">
                  {/* Icon box tinh giản, KHÔNG CÓ CON SỐ HỒNG */}
                  <div className="size-13 shrink-0 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shadow-xs">
                    <item.icon className="size-6 text-brand-600" aria-hidden="true" />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg font-bold tracking-tight text-ink">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-muted text-sm leading-relaxed">
                      {item.text}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 bg-brand-50/80 px-2.5 py-0.5 rounded-full">
                      <span className="size-1.5 rounded-full bg-brand-500" />
                      <span>{item.tag}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Banner Lưu ý Chờ xử lý (Slide 20) */}
          <div className="mt-10 p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-xs flex items-start sm:items-center gap-3.5 text-sm text-ink">
            <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <strong className="text-amber-800">Lưu ý / Chờ xử lý:</strong>{" "}
              <span>
                Nếu bằng chứng chưa đủ hoặc chưa đạt được phương án giải quyết, vụ việc tiếp tục ở trạng thái <em>“Chờ xử lý”</em> — không tự động đóng vụ việc.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
