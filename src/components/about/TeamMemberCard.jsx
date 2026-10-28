import { GraduationCap, Award } from "lucide-react";

export default function TeamMemberCard({ member }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 text-center flex flex-col items-center hover:shadow-lg hover:border-blue-300 transition-all group">
      {/* Avatar Image / Placeholder */}
      <div className="relative mb-4">
        <img
          src={member.avatar}
          alt={member.name}
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border-2 border-slate-100 group-hover:scale-105 transition-transform duration-300 shadow-sm"
          loading="lazy"
        />
        <div className="absolute -bottom-2 -right-1 bg-blue-600 text-white p-1 rounded-lg shadow-xs">
          <GraduationCap className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Member Details (Bám sát wireframe: Tên, Ngành học) */}
      <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
        {member.name}
      </h4>

      <p className="text-xs font-semibold text-blue-600 mt-1 flex items-center justify-center gap-1">
        <span>{member.major}</span>
      </p>

      <span className="text-[11px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full mt-2 font-medium">
        {member.role}
      </span>

      <p className="text-xs text-slate-500 mt-3 line-clamp-2 leading-relaxed">
        {member.bio}
      </p>
    </div>
  );
}
