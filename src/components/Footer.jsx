import { Link } from "react-router-dom";
import Button from "./Button";
import { brand, contact } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/75">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" className="h-9 w-auto object-contain" />
            <span className="text-lg font-bold text-white">{brand.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">{brand.footerText}</p>
          <Button to="/tinh-nang" variant="secondary" className="mt-6 !border-white/20 !bg-white/10 !text-white hover:!bg-white/20">
            Xem tính năng
          </Button>
        </div>

        <FooterCol title="Email" items={contact.emails.map((e) => ({ label: e, href: `mailto:${e}` }))} />
        <FooterCol title="Mạng xã hội" items={contact.socials} />
        <FooterCol title="Điện thoại" items={contact.phones.map((p) => ({ label: p, href: `tel:${p.replace(/\s/g, "")}` }))} />
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {brand.name}. Đề tài nghiên cứu khoa học sinh viên UIT.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-white tracking-wide">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} target={i.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="transition hover:text-white">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
