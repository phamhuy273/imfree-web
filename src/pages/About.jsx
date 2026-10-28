import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { team, values } from "../data/content";

export default function About() {
  return (
    <>
      {/* ───────── 1. TIÊU ĐỀ + BANNER ĐỘI NGŨ (SLIDE 1 & SLIDE 29) ───────── */}
      <section className="bg-[radial-gradient(60%_40%_at_50%_0%,var(--color-brand-100),transparent)] pb-12 pt-32 sm:pt-40">
        <div className="container-x text-center">
          <h1 className="h1 mx-auto max-w-3xl">Về dự án ImFree</h1>
          <p className="lead mx-auto mt-4">
            Nền tảng kinh tế chia sẻ nguồn lực nhàn rỗi được xây dựng từ thực tiễn nhu cầu và rào cản niềm tin của sinh viên.
          </p>
          <Button to="/tinh-nang" className="mt-8">
            Xem sản phẩm
          </Button>
        </div>
        <div className="container-x mt-8 sm:mt-10">
          <div className="relative mx-auto max-w-[720px] p-[2px] rounded-3xl bg-gradient-to-b from-brand-300/80 via-brand-100/50 to-slate-200/80 shadow-[0_20px_50px_-15px_rgba(42,86,204,0.14)]">
            <div className="relative overflow-hidden rounded-[22px] bg-slate-100">
              {/* Tag Đội ngũ phát triển ImFree */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md border border-white/80 px-3.5 py-1.5 text-xs text-ink shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-800">Đội ngũ phát triển ImFree</span>
                <span className="text-slate-400 font-normal hidden sm:inline">• UIT</span>
              </div>

              {/* Ảnh tự nhiên khuôn viên UIT và 5 thành viên */}
              <img
                src="/team-uit-campus.jpg"
                alt="Đội ngũ phát triển ImFree tại khuôn viên trường UIT"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 2. MỤC TIÊU & DỮ LIỆU THỊ TRƯỜNG THỰC TẾ (SLIDE 3 & 28) ───────── */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Mục Tiêu & Dữ Liệu Thị Trường"
              text="Được chứng minh qua số liệu khảo sát thực tế từ 105 sinh viên trường Đại học Công nghệ Thông tin (UIT)."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Box 1: Mục tiêu dự án & Khởi nguồn */}
            <Reveal>
              <div className="rounded-2xl border border-line bg-brand-50/40 p-8 h-full space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-100/60 w-fit px-3 py-1 rounded-full">
                  Khởi nguồn đề tài
                </div>
                <h3 className="text-2xl font-bold text-ink">Bắt đầu từ vấn đề cụ thể</h3>
                <p className="text-muted leading-relaxed text-[15px]">
                  Trong mỗi cộng đồng sinh viên đều tồn tại những nguồn lực chưa được sử dụng hết — tài sản nhàn rỗi (máy ảnh, camera, thiết bị âm thanh, máy chiếu), kỹ năng và thời gian chưa được khai thác. Sinh viên muốn cho thuê để tạo thêm thu nhập, nhưng gặp rào cản lớn: <em>liệu người thuê có giữ gìn đồ không, và đối tác có đáng tin không?</em>
                </p>
                <p className="text-muted leading-relaxed text-[15px]">
                  <strong>ImFree</strong> bắt đầu từ việc giúp sinh viên chia sẻ những tài sản đang nhàn rỗi một cách thuận tiện và đáng tin cậy hơn. Một bản MVP tập trung, Pilot tại UIT có thể kiểm soát và tạo ra giao dịch thực tế để kiểm chứng trước khi mở rộng.
                </p>
              </div>
            </Reveal>

            {/* Box 2: Dữ liệu khảo sát 105 SV UIT */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-white p-8 h-full shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-500/10 w-fit px-3 py-1 rounded-full">
                  Khảo sát 105 sinh viên UIT
                </div>
                <h3 className="text-2xl font-bold text-ink">Nhu cầu lớn • Rào cản niềm tin cao</h3>
                
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-100">
                    <div className="text-2xl font-extrabold text-brand-700">58,1%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Từng phát sinh nhu cầu thuê / mượn tài sản</div>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-100">
                    <div className="text-2xl font-extrabold text-brand-700">49,5%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Sẵn sàng cung cấp nguồn lực nhàn rỗi để tạo thêm thu nhập</div>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                    <div className="text-2xl font-extrabold text-amber-700">90,5%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Phân vân hoặc không an tâm khi giao dịch với người lạ</div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent-500/10 border border-accent-400/30">
                    <div className="text-2xl font-extrabold text-accent-600">72,4%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Rào cản lớn nhất: Không biết người giao dịch có tin cậy không</div>
                  </div>
                </div>

                <p className="text-xs text-muted italic">
                  * Nhu cầu đã tồn tại sẵn có trong cộng đồng sinh viên, ImFree chính là giải pháp giải quyết rào cản độ tin cậy để khai phóng nguồn lực nhàn rỗi.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 3. ĐỘI NGŨ 5 THÀNH VIÊN UIT (SLIDE 28) ───────── */}
      <section className="section bg-brand-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Đội Ngũ 5 Thành Viên UIT"
              text="Nhóm sinh viên trường Đại học Công nghệ Thông tin (UIT) chủ động phát triển phiên bản MVP phục vụ Pilot có kiểm soát."
            />
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <article className="group text-center bg-white p-5 rounded-2xl border border-line shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-soft flex flex-col justify-between h-full">
                  <div>
                    <ImagePlaceholder
                      label="Ảnh"
                      className="aspect-[4/5] w-full transition duration-300 group-hover:scale-[1.02] mb-4"
                    />
                    <h3 className="font-bold text-ink text-base">{m.name}</h3>
                    <p className="text-xs text-brand-600 font-medium mt-1">{m.major}</p>
                  </div>
                  <span className="mt-3 text-[11px] text-muted bg-slate-100 py-1 px-2 rounded-full inline-block">
                    {m.role}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── 4. GIÁ TRỊ CỐT LÕI (SLIDE 1 & SLIDE 27) ───────── */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Giá Trị Cốt Lõi"
              text="Bốn giá trị kim chỉ nam: Kết nối • Chia sẻ • Tin cậy • Cộng đồng định hình nên nền tảng ImFree."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <article className="flex h-full flex-col justify-between rounded-card border border-line p-6 transition duration-300 hover:border-brand-300 hover:shadow-soft bg-white">
                  <div>
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600 mb-4">
                      <v.icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-ink">{v.title}</h3>
                    <p className="mt-2 text-muted text-sm leading-relaxed">{v.text}</p>
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
