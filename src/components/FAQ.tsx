/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Plus, Minus, HelpCircle, Flame } from "lucide-react";
import { FAQS } from "../data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-stone-950 overflow-hidden text-white">
      {/* Glow overlays */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] rounded-full bg-red-800/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header container */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-yellow-400 font-mono text-xs tracking-widest uppercase font-extrabold block">
            💡 ANSWERS FOR HUNGRY MINDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none">
            Frequently Asked Questions
          </h2>
          <p className="text-stone-400 text-sm">
            Everything you need to know about pre-ordering, picking up, and booking catering with BIG ROOSTER.
          </p>
        </div>

        {/* Accordions List container */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-stone-900 border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-red-900/60 shadow-lg shadow-red-950/5 bg-stone-900" : "border-stone-850 hover:border-stone-800"
                }`}
              >
                
                {/* Trigger button header */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:text-yellow-400"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-yellow-400" : "text-stone-550"}`} />
                    <span className="text-sm sm:text-base font-black tracking-tight text-white leading-normal">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center bg-stone-950 border border-stone-850 text-stone-300 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-yellow-400" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Collapsible Answer panel */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[500px] border-t border-stone-850/60" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="p-5 sm:p-6 text-xs sm:text-sm text-stone-350 leading-relaxed font-normal bg-stone-950/40">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Quick Conversational micro conversion trigger */}
        <div className="mt-16 bg-gradient-to-r from-yellow-400/90 to-amber-500/90 p-6 sm:p-8 rounded-3xl text-stone-950 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl border-b-4 border-amber-600">
          <div>
            <p className="text-stone-950 text-lg sm:text-xl font-black tracking-tight leading-none mb-1">
              Still got some custom chicken queries?
            </p>
            <p className="text-stone-900 text-xs sm:text-sm font-medium">
              Click to talk directly with our operating hotlines in Boroko &amp; Waigani!
            </p>
          </div>
          
          <a
            href="tel:+6753250000"
            className="w-full sm:w-auto flex-shrink-0 bg-stone-950 hover:bg-stone-850 text-white font-black text-xs py-3.5 px-6 rounded-xl transition-all shadow-md text-center"
          >
            ☎️ CALL HOTLINE NOW
          </a>
        </div>

      </div>
    </section>
  );
}
