import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShoppingBag, Hospital, School, Hotel, Home, Landmark,
  Building, ShieldCheck, UtensilsCrossed,
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Zuri AI" },
      { name: "description", content: "Industry-specific AI agents for Kenyan SMEs." },
    ],
  }),
  component: SolutionsPage,
});

const solutions = [
  { icon: ShoppingBag, title: "Retail Shops", desc: "Product catalogs, order-taking and M-Pesa payments over WhatsApp." },
  { icon: Hospital, title: "Hospitals", desc: "Appointment booking, triage FAQs and prescription reminders." },
  { icon: School, title: "Schools", desc: "Parent communication, fee reminders and admissions automation." },
  { icon: Hotel, title: "Hotels", desc: "Reservations, concierge queries and post-stay feedback capture." },
  { icon: Home, title: "Real Estate", desc: "Lead qualification, viewing bookings and property Q&A 24/7." },
  { icon: Landmark, title: "SACCOs", desc: "Member onboarding, loan queries and statement retrieval." },
  { icon: Building, title: "Banks", desc: "Balance queries, card blocking and secure customer support." },
  { icon: ShieldCheck, title: "Insurance", desc: "Quotes, policy renewals and claims tracking on WhatsApp." },
  { icon: UtensilsCrossed, title: "Restaurants", desc: "Reservations, menu delivery and loyalty engagement." },
];

function SolutionsPage() {
  return (
    <PageShell
      title="AI agents tailored to your industry"
      subtitle="Choose your sector and Zuri AI ships with pre-built flows, prompts and integrations to match."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-sky/40 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 inline-grid h-14 w-14 place-items-center rounded-2xl gradient-hero text-white glow-ring">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
