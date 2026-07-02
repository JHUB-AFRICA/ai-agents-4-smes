import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from "recharts";
import { MessageSquare, Users, DollarSign, Clock, TrendingUp } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard Preview — Zuri AI" },
      { name: "description", content: "See how the Zuri AI dashboard visualizes conversations, revenue and ROI." },
    ],
  }),
  component: DashboardPage,
});

const lineData = [
  { d: "Mon", conv: 120, rev: 32000 },
  { d: "Tue", conv: 180, rev: 41000 },
  { d: "Wed", conv: 160, rev: 38000 },
  { d: "Thu", conv: 240, rev: 55000 },
  { d: "Fri", conv: 320, rev: 78000 },
  { d: "Sat", conv: 410, rev: 96000 },
  { d: "Sun", conv: 280, rev: 62000 },
];

const barData = [
  { name: "WhatsApp", value: 640 },
  { name: "Web", value: 210 },
  { name: "SMS", value: 150 },
  { name: "Messenger", value: 90 },
];

const pieData = [
  { name: "Resolved by AI", value: 68 },
  { name: "Escalated", value: 22 },
  { name: "Pending", value: 10 },
];
const COLORS = ["#0077B6", "#00B4D8", "#90E0EF"];

const conversations = [
  { name: "Wanjiku", msg: "Do you have the black variant?", ago: "2m", status: "AI" },
  { name: "Kevin", msg: "Can I schedule a viewing tomorrow?", ago: "6m", status: "AI" },
  { name: "Amina", msg: "My order hasn't arrived yet.", ago: "12m", status: "Human" },
  { name: "Brian", msg: "What are your opening hours?", ago: "18m", status: "AI" },
  { name: "Grace", msg: "I want to renew my insurance.", ago: "24m", status: "AI" },
];

function DashboardPage() {
  return (
    <PageShell
      title="Dashboard Preview"
      subtitle="Everything you need to run and grow your AI-powered SME — in one command center."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Kpi icon={MessageSquare} label="Conversations" value={1720} suffix="" />
        <Kpi icon={Users} label="New Leads" value={342} suffix="" />
        <Kpi icon={DollarSign} label="Revenue (KSh)" value={402000} suffix="" />
        <Kpi icon={Clock} label="Avg Response" value={3} suffix="s" />
        <Kpi icon={TrendingUp} label="ROI" value={412} suffix="%" />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <ChartCard className="lg:col-span-2" title="Conversations & Revenue">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="d" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="conv" stroke="#0077B6" strokeWidth={2.5} dot={{ r: 3 }} name="Conversations" />
              <Line type="monotone" dataKey="rev" stroke="#00B4D8" strokeWidth={2.5} dot={{ r: 3 }} name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Resolution split">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie data={pieData} innerRadius={55} outerRadius={95} dataKey="value" paddingAngle={4}>
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Channel usage" className="lg:col-span-2">
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0077B6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard title="Recent conversations">
          <ul className="divide-y divide-border">
            {conversations.map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-3 py-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full gradient-hero text-sm font-bold text-white">
                    {c.name[0]}
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{c.name}</div>
                    <div className="truncate text-xs text-muted-foreground">{c.msg}</div>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[10px] text-muted-foreground">{c.ago}</div>
                  <span
                    className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      c.status === "AI" ? "bg-brand-sky/60 text-brand-dark" : "bg-whatsapp/20 text-whatsapp-dark"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </ChartCard>
      </div>
    </PageShell>
  );
}

function Kpi({ icon: Icon, label, value, suffix }: { icon: typeof MessageSquare; label: string; value: number; suffix: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border bg-card p-5 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-sky/60 text-brand-dark">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-3 text-2xl font-bold gradient-text">
        <AnimatedCounter value={value} suffix={suffix} />
      </div>
    </motion.div>
  );
}

function ChartCard({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-5 shadow-sm ${className}`}>
      <div className="mb-4 text-sm font-semibold">{title}</div>
      {children}
    </div>
  );
}
