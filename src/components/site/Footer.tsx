import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="font-bold">Zuri AI</div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Intelligent AI agents built for Small & Medium Enterprises across Kenya —
            automate support, sales, and workflows in minutes.
          </p>
          <div className="mt-5 flex gap-3 text-white/80">
            <a href="#" aria-label="Twitter" className="hover:text-brand-cyan"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-brand-cyan"><FaLinkedin /></a>
            <a href="#" aria-label="GitHub" className="hover:text-brand-cyan"><FaGithub /></a>
            <a href="#" aria-label="WhatsApp" className="hover:text-whatsapp"><FaWhatsapp /></a>
          </div>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold">Product</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/features" className="hover:text-white">Features</Link></li>
            <li><Link to="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link to="/builder" className="hover:text-white">Agent Builder</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold">Company</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/team" className="hover:text-white">Team</Link></li>
            <li><Link to="/documentation" className="hover:text-white">Documentation</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="mb-3 text-sm font-semibold">Contact</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Westlands, Nairobi</li>
            <li>hello@zuriai.co.ke</li>
            <li>+254 700 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Zuri AI. All rights reserved.
      </div>
    </footer>
  );
}
