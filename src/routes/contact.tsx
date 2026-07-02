import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Zuri AI" },
      { name: "description", content: "Talk to the Zuri AI team about your SME." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <PageShell
      title="Let's build your AI agent"
      subtitle="Tell us about your SME — we'll get back within 24 hours."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-5"
        >
          <Info icon={Mail} label="Email" value="hello@zuriai.co.ke" />
          <Info icon={Phone} label="Phone" value="+254 700 000 000" />
          <Info icon={MapPin} label="Office" value="Westlands, Nairobi" />

          <div className="rounded-2xl border border-border bg-card p-5">
            <div className="text-sm font-semibold">Follow us</div>
            <div className="mt-3 flex gap-3 text-brand-blue">
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-brand-sky/50 hover:bg-brand-sky"><FaWhatsapp /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-brand-sky/50 hover:bg-brand-sky"><FaTwitter /></a>
              <a href="#" className="grid h-10 w-10 place-items-center rounded-full bg-brand-sky/50 hover:bg-brand-sky"><FaLinkedin /></a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="aspect-video w-full bg-gradient-to-br from-brand-sky/60 via-brand-cyan/40 to-brand-blue/30">
              <div className="grid h-full place-items-center text-sm font-medium text-brand-dark">
                Google Maps placeholder
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-sm"
        >
          {sent ? (
            <div className="grid place-items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-12 w-12 text-brand-blue" />
              <div className="text-xl font-semibold">Message sent!</div>
              <p className="text-sm text-muted-foreground">
                We'll be in touch shortly. Karibu Zuri AI.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Wanjiku" />
                <Field label="Email" name="email" type="email" placeholder="jane@example.com" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Business" name="business" placeholder="Wanjiku Fashions" />
                <Field label="Industry" name="industry" placeholder="Retail" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-semibold text-foreground">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us what you'd like to automate..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-hero px-6 py-3 text-sm font-semibold text-white glow-ring transition-transform hover:scale-[1.01] sm:w-auto"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </PageShell>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
      <div className="grid h-11 w-11 place-items-center rounded-xl gradient-hero text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
      />
    </div>
  );
}
