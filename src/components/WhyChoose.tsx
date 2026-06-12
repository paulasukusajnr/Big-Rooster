/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import * as Icons from "lucide-react";
import { BENEFITS } from "../data";

export default function WhyChoose() {
  
  // Custom safe solver to convert string names from our structured database into genuine interactive Lucide Icons
  const renderIcon = (name: string, className: string) => {
    switch (name) {
      case "Flame":
        return <Icons.Flame className={className} />;
      case "CheckCircle2":
        return <Icons.CheckCircle className={className} />;
      case "Users":
        return <Icons.Users className={className} />;
      case "Utensils":
        return <Icons.Utensils className={className} />;
      default:
        return <Icons.Sparkles className={className} />;
    }
  };

  return (
    <section id="why-choose-us" className="relative py-20 lg:py-28 bg-stone-900 overflow-hidden text-stone-100">
      
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-800/5 blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Heading Layout Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-yellow-400 font-mono text-xs tracking-widest uppercase font-extrabold block">
            ⭐ WHY WE STAND SUPREME
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Why Choose BIG ROOSTER?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            We don’t skip steps. We use gold-standard techniques to deliver superior quality, crisp, sizzling fried meals that make other takeaway stores look tiny in comparison.
          </p>
        </div>

        {/* Benefits Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.id}
              id={`benefit-card-${benefit.id}`}
              className="bg-stone-950/80 border border-stone-850 p-6 sm:p-8 rounded-2xl flex flex-col justify-between group hover:border-red-500/30 hover:shadow-xl hover:shadow-red-950/5 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* Floating animated icon holder */}
                <div className="w-12 h-12 bg-red-950 border border-red-900 text-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 transform">
                  {renderIcon(benefit.iconName, "w-6 h-6 transition-transform duration-300 group-hover:rotate-6")}
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-black text-white group-hover:text-yellow-400 transition-colors tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Little bottom structural index layout */}
              <div className="mt-6 pt-4 border-t border-stone-900 flex items-center justify-between">
                <span className="text-[10px] text-stone-550 font-mono font-bold uppercase">PNG STANDARD</span>
                <span className="text-red-500/40 text-sm font-black italic select-none">0{idx + 1}</span>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic conversion sub-box */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
          <p className="text-xs text-stone-400 font-mono uppercase tracking-widest">
            Ready to experience Papua New Guinea's crispest Rooster?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#menu"
              className="w-full sm:w-auto bg-stone-950 hover:bg-stone-850 text-white font-bold text-xs py-3.5 px-6 rounded-xl border border-stone-800 hover:border-yellow-400/30 transition-all text-center"
            >
              Order Meal takeaway
            </a>
            <a
              href="#catering"
              className="w-full sm:w-auto bg-gradient-to-r from-red-650 to-red-750 hover:from-red-550 hover:to-red-650 text-white font-black text-xs py-3.5 px-6 rounded-xl shadow-md transition-all text-center"
            >
              Book Catering bulk delivery
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
