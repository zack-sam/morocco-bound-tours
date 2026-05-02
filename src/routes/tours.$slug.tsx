import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { getTour, tours } from "@/data/tours";
import { useState } from "react";
import { Clock, MapPin, Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.tour.title.en} — Atlas Voyages` },
      { name: "description", content: loaderData.tour.overview.en },
      { property: "og:image", content: loaderData.tour.image },
    ] : [],
  }),
  component: TourDetail,
  notFoundComponent: () => (
    <div className="py-24 text-center">
      <h1 className="font-serif text-4xl">Tour not found</h1>
      <Link to="/tours" className="text-primary underline mt-4 inline-block">Back to tours</Link>
    </div>
  ),
});

function TourDetail() {
  const { tour } = Route.useLoaderData();
  const { lang, t, formatPrice } = useI18n();
  const [travelers, setTravelers] = useState(2);
  const [date, setDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative h-[70vh] -mt-20 pt-20 overflow-hidden">
        <img src={tour.image} alt={tour.title[lang]} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-blue-900/40 to-blue-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-12 text-white">
          <div className="flex items-center gap-4 text-sm mb-3 font-medium tracking-wide uppercase">
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{tour.location[lang]}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{tour.days} {t("tour.days")}</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold max-w-4xl leading-tight drop-shadow-lg">{tour.title[lang]}</h1>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="font-serif text-3xl mb-4 text-blue-900 font-bold">{t("tour.overview")}</h2>
              <p className="text-lg text-slate-600 leading-relaxed">{tour.overview[lang]}</p>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-6 text-blue-900 font-bold">{t("tour.itinerary")}</h2>
              <ol className="space-y-4">
                {tour.itinerary[lang].map((step, i) => (
                  <li key={i} className="flex gap-5 p-5 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-serif text-lg shrink-0">{i + 1}</div>
                    <div className="flex-1 pt-1.5 text-slate-700">{step}</div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-serif text-3xl mb-6 text-blue-900 font-bold">{t("tour.included")}</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {tour.included[lang].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl text-blue-900 font-medium">
                    <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking */}
          <aside className="lg:sticky lg:top-28 h-fit">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-7">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 mx-auto rounded-full bg-blue-900 text-white flex items-center justify-center mb-4">
                    <Check className="w-7 h-7" />
                  </div>
                  <p className="font-bold text-lg">{t("booking.success")}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-slate-400">{t("tour.from")}</div>
                    <div className="font-serif text-4xl text-blue-900 font-bold tabular-nums">{formatPrice(tour.price)}</div>
                    <div className="text-xs text-slate-500">{t("tour.perPerson")}</div>
                  </div>

                  <h3 className="font-serif text-xl border-t border-slate-100 pt-5 font-bold">{t("booking.title")}</h3>

                  <label className="block">
                    <span className="text-xs uppercase tracking-widest text-slate-500">{t("booking.date")}</span>
                    <input type="date" required value={date} onChange={(e) => setDate(e.target.value)} className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
                  </label>

                  <label className="block">
                    <span className="text-xs uppercase tracking-widest text-slate-500">{t("booking.travelers")}</span>
                    <input type="number" min={1} max={20} value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} className="w-full mt-1.5 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900" />
                  </label>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-sm font-bold text-slate-700">{t("booking.total")}</span>
                    <span className="font-serif text-2xl font-bold text-blue-900 tabular-nums">{formatPrice(tour.price * travelers)}</span>
                  </div>

                  <button type="submit" className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                    {t("booking.confirm")}
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </button>
                </form>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Other tours */}
      <section className="px-6 lg:px-12 py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-10 font-bold text-blue-900">{t("cta.viewAll")}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {tours.filter((x) => x.slug !== tour.slug).slice(0, 3).map((other) => (
              <Link key={other.slug} to="/tours/$slug" params={{ slug: other.slug }} className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <img src={other.image} alt={other.title[lang]} className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold group-hover:text-blue-900">{other.title[lang]}</h3>
                  <div className="text-sm font-bold text-blue-600 mt-1 tabular-nums">{formatPrice(other.price)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
