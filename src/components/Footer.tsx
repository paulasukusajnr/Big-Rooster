/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Phone, MapPin, Clock, MessageSquare, Facebook, Instagram, ShieldCheck, Mail, ArrowUp } from "lucide-react";
import { BRAND_CONFIG, generateDirectCallLink, generateWhatsAppLink } from "../data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-stone-950 text-stone-300 border-t border-stone-900 pt-16 pb-28">
      
      {/* Decorative radial lighting */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-red-800/5 blur-[90px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Top visual grid: Brand intro and quick locations details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-stone-900">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-6 text-center md:text-left">
            <a href="#hero" className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="relative w-10.5 h-10.5 bg-gradient-to-br from-red-650 to-red-750 rounded-full flex items-center justify-center border border-yellow-400">
                <span className="text-xl">🍗</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tighter text-white block leading-none">
                  BIG <span className="text-yellow-400">ROOSTER</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-red-500 block">
                  Fresh Rooster Meals • Takeaway • Catering
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-normal">
              Serving the gold-standard crispy, juicy rooster meals Papua New Guinea loves since operations started. Pre-order via WhatsApp for skipped-queue, stress-free takeaway collection!
            </p>

            {/* Social Media Anchors */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href={BRAND_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-stone-900 border border-stone-850 hover:border-yellow-400 hover:text-white rounded-full flex items-center justify-center transition-all text-stone-400"
                aria-label="Follow Big Rooster on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={BRAND_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-stone-900 border border-stone-850 hover:border-yellow-400 hover:text-white rounded-full flex items-center justify-center transition-all text-stone-400"
                aria-label="Follow Big Rooster on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Locations grid details */}
          <div className="md:col-span-8 space-y-6">
            <h4 className="text-sm font-black font-mono uppercase tracking-widest text-white text-center md:text-left">
              ⭐ OUR PAPUA NEW GUINEA OUTLETS &amp; HUSTLE HOURS
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {BRAND_CONFIG.locations.map((loc, idx) => (
                <div
                  key={idx}
                  className="bg-stone-900/40 border border-stone-850 p-4 rounded-2xl space-y-3.5 hover:border-red-900/35 transition-colors"
                >
                  <p className="text-white text-xs font-black tracking-tight flex items-center gap-1.5 uppercase">
                    <span className="text-lg">📍</span>
                    <span>{loc.name}</span>
                  </p>
                  
                  <div className="space-y-1.5 text-[11px] text-stone-400 font-medium">
                    <p className="flex items-start gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{loc.address}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                      <span>{loc.hours}</span>
                    </p>
                    <p className="flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <a href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`} className="hover:text-yellow-400 transition-colors">
                        {loc.phone}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom instruction labels to show clients how to customize */}
            <div className="text-[10px] text-stone-550 italic bg-stone-950/40 p-3 rounded-xl border border-stone-900 text-center md:text-left">
              💡 *Developer Note/Client Notice: To update physical addresses, pricing, telephone values, or WhatsApp digits, edit the global configuration inside `/src/data.ts`.
            </div>

          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          
          <div className="text-center sm:text-left">
            <p className="text-stone-500 font-medium">
              &copy; {new Date().getFullYear()} BIG ROOSTER Inc. All Rights Reserved.
            </p>
            <p className="text-[10px] text-stone-600 font-mono mt-1">
              Fresh Rooster Meals • Premium Fried Crispy Chicken Portions • Catering Solutions PNG
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px] text-stone-500">
            <a href="#menu" className="hover:text-yellow-400 transition-colors">Order Takeaway</a>
            <a href="#catering" className="hover:text-yellow-400 transition-colors">Catering</a>
            <a href="#faq" className="hover:text-yellow-400 transition-colors">FAQS</a>
            <button
              onClick={scrollToTop}
              className="bg-stone-900 text-stone-400 hover:text-white border border-stone-850 py-1.5 px-3 rounded-xl flex items-center gap-1 transition-colors"
              aria-label="Scroll to top"
            >
              <span>To Top</span>
              <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
