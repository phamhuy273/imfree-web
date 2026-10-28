import { visualFeatureCards } from "../../data/featuresData";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

export default function VisualFeatureCards() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/70">
      <Container>
        <SectionTitle
          badge="Khả Năng Mở Rộng"
          title="Module Tiện Ích Mở Rộng"
          subtitle="Sẵn sàng tích hợp và nâng cấp để phục vụ các yêu cầu nghiên cứu chuyên sâu hơn."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visualFeatureCards.map((card, index) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all flex flex-col"
            >
              {/* Top visual graphic box */}
              <div className={`h-44 bg-gradient-to-br ${card.color} border-b border-slate-100 flex flex-col items-center justify-center p-6 relative`}>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-slate-800 font-bold text-lg">
                  0{index + 1}
                </div>
                <span className="mt-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {card.category}
                </span>
              </div>

              {/* Bottom text */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center justify-between">
                  <span>Trạng thái: Hoàn thiện</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
