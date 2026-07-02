import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Bot, MessageSquare, Zap, BarChart3, Users, Workflow as WorkflowIcon, ArrowRight,
  Sparkles, PlayCircle, Building2, ShieldCheck, Star, Plus, Minus,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { FeatureCard } from "@/components/site/FeatureCard";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { WhatsAppMockup } from "@/components/site/WhatsAppMockup";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const features = [
  { icon: MessageSquare, title: "AI Customer Support", desc: "24/7 Swahili & English support across channels." },
  { icon: Users, title: "Lead Qualification", desc: "Score & route hot leads to your sales team automatically." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate orders, bookings, follow-ups and reminders." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track conversations, revenue and agent performance." },
  { icon: FaWhatsapp as unknown as typeof Bot, title: "WhatsApp Integration", desc: "Native WhatsApp Business API integration." },
  { icon: ShieldCheck, title: "Secure & Compliant", desc: "Data hosted safely with role-based access controls." },
];

const problems = [
  { t: "Missed customer messages", d: "SMEs lose ~40% of leads from delayed WhatsApp responses." },
  { t: "Manual repetitive workflows", d: "Staff spend hours on FAQs, orders and appointments." },
  { t: "No visibility on performance", d: "Owners lack dashboards to track sales and conversations." },
];

const faqs = [
  { q: "Do I need technical skills to build an agent?", a: "No. Our visual builder lets you upload documents and go live in minutes." },
  { q: "Does it support Swahili and Sheng?", a: "Yes. Zuri AI is trained on Kenyan English, Kiswahili and mixed conversational styles." },
  { q: "How does WhatsApp integration work?", a: "We connect via the official WhatsApp Business API — fully compliant and reliable." },
  { q: "What does it cost?", a: "Plans start free for pilots. Paid tiers scale with conversations and channels used." },
];

function HomePage() {
  return (
    <div>
      <Hero />
      <Stats />
      <Problem />
      <Features />
      <Workflow />
      <WhatsAppSection />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-bg via-white to-brand-sky/40" />
      <div className="absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-brand-cyan/40 blur-3xl animate-blob" />
      <div className="absolute -bottom-32 -right-24 -z-10 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl animate-blob" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cyan/40 bg-white/70 px-3 py-1 text-xs font-semibold text-brand-dark backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            Built for Kenyan SMEs · WhatsApp-first
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl md:text-6xl">
            AI Agents for <span className="gradient-text">SMEs in Kenya</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-foreground/75">
            Empowering SMEs with Intelligent Automation — deploy a smart WhatsApp assistant that
            replies, qualifies leads and closes sales, in minutes.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/builder"
              className="inline-flex items-center gap-2 rounded-full gradient-hero px-6 py-3 text-sm font-semibold text-white glow-ring transition-transform hover:scale-[1.02]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
            <button className="inline-flex items-center gap-2 rounded-full border border-brand-dark/20 bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-sky/40">
              <PlayCircle className="h-4 w-4" /> Watch Demo
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-blue" /> Data-secure</div>
            <div className="flex items-center gap-2"><FaWhatsapp className="h-4 w-4 text-whatsapp" /> WhatsApp Ready</div>
            <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-brand-blue" /> 500+ SMEs</div>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-8 -z-10 rounded-[3rem] gradient-hero opacity-20 blur-2xl" />
            <div className="animate-float">
              <WhatsAppMockup />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -right-2 top-8 hidden rounded-2xl border border-border bg-white/90 p-3 shadow-xl backdrop-blur sm:block"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full gradient-hero text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="text-xs">
                  <div className="font-semibold text-brand-dark">Agent replied</div>
                  <div className="text-muted-foreground">2s response time</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -left-4 bottom-4 hidden rounded-2xl border border-border bg-white/90 p-3 shadow-xl backdrop-blur sm:block"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-brand-cyan" />
                <div className="text-xs">
                  <div className="font-semibold text-brand-dark">+27% conversions</div>
                  <div className="text-muted-foreground">last 30 days</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { v: 500, s: "+", l: "SMEs onboarded" },
    { v: 1200000, s: "+", l: "Conversations handled" },
    { v: 92, s: "%", l: "Query resolution" },
    { v: 3, s: "s", l: "Avg response time" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="text-center">
            <div className="text-3xl font-bold gradient-text sm:text-4xl">
              <AnimatedCounter value={i.v} suffix={i.s} />
            </div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{i.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="The Problem"
        title="Kenyan SMEs are losing customers every day"
        subtitle="Manual replies, missed WhatsApp messages, and zero analytics keep small businesses stuck."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={p.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-sky/60 text-brand-dark font-bold">
              {i + 1}
            </div>
            <h3 className="text-lg font-semibold">{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        eyebrow="Features"
        title="Everything your SME needs to automate"
        subtitle="A complete toolkit to run intelligent customer conversations and workflows."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <FeatureCard key={f.title} icon={f.icon as never} title={f.title} desc={f.desc} index={i} />
        ))}
      </div>
    </section>
  );
}

function Workflow() {
  const steps = [
    "Choose Business", "Upload Documents", "Train AI",
    "Configure Workflow", "Connect WhatsApp", "Deploy Agent",
  ];
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-bg/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="How it works" title="Launch your AI agent in 6 steps" />
        <div className="mt-14 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-2xl border border-border bg-card p-5 text-center shadow-sm"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full gradient-hero text-lg font-bold text-white">
                {i + 1}
              </div>
              <div className="mt-3 text-sm font-semibold">{s}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-whatsapp/15 px-3 py-1 text-xs font-semibold text-whatsapp-dark">
            <FaWhatsapp /> WhatsApp Ready
          </div>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Talk to customers where they already are
          </h2>
          <p className="mt-4 text-muted-foreground">
            Your Zuri AI agent chats in fluent English & Kiswahili, sends product catalogs,
            takes M-Pesa orders and books appointments — 24/7.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Instant replies in <3 seconds", "Human handover when needed", "Order & payment automation", "Multi-agent routing"].map((x) => (
              <li key={x} className="flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-whatsapp text-white text-[10px]">✓</span>
                {x}
              </li>
            ))}
          </ul>
        </div>
        <WhatsAppMockup />
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { name: "Wanjiku M.", role: "Retail, Nairobi", quote: "We doubled online orders in 2 months — customers get replies instantly on WhatsApp." },
    { name: "Kevin O.", role: "Real Estate", quote: "Zuri qualifies leads overnight. My agents wake up to booked viewings." },
    { name: "Amina H.", role: "Restaurant", quote: "Reservations run themselves now. Best decision we made this year." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle eyebrow="Testimonials" title="Loved by growing Kenyan businesses" />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex gap-1 text-brand-cyan">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-3 text-sm text-foreground/80">"{t.quote}"</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full gradient-hero text-sm font-bold text-white">
                {t.name[0]}
              </div>
              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <SectionTitle eyebrow="FAQ" title="Frequently asked questions" />
      <div className="mt-10 space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="rounded-2xl border border-border bg-card">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold">{f.q}</span>
              {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            </button>
            {open === i && (
              <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground">
                {f.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16">
      <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 text-center text-white shadow-2xl md:p-16">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-cyan/40 blur-3xl" />
        <h2 className="relative text-3xl font-bold sm:text-4xl md:text-5xl">
          Ready to give your SME an AI upgrade?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/85">
          Launch your first agent in under 15 minutes. No code required.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/builder" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-sky">
            Build my Agent
          </Link>
          <Link to="/contact" className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
