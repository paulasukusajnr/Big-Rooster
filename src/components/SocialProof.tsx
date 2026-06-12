/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Star, CheckCircle, MessageSquare, Quote } from "lucide-react";
import { REVIEWS } from "../data";

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative py-20 lg:py-28 bg-stone-900 overflow-hidden text-white">
      {/* Background visual graphics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 rounded-full bg-yellow-600/5 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header segment */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase font-extrabold block">
            💬 WORD ON THE STREETS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Loved By Local Foodies
          </h2>
          <p className="text-stone-400 text-sm sm:text-base leading-relaxed">
            See what actual BIG ROOSTER customers in Boroko, Waigani, and Lae are saying! Real local people, real massive portion satisfaction scores.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => {
            return (
              <div
                key={review.id}
                id={`review-card-${review.id}`}
                className="bg-stone-950 border border-stone-850 p-6 sm:p-8 rounded-3xl flex flex-col justify-between relative group hover:border-red-500/30 transition-all duration-300"
              >
                {/* Decorative absolute Quote tag background */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-stone-900 group-hover:text-red-950/20 transition-all pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Glowing 5 Golden Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-stone-350 text-sm sm:text-base leading-relaxed italic font-medium">
                    "{review.text}"
                  </p>
                </div>

                {/* Bottom User Info Container */}
                <div className="pt-6 mt-6 border-t border-stone-900 relative z-10 flex items-center justify-between">
                  
                  {/* User credentials */}
                  <div className="flex items-center gap-3">
                    {/* Unique initials visual Avatar */}
                    <div className="w-10 h-10 bg-gradient-to-br from-red-650 to-red-850 rounded-full flex items-center justify-center font-bold text-xs text-white border border-red-500/25 uppercase shadow">
                      {review.name.slice(0, 2)}
                    </div>
                    <div className="text-left">
                      <p className="text-white text-xs font-black tracking-tight">{review.name}</p>
                      <p className="text-[10px] text-stone-550 font-semibold">{review.location}</p>
                    </div>
                  </div>

                  {/* Verified Order tag */}
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1 text-[9px] font-bold text-emerald-400 bg-emerald-950/45 py-1 px-2.5 rounded-full border border-emerald-900/40">
                      <CheckCircle className="w-2.5 h-2.5" />
                      <span>Verified</span>
                    </span>
                    <p className="text-[8px] text-stone-500 uppercase tracking-wider font-mono mt-1 font-bold">
                      {review.verifiedOrder}
                    </p>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Micro conversion panel */}
        <div className="mt-16 text-center space-y-3">
          <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
            Ready to order Papua New Guinea’s crunchiest chicken?
          </p>
          <a
            href="#menu"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-stone-950 font-black text-xs py-3.5 px-8 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 active:translate-y-0 border-b-2 border-amber-600"
          >
            <MessageSquare className="w-4 h-4 fill-stone-950" />
            <span>Order Your Rooster Box Now</span>
          </a>
        </div>

      </div>
    </section>
  );
}
