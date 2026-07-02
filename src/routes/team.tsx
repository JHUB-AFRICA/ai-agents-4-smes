import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Zuri AI" },
      { name: "description", content: "Meet the team building AI agents for Kenyan SMEs." },
    ],
  }),
  component: TeamPage,
});

const team = [
  { name: "Robin Isanda", role: "Founder & CEO" },
  { name: "Edwin Ndumia", role: "CTO & AI Lead" },
  { name: "Lilian Kiprop", role: "Head of Product" },
  { name: "Ann Muchangi", role: "Design Lead" },
  { name: "Nathnael Sherry", role: "ML Engineer" },
  { name: "Erick Mwangi", role: "Growth & Partnerships" },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function TeamPage() {
  return (
    <PageShell
      title="Meet the team"
      subtitle="A passionate group of engineers, designers and operators building AI for African SMEs."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl border border-border bg-card p-8 text-center shadow-sm transition-shadow hover:shadow-xl"
          >
            <div className="relative mx-auto h-28 w-28">
              <div className="absolute inset-0 rounded-full gradient-hero opacity-90 blur-sm transition group-hover:blur-md" />
              <div className="relative grid h-full w-full place-items-center rounded-full gradient-hero text-2xl font-bold text-white glow-ring">
                {initials(t.name)}
              </div>
            </div>
            <div className="mt-5 text-lg font-semibold">{t.name}</div>
            <div className="text-sm text-brand-blue">{t.role}</div>
            <div className="mt-4 flex justify-center gap-3 text-muted-foreground">
              <a href="#" className="hover:text-brand-blue" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" className="hover:text-brand-blue" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" className="hover:text-brand-blue" aria-label="GitHub"><FaGithub /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </PageShell>
  );
}
