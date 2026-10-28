import { Sparkles, Activity, Cpu, Lock, CheckCircle2 } from "lucide-react";
import { detailedFeatures } from "../../data/featuresData";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";

const iconMap = {
  Sparkles: Sparkles,
  Activity: Activity,
  Cpu: Cpu,
  Lock: Lock,
};

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle
          badge="Hệ Thống Tính Năng"
          title="Bốn Trụ Cột Chính Của Đề Tài"
          subtitle="Được xây dựng với các tiêu chí tối đa hóa hiệu năng và độ ổn định."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {detailedFeatures.map((item) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-blue-600 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                {/* Detail checklist */}
                <div className="space-y-2 border-t border-slate-200/70 pt-4">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
