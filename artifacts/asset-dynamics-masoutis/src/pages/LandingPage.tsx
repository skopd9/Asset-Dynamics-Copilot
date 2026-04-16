import React from "react";
import { motion } from "framer-motion";
import { ArrowRightLeft, Bell, BrainCircuit, Building2, ChevronRight, ShieldCheck, LineChart, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

import thessalonikiImg from "../assets/images/thessaloniki.png";
import supermarketImg from "../assets/images/supermarket.png";
import videoPosterImg from "../assets/images/hero-video-poster.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">
              Recognyte <span className="text-muted-foreground font-normal">|</span> Asset Dynamics
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#why-now" className="hover:text-primary transition-colors">
              Why Now
            </a>
            <a href="#platform" className="hover:text-primary transition-colors">
              What You Get
            </a>
            <a href="#implementation" className="hover:text-primary transition-colors">
              Implementation
            </a>
            <a href="#proof" className="hover:text-primary transition-colors">
              Proof
            </a>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 md:pt-44 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={thessalonikiImg} alt="Greece Aerial" className="w-full h-full object-cover opacity-20 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent" />
              Prepared for Diamantis Masoutis S.A.
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-foreground">
              Run 1,256 stores with one real estate command center.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Asset Dynamics helps Masoutis unify the Kritikos portfolio, automate CPI indexation, and keep SAP financial reporting aligned. The result is stronger governance, faster decision-making, and lower operational risk across the full national network.
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
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{item.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Where portfolio value is lost today</h2>
              <p className="text-muted-foreground mb-6">
                Following the Kritikos acquisition, three execution gaps can erode margin quickly if they are managed through fragmented files and manual controls.
              </p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Integration leakage:</span> critical terms across 800+ incoming leases are not standardized fast enough, increasing renewal and break-clause risk.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Unverified rent escalations:</span> blind acceptance of landlord CPI calculations or sudden retroactive rent hikes across 1,200+ locations directly pressure EBITDA.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-destructive font-bold">•</span>
                  <span>
                    <span className="font-semibold text-foreground">Governance leakage:</span> misalignment between lease operations and SAP S/4HANA reporting creates avoidable audit and compliance friction.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src={supermarketImg} alt="Masoutis Supermarket" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-background/95 backdrop-blur rounded-xl p-4 border border-border/50">
                <div className="text-sm font-semibold">One governed system for lease, financial, and compliance workflows.</div>
                <div className="text-sm text-muted-foreground">Designed to protect margin and decision speed at national scale.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-accent rounded-full blur-[128px] opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">What Masoutis gets on day one</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <BrainCircuit className="w-5 h-5 text-accent" />,
                    title: "AI Lease Copilot",
                    desc: "Ask any lease question and get instant answers across the full portfolio.",
                  },
                  {
                    icon: <Bell className="w-5 h-5 text-accent" />,
                    title: "Proactive Alerts",
                    desc: "Automated notifications for expirations, break clauses, insurance, and rent changes.",
                  },
                  {
                    icon: <ArrowRightLeft className="w-5 h-5 text-accent" />,
                    title: "SAP + IFRS 16 Ready",
                    desc: "Real-time sync with SAP S/4HANA for clean reporting and audit confidence.",
                  },
                  {
                    icon: <LineChart className="w-5 h-5 text-accent" />,
                    title: "Capex & Opex Benchmarking",
                    desc: "Track renovation milestones and compare energy/maintenance costs per m² across formats.",
                  },
                  {
                    icon: <Globe className="w-5 h-5 text-accent" />,
                    title: "Predictive Market Intelligence",
                    desc: "Optimize Attica expansion and forecast yields (in partnership with REDataset).",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-accent/20 p-1.5 rounded-full">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-primary-foreground/75">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl blur-2xl" />
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80" alt="Asset Dynamics Dashboard" className="relative rounded-2xl shadow-2xl border border-white/10" />
            </div>
          </div>
        </div>
      </section>

      <section id="implementation" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-5">How implementation works</h2>
            <p className="text-lg text-muted-foreground">
              Asset Dynamics is delivered as Software with a Service. Our team supports data preparation, onboarding, and governance setup so Masoutis can move from legacy records to live portfolio intelligence without disruption.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                step: "01",
                title: "Portfolio Onboarding",
                desc: "Lease files and contract data from Masoutis and Kritikos are standardized into one verified master dataset.",
              },
              {
                step: "02",
                title: "Financial Governance Setup",
                desc: "SAP synchronization and IFRS 16 reporting controls are configured to match internal finance workflows.",
              },
              {
                step: "03",
                title: "Operational Rollout",
                desc: "Teams receive role-based access, alerting rules, and KPI dashboards to manage the estate at national scale.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-7">
                <div className="text-sm font-semibold text-accent mb-3">Step {item.step}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: <ShieldCheck className="w-6 h-6 text-accent" />,
                  title: "Governance Outcomes",
                  desc: "A single source of truth for leases, automated deadline control, and auditable reporting for finance and board oversight.",
                },
                {
                  icon: <ArrowRightLeft className="w-6 h-6 text-accent" />,
                  title: "Operational Outcomes",
                  desc: "Faster renewals, fewer missed rent adjustments, and improved visibility into Opex and Capex across all store formats.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-lg">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Proven in Greece. Ready for Masoutis.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Built by Recognyte, the technology arm of Resolute Asset Management.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "€1.5B+", label: "Assets managed in Greece" },
              { stat: "30 min", label: "To onboard a new asset" },
              { stat: "5–50%", label: "Potential cost reduction" },
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                <div className="text-4xl font-bold text-accent mb-2">{item.stat}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-6">
            Schedule a strategic demonstration
            <br />
            for the Masoutis portfolio.
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            In a 30-minute session, we will map the Masoutis and Kritikos portfolio structure in Asset Dynamics and outline a practical rollout path for your real estate and finance teams.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-16 px-10 text-xl rounded-full">
            Request 30-Minute Demonstration
            <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-lg font-serif font-bold">Recognyte</span>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Recognyte (A subsidiary of Resolute Asset Management). All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
