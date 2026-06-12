/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import LimitedOffer from "./components/LimitedOffer";
import WhyChoose from "./components/WhyChoose";
import Catering from "./components/Catering";
import SocialProof from "./components/SocialProof";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import { MessageSquare, Flame } from "lucide-react";
import { generateWhatsAppLink } from "./data";

export default function App() {
  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 font-sans selection:bg-red-650 selection:text-white overflow-x-hidden antialiased scroll-smooth">
      
      {/* 🚀 Top Urgency notification ticker banner */}
      <div className="bg-gradient-to-r from-red-650 via-red-600 to-amber-600 font-bold py-2.5 px-4 text-center text-xs sm:text-sm text-white relative z-50 flex items-center justify-center gap-2 border-b border-rose-950/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300"></span>
        </span>
        <p className="tracking-tight">
          🔥 <span className="font-black">TODAY'S CRUNCH DEAL:</span> Get a free sauce upgrade with any rooster meal purchase. <a href="#hot-deal" className="underline hover:text-yellow-300 ml-1.5 font-extrabold pb-0.5">Claim Offer now &rarr;</a>
        </p>
      </div>

      {/* Header bar section */}
      <Header />

      {/* Main sections container */}
      <main>
        
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Menu Specialties Section */}
        <Menu />

        {/* 3. Hot Limited Offer Ticket Promotion */}
        <LimitedOffer />

        {/* 4. Core Benefits Infocards */}
        <WhyChoose />

        {/* 5. Interactive Event/Office Catering Estimator */}
        <Catering />

        {/* 6. Social Trust / Reviews validation */}
        <SocialProof />

        {/* 7. FAQs accordion blocks */}
        <FAQ />

      </main>

      {/* footer section */}
      <Footer />

      {/* 8. Sticky conversion WhatsApp navigation drawer for mobile devices */}
      <StickyCTA />

    </div>
  );
}
