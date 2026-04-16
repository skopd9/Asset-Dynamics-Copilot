import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Bell,
  BrainCircuit,
  Building2,
  ChevronRight,
  ShieldCheck,
  LineChart,
  Globe,
  ShieldAlert,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { translations } from "../translations";

import videoPosterImg from "../assets/images/hero-video-poster.png";

type Lang = "en" | "el";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const stagger = (staggerMs = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: staggerMs },
  },
});

const viewportOnce = { once: true, amount: 0.25 as const };

const platformIcons = [
  <BrainCircuit className="w-5 h-5" />,
  <Bell className="w-5 h-5" />,
  <ShieldAlert className="w-5 h-5" />,
  <ArrowRightLeft className="w-5 h-5" />,
  <LineChart className="w-5 h-5" />,
  <MapPin className="w-5 h-5" />,
];

const outcomeIcons = [
  <ShieldCheck className="w-5 h-5 text-accent" />,
  <Globe className="w-5 h-5 text-accent" />,
];

export default function LandingPage() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-sm bg-primary flex items-center justify-center">
              <Building2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-serif font-bold tracking-tight">
              Recognyte <span className="text-muted-foreground font-normal">|</span>{" "}
              Asset Dynamics
            </span>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-foreground transition-colors">{t.nav.whyNow}</a>
            <a href="#solution" className="hover:text-foreground transition-colors">{t.nav.platform}</a>
            <a href="#how" className="hover:text-foreground transition-colors">{t.nav.implementation}</a>
            <a href="#proof" className="hover:text-foreground transition-colors">{t.nav.proof}</a>
            <div className="flex items-center bg-muted/60 p-0.5 rounded-full border border-border/40 ml-2">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${lang === "en" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("el")}
                className={`px-2.5 py-0.5 rounded-full text-xs font-bold transition-all ${lang === "el" ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
              >
                EL
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger(0.12)}>
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent" />
              {t.hero.badge}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.08] mb-6 text-foreground"
            >
              {t.hero.title}
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto"
            >
              {t.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent mb-4">Video overview</p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">See Asset Dynamics in motion</h2>
              <p className="text-muted-foreground text-lg">
                This embedded video introduces the platform’s portfolio control, AI lease intelligence, and reporting workflow in one quick overview.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
              <video controls poster={videoPosterImg} className="w-full aspect-video bg-black">
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section id="why-now" className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1,256+", label: "Points of Sale" },
              { value: "800+", label: "Kritikos Leases to Integrate" },
              { value: "~€2.2B", label: "Pro-Forma Revenue" },
              { value: "Now", label: "Need for SAP-Ready Control" },
            ].map((item, i) => (
              <div key={i} className="text-center">      {/* ── Stats Bar ── */}
      <section className="py-10 bg-card border-y border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={stagger(0.08)}
          className="max-w-4xl mx-auto px-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.stats.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{item.value}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Pain Points ── */}
      <section id="problem" className="py-28 md:py-36">
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-serif font-bold text-center mb-20"
          >
            {t.painPoints.title}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.15)}
            className="space-y-16"
          >
            {t.painPoints.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="text-6xl md:text-7xl font-bold text-destructive/20 font-serif mb-3">
                  {item.number}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Platform ── */}
      <section id="solution" className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-40 -mr-40 w-[500px] h-[500px] bg-accent rounded-full blur-[160px] opacity-15" />
        <div className="max-w-2xl mx-auto px-6 relative z-10">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-serif font-bold text-center mb-16"
          >
            {t.platform.title}
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
            className="space-y-8"
          >
            {t.platform.items.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                <div className="mt-1 shrink-0 bg-accent/20 text-accent p-2 rounded-full">
                  {platformIcons[i]}
                </div>
                <div>
                  <h4 className="font-bold text-lg">{item.title}</h4>
                  <p className="text-primary-foreground/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Implementation ── */}
      <section id="how" className="py-28 md:py-36">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {t.implementation.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg">
              {t.implementation.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.12)}
            className="relative pl-8 border-l-2 border-accent/30 space-y-12 mb-16"
          >
            {t.implementation.steps.map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background" />
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                  {lang === "el" ? "Βήμα" : "Step"} {item.step}
                </div>
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
            className="grid md:grid-cols-2 gap-6"
          >
            {t.implementation.outcomes.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-card border border-border rounded-xl p-6 flex items-start gap-3"
              >
                <div className="bg-accent/10 p-2 rounded-lg shrink-0">{outcomeIcons[i]}</div>
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Proof ── */}
      <section id="proof" className="py-28 md:py-36 bg-muted">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-serif font-bold mb-4">
              {t.proof.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-14">
              {t.proof.subtitle}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
            className="grid md:grid-cols-3 gap-6"
          >
            {t.proof.stats.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-background p-8 rounded-2xl border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{item.stat}</div>
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={stagger(0.1)}
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6"
            >
              {t.cta.title}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-lg text-primary-foreground/75 max-w-xl mx-auto mb-10"
            >
              {t.cta.subtitle}
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-lg rounded-full font-bold"
              >
                {t.cta.button}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-background border-t border-border py-10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-serif font-bold">Recognyte</span>
          </div>
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {t.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
