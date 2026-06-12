/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, ArrowRight, ShieldCheck, Flame, Zap, Award, Sparkles, ChefHat } from "lucide-react";
import { BRAND_CONFIG, generateWhatsAppLink } from "../data";

export default function Hero() {
  const whatsappMsg = "Hi BIG ROOSTER! I've visited your landing page and I'm ready to order some fresh, crispy chicken meals right now! Please send me the latest specials.";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-stone-950 overflow-hidden"
    >
      {/* Decorative fiery light beams/effects in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-700/10 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full bg-yellow-600/5 blur-[100px] pointer-events-none"></div>

      {/* Extreme subtle diagonal grid stripes for fast-food textured background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #ff0000 1px, transparent 1px)`,
          backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Local Badge */}
            <div className="inline-flex items-center gap-2 bg-yellow-400 border-2 border-stone-900 px-4 py-2 mb-6 text-xs font-black tracking-widest uppercase text-stone-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE CRUNCH PAPUA NEW GUINEA LOVES!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white leading-[1.05] mb-6 uppercase font-display">
              Big Taste.<br />
              Big Crunch.<br />
              <span className="text-yellow-400 relative inline-block">
                BIG ROOSTER.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-stone-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Fresh, crispy rooster meals made hot, tasty, and satisfying for lunch, dinner, family packs, and events. Feel the local heat and standard-shattering golden portions!
            </p>

            {/* Actions / CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href={generateWhatsAppLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-stone-950 font-black text-sm tracking-widest px-8 py-4 rounded-lg shadow-[4px_4px_0px_0px_#000000] border-2 border-stone-950 transition-all duration-150 flex items-center justify-center gap-2.5 group uppercase"
              >
                <MessageSquare className="w-5 h-5 fill-stone-950" />
                <span>ORDER ON WHATSAPP</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#menu"
                className="w-full sm:w-auto bg-white hover:bg-stone-100 text-stone-950 font-black text-sm tracking-widest px-8 py-4 rounded-lg border-2 border-stone-950 shadow-[4px_4px_0px_0px_#000000] transition-all duration-150 text-center uppercase"
              >
                View Hot Menu
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t-2 border-stone-900">
              <p className="text-xs font-mono uppercase text-yellow-400 tracking-wider text-center lg:text-left mb-4 font-black">
                ⭐ THE BIG ROOSTER GUARANTEE
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {/* Badge 1 */}
                <div className="bg-red-600 border-2 border-stone-950 rounded-lg p-3 flex items-center gap-2.5 shadow-[3px_3px_0px_0px_#000000] hover:translate-y-[-2px] transition-transform">
                  <div className="bg-stone-950 text-white p-1.5 rounded flex-shrink-0">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs font-black uppercase leading-tight">Freshly Prepared</p>
                    <p className="text-[10px] text-red-100 font-mono">Hot out the oil</p>
                  </div>
                </div>

                {/* Badge 2 */}
                <div className="bg-yellow-400 border-2 border-stone-950 rounded-lg p-3 flex items-center gap-2.5 shadow-[3px_3px_0px_0px_#000000] hover:translate-y-[-2px] transition-transform">
                  <div className="bg-stone-950 text-white p-1.5 rounded flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-stone-950 text-xs font-black uppercase leading-tight">Big Portions</p>
                    <p className="text-[10px] text-stone-800 font-mono">Max satisfaction</p>
                  </div>
                </div>

                {/* Badge 3 */}
                <div className="bg-white border-2 border-stone-950 rounded-lg p-3 flex items-center gap-2.5 shadow-[3px_3px_0px_0px_#000000] hover:translate-y-[-2px] transition-transform">
                  <div className="bg-stone-950 text-white p-1.5 rounded flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-stone-950 text-xs font-black uppercase leading-tight">Fast Takeaway</p>
                    <p className="text-[10px] text-stone-700 font-mono">Skip the queues</p>
                  </div>
                </div>

                {/* Badge 4 */}
                <div className="bg-red-650 border-2 border-stone-950 rounded-lg p-3 flex items-center gap-2.5 shadow-[3px_3px_0px_0px_#000000] hover:translate-y-[-2px] transition-transform">
                  <div className="bg-stone-950 text-white p-1.5 rounded flex-shrink-0">
                    <ChefHat className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-white text-xs font-black uppercase leading-tight">Catering Ready</p>
                    <p className="text-[10px] text-red-100 font-mono">For any size crowd</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Hero Right: Highly Aesthetic Fast food mockup graphic */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            
            {/* Behind graphic ambient red fire background radial circle */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-red-600/30 blur-[60px] pointer-events-none z-0"></div>

            <div className="relative z-10 w-full max-w-[420px] aspect-square rounded-xl bg-stone-900 border-4 border-stone-950 p-6 shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] flex flex-col justify-between overflow-hidden group hover:scale-[1.01] transition-all duration-300">
              
              {/* Top graphic header */}
              <div className="flex justify-between items-start z-10 mb-4">
                <span className="bg-yellow-400 text-stone-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-yellow border-2 border-stone-950 shadow-[2px_2px_0px_0px_#000000]">
                  🍗 CRUNCH PACKAGE
                </span>
                <span className="text-stone-300 font-mono font-bold text-[8px] tracking-wider bg-stone-950 border border-stone-800 rounded px-2.5 py-1">
                  PNG ROOSTER
                </span>
              </div>

              {/* Central high food aesthetic vector placeholder layout */}
              <div className="relative py-4 flex flex-col items-center justify-center text-center">
                
                {/* Styled Fast Food graphic element */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center">
                  
                  {/* Sizzling particles */}
                  <div className="absolute top-2 left-6 w-2 h-2 rounded-full bg-yellow-400 animate-ping opacity-65"></div>
                  <div className="absolute bottom-6 right-8 w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  
                  {/* Radial golden rings representing crunch waves */}
                  <div className="absolute inset-0 rounded-full border-4 border-double border-red-500/20 group-hover:rotate-12 transition-transform duration-1000"></div>

                  {/* Ultimate Tasty Fast Food representation box */}
                  <div className="w-32 h-32 sm:w-36 sm:h-36 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-lg flex flex-col items-center justify-center shadow-lg border-4 border-stone-950 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                    {/* Interior striped background inside the bucket */}
                    <div className="absolute inset-x-0 bottom-0 top-1/2 bg-red-600 border-t-4 border-stone-955 flex items-center justify-around">
                      <span className="text-[10px] font-black text-white italic tracking-tighter">BIG</span>
                    </div>
                    
                    <span className="text-4xl sm:text-5xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] z-10 animate-bounce">🍗</span>
                    
                    <div className="bg-stone-950 px-2 py-0.5 rounded mt-2 border border-yellow-450 z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      <span className="text-[8px] sm:text-[10px] text-yellow-450 font-mono font-bold">K25.00 ONLY</span>
                    </div>
                  </div>

                  {/* Hot Chips Accent Container */}
                  <div className="absolute -bottom-2 -left-2 bg-yellow-400 border-2 border-stone-950 px-3 py-1.5 rounded shadow-[3px_3px_0px_0px_#000000] flex items-center gap-1">
                    <span className="text-lg">🍟</span>
                    <div>
                      <p className="text-[9px] text-stone-950 font-black leading-none uppercase">HOT CHIPS</p>
                    </div>
                  </div>

                  {/* Ice Cold Beverage Accent */}
                  <div className="absolute -top-1 -right-4 bg-white border-2 border-stone-950 px-3 py-1.5 rounded shadow-[3px_3px_0px_0px_#000000] flex items-center gap-1">
                    <span className="text-lg">🥤</span>
                    <div>
                      <p className="text-[9px] text-stone-950 font-black leading-none uppercase">FREE DRINK</p>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Card callouts */}
              <div className="z-10 bg-yellow-400 border-2 border-stone-950 py-2.5 px-4 rounded shadow-[3px_3px_0px_0px_#000000] flex items-center justify-between mt-auto">
                <div className="text-left">
                  <p className="text-[8px] uppercase tracking-wider text-red-650 font-black">WEEKLY SPECIAL Deal</p>
                  <p className="text-stone-950 text-xs sm:text-sm font-black tracking-tight">Sizzling Big Rooster Box</p>
                </div>
                <div className="text-right">
                  <p className="text-stone-700 text-xs font-mono font-bold line-through">K30.00</p>
                  <p className="text-red-650 text-xs sm:text-sm font-black font-mono">K25.00</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
