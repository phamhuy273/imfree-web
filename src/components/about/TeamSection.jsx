import { teamMembers } from "../../data/teamData";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <Container>
        <SectionTitle
          badge="Nhân Sự Dự Án"
          title="Đội Ngũ Của Chúng Tôi"
          subtitle="Những thành viên nhiệt huyết đứng sau quá trình nghiên cứu, thiết kế và phát triển đề tài."
        />

        {/* Grid thành viên (Bám sát wireframe: hàng các card Tên, Ngành học) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
