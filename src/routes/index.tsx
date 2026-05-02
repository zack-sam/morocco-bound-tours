import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";
import heroImg from "@/assets/hero-morocco.jpg";
import { ArrowRight, MapPin, Calendar, Users, Compass, Shield, Headphones } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { t } = useI18n();
  const featured = tours.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden -mt-20 pt-20">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Morocco landscape" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-8 py-20">
          <div className="lg:col-span-7 text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {t("hero.eyebrow")}
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] tracking-tight mb-6">
              {t("hero.title1")}
              <br />
              <span className="italic font-light text-gold">{t("hero.title2")}</span>
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-xl font-light leading-relaxed mb-10">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/tours" className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-4 rounded-full font-medium shadow-elegant hover:shadow-deep transition-all hover:-translate-y-0.5">
                {t("cta.explore")}
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-7 py-4 rounded-full font-medium hover:bg-white/20 transition-all">
                {t("cta.book")}
              </Link>
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="absolute bottom-0 inset-x-0 translate-y-1/2 px-6 lg:px-12 z-10 hidden md:block">
          <div className="max-w-5xl mx-auto bg-card rounded-2xl shadow-deep border border-border p-2 flex items-center">
            <div className="flex-1 px-5 py-3 flex items-center gap-3 border-e border-border">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("search.destination")}</div>
                <div className="text-sm font-semibold">Marrakech</div>
              </div>
            </div>
            <div className="flex-1 px-5 py-3 flex items-center gap-3 border-e border-border">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("search.duration")}</div>
                <div className="text-sm font-semibold">3 — 7 {t("tour.days")}</div>
              </div>
            </div>
            <div className="flex-1 px-5 py-3 flex items-center gap-3">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("search.guests")}</div>
                <div className="text-sm font-semibold">2</div>
              </div>
            </div>
            <Link to="/tours" className="bg-primary text-primary-foreground px-7 py-4 rounded-xl text-sm font-semibold hover:bg-primary-glow transition-colors">
              {t("search.search")}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tours */}
      <section className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-3">{t("tours.featured")}</div>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground max-w-2xl">{t("tours.subtitle")}</h2>
            </div>
            <Link to="/tours" className="inline-flex items-center gap-2 text-sm font-semibold text-primary border-b border-primary/30 hover:border-primary pb-1">
              {t("cta.viewAll")}
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 px-6 lg:px-12 bg-soft">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-3">{t("why.title")}</div>
            <h2 className="font-serif text-4xl md:text-5xl font-medium">{t("about.title")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Compass, title: t("why.local"), desc: t("why.localDesc") },
              { icon: Shield, title: t("why.private"), desc: t("why.privateDesc") },
              { icon: Headphones, title: t("why.support"), desc: t("why.supportDesc") },
            ].map((f, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border shadow-soft hover:shadow-elegant transition-all">
                <div className="w-14 h-14 rounded-xl bg-hero flex items-center justify-center mb-5 text-white">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-hero rounded-3xl p-10 text-primary-foreground">
            {[
              { v: "12k+", l: t("stats.travelers") },
              { v: "15", l: t("stats.years") },
              { v: "60+", l: t("stats.tours") },
              { v: "40", l: t("stats.guides") },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-4xl md:text-5xl font-semibold text-gold">{s.v}</div>
                <div className="text-sm text-white/80 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center bg-deep rounded-3xl p-12 md:p-20 text-primary-foreground shadow-deep">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-4">{t("contact.title")}</h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">{t("contact.subtitle")}</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gold hover:text-primary transition-colors">
            {t("cta.book")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
