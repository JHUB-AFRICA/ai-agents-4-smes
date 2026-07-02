import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 gradient-hero opacity-95" />
        <div className="absolute -bottom-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-brand-cyan/40 blur-3xl animate-blob" />
        <div className="mx-auto max-w-7xl px-6 py-20 text-white sm:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 max-w-2xl text-lg text-white/85"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-6 py-16">{children}</main>
    </div>
  );
}
