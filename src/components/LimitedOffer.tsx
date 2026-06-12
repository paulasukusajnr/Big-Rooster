/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Clock, MessageSquare, Timer, Sparkles, Percent, Flame } from "lucide-react";
import { generateWhatsAppLink } from "../data";

export default function LimitedOffer() {
  const [timeLeft, setTimeLeft] = useState({ hours: "05", minutes: "42", seconds: "18" });

  useEffect(() => {
    // Elegant system to calculate time left until midnight to trigger ultimate local food-ordering urgency
    const interval = setInterval(() => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0); // Next midnight
      
      const diffMs = midnight.getTime() - now.getTime();
      
      if (diffMs <= 0) {
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hoursNum = Math.floor(diffMs / (1000 * 60 * 60));
      const minutesNum = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const secondsNum = Math.floor((diffMs % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: hoursNum.toString().padStart(2, "0"),
        minutes: minutesNum.toString().padStart(2, "0"),
        seconds: secondsNum.toString().padStart(2, "0")
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const claimOfferMessage = "Hi BIG ROOSTER! I want to claim today's BIG DEAL promotion (FREE SAUCE UPGRADE with my rooster meal purchase)! Please include this in my order details.";

  return (
    <section id="hot-deal" className="relative py-16 bg-stone-950 overflow-hidden text-white">
      {/* Decorative red flash flares */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-red-700/10 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-red-650 rounded-xl shadow-[8px_8px_0px_0px_rgba(250,204,21,1)] p-6 sm:p-10 md:p-12 border-4 border-stone-950 relative overflow-hidden">
          
          {/* Subtle textured grid lines */}
          <div className="absolute inset-0 bg-stone-950 opacity-15 mix-blend-multiply" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px)", backgroundSize: "100% 8px" }}></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Promo text layout cols */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-4">
              
              <div className="inline-flex items-center gap-1.5 bg-yellow-400 text-stone-950 text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded border-2 border-stone-950 shadow-[2px_2px_0px_0px_#000000]">
                <Percent className="w-3.5 h-3.5" />
                <span>EXCLUSIVELY TODAY</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none text-white uppercase font-display">
                Today’s Big Deal
              </h2>

              <p className="text-amber-100 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                Order any of our legendary rooster meals today and get a <span className="text-yellow-300 font-extrabold underline decoration-dashed underline-offset-4">FREE gourmet dipping sauce upgrade</span> with your crispy box! Extra heat, extra rich sauce, zero charge.
              </p>

              {/* Promo code mockup notes */}
              <div className="text-yellow-300 font-mono text-[10px] sm:text-xs flex items-center justify-center lg:justify-start gap-1 uppercase font-black">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-spin delay-1000" />
                <span>Automatically applied when ordering via WhatsApp</span>
              </div>

            </div>

            {/* Right block: Live Countdown & Direct CTA */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-stone-950 rounded-xl p-6 border-2 border-stone-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-stone-400 flex items-center gap-1 mb-3">
                <Timer className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                <span>DEAL EXPIRES SOON</span>
              </span>

              {/* Ticking Visual Countdown clock digits */}
              <div className="flex items-center gap-2 mb-6 font-mono">
                <div className="text-center">
                  <div className="bg-red-650 border-2 border-stone-950 text-white text-3xl font-black w-14 h-14 rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                    {timeLeft.hours}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-stone-450 mt-1.5 block font-bold">Hr</span>
                </div>
                <span className="text-xl font-bold text-yellow-405 animate-pulse">:</span>
                <div className="text-center">
                  <div className="bg-red-650 border-2 border-stone-950 text-white text-3xl font-black w-14 h-14 rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                    {timeLeft.minutes}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-stone-450 mt-1.5 block font-bold">Min</span>
                </div>
                <span className="text-xl font-bold text-yellow-405 animate-pulse">:</span>
                <div className="text-center">
                  <div className="bg-red-650 border-2 border-stone-950 text-white text-3xl font-black w-14 h-14 rounded-lg flex items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                    {timeLeft.seconds}
                  </div>
                  <span className="text-[9px] uppercase tracking-wider text-stone-450 mt-1.5 block font-bold">Sec</span>
                </div>
              </div>

              {/* High impact Conversion Claim CTA Button */}
              <a
                href={generateWhatsAppLink(claimOfferMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-400 hover:bg-yellow-350 active:bg-yellow-400 text-stone-955 font-black text-xs py-4 rounded-lg text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px] active:translate-y-0 transition-all duration-150 uppercase tracking-wildest flex items-center justify-center gap-2 border-2 border-stone-950"
                id="btn-claim-limited-offer"
              >
                <MessageSquare className="w-4 h-4 fill-stone-955" />
                <span>Claim This Offer</span>
              </a>

              <p className="text-[9px] text-stone-500 mt-3 font-semibold text-center italic">
                *Offer only valid today. Limited to 1 replacement per order ticket.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
