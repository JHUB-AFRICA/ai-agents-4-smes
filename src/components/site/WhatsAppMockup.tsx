import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const messages = [
  { from: "user", text: "Hi! Do you have Samsung A15 in stock?" },
  { from: "bot", text: "Habari 👋 Yes, the A15 128GB is available at KSh 24,500. Would you like delivery today?" },
  { from: "user", text: "Yes please, to Westlands." },
  { from: "bot", text: "Great! I've booked a rider — ETA 45 min. Pay on delivery via M-Pesa till 123456. ✅" },
];

export function WhatsAppMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[300px]">
      <div className="absolute -inset-6 rounded-[3rem] gradient-hero opacity-30 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-brand-dark bg-white shadow-2xl">
        <div
          className="flex items-center gap-2 px-4 py-3 text-white"
          style={{ backgroundColor: "#075E54" }}
        >
          <div className="grid h-8 w-8 place-items-center rounded-full bg-whatsapp text-white">
            <FaWhatsapp />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">Zuri AI Assistant</div>
            <div className="text-[10px] opacity-80">online</div>
          </div>
        </div>
        <div
          className="flex h-[380px] flex-col gap-2 overflow-hidden px-3 py-4"
          style={{ backgroundColor: "#ECE5DD" }}
        >
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.6, duration: 0.35 }}
              className={`max-w-[80%] rounded-2xl px-3 py-2 text-xs shadow-sm ${
                m.from === "bot"
                  ? "self-start rounded-tl-sm bg-white text-gray-800"
                  : "self-end rounded-tr-sm text-gray-800"
              }`}
              style={m.from === "user" ? { backgroundColor: "#DCF8C6" } : undefined}
            >
              {m.text}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
