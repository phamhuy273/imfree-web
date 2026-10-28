import { quickFeatures } from "../../data/featuresData";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function FeatureHighlights() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/60">
      <Container>
        <SectionTitle
          badge="Tổng Quan Nhanh"
          title="Các Tiện Ích Bổ Trợ"
          subtitle="Được thiết kế đồng bộ nhằm mang lại sự tiện lợi tối đa cho người sử dụng."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickFeatures.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="text-xs font-mono font-bold text-blue-600 mb-2">
                0{index + 1}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
