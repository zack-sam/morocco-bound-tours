import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import atlasImg from "@/assets/tour-atlas.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Atlas Voyages Morocco" },
      { name: "description", content: "Local Moroccan travel curators with 15+ years crafting private journeys." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useI18n();
  return (
    <div>
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-3">{t("nav.about")}</div>
            <h1 className="font-serif text-5xl md:text-6xl font-medium leading-tight mb-6">{t("about.title")}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t("about.body")}</p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: "12k+", l: t("stats.travelers") },
                { v: "15", l: t("stats.years") },
                { v: "60+", l: t("stats.tours") },
                { v: "40", l: t("stats.guides") },
              ].map((s, i) => (
                <div key={i} className="border-s-2 border-primary ps-4">
                  <div className="font-serif text-3xl font-semibold text-primary">{s.v}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={atlasImg} alt="Atlas Mountains" loading="lazy" className="rounded-3xl shadow-deep aspect-[4/5] object-cover" />
            <div className="absolute -bottom-6 -start-6 bg-card p-5 rounded-2xl shadow-elegant border border-border max-w-[200px] hidden md:block">
              <div className="font-serif text-2xl text-primary font-semibold">15 yrs</div>
              <div className="text-xs text-muted-foreground">crafting Morocco journeys</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
