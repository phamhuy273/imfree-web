import { Zap, Layout, ShieldCheck } from "lucide-react";
import { homeFeatureHighlights } from "../../data/featuresData";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const iconMap = {
  Zap: Zap,
  Layout: Layout,
  ShieldCheck: ShieldCheck,
};

export default function FeatureOverview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          badge="Tính Năng Nổi Bật"
          title="Những Điểm Khác Biệt Của Đề Tài"
          subtitle="Giải pháp được nghiên cứu và tinh chỉnh kỹ lưỡng nhằm mang lại giá trị thiết thực và trải nghiệm tối ưu nhất."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeFeatureHighlights.map((item) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={item.id}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-between w-full mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-200/70 text-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
