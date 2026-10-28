import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, Sparkles } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { navLinks } from "../../data/navigation";
import Container from "../common/Container";
import Button from "../common/Button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-0.5 border border-slate-100 shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
              <img
                src={siteConfig.logo}
                alt={siteConfig.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                {siteConfig.domain}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-blue-600 shadow-sm font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href={siteConfig.cta.primaryLink}
              size="md"
              className="rounded-full shadow-sm"
            >
              {siteConfig.cta.primaryText}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-2">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600 font-semibold"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-2">
              <Button
                href={siteConfig.cta.primaryLink}
                size="md"
                className="w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {siteConfig.cta.primaryText}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
