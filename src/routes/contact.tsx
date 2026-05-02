import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { Mail, Phone, MapPin, Check, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Atlas Voyages Morocco" },
      { name: "description", content: "Plan your custom Morocco journey. Our local team replies within 24 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-primary-glow mb-3">{t("nav.contact")}</div>
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-4 leading-tight">{t("contact.title")}</h1>
          <p className="text-muted-foreground text-lg mb-10">{t("contact.subtitle")}</p>
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Marrakech, Morocco" },
              { icon: Phone, label: "+212 5 24 00 00 00" },
              { icon: Mail, label: "hello@atlasvoyages.ma" },
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary">
                  <c.icon className="w-5 h-5" />
                </div>
                <span className="text-foreground">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-elegant p-8">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary text-white flex items-center justify-center mb-5">
                <Check className="w-8 h-8" />
              </div>
              <p className="font-serif text-2xl">{t("contact.success")}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: "name", label: t("contact.name"), type: "text" },
                { name: "email", label: t("contact.email"), type: "email" },
                { name: "phone", label: t("contact.phone"), type: "tel" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</span>
                  <input type={f.type} required={f.name !== "phone"} className="w-full mt-1.5 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
              ))}
              <label className="block">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{t("contact.message")}</span>
                <textarea required rows={5} className="w-full mt-1.5 px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
              </label>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold hover:bg-primary-glow transition-colors flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                {t("cta.send")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
