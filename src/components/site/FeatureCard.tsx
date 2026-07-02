import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export function FeatureCard({
  icon: Icon,
  title,
  desc,
  index = 0,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-xl"
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-sky/40 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <div className="mb-4 inline-grid h-12 w-12 place-items-center rounded-xl gradient-hero text-white glow-ring">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
  );
}
