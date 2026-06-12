/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, Sparkles, Flame } from "lucide-react";
import { generateDirectCallLink, generateWhatsAppLink } from "../data";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only when scrolling past hero section (e.g. 300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = "Hi BIG ROOSTER, I am browsing your mobile landing page and want to place a delicious crispy food order! Please provide checkout delivery guidelines.";

  // Render on bottom viewport strictly on screens below md: (mobile viewports)
  if (!isVisible) return null;

  return (
    <div
      id="mobile-sticky-cta"
      className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-stone-950/95 backdrop-blur-md border-t border-rose-900/40 shadow-2xl flex items-center justify-between md:hidden animate-in slide-in-from-bottom duration-300"
    >
      {/* Visual notification badge label */}
      <div className="flex items-center gap-2.5 px-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <div className="text-left leading-none">
          <p className="text-[10px] font-black text-white uppercase tracking-tight flex items-center gap-0.5">
            <span>HUNGRY NOW?</span>
            <span className="animate-bounce">🍗</span>
          </p>
          <p className="text-[8px] font-mono text-emerald-400 font-bold uppercase mt-0.5">FAST HOT PREPARATION</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Telephone direct quick shortcut contact link button */}
        <a
          href={generateDirectCallLink()}
          className="w-11 h-11 bg-stone-900 border border-stone-800 text-red-500 rounded-xl flex items-center justify-center hover:bg-stone-850 active:bg-stone-950"
          aria-label="Direct Call Hotline"
        >
          <Phone className="w-4.5 h-4.5" />
        </a>

        {/* Immediate absolute Order on WhatsApp conversion button */}
        <a
          href={generateWhatsAppLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-xs px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-lg shadow-emerald-950/30 border-b-2 border-emerald-800"
          id="sticky-whats-app-trigger"
        >
          <MessageSquare className="w-4 h-4 fill-white/15" />
          <span>ORDER WHATSAPP NOW</span>
        </a>
      </div>

    </div>
  );
}
