import { Link, useLocation } from "@tanstack/react-router";
import { useI18n, type Lang } from "@/lib/i18n";
import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const loc = useLocation();
  const isHome = loc.pathname === "/";

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/tours", label: t("nav.tours") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "العربية" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${isHome ? "bg-background/70" : "bg-background/95"} backdrop-blur-xl border-b border-border/50`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-semibold text-primary tracking-tight">
          {t("brand")}
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-primary px-3 py-2 rounded-full hover:bg-secondary transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase">{lang === "ar" ? "ع" : lang}</span>
            </button>
            {langOpen && (
              <div className="absolute end-0 mt-2 bg-card border border-border rounded-xl shadow-elegant overflow-hidden min-w-[140px]">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full text-start px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${lang === l.code ? "text-primary font-semibold" : "text-foreground"}`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary-glow transition-colors shadow-soft"
          >
            {t("cta.book")}
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium text-foreground hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-deep text-primary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-serif text-2xl font-semibold mb-3">{t("brand")}</div>
          <p className="text-sm text-primary-foreground/70 max-w-xs">{t("footer.tagline")}</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Navigate</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">{t("nav.home")}</Link></li>
            <li><Link to="/tours" className="hover:text-white">{t("nav.tours")}</Link></li>
            <li><Link to="/about" className="hover:text-white">{t("nav.about")}</Link></li>
            <li><Link to="/contact" className="hover:text-white">{t("nav.contact")}</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>Marrakech, Morocco</li>
            <li>+212 5 24 00 00 00</li>
            <li>hello@atlasvoyages.ma</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} {t("brand")}. {t("footer.rights")}
      </div>
    </footer>
  );
}
