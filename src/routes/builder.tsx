import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Building2, FileUp, Brain, Settings2, MessageSquare, Rocket, ArrowRight,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { FaWhatsapp } from "react-icons/fa";

export const Route = createFileRoute("/builder")({
  head: () => ({
    meta: [
      { title: "AI Agent Builder — Zuri AI" },
      { name: "description", content: "Visual workflow to build & deploy your own AI agent in minutes." },
    ],
  }),
  component: BuilderPage,
});

const steps = [
  { icon: Building2, t: "Choose Business", d: "Pick your industry template — retail, hospital, hotel, real estate, etc." },
  { icon: FileUp, t: "Upload Documents", d: "Drop PDFs, catalogs, price lists — we index them instantly." },
  { icon: Brain, t: "Train AI", d: "Zuri trains a private model on your business knowledge." },
  { icon: Settings2, t: "Configure Workflow", d: "Set greetings, handover rules, payment flows & escalation." },
  { icon: FaWhatsapp as unknown as typeof MessageSquare, t: "Connect WhatsApp", d: "Link your WhatsApp Business number in one click." },
  { icon: Rocket, t: "Deploy Agent", d: "Go live 24/7 across WhatsApp, SMS and Web." },
];

function BuilderPage() {
  return (
    <PageShell
      title="Build your AI agent — visually"
      subtitle="No code. No complexity. Follow six steps and your Kenyan SME has its own always-on digital teammate."
    >
      <div className="relative">
        <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-blue via-brand-cyan to-brand-blue/20 md:block" />
        <ol className="space-y-8">
          {steps.map((s, i) => {
            const Icon = s.icon as never as typeof Building2;
            const isEven = i % 2 === 0;
            return (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${isEven ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl gradient-hero text-white glow-ring">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">
                      Step {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full gradient-hero shadow md:block" />
              </motion.li>
            );
          })}
        </ol>
      </div>

      <div className="mt-16 rounded-3xl gradient-hero p-8 text-center text-white shadow-xl md:p-12">
        <h3 className="text-2xl font-bold sm:text-3xl">Ready to launch your agent?</h3>
        <p className="mt-2 text-white/85">The whole flow takes about 15 minutes.</p>
        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-sky">
          Start Building <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </PageShell>
  );
}
