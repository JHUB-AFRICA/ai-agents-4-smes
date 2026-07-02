import { createFileRoute } from "@tanstack/react-router";
import {
  MessageSquare, Users, Workflow, BarChart3, MessageCircle,
  Smartphone, Globe, CalendarClock, BookOpen,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageShell } from "@/components/site/PageShell";
import { FeatureCard } from "@/components/site/FeatureCard";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Zuri AI" },
      { name: "description", content: "All the AI features Kenyan SMEs need to automate and grow." },
    ],
  }),
  component: FeaturesPage,
});

const features = [
  { icon: MessageSquare, title: "AI Customer Support", desc: "Round-the-clock intelligent assistance in English & Kiswahili." },
  { icon: Users, title: "Lead Qualification", desc: "Score, tag and route the hottest leads to your sales reps." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate orders, bookings, reminders and follow-ups end-to-end." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time KPIs on conversations, revenue and ROI." },
  { icon: FaWhatsapp as unknown as typeof MessageSquare, title: "WhatsApp Integration", desc: "Official WhatsApp Business API — instant deploy." },
  { icon: Smartphone, title: "SMS Integration", desc: "Reach every customer, even without smartphones." },
  { icon: Globe, title: "Web Chat", desc: "Embed an AI chat widget on your site in one line of code." },
  { icon: CalendarClock, title: "Appointment Scheduling", desc: "Book, reschedule and remind customers automatically." },
  { icon: BookOpen, title: "Knowledge Base", desc: "Upload docs, PDFs, catalogs — your agent learns instantly." },
  { icon: MessageCircle, title: "Multi-channel Inbox", desc: "One unified inbox for WhatsApp, SMS, Web & Messenger." },
];

function FeaturesPage() {
  return (
    <PageShell
      title="Every feature your SME needs, in one platform"
      subtitle="Zuri AI combines conversational AI, workflow automation and analytics — purpose-built for Kenyan businesses."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <FeatureCard key={f.title} icon={f.icon as never} title={f.title} desc={f.desc} index={i} />
        ))}
      </div>
    </PageShell>
  );
}
