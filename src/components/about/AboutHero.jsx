import { siteConfig } from "../../data/siteConfig";
import { aboutStory } from "../../data/aboutData";
import Container from "../common/Container";

export default function AboutHero() {
  return (
    <section className="pt-12 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full border border-blue-200">
            Giới Thiệu Đề Tài
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            {aboutStory.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {aboutStory.subtitle}
          </p>
        </div>

        {/* Large Intro Banner Box (Wireframe big rectangle) */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase font-mono tracking-widest text-blue-300">
              Câu Chuyện Phát Triển
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold leading-snug">
              Kiến tạo giải pháp công nghệ từ góc nhìn sinh viên
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {aboutStory.description}
            </p>
          </div>

          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
            <div className="w-80 h-80 rounded-full bg-white blur-3xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
