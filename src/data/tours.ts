import sahara from "@/assets/tour-sahara.jpg";
import marrakech from "@/assets/tour-marrakech.jpg";
import atlas from "@/assets/tour-atlas.jpg";
import chefchaouen from "@/assets/tour-chefchaouen.jpg";
import essaouira from "@/assets/tour-essaouira.jpg";
import fes from "@/assets/tour-fes.jpg";

export interface Tour {
  slug: string;
  image: string;
  days: number;
  price: number; // MAD
  title: { en: string; fr: string; ar: string };
  location: { en: string; fr: string; ar: string };
  overview: { en: string; fr: string; ar: string };
  itinerary: { en: string[]; fr: string[]; ar: string[] };
  included: { en: string[]; fr: string[]; ar: string[] };
}

export const tours: Tour[] = [
  {
    slug: "sahara-merzouga",
    image: sahara,
    days: 4,
    price: 6500,
    title: { en: "Sahara Sunset — Merzouga", fr: "Coucher du Sahara — Merzouga", ar: "غروب الصحراء — مرزوقة" },
    location: { en: "Merzouga Dunes", fr: "Dunes de Merzouga", ar: "كثبان مرزوقة" },
    overview: {
      en: "Cross the Atlas to the Erg Chebbi dunes. Camel trek at golden hour, dinner under stars in a luxury Berber camp.",
      fr: "Traversez l'Atlas jusqu'aux dunes d'Erg Chebbi. Méharée au coucher du soleil, dîner sous les étoiles dans un camp berbère.",
      ar: "اعبر الأطلس إلى كثبان عرق الشبي. ركوب الجمال عند الغروب وعشاء تحت النجوم في مخيم بربري فاخر.",
    },
    itinerary: {
      en: ["Marrakech → Aït Benhaddou", "Dades Gorges & Tinghir", "Camel trek & desert camp", "Sunrise & return"],
      fr: ["Marrakech → Aït Benhaddou", "Gorges du Dadès & Tinghir", "Méharée & camp désertique", "Lever du soleil & retour"],
      ar: ["مراكش → آيت بن حدو", "وادي دادس وتنغير", "ركوب الجمال والمخيم الصحراوي", "شروق الشمس والعودة"],
    },
    included: {
      en: ["Private 4x4 + driver", "Luxury desert camp", "All meals", "English/French/Arabic guide"],
      fr: ["4x4 privé + chauffeur", "Camp désertique de luxe", "Tous les repas", "Guide multilingue"],
      ar: ["سيارة 4x4 خاصة وسائق", "مخيم صحراوي فاخر", "جميع الوجبات", "مرشد متعدد اللغات"],
    },
  },
  {
    slug: "marrakech-essentials",
    image: marrakech,
    days: 3,
    price: 3200,
    title: { en: "Marrakech Essentials", fr: "L'Essentiel de Marrakech", ar: "جوهر مراكش" },
    location: { en: "Marrakech", fr: "Marrakech", ar: "مراكش" },
    overview: {
      en: "Souks, palaces, gardens. Discover the Red City with a private guide and stay in a hand-picked riad.",
      fr: "Souks, palais, jardins. Découvrez la Ville Rouge avec un guide privé et un riad sélectionné.",
      ar: "أسواق، قصور، حدائق. اكتشف المدينة الحمراء مع مرشد خاص وإقامة في رياض مختار.",
    },
    itinerary: {
      en: ["Medina & Jemaa el-Fnaa", "Bahia Palace & Majorelle Garden", "Atlas foothills day trip"],
      fr: ["Médina & Jemaa el-Fna", "Palais Bahia & Jardin Majorelle", "Excursion contreforts de l'Atlas"],
      ar: ["المدينة وساحة جامع الفنا", "قصر الباهية وحديقة ماجوريل", "رحلة سفوح الأطلس"],
    },
    included: { en: ["Riad stay", "Private guide", "Breakfast"], fr: ["Riad", "Guide privé", "Petit-déjeuner"], ar: ["إقامة في رياض", "مرشد خاص", "إفطار"] },
  },
  {
    slug: "atlas-trek",
    image: atlas,
    days: 5,
    price: 7800,
    title: { en: "High Atlas Trek", fr: "Trek du Haut Atlas", ar: "ترحال الأطلس الكبير" },
    location: { en: "Imlil & Toubkal", fr: "Imlil & Toubkal", ar: "إمليل وتوبقال" },
    overview: {
      en: "Hike through Berber villages to the foot of Mount Toubkal. Stays in mountain lodges and home-cooked tagines.",
      fr: "Randonnée à travers les villages berbères jusqu'au pied du Toubkal. Lodges de montagne et tajines maison.",
      ar: "تنزه عبر القرى البربرية إلى سفح جبل توبقال. إقامة في نزل جبلية وأكلات تقليدية.",
    },
    itinerary: { en: ["Imlil arrival", "Aroumd village trek", "Refuge climb", "Toubkal viewpoint", "Return"], fr: ["Arrivée Imlil", "Trek Aroumd", "Refuge", "Belvédère Toubkal", "Retour"], ar: ["الوصول إلى إمليل", "ترحال أرومد", "ملجأ الجبل", "إطلالة توبقال", "العودة"] },
    included: { en: ["Mountain lodges", "Berber guide", "All meals", "Mules for luggage"], fr: ["Lodges", "Guide berbère", "Repas", "Mules"], ar: ["نزل جبلية", "مرشد بربري", "وجبات", "بغال للأمتعة"] },
  },
  {
    slug: "chefchaouen-blue",
    image: chefchaouen,
    days: 2,
    price: 2400,
    title: { en: "The Blue City", fr: "La Ville Bleue", ar: "المدينة الزرقاء" },
    location: { en: "Chefchaouen", fr: "Chefchaouen", ar: "شفشاون" },
    overview: { en: "Wander indigo alleys, photograph the Spanish mosque at sunset, and meet local artisans.", fr: "Flânez dans les ruelles indigo, photographiez la mosquée espagnole, rencontrez les artisans.", ar: "تجول في الأزقة النيلية وصور المسجد الإسباني والتقِ الحرفيين المحليين." },
    itinerary: { en: ["Medina walking tour", "Spanish mosque hike & artisans"], fr: ["Visite de la médina", "Mosquée espagnole & artisans"], ar: ["جولة المدينة", "المسجد الإسباني والحرفيون"] },
    included: { en: ["Boutique riad", "Photographer-guide"], fr: ["Riad boutique", "Guide-photographe"], ar: ["رياض بوتيك", "مرشد-مصور"] },
  },
  {
    slug: "essaouira-coast",
    image: essaouira,
    days: 3,
    price: 3800,
    title: { en: "Essaouira Atlantic Escape", fr: "Évasion Atlantique à Essaouira", ar: "هروب أطلسي إلى الصويرة" },
    location: { en: "Essaouira", fr: "Essaouira", ar: "الصويرة" },
    overview: { en: "Windswept ramparts, fresh seafood, blue fishing boats and argan cooperatives.", fr: "Remparts venteux, fruits de mer frais, barques bleues et coopératives d'argan.", ar: "أسوار تعصف بها الرياح، مأكولات بحرية طازجة، قوارب صيد زرقاء وتعاونيات الأركان." },
    itinerary: { en: ["Marrakech → Essaouira via argan trees", "Medina, port & beach", "Surf or horseback ride"], fr: ["Marrakech → Essaouira", "Médina, port & plage", "Surf ou cheval"], ar: ["مراكش → الصويرة", "المدينة والميناء والشاطئ", "ركوب الأمواج أو الخيل"] },
    included: { en: ["Seafront riad", "Transfers", "Welcome dinner"], fr: ["Riad bord de mer", "Transferts", "Dîner"], ar: ["رياض على الواجهة البحرية", "النقل", "عشاء ترحيبي"] },
  },
  {
    slug: "fes-imperial",
    image: fes,
    days: 3,
    price: 3600,
    title: { en: "Fes Imperial Heritage", fr: "Patrimoine Impérial de Fès", ar: "تراث فاس الإمبراطوري" },
    location: { en: "Fes el-Bali", fr: "Fès el-Bali", ar: "فاس البالي" },
    overview: { en: "Lose yourself in the world's largest car-free medina. Tanneries, madrasas and rooftop sunsets.", fr: "Perdez-vous dans la plus grande médina piétonne du monde. Tanneries, médersas et couchers de soleil.", ar: "اضِع نفسك في أكبر مدينة قديمة بدون سيارات. مدابغ ومدارس وغروب الشمس من الأسطح." },
    itinerary: { en: ["Old Medina deep dive", "Tanneries & ceramics", "Volubilis & Meknes day trip"], fr: ["Plongée médina", "Tanneries & céramiques", "Volubilis & Meknès"], ar: ["استكشاف المدينة القديمة", "المدابغ والخزف", "وليلي ومكناس"] },
    included: { en: ["Heritage riad", "Master guide", "Breakfast & one dinner"], fr: ["Riad patrimoine", "Guide expert", "Petit-déjeuner & dîner"], ar: ["رياض تراثي", "مرشد خبير", "إفطار وعشاء"] },
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
