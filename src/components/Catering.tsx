/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageSquare, Calculator, Percent, Sparkles, CheckSquare, Soup } from "lucide-react";
import { generateWhatsAppLink } from "../data";

interface CateringPackage {
  name: string;
  pricePerPerson: number;
  description: string;
  icon: string;
}

const CATERING_PACKAGES: CateringPackage[] = [
  {
    name: "Individual Rooster Boxes",
    pricePerPerson: 22, // K22 per person at volume
    description: "Individually packed Big Rooster Boxes. Includes chicken portion, chips, dinner bun, and canned drink for each guest.",
    icon: "🍱"
  },
  {
    name: "Shared Platter Feast",
    pricePerPerson: 18, // K18 per person
    description: "Buffet style platters containing heaps of our crispy fried chicken pieces, giant chips bowls, dinner rolls, and fresh gravy.",
    icon: "🧺"
  },
  {
    name: "VIP Office Party Pack",
    pricePerPerson: 25, // K25 per person
    description: "Premium selection including a mix of original crispy & spicy hot chicken, multiple sides, soft rolls, coleslaw, and desserts.",
    icon: "👑"
  }
];

export default function Catering() {
  const [headcount, setHeadcount] = useState<number>(30);
  const [selectedPkgIndex, setSelectedPkgIndex] = useState<number>(0);
  const [eventName, setEventName] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");

  const selectedPkg = CATERING_PACKAGES[selectedPkgIndex];
  
  // Calculate discount rates dynamically based on volume size!
  // 10-24 guests: 0% discount
  // 25-49 guests: 5% bulk discount
  // 50-99 guests: 10% bulk discount
  // 100+ guests: 15% MASSIVE bulk discount!
  const getDiscountPercent = (count: number): number => {
    if (count >= 100) return 15;
    if (count >= 50) return 10;
    if (count >= 25) return 5;
    return 0;
  };

  const discountPercent = getDiscountPercent(headcount);
  const rawSubtotal = selectedPkg.pricePerPerson * headcount;
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const netTotal = rawSubtotal - discountAmount;

  const handleCateringRequest = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = eventDate ? `scheduled for ${eventDate}` : "soon";
    const eventPurpose = eventName ? `for our ${eventName}` : "for an upcoming event";

    const cateringMessage = `🍗 *BIG ROOSTER CATERING INQUIRY* 🍗\n` +
      `----------------------------------------\n` +
      `👤 *Event Details:* ${eventPurpose} ${formattedDate}\n` +
      `👥 *Number of Guests: ${headcount} people\n` +
      `📦 *Preferred Package:* ${selectedPkg.name} (K${selectedPkg.pricePerPerson}/person)\n` +
      `----------------------------------------\n` +
      `📈 *Estimator Subtotal:* K${rawSubtotal}.00\n` +
      `🏷️ *Bulk Discount:* ${discountPercent}% (-K${discountAmount}.00)\n` +
      `🔥 *Estimated Total:* K${netTotal}.00\n\n` +
      `Please let me know if these event dates are open for booking! I look forward to finalizing our customized quote.`;

    window.open(generateWhatsAppLink(cateringMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="catering" className="relative py-20 lg:py-28 bg-stone-950 overflow-hidden text-white">
      {/* Spotlight rays overlay */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-red-700/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase font-extrabold block">
            🍴 MASSIVE QUANTITY SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter leading-none uppercase font-display">
            Feeding a Team or Event?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-bold">
            BIG ROOSTER can prepare bulk meal orders for offices, birthdays, church programs, sports teams, school gathers, and family celebrations. Cooked fresh, packed carefully, and delivered sizzling!
          </p>
        </div>

        {/* 2 Column Layout: Info and Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Col: Info & Benefit Bulletins */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-black tracking-tight text-white uppercase font-display">
              Sass-grade Catering Tailored For Papua New Guinea gatherings
            </h3>
            
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-semibold">
              We understand how important it is to keep people happy and fed at events. Small snacks don't cut it—you need bold, crispy rooster drumsticks and heaps of seasoned golden chips.
            </p>

            <div className="space-y-4">
              <div className="flex gap-3.5">
                <div className="w-6 h-6 rounded bg-yellow-450 text-stone-950 flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5 border border-stone-950">✓</div>
                <div>
                  <p className="text-white text-sm font-black uppercase">Custom Individual Labeling</p>
                  <p className="text-stone-400 text-xs mt-0.5">Each lunch box clearly marked with selected items for easy distribution inside classrooms or office boards.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-6 h-6 rounded bg-yellow-450 text-stone-950 flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5 border border-stone-950">✓</div>
                <div>
                  <p className="text-white text-sm font-black uppercase">Heated Carrier Delivery</p>
                  <p className="text-stone-400 text-xs mt-0.5">We pack our bulk orders in sealed thermal insulation boxes to preserve the golden crispy texture during transport.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="w-6 h-6 rounded bg-yellow-450 text-stone-950 flex items-center justify-center font-black text-xs flex-shrink-0 mt-0.5 border border-stone-950">✓</div>
                <div>
                  <p className="text-white text-sm font-black uppercase">Generous Event Discounts</p>
                  <p className="text-stone-400 text-xs mt-0.5">Save up to 15% on massive headcounts. The larger the crowd, the cheaper the delicious premium rooster per head!</p>
                </div>
              </div>
            </div>

            {/* Micro-guarantee label */}
            <div className="bg-stone-900 border-2 border-stone-950 p-5 rounded-lg flex items-center gap-3 shadow-[3px_3px_0px_0px_rgba(239,68,68,1)]">
              <span className="text-3xl">🎉</span>
              <div>
                <p className="text-yellow-400 text-xs font-black uppercase tracking-wider">Booked in 1 Minute</p>
                <p className="text-stone-300 text-xs mt-0.5 font-medium">Use our smart estimator tool to instantly calculate bulk prices. Submit, and we'll dispatch instant WhatsApp confirmations.</p>
              </div>
            </div>

          </div>

          {/* Right Col: Smart Interactive Estimator Card */}
          <div className="lg:col-span-7 bg-stone-900 border-4 border-stone-950 rounded-xl p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] relative">
            
            {/* Tiny accent badge */}
            <div className="absolute -top-3.5 left-6 bg-red-650 text-white text-[9px] font-black tracking-widest px-3 py-1.5 rounded border-2 border-stone-950 uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000000]">
              <Calculator className="w-3 h-3" />
              <span>DYNAMIC CATERING CALCULATOR</span>
            </div>

            <form onSubmit={handleCateringRequest} className="space-y-6">
              
              {/* Event basics inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-stone-400 font-mono text-[10px] font-bold uppercase block">
                    Event or Occasion Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Boroko Church, Birthday, Board Meeting"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    className="w-full bg-stone-950 border-2 border-stone-950 focus:border-yellow-450 focus:outline-none rounded-lg py-3 px-4 text-xs font-bold text-white placeholder-stone-650 transition-colors shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-stone-400 font-mono text-[10px] font-bold uppercase block">
                    Target Event Date
                  </label>
                  <input
                    type="date"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full bg-stone-950 border-2 border-stone-950 focus:border-yellow-450 focus:outline-none rounded-lg py-3 px-4 text-xs font-bold text-white transition-colors shadow-[2px_2px_0px_0px_#000000]"
                  />
                </div>
              </div>

              {/* Package selection grid cards */}
              <div className="space-y-3">
                <span className="text-stone-400 font-mono text-[10px] font-bold uppercase block">
                  Step 1: Choose Food Bundle Style
                </span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {CATERING_PACKAGES.map((pkg, idx) => {
                    const isSelected = selectedPkgIndex === idx;
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => setSelectedPkgIndex(idx)}
                        className={`p-4 rounded-lg text-left border-2 transition-all ${
                          isSelected
                            ? "bg-yellow-450 border-stone-950 text-stone-950 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                            : "bg-stone-950 border-stone-850 text-stone-300 hover:border-yellow-450 shadow-[2px_2px_0px_0px_#000000]"
                        }`}
                      >
                        <span className="text-2xl block mb-2">{pkg.icon}</span>
                        <p className="text-xs font-black uppercase leading-tight line-clamp-1">{pkg.name}</p>
                        <p className="text-yellow-405 group-hover:text-stone-950 text-xs font-black font-mono mt-1">K{pkg.pricePerPerson}.00/person</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Headcount adjuster bar range */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-stone-400 font-mono text-[10px] font-bold uppercase block">
                    Step 2: Headcount (Number of Guests)
                  </span>
                  <span className="bg-stone-950 border-2 border-stone-950 text-yellow-400 font-mono text-xs font-black px-3 py-1.5 rounded shadow-[2px_2px_0px_0px_#000000]">
                    {headcount} Guests
                  </span>
                </div>

                <div className="space-y-1">
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={headcount}
                    onChange={(e) => setHeadcount(parseInt(e.target.value))}
                    className="w-full h-2 bg-stone-950 rounded-lg appearance-none cursor-pointer accent-yellow-400"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-stone-450 pt-1 font-bold">
                    <span>10 guests</span>
                    <span>50 (10% Off)</span>
                    <span>100+ (15% Off 🔥)</span>
                    <span>200 guests</span>
                  </div>
                </div>
              </div>

              {/* Premium Detailed Calculation Table panel */}
              <div className="bg-stone-955 border-2 border-stone-950 rounded-lg p-5 space-y-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <div className="flex justify-between text-xs text-stone-450 font-bold uppercase">
                  <span>Selected Package:</span>
                  <span className="text-white font-black">{selectedPkg.name}</span>
                </div>
                <div className="flex justify-between text-xs text-stone-450 font-bold uppercase">
                  <span>Headcount rate estimation:</span>
                  <span className="text-white font-mono font-black">{headcount} guests × K{selectedPkg.pricePerPerson}.00</span>
                </div>
                
                {discountPercent > 0 && (
                  <div className="flex justify-between text-xs text-stone-950 font-black bg-yellow-400 p-2.5 rounded border-2 border-stone-950 shadow-[2px_2px_0px_0px_#000000]">
                    <span className="flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5" />
                      <span>Volume Group Discount applied ({discountPercent}% Off):</span>
                    </span>
                    <span className="font-mono">-K{discountAmount}.00</span>
                  </div>
                )}

                <div className="pt-3 border-t-2 border-stone-900 flex justify-between items-baseline">
                  <span className="text-sm font-black tracking-tight text-white uppercase font-display">Estimated Catering Total:</span>
                  <div className="text-right">
                    <span className="text-3xl font-black font-mono text-yellow-405 font-display">K{netTotal}.00</span>
                    <span className="text-[9px] text-stone-550 block uppercase font-mono mt-0.5 font-bold">Subject to date booking</span>
                  </div>
                </div>
              </div>

              {/* Request Button */}
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-350 text-stone-950 font-black py-4 rounded-lg text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform flex items-center justify-center gap-2 border-2 border-stone-950 text-xs uppercase tracking-widest"
                id="btn-request-catering"
              >
                <MessageSquare className="w-4 h-4 fill-stone-955" />
                <span>Request Catering Quote via WhatsApp</span>
              </button>

              <p className="text-[10px] text-stone-550 text-center font-bold uppercase tracking-wide">
                🚀 No up-front deposits required during consultation!
              </p>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
