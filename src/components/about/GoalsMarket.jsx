import { Target, TrendingUp, CheckCircle2 } from "lucide-react";
import { goalAndMarket } from "../../data/aboutData";
import Container from "../common/Container";

export default function GoalsMarket() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1: Mục tiêu đề tài */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:border-blue-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {goalAndMarket.goal.title}
            </h3>
            <div className="space-y-3">
              {goalAndMarket.goal.paragraphs.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Box 2: Thị trường & Khách hàng */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-8 hover:border-emerald-400 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              {goalAndMarket.market.title}
            </h3>
            <div className="space-y-3">
              {goalAndMarket.market.paragraphs.map((p, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-600 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
