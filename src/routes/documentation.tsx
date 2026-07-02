import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import {
  SiFastapi, SiPostgresql, SiDocker,
  SiGithub, SiSocketdotio,
} from "react-icons/si";
import { FaWhatsapp, FaRobot, FaPhone } from "react-icons/fa";
import { Plug } from "lucide-react";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Documentation — Zuri AI" },
      { name: "description", content: "Architecture, APIs, deployment and onboarding docs." },
    ],
  }),
  component: DocsPage,
});

const docs = [
  { t: "Architecture Diagram", d: "System components, data flow and services." },
  { t: "Workflow Diagram", d: "End-to-end agent workflows and hand-offs." },
  { t: "ER Diagram", d: "Data model for users, agents, conversations & analytics." },
  { t: "Deployment Diagram", d: "Docker + Nginx + FastAPI + PostgreSQL topology." },
  { t: "API Documentation", d: "REST endpoints, WebSocket events and auth." },
  { t: "Configuration Manual", d: "Environment variables, channels and secrets." },
  { t: "Onboarding Guide", d: "Step-by-step SME onboarding checklist." },
  { t: "ROI Report", d: "How to measure ROI of your AI agent deployment." },
];

const integrations = [
  { Icon: FaWhatsapp, name: "WhatsApp" },
  { Icon: SiOpenai, name: "OpenAI" },
  { Icon: SiFastapi, name: "FastAPI" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiTwilio, name: "Twilio" },
  { Icon: SiDocker, name: "Docker" },
  { Icon: SiGithub, name: "GitHub" },
  { Icon: Plug, name: "REST API" },
  { Icon: SiSocketdotio, name: "WebSockets" },
];

function DocsPage() {
  return (
    <PageShell
      title="Documentation"
      subtitle="Everything engineers, product managers and operators need to run Zuri AI in production."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d, i) => (
          <motion.a
            key={d.t}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ y: -4 }}
            className="group block rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl"
          >
            <div className="text-xs font-bold uppercase tracking-wider text-brand-blue">Docs</div>
            <div className="mt-2 text-lg font-semibold">{d.t}</div>
            <p className="mt-2 text-sm text-muted-foreground">{d.d}</p>
            <div className="mt-4 text-sm font-medium text-brand-blue group-hover:underline">
              Read →
            </div>
          </motion.a>
        ))}
      </div>

      <section className="mt-20">
        <h2 className="text-2xl font-bold sm:text-3xl">Integrations</h2>
        <p className="mt-2 text-muted-foreground">Zuri AI plays nicely with the tools you already use.</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {integrations.map(({ Icon, name }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="flex w-24 flex-col items-center gap-2 text-brand-dark"
              >
                <Icon className="h-10 w-10" />
                <div className="text-xs font-medium text-muted-foreground">{name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
