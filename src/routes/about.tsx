import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Target, Eye, Rocket, Lightbulb, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Zuri AI" },
      { name: "description", content: "Our mission to empower Kenyan SMEs with intelligent automation." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2023", t: "Problem discovery", d: "Interviewed 200+ Kenyan SMEs about customer response gaps." },
  { y: "2024", t: "First pilot", d: "Launched WhatsApp AI agents with retail & real estate partners." },
  { y: "2025", t: "Scaling nationwide", d: "500+ SMEs onboarded across 9 industries." },
  { y: "2026", t: "Regional expansion", d: "Rolling out to East Africa with multilingual agents." },
];

function AboutPage() {
  return (
    <PageShell
      title="Empowering Kenyan SMEs to grow with AI"
      subtitle="We build practical, WhatsApp-first AI agents that solve real business problems — from customer support to lead qualification."
    >
      <section className="grid gap-8 md:grid-cols-2">
        <Card icon={Lightbulb} title="The Problem">
          Kenyan SMEs lose customers daily to slow responses, manual workflows, and lack of after-hours support.
          Existing tools are expensive, complex, and not built for local languages or M-Pesa-first customers.
        </Card>
        <Card icon={Rocket} title="Our Solution">
          Zuri AI is an all-in-one platform where any SME owner can spin up an AI agent trained on their business,
          deploy it on WhatsApp / SMS / Web, and start converting conversations into revenue.
        </Card>
        <Card icon={Target} title="Mission">
          To make world-class AI automation accessible to every Small & Medium Enterprise in Kenya.
        </Card>
        <Card icon={Eye} title="Vision">
          A future where every Kenyan business — from mama mboga to mid-cap — has an intelligent digital teammate.
        </Card>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Objectives" title="What we're building toward" />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "Reduce SME response times from hours to seconds",
            "Automate 70% of repetitive support tickets",
            "Increase lead conversions by 30% or more",
            "Enable full Kiswahili & English AI conversations",
            "Offer affordable AI plans starting from KSh 0",
            "Build a rich Kenyan business knowledge base",
          ].map((x, i) => (
            <motion.div
              key={x}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-blue" />
              <span className="text-sm">{x}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle eyebrow="Our journey" title="From idea to nationwide impact" />
        <ol className="relative mt-12 border-l-2 border-brand-cyan/40 pl-6">
          {timeline.map((e, i) => (
            <motion.li
              key={e.y}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="mb-8"
            >
              <span className="absolute -left-[9px] mt-1 grid h-4 w-4 place-items-center rounded-full gradient-hero" />
              <div className="text-xs font-bold text-brand-blue">{e.y}</div>
              <div className="text-lg font-semibold">{e.t}</div>
              <p className="text-sm text-muted-foreground">{e.d}</p>
            </motion.li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}

function Card({ icon: Icon, title, children }: { icon: typeof Target; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl gradient-hero text-white">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}
