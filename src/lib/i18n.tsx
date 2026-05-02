import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "fr" | "ar";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    "brand": "Atlas Voyages",
    "nav.home": "Home",
    "nav.tours": "Tours",
    "nav.about": "About",
    "nav.contact": "Contact",
    "cta.book": "Book Now",
    "cta.explore": "Explore Tours",
    "cta.viewAll": "View all tours",
    "cta.bookTour": "Book this tour",
    "cta.send": "Send message",
    "hero.eyebrow": "Curated journeys across Morocco",
    "hero.title1": "Discover the soul",
    "hero.title2": "of Morocco",
    "hero.subtitle": "From the indigo streets of Chefchaouen to the golden dunes of the Sahara — handcrafted private tours led by local experts.",
    "search.destination": "Destination",
    "search.duration": "Duration",
    "search.guests": "Guests",
    "search.search": "Find your tour",
    "tours.featured": "Featured Tours",
    "tours.all": "All Tours",
    "tours.subtitle": "Signature itineraries handpicked by our travel curators.",
    "tour.from": "From",
    "tour.days": "days",
    "tour.day": "day",
    "tour.perPerson": "per person",
    "tour.overview": "Overview",
    "tour.itinerary": "Itinerary",
    "tour.included": "What's included",
    "about.title": "Crafted by Moroccans, for the world",
    "about.body": "For over 15 years, Atlas Voyages has guided travelers through the kingdom's hidden corners. Local guides, vetted riads, and sustainable journeys.",
    "stats.travelers": "Happy travelers",
    "stats.years": "Years of expertise",
    "stats.tours": "Curated tours",
    "stats.guides": "Local guides",
    "why.title": "Why travel with us",
    "why.local": "Local experts",
    "why.localDesc": "Born and raised guides who know every alley and oasis.",
    "why.private": "Private & flexible",
    "why.privateDesc": "Tailored itineraries that adapt to your pace and passions.",
    "why.support": "24/7 support",
    "why.supportDesc": "A real person on call throughout your journey.",
    "contact.title": "Plan your journey",
    "contact.subtitle": "Tell us your dreams — we'll design the trip.",
    "contact.name": "Full name",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.message": "Tell us about your trip",
    "contact.success": "Thank you! We'll be in touch within 24 hours.",
    "booking.title": "Book your tour",
    "booking.date": "Preferred date",
    "booking.travelers": "Number of travelers",
    "booking.total": "Estimated total",
    "booking.confirm": "Request booking",
    "booking.success": "Booking request received — we'll confirm by email.",
    "footer.tagline": "Authentic Morocco, beautifully arranged.",
    "footer.rights": "All rights reserved.",
  },
  fr: {
    "brand": "Atlas Voyages",
    "nav.home": "Accueil",
    "nav.tours": "Circuits",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "cta.book": "Réserver",
    "cta.explore": "Découvrir les circuits",
    "cta.viewAll": "Voir tous les circuits",
    "cta.bookTour": "Réserver ce circuit",
    "cta.send": "Envoyer le message",
    "hero.eyebrow": "Voyages d'exception au Maroc",
    "hero.title1": "Découvrez l'âme",
    "hero.title2": "du Maroc",
    "hero.subtitle": "Des ruelles bleues de Chefchaouen aux dunes dorées du Sahara — des circuits privés conçus par des experts locaux.",
    "search.destination": "Destination",
    "search.duration": "Durée",
    "search.guests": "Voyageurs",
    "search.search": "Trouver mon circuit",
    "tours.featured": "Circuits Vedettes",
    "tours.all": "Tous les Circuits",
    "tours.subtitle": "Itinéraires signature sélectionnés par nos curateurs.",
    "tour.from": "Dès",
    "tour.days": "jours",
    "tour.day": "jour",
    "tour.perPerson": "par personne",
    "tour.overview": "Aperçu",
    "tour.itinerary": "Itinéraire",
    "tour.included": "Inclus",
    "about.title": "Conçu par des Marocains, pour le monde",
    "about.body": "Depuis plus de 15 ans, Atlas Voyages guide les voyageurs à travers les coins cachés du royaume. Guides locaux, riads sélectionnés, voyages durables.",
    "stats.travelers": "Voyageurs heureux",
    "stats.years": "Années d'expérience",
    "stats.tours": "Circuits sélectionnés",
    "stats.guides": "Guides locaux",
    "why.title": "Pourquoi voyager avec nous",
    "why.local": "Experts locaux",
    "why.localDesc": "Des guides natifs qui connaissent chaque ruelle et oasis.",
    "why.private": "Privé & flexible",
    "why.privateDesc": "Des itinéraires sur mesure adaptés à votre rythme.",
    "why.support": "Support 24/7",
    "why.supportDesc": "Une vraie personne joignable tout au long du voyage.",
    "contact.title": "Planifiez votre voyage",
    "contact.subtitle": "Dites-nous vos rêves — nous créons le voyage.",
    "contact.name": "Nom complet",
    "contact.email": "Email",
    "contact.phone": "Téléphone",
    "contact.message": "Parlez-nous de votre voyage",
    "contact.success": "Merci ! Nous vous recontactons sous 24 heures.",
    "booking.title": "Réservez votre circuit",
    "booking.date": "Date souhaitée",
    "booking.travelers": "Nombre de voyageurs",
    "booking.total": "Total estimé",
    "booking.confirm": "Demander la réservation",
    "booking.success": "Demande reçue — confirmation par email.",
    "footer.tagline": "Le Maroc authentique, magnifiquement orchestré.",
    "footer.rights": "Tous droits réservés.",
  },
  ar: {
    "brand": "أطلس للأسفار",
    "nav.home": "الرئيسية",
    "nav.tours": "الجولات",
    "nav.about": "من نحن",
    "nav.contact": "اتصل بنا",
    "cta.book": "احجز الآن",
    "cta.explore": "اكتشف الجولات",
    "cta.viewAll": "عرض كل الجولات",
    "cta.bookTour": "احجز هذه الجولة",
    "cta.send": "إرسال الرسالة",
    "hero.eyebrow": "رحلات مختارة عبر المغرب",
    "hero.title1": "اكتشف روح",
    "hero.title2": "المغرب",
    "hero.subtitle": "من أزقة شفشاون الزرقاء إلى كثبان الصحراء الذهبية — جولات خاصة يقودها خبراء محليون.",
    "search.destination": "الوجهة",
    "search.duration": "المدة",
    "search.guests": "المسافرون",
    "search.search": "ابحث عن جولتك",
    "tours.featured": "جولات مميزة",
    "tours.all": "جميع الجولات",
    "tours.subtitle": "برامج مختارة بعناية من قبل خبرائنا.",
    "tour.from": "ابتداءً من",
    "tour.days": "أيام",
    "tour.day": "يوم",
    "tour.perPerson": "للشخص",
    "tour.overview": "نظرة عامة",
    "tour.itinerary": "البرنامج",
    "tour.included": "ما هو مشمول",
    "about.title": "صُنع بأيدٍ مغربية، للعالم",
    "about.body": "منذ أكثر من 15 عامًا، نرشد المسافرين عبر زوايا المملكة الخفية. مرشدون محليون، رياضات مختارة، رحلات مستدامة.",
    "stats.travelers": "مسافر سعيد",
    "stats.years": "سنوات من الخبرة",
    "stats.tours": "جولة مختارة",
    "stats.guides": "مرشد محلي",
    "why.title": "لماذا تسافر معنا",
    "why.local": "خبراء محليون",
    "why.localDesc": "مرشدون من أبناء البلد يعرفون كل زقاق وواحة.",
    "why.private": "خاص ومرن",
    "why.privateDesc": "برامج مصممة حسب وتيرتك واهتماماتك.",
    "why.support": "دعم على مدار الساعة",
    "why.supportDesc": "شخص حقيقي على اتصال طوال رحلتك.",
    "contact.title": "خطط لرحلتك",
    "contact.subtitle": "أخبرنا بأحلامك — وسنصمم الرحلة.",
    "contact.name": "الاسم الكامل",
    "contact.email": "البريد الإلكتروني",
    "contact.phone": "الهاتف",
    "contact.message": "أخبرنا عن رحلتك",
    "contact.success": "شكرًا لك! سنتواصل معك خلال 24 ساعة.",
    "booking.title": "احجز جولتك",
    "booking.date": "التاريخ المفضل",
    "booking.travelers": "عدد المسافرين",
    "booking.total": "الإجمالي المقدر",
    "booking.confirm": "طلب الحجز",
    "booking.success": "تم استلام الطلب — سنؤكد عبر البريد الإلكتروني.",
    "footer.tagline": "المغرب الأصيل، منظم بإتقان.",
    "footer.rights": "جميع الحقوق محفوظة.",
  },
};

interface I18nContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
  formatPrice: (mad: number) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved && ["en", "fr", "ar"].includes(saved)) setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? key;
  const dir = lang === "ar" ? "rtl" : "ltr";
  const formatPrice = (mad: number) => {
    const locale = lang === "ar" ? "ar-MA" : lang === "fr" ? "fr-MA" : "en-US";
    return new Intl.NumberFormat(locale).format(mad) + " MAD";
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t, dir, formatPrice }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
