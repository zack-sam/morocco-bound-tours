import { Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import type { Tour } from "@/data/tours";
import { Clock, MapPin, ArrowRight } from "lucide-react";

export function TourCard({ tour }: { tour: Tour }) {
  const { lang, t, formatPrice } = useI18n();
  return (
    <Link
      to="/tours/$slug"
      params={{ slug: tour.slug }}
      className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title[lang]}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
        <div className="absolute top-4 start-4 bg-background/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-semibold text-primary flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          {tour.days} {tour.days === 1 ? t("tour.day") : t("tour.days")}
        </div>
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin className="w-3 h-3" />
          {tour.location[lang]}
        </div>
        <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
          {tour.title[lang]}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
          {tour.overview[lang]}
        </p>
        <div className="flex items-end justify-between pt-3 border-t border-border mt-auto">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t("tour.from")}</div>
            <div className="font-serif text-2xl font-semibold text-primary tabular-nums">
              {formatPrice(tour.price)}
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            {t("cta.book")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </div>
        </div>
      </div>
    </Link>
  );
}
