/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, Clock, MessageSquare, ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import { BRAND_CONFIG, generateDirectCallLink, generateWhatsAppLink } from "../data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-red-650 shadow-xl border-b-4 border-red-850 py-3"
          : "bg-red-600 border-b-4 border-red-800 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Mark */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md border-2 border-white group-hover:scale-105 transition-transform duration-300">
              <span className="text-2.5xl font-black text-red-750 italic leading-none font-display">R</span>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse"></span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tighter text-white block leading-none">
                BIG <span className="text-yellow-400">ROOSTER</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest font-black text-yellow-100 block">
                Fresh &amp; Crispy Local Taste
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-black text-white">
            <a href="#menu" className="hover:text-yellow-400 transition-colors py-1">Our Menu</a>
            <a href="#hot-deal" className="hover:text-yellow-400 transition-colors py-1">Today's Deal</a>
            <a href="#why-choose-us" className="hover:text-yellow-400 transition-colors py-1">Why Us</a>
            <a href="#catering" className="hover:text-yellow-400 transition-colors py-1">Catering</a>
            <a href="#faq" className="hover:text-yellow-400 transition-colors py-1">FAQS</a>
          </nav>

          {/* Desktop Secondary Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-white text-xs font-mono bg-red-750 border border-red-800 rounded-lg py-1 px-3">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
              </span>
              <span className="text-yellow-300 font-bold uppercase">OPEN NOW</span>
              <span className="text-white/40">|</span>
              <span>Boroko &amp; Waigani</span>
            </div>
            
            <a
              href={generateDirectCallLink()}
              className="flex items-center gap-1.5 text-white hover:text-yellow-400 transition-colors text-xs font-black uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-yellow-400" />
              <span>Call Us</span>
            </a>

            <a
              href={generateWhatsAppLink("Hi Big Rooster, I am browsing your landing page and would like to order delicious chicken meals!")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-red-600 hover:bg-yellow-400 hover:text-stone-950 font-black text-xs px-5 py-2.5 rounded-lg shadow-md transition-all duration-200 flex items-center gap-1.5 border-b-4 border-stone-300"
            >
              <MessageSquare className="w-4 h-4" />
              <span>ORDER NOW</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Status Indicator always visible on mobile */}
            <div className="flex items-center gap-1 text-[10px] font-black tracking-wider text-yellow-300 bg-red-750 border border-red-800 rounded-lg px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-300 animate-pulse"></span>
              <span>OPEN</span>
            </div>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-red-750 border border-red-800 text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-red-650 border-b-4 border-red-850 animate-in fade-in slide-in-from-top duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-red-700">
              <a
                href={generateDirectCallLink()}
                className="flex items-center justify-center gap-2 bg-red-750 hover:bg-red-800 border border-red-800 text-white py-2.5 rounded-lg font-black text-xs transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4 text-yellow-300" />
                <span>Call Hotline</span>
              </a>
              <a
                href={generateWhatsAppLink("Hi Big Rooster, I want to order from the website!")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-stone-950 py-2.5 rounded-lg font-black text-xs transition-all text-center border-b-2 border-amber-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
            
            <div className="flex flex-col gap-1">
              <a
                href="#menu"
                className="block px-3 py-2 rounded-lg text-sm uppercase tracking-wider font-black text-white hover:bg-red-700 hover:text-yellow-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Specialties &amp; Menu
              </a>
              <a
                href="#hot-deal"
                className="block px-3 py-2 rounded-lg text-sm uppercase tracking-wider font-black text-white hover:bg-red-700 hover:text-yellow-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Today's Special Deal 🎉
              </a>
              <a
                href="#why-choose-us"
                className="block px-3 py-2 rounded-lg text-sm uppercase tracking-wider font-black text-white hover:bg-red-700 hover:text-yellow-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Choose BIG ROOSTER
              </a>
              <a
                href="#catering"
                className="block px-3 py-2 rounded-lg text-sm uppercase tracking-wider font-black text-white hover:bg-red-700 hover:text-yellow-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Office &amp; Event Catering
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 rounded-lg text-sm uppercase tracking-wider font-black text-white hover:bg-red-700 hover:text-yellow-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Frequently Asked Questions
              </a>
            </div>

            <div className="pt-3 border-t border-red-700 text-center text-xs text-red-100 font-medium">
              <div className="flex items-center justify-center gap-1.5 mb-1 text-yellow-300 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>{BRAND_CONFIG.generalHours}</span>
              </div>
              <p>Skip the long queues — Pre-order on WhatsApp!</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
