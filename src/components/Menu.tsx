/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { MessageSquare, Settings2, Plus, Minus, X, Check, Flame, ShoppingBag, ArrowRight } from "lucide-react";
import { MENU_ITEMS, generateWhatsAppLink } from "../data";
import { MenuItem } from "../types";

export default function Menu() {
  // Modal State
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [selectedChoices, setSelectedChoices] = useState<{ [optionName: string]: string }>({});
  const [itemQuantity, setItemQuantity] = useState<number>(1);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Opens the visual item customizer modal
  const openCustomizer = (item: MenuItem) => {
    setSelectedItem(item);
    setItemQuantity(1);
    
    // Set default values for customized options
    const defaults: { [key: string]: string } = {};
    if (item.options) {
      item.options.forEach(opt => {
        defaults[opt.name] = opt.choices[0];
      });
    }
    setSelectedChoices(defaults);
  };

  // Close the modal
  const closeCustomizer = () => {
    setSelectedItem(null);
  };

  // Option selection handler
  const handleChoiceSelect = (optionName: string, choice: string) => {
    setSelectedChoices(prev => ({
      ...prev,
      [optionName]: choice
    }));
  };

  // Compile final custom message and build direct redirection
  const handleCheckoutWhatsApp = () => {
    if (!selectedItem) return;

    const optionsStr = Object.entries(selectedChoices)
      .map(([optName, selectedChoice]) => `${optName}: ${selectedChoice}`)
      .join(", ");

    const totalCalculatedKina = selectedItem.price * itemQuantity;

    // Formatting readable order receipts for the BIG ROOSTER kitchen
    const mealMessage = `🍗 *BIG ROOSTER ORDER RECEIPT* 🍗\n` +
      `----------------------------------------\n` +
      `👉 *Meal:* ${selectedItem.name}\n` +
      `👉 *Quantity:* ${itemQuantity}x\n` +
      `👉 *Customizations:* ${optionsStr || "None"}\n` +
      `----------------------------------------\n` +
      `🔥 *Total Price:* K${totalCalculatedKina}.00\n\n` +
      `Please confirm my order and let me know the takeaway pickup schedule! Thank you.`;

    // Trigger local feedback
    setSuccessToast(`Prepared order coordinates for ${selectedItem.name}! Opening WhatsApp...`);
    setTimeout(() => {
      setSuccessToast(null);
      closeCustomizer();
    }, 2500);

    // Open link
    window.open(generateWhatsAppLink(mealMessage), "_blank", "noopener,noreferrer");
  };

  // Quick order bypass
  const handleQuickOrder = (item: MenuItem) => {
    const quickMessage = `🍗 *QUICK BIG ROOSTER ORDER* 🍗\n` +
      `----------------------------------------\n` +
      `👉 *Meal:* ${item.name}\n` +
      `👉 *Quantity:* 1x (Standard)\n` +
      `----------------------------------------\n` +
      `🔥 *Total Price:* K${item.price}.00\n\n` +
      `I would like to order this meal now with standard local options. Please confirm!`;
    
    setSuccessToast(`Quick orders prepared for ${item.name}! Opening WhatsApp...`);
    setTimeout(() => setSuccessToast(null), 2500);
    window.open(generateWhatsAppLink(quickMessage), "_blank", "noopener,noreferrer");
  };

  // Emoji food dictionary to make images highly vibrant without broken image files
  const getFoodIcon = (id: string): string => {
    switch (id) {
      case "rooster-box":
        return "🍗";
      case "rooster-chips":
        return "🍟";
      case "family-pack":
        return "🧺";
      case "office-pack":
        return "💼";
      default:
        return "🐓";
    }
  };

  return (
    <section id="menu" className="relative py-20 lg:py-28 bg-stone-900 overflow-hidden">
      
      {/* Decorative side spotlight background grids */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-yellow-600/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-red-650/5 blur-[120px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header container labels */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 font-mono text-sm tracking-widest uppercase font-extrabold block mb-2">
            🍕 SIZZLING SELECTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Our Legend-Grade Menu
          </h2>
          <p className="text-stone-400 text-sm sm:text-base">
            Select one of our flagship crunch templates. Sourced from high quality, premium grade poultry and fried till perfectly crisp. Click to customize any order details instantly!
          </p>
        </div>

        {/* Dynamic product cards listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MENU_ITEMS.map((item) => {
            const foodEmoji = getFoodIcon(item.id);
            return (
              <div
                key={item.id}
                id={`menu-item-${item.id}`}
                className="bg-stone-950 border-2 border-stone-950 rounded-xl overflow-hidden flex flex-col justify-between group shadow-[5px_5px_0px_0px_rgba(239,68,68,1)] hover:shadow-[5px_5px_0px_0px_rgba(250,204,21,1)] transition-all duration-300"
              >
                
                {/* Visual section / Appetizer container */}
                <div className="relative aspect-[4/3] bg-stone-900/60 flex items-center justify-center p-6 border-b-2 border-stone-950 group-hover:bg-gradient-to-br group-hover:from-stone-900 group-hover:to-yellow-450/5 transition-all duration-300">
                  
                  {/* Subtle red rays accent inside graphic */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-650/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 duration-500"></div>

                  {/* Tag absolute indicators (Best seller, Most Popular, etc) */}
                  {item.tag && (
                    <span className="absolute top-3 left-3 bg-red-650 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#000000] z-10 border border-stone-950">
                      {item.tag}
                    </span>
                  )}

                  {/* Kina Currency Badge Indicator */}
                  <span className="absolute top-3 right-3 bg-yellow-450 border border-stone-950 text-stone-950 font-black font-mono text-xs px-2.5 py-1 rounded shadow-[2px_2px_0px_0px_#000000]">
                    K{item.price}.00
                  </span>

                  {/* Interactive Big beautiful meal visualizer representation */}
                  <div className="w-24 h-24 sm:w-26 sm:h-26 rounded-lg bg-yellow-400 flex items-center justify-center shadow-[3px_3px_0px_0px_#000000] border-2 border-stone-950 transform group-hover:scale-105 transition-transform duration-300 relative">
                    <span className="text-4xl sm:text-5xl select-none filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                      {foodEmoji}
                    </span>
                    {/* Small flashing fresh light */}
                    <span className="absolute -bottom-1 -right-1 bg-white border-2 border-stone-950 w-6 h-6 rounded flex items-center justify-center text-[8px] font-black text-stone-950 shadow">
                      NEW
                    </span>
                  </div>

                </div>

                {/* Info Text panel */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-yellow-400 transition-colors uppercase font-display">
                      {item.name}
                    </h3>
                    
                    <p className="text-stone-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Price and quick review */}
                    <div className="flex items-center justify-between mb-4 pb-4 border-b-2 border-stone-950">
                      <span className="text-xs font-mono uppercase tracking-widest text-stone-500 font-extrabold">
                        PORTION PRICE
                      </span>
                      <span className="text-xl font-black font-mono text-yellow-400">
                        K{item.price}.00
                      </span>
                    </div>

                    {/* Bottom CTA Actions */}
                    <div className="flex flex-col gap-2.5">
                      <button
                        onClick={() => openCustomizer(item)}
                        className="w-full bg-white hover:bg-stone-100 text-stone-950 border-2 border-stone-950 font-black text-[10px] py-3 rounded-lg shadow-[2px_2px_0px_0px_#000000] hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider"
                        id={`btn-customize-${item.id}`}
                      >
                        <Settings2 className="w-3.5 h-3.5 text-red-650" />
                        <span>CUSTOMIZE MEAL</span>
                      </button>

                      <button
                        onClick={() => handleQuickOrder(item)}
                        className="w-full bg-yellow-400 hover:bg-yellow-350 text-stone-950 font-black text-[10px] py-3 rounded-lg shadow-[2px_2px_0px_0px_#000000] hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center justify-center gap-1.5 uppercase tracking-wider border-2 border-stone-950"
                        id={`btn-quick-${item.id}`}
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>QUICK WHATSAPP ORDER</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Multi-Section Continuous Conversion Call-to-action bar */}
        <div className="mt-16 bg-gradient-to-r from-red-950/75 via-stone-950 to-red-950/75 p-6 sm:p-8 rounded-3xl border border-red-900/40 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-red-900/30 text-yellow-400 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full mb-2">
              <Flame className="w-3 h-3 animate-pulse" />
              <span>HUNGRY AT THE OFFICE OR AT HOME?</span>
            </div>
            <p className="text-white text-lg sm:text-xl font-black tracking-tight">
              Get Big Rooster delivered to your doorstep today!
            </p>
            <p className="text-stone-400 text-xs sm:text-sm">
              We prepare and seal bulk takeaways so that they remain crisp and steaming hot.
            </p>
          </div>
          
          <a
            href={generateWhatsAppLink("Hi Big Rooster, I want to talk about custom food delivery sizes for my office lunch groups!")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-shrink-0 bg-yellow-400 hover:bg-yellow-300 text-stone-950 font-black text-sm px-6 py-3.5 rounded-xl transition-transform transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 shadow-lg shadow-yellow-950/30 border-b-2 border-amber-600"
          >
            <span>Consult Group Order</span>
            <ArrowRight className="w-4 h-4 text-stone-950" />
          </a>
        </div>

      </div>

      {/* ==========================================
          🍗 INTERACTIVE MEAL CUSTOMIZER DIALOG / MODAL
          ========================================== */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-955/90 flex items-center justify-center p-4">
          <div className="bg-stone-900 border-4 border-stone-950 rounded-xl max-w-lg w-full overflow-hidden shadow-[8px_8px_0px_0px_rgba(239,68,68,1)] relative block animate-in zoom-in-95 duration-200">
            
            {/* Modal header details */}
            <div className="relative bg-stone-950 p-6 border-b-2 border-stone-950 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl bg-yellow-450 w-12 h-12 rounded-lg flex items-center justify-center border-2 border-stone-950 shadow-[2px_2px_0px_0px_#000000]">
                  {getFoodIcon(selectedItem.id)}
                </span>
                <div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">{selectedItem.name}</h3>
                  <span className="text-xs text-yellow-400 font-extrabold font-mono">Base Price: K{selectedItem.price}.00</span>
                </div>
              </div>
              <button
                onClick={closeCustomizer}
                className="p-2 rounded-lg bg-white hover:bg-yellow-450 hover:text-stone-950 text-stone-950 border-2 border-stone-950 transition-colors shadow-[2px_2px_0px_0px_#000000]"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 font-black" />
              </button>
            </div>

            {/* Modal Body / Customizable options selectors */}
            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              
              <p className="text-xs sm:text-sm text-stone-300 italic font-semibold">
                "{selectedItem.description}"
              </p>

              {/* Dynamic rendering of custom product options config */}
              {selectedItem.options && selectedItem.options.map((opt, index) => (
                <div key={index} className="space-y-3">
                  <span className="text-xs font-mono font-extrabold uppercase text-yellow-400 tracking-wider flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-red-500 font-black animate-pulse" />
                    <span>Select {opt.name}</span>
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {opt.choices.map((choice, cIdx) => {
                      const isSelected = selectedChoices[opt.name] === choice;
                      return (
                        <button
                          key={cIdx}
                          onClick={() => handleChoiceSelect(opt.name, choice)}
                          className={`py-2.5 px-3 rounded-lg text-left text-xs font-extrabold border-2 transition-all ${
                            isSelected
                              ? "bg-yellow-450 border-stone-950 text-stone-950 shadow-[2px_2px_0px_0px_#000000]"
                              : "bg-stone-950 border-stone-900 text-stone-300 hover:border-yellow-400"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{choice}</span>
                            {isSelected && (
                              <span className="w-4 h-4 rounded-full bg-stone-950 text-white flex items-center justify-center text-[8px] font-black leading-none">
                                ✓
                              </span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Quantity Selector Option block */}
              <div className="flex items-center justify-between pt-4 border-t-2 border-stone-950">
                <div>
                  <span className="text-xs font-mono font-extrabold uppercase text-stone-400 block mb-1">
                    SET QUANTITY
                  </span>
                  <p className="text-[10px] text-stone-400 font-medium">How many feeds would you like?</p>
                </div>

                <div className="flex items-center gap-4 bg-stone-950 py-1.5 px-3 rounded-lg border-2 border-stone-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <button
                    onClick={() => setItemQuantity(Math.max(1, itemQuantity - 1))}
                    className="p-1 rounded bg-stone-900 border border-stone-850 text-stone-300 hover:text-white"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-mono font-extrabold text-base w-6 text-center">
                    {itemQuantity}
                  </span>
                  <button
                    onClick={() => setItemQuantity(itemQuantity + 1)}
                    className="p-1 rounded bg-stone-900 border border-stone-850 text-stone-300 hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Actions footer */}
            <div className="p-6 bg-stone-950 border-t-2 border-stone-950 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone-400 font-extrabold font-mono uppercase tracking-wider">ESTIMATE:</span>
                <span className="text-2xl font-black font-mono text-yellow-400">
                  K{selectedItem.price * itemQuantity}.00
                </span>
              </div>

              {/* Action builder button */}
              <button
                onClick={handleCheckoutWhatsApp}
                className="w-full bg-yellow-400 hover:bg-yellow-350 text-stone-950 font-black py-4 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform flex items-center justify-center gap-2 text-base border-2 border-stone-950 uppercase tracking-widest"
              >
                <ShoppingBag className="w-5 h-5 fill-stone-950" />
                <span>CONFIRM ORDER ON WHATSAPP</span>
              </button>

              <p className="text-[10px] text-stone-500 text-center font-bold uppercase tracking-wide">
                Skip the lineup — Sizzling fresh pick-up guaranteed!
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Real-time beautiful success toast notification banner */}
      {successToast && (
        <div className="fixed bottom-24 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 bg-emerald-950 border border-emerald-500 text-emerald-250 py-4 px-5 rounded-2xl shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="bg-emerald-500 p-1.5 rounded-lg flex-shrink-0">
            <Check className="w-4 h-4 text-stone-950" />
          </div>
          <div>
            <p className="font-bold text-xs">ORDER ACTION TRIGGERED</p>
            <p className="text-[11px] text-emerald-400 font-medium leading-normal">{successToast}</p>
          </div>
        </div>
      )}

    </section>
  );
}
