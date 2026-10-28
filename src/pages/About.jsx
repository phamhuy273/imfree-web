import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { team, values } from "../data/content";

export default function About() {
  return (
    <>
      {/* ───────── 1. TIÊU ĐỀ + BANNER ĐỘI NGŨ ───────── */}
      <section className="bg-[radial-gradient(60%_40%_at_50%_0%,var(--color-brand-100),transparent)] pb-12 pt-32 sm:pt-40">
        <div className="container-x text-center">
          <span className="inline-block rounded-full border border-brand-200 bg-white/90 px-3.5 py-1 text-xs sm:text-sm font-medium text-brand-700 shadow-xs mb-4">
            Dự án AISC2026 • Đội ngũ Rimberio
          </span>
          <h1 className="h1 mx-auto max-w-3xl">Về dự án ImFree</h1>
          <p className="lead mx-auto mt-4">
            Giải pháp kinh tế chia sẻ nguồn lực nhàn rỗi được xây dựng từ thực tiễn nhu cầu và rào cản niềm tin của sinh viên.
          </p>
          <Button to="/tinh-nang" className="mt-8">
            Xem sản phẩm
          </Button>
        </div>
        <div className="container-x mt-14">
          <div className="relative rounded-card overflow-hidden shadow-lift bg-white border border-brand-100 p-2">
            <ImagePlaceholder
              label="Ảnh banner / Nhóm sáng lập Rimberio (tỉ lệ 21:9)"
              className="aspect-[16/9] w-full md:aspect-[21/9]"
            />
          </div>
        </div>
      </section>

      {/* ───────── 2. MỤC TIÊU & SỐ LIỆU THỊ TRƯỜNG THỰC TẾ (SLIDE 3 & 28) ───────── */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Mục Tiêu & Dữ Liệu Thị Trường"
              text="Được chứng minh qua số liệu khảo sát thực tế từ 105 sinh viên trường Đại học Công nghệ Thông tin (UIT)."
            />
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Box 1: Mục tiêu dự án */}
            <Reveal>
              <div className="rounded-2xl border border-line bg-brand-50/40 p-8 h-full space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-100/60 w-fit px-3 py-1 rounded-full">
                  Khởi nguồn đề tài
                </div>
                <h3 className="text-2xl font-bold text-ink">Bắt đầu từ câu chuyện có thật</h3>
                <p className="text-muted leading-relaxed text-[15px]">
                  Nhiều sinh viên sở hữu những tài sản giá trị như máy ảnh, laptop cấu hình cao, máy chiếu... nhưng tần suất sử dụng thực tế rất thấp. Sinh viên muốn cho thuê để có thêm thu nhập, nhưng lại gặp phải rào cản tâm lý lớn nhất: <em>liệu người thuê có giữ gìn máy không, và giao dịch với người lạ có đáng tin không?</em>
                </p>
                <p className="text-muted leading-relaxed text-[15px]">
                  <strong>ImFree</strong> ra đời để lấp đầy khoảng trống thị trường: tạo ra một nền tảng chuyên biệt, nơi sinh viên an tâm kết nối chia sẻ <strong>Tài sản & Kỹ năng</strong> nhờ quy trình kiểm soát rủi ro 3 giai đoạn và hồ sơ uy tín <strong>Trust Profile</strong>.
                </p>
              </div>
            </Reveal>

            {/* Box 2: Dữ liệu khảo sát 105 SV UIT */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-line bg-white p-8 h-full shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-600 bg-accent-500/10 w-fit px-3 py-1 rounded-full">
                  Số liệu khảo sát 105 SV UIT
                </div>
                <h3 className="text-2xl font-bold text-ink">Nhu cầu lớn • Rào cản niềm tin cao</h3>
                
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-100">
                    <div className="text-2xl font-extrabold text-brand-700">58,1%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Từng phát sinh nhu cầu thuê / mượn tài sản</div>
                  </div>
                  <div className="p-4 rounded-xl bg-brand-50/60 border border-brand-100">
                    <div className="text-2xl font-extrabold text-brand-700">49,5%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Sẵn sàng cung cấp đồ nhàn rỗi để kiếm thêm tiền</div>
                  </div>
                  <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/60">
                    <div className="text-2xl font-extrabold text-amber-700">90,5%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Phân vân hoặc không an tâm khi giao dịch với người lạ</div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent-500/10 border border-accent-400/30">
                    <div className="text-2xl font-extrabold text-accent-600">72,4%</div>
                    <div className="text-xs text-muted mt-1 leading-snug">Rào cản lớn nhất: Không biết đối tác có tin cậy không</div>
                  </div>
                </div>

                <p className="text-xs text-muted italic">
                  * Khảo sát thực hiện tại ĐHQG-HCM, xác nhận nhu cầu đã tồn tại rõ nét và ImFree chính là giải pháp giải quyết rào cản độ tin cậy.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ───────── 3. ĐỘI NGŨ THỰC HIỆN DỰ ÁN (SLIDE 28) ───────── */}
      <section className="section bg-brand-50/60">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Đội Ngũ Sáng Lập (Rimberio)"
              text="Nhóm 5 sinh viên trường Đại học Công nghệ Thông tin (UIT) chủ động phát triển và kiểm chứng phiên bản Pilot."
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
