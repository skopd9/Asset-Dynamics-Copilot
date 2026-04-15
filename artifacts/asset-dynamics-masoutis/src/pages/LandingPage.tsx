import React from "react";
import { motion } from "framer-motion";
import { 
  BrainCircuit, 
  Building2, 
  LineChart, 
  MapPin, 
  Bell, 
  FileText, 
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";

import thessalonikiImg from "../assets/images/thessaloniki.png";
import dashboardImg from "../assets/images/dashboard.png";
import supermarketImg from "../assets/images/supermarket.png";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-serif font-bold tracking-tight">Recognyte <span className="text-muted-foreground font-normal">|</span> Asset Dynamics</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#platform" className="hover:text-primary transition-colors">Platform</a>
            <a href="#intelligence" className="hover:text-primary transition-colors">Intelligence</a>
            <a href="#financials" className="hover:text-primary transition-colors">Financials</a>
            <a href="#local-expertise" className="hover:text-primary transition-colors">Local Expertise</a>
          </div>
          <Button className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6">
            Book Masoutis Demo
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={thessalonikiImg} 
            alt="Thessaloniki Aerial" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              Prepared specifically for Masoutis
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 text-foreground">
              Meet your AI co-pilot for managing <span className="text-accent">70+ retail locations</span> across Greece.
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Asset Dynamics by Recognyte doesn't just store your real estate data. It actively helps you manage every lease, track every cost, and optimize every location—leaving your team free to focus on strategic growth.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-lg rounded-full">
                Explore the Platform
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-border hover:bg-muted">
                View Greek Case Studies
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Challenge Context */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-serif font-bold mb-6">
                The complexity of the modern supermarket estate.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-lg text-muted-foreground mb-6">
                From your headquarters in Thessaloniki to storefronts across Northern and Central Greece, managing a mix of owned and leased commercial properties is administratively heavy.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-4">
                {[
                  "Missed lease renewal deadlines or break clauses",
                  "Disconnected financial forecasting and actuals",
                  "Manual extraction of rent rolls and operational expenses",
                  "Lack of a centralized, visual system of record"
                ].map((item, i) => (
                  <motion.li key={i} variants={fadeIn} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-destructive"></div>
                    </div>
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl"
            >
              <img src={supermarketImg} alt="Modern Greek Supermarket" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/95 backdrop-blur rounded-xl p-6 shadow-lg border border-border/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Property Health</span>
                    <span className="text-sm font-bold text-emerald-600">Optimal</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 1: AI Co-pilot & Intelligence */}
      <section id="intelligence" className="py-24 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Complete Lease Intelligence. <br/><span className="text-muted-foreground">Powered by AI.</span></h2>
            <p className="text-xl text-muted-foreground">
              Asset Dynamics acts as your intelligent partner. It reads, analyzes, and surfaces insights from your lease agreements automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BrainCircuit className="w-8 h-8 text-accent" />,
                title: "AI Abstraction",
                desc: "Automatically extract key dates, clauses, and financial obligations from complex Greek lease documents."
              },
              {
                icon: <Bell className="w-8 h-8 text-accent" />,
                title: "Proactive Alerts",
                desc: "Never miss a deadline. Get automated notifications for renewals, break options, and insurance expirations."
              },
              {
                icon: <FileText className="w-8 h-8 text-accent" />,
                title: "360° Tenancy View",
                desc: "A single source of truth for your entire rent roll across all 70+ assets. Searchable, filterable, instantly accessible."
              }
            ].map((feat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors group"
              >
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="platform" className="py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-32 -mr-32 w-96 h-96 bg-accent rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -mb-32 -ml-32 w-96 h-96 bg-blue-500 rounded-full blur-[128px] opacity-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6 backdrop-blur-md">
                Platform Interface
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Designed for real estate professionals.</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
                Built by property experts, not just developers. The interface cuts through the noise, offering out-of-the-box KPI dashboards, custom Tableau integrations, and visual stacking plans.
              </p>
              <ul className="space-y-6">
                {[
                  { title: "Visualise Your Estate", desc: "Auto-generated 2D stacking plans from rent rolls and easy floor plan uploads." },
                  { title: "Custom Reporting", desc: "Connect your BI tools or use our comprehensive built-in reporting suite." },
                  { title: "Enterprise Security", desc: "Bank-grade security tailored for large-scale corporate operations." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-accent/20 p-1.5 rounded-full">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-primary-foreground/70">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl blur-2xl"></div>
              <img 
                src={dashboardImg} 
                alt="Asset Dynamics Dashboard" 
                className="relative rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature 2: Financial Mastery */}
      <section id="financials" className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-16 overflow-hidden relative">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-muted to-transparent opacity-50 z-0"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Financial Mastery & Integration</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Your real estate data doesn't live in isolation. Asset Dynamics ensures your portfolio performance aligns with corporate financial reality.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <LineChart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">CapEx & OpEx Tracking</h4>
                    <p className="text-sm text-muted-foreground">Monitor actual spending vs. baseline forecasts.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-background p-4 rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">SAP & ERP Integration</h4>
                    <p className="text-sm text-muted-foreground">Seamless two-way sync with enterprise accounting systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Track Record & Proof */}
      <section id="local-expertise" className="py-24 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Built by Resolute. <br/>Proven in Greece.</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
            Recognyte is a technology spin-out of Resolute Asset Management. We combine deep software expertise with decades of on-the-ground real estate experience in the Greek market.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "Pan-European", label: "Presence" },
              { stat: "#1", label: "Largest Market is Greece" },
              { stat: "100+", label: "Real Estate Experts" },
              { stat: "Enterprise", label: "Grade Security" }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-sm">
                <div className="text-4xl font-bold text-accent mb-2">{item.stat}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0"></div>
        <div className="absolute inset-0 opacity-10 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary-foreground mb-8">Ready to empower your <br/>asset management team?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Let us show you exactly how Asset Dynamics can streamline the management of Masoutis's 70+ locations.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-16 px-10 text-xl rounded-full">
            Schedule a Custom Demo
            <ChevronRight className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-lg font-serif font-bold">Recognyte</span>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Recognyte (A subsidiary of Resolute Asset Management). All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
