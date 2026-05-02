import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { tours } from "@/data/tours";
import { TourCard } from "@/components/TourCard";

export const Route = createFileRoute("/tours/")({
  head: () => ({
    meta: [
      { title: "All Tours — Atlas Voyages Morocco" },
      { name: "description", content: "Browse all Morocco tours: Sahara, Marrakech, Atlas Mountains, Chefchaouen, Fes, Essaouira. Prices in MAD." },
    ],
  }),
  component: ToursPage,
});

function ToursPage() {
  const { t } = useI18n();
  return (
    <div className="px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-3">{t("tours.all")}</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-4">{t("tours.featured")}</h1>
          <p className="text-muted-foreground text-lg">{t("tours.subtitle")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
        </div>
      </div>
    </div>
  );
}
