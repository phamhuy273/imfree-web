import { Mail, Phone, MapPin, Sparkles, Globe, ExternalLink, MessageSquare } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Logo & Intro */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Domain: {siteConfig.domain}
            </p>
          </div>

          {/* Email Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Email
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <span className="text-xs text-slate-500">
                  Phản hồi trong vòng 24 giờ làm việc
                </span>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Mạng xã hội & Mã nguồn
            </h4>
            <div className="flex flex-col space-y-2 text-sm">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
                <span>GitHub Repository</span>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition-colors flex items-center gap-2"
              >
                <Globe className="w-4 h-4 text-blue-500" />
                <span>Facebook Cộng đồng</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-300 transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Kênh Thảo luận</span>
              </a>
            </div>
          </div>

          {/* Phone & Address Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Liên hệ
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-blue-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Bản quyền thuộc về Nhóm Nghiên cứu Đề tài.</p>
          <div className="flex items-center gap-6">
            <span>Website chính thức: <strong className="text-slate-400">{siteConfig.domain}</strong></span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
