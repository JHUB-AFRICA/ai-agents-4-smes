import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}
    >
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-cyan/30 bg-brand-sky/30 px-3 py-1 text-xs font-semibold text-brand-dark">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
