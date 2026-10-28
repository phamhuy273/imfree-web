import { CheckSquare } from "lucide-react";
import { coreValues } from "../../data/aboutData";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function CoreValues() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <Container>
        <SectionTitle
          badge="Kim Chỉ Nam"
          title="Giá Trị Cốt Lõi"
          subtitle="Những nguyên tắc định hình chất lượng và văn hóa làm việc của toàn bộ dự án."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {coreValues.map((value) => (
            <div
              key={value.id}
              className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <CheckSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  {value.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
