/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Review, Benefit, FAQItem } from "./types";

// ==========================================
// 🍗 BIG ROOSTER GLOBAL CONFIGURATION
// Replace these placeholders with your actual details!
// ==========================================
export const BRAND_CONFIG = {
  name: "BIG ROOSTER",
  slogan: "Big Taste. Big Crunch. BIG ROOSTER.",
  
  // Replace with your real WhatsApp number (include country code, e.g., 675 for PNG)
  // PNG Format Example: "67570000000" (or leave as placeholder "675XXXXXXXX")
  whatsappNumber: "675XXXXXXXX", 
  
  // Replace with your real call number (include country code prefix, e.g., +675)
  phoneNumber: "+675XXXXXXXX", 
  
  // Operating Locations in PNG
  locations: [
    {
      name: "Boroko Drive-Thru & Diner",
      address: "Angau Drive, Boroko, Port Moresby, PNG",
      hours: "9:00 AM - 9:00 PM Daily",
      phone: "+675 325 0000"
    },
    {
      name: "Waigani Core",
      address: "Waigani Drive (Opposite National Parliament), Port Moresby, PNG",
      hours: "9:00 AM - 10:00 PM Daily",
      phone: "+675 325 1111"
    },
    {
      name: "Lae City Express",
      address: "Markham Road, Town Centre, Lae, PNG",
      hours: "9:00 AM - 8:30 PM Daily",
      phone: "+675 472 2222"
    }
  ],
  
  generalHours: "Mon - Sun: 9:00 AM - 9:00 PM",
  socials: {
    facebook: "https://facebook.com/bigroosterpng",
    instagram: "https://instagram.com/bigroosterpng",
  }
};

// Helper function to build custom WhatsApp pre-filled messaging links
export function generateWhatsAppLink(message: string): string {
  // Clean the number of any special characters
  const cleanNumber = BRAND_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export function generateDirectCallLink(): string {
  return `tel:${BRAND_CONFIG.phoneNumber}`;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "rooster-box",
    name: "Big Rooster Box",
    description: "2 Pieces of our signature crispy golden-fried chicken, dynamic hot chips, a soft buttered dinner roll, and a cold soft drink.",
    price: 25, // K25.00
    tag: "Most Popular",
    imagePlaceholder: "crispy fried chicken with fresh golden fries, dinner roll and soda in a red takeaway box",
    options: [
      {
        name: "Drink Selection",
        choices: ["Coca-Cola", "Fanta Orange", "Sprite", "Solo Lemon", "Bottled Water"]
      },
      {
        name: "Shaker Seasoning",
        choices: ["Signature Chicken Salt", "Spicy Chili Blast", "Classic Sea Salt"]
      }
    ]
  },
  {
    id: "rooster-chips",
    name: "Crispy Rooster & Chips",
    description: "Generous tender golden breast fillets or juicy leg portions, served hot with our legendary seasoned hot chips and dipping gravy.",
    price: 18, // K18.00
    tag: "Best Value",
    imagePlaceholder: "golden crunchy hot chips surrounded by big crispy chicken fillets and dipping sauce",
    options: [
      {
        name: "Chicken Style",
        choices: ["Classic Golden Crispy", "Spicy Red Rooster Heat"]
      },
      {
        name: "Sauce",
        choices: ["Legendary Gravy", "Sweet Chili", "Garlic Aioli", "Tomato Ketchup"]
      }
    ]
  },
  {
    id: "family-pack",
    name: "Family Rooster Pack",
    description: "8 pieces of hand-breaded crispy fried chicken, 2 large golden chips formats, 4 soft dinner rolls, large coleslaw or gravy, and a 1.5L soft drink.",
    price: 85, // K85.00
    tag: "Family Feast",
    imagePlaceholder: "massive sharing platter overflowing with 8 big fried chicken pieces, giant chips, 4 dinner buns and a large drink bottle",
    options: [
      {
        name: "Feast Sides",
        choices: ["Coleslaw & Gravy Mix", "Double Gravy", "Double Coleslaw", "Just Golden Chips"]
      },
      {
        name: "1.5L Drink selection",
        choices: ["Coke 1.5L", "Fanta 1.5L", "Sprite 1.5L"]
      }
    ]
  },
  {
    id: "office-pack",
    name: "Office Lunch Pack",
    description: "12 pieces of super crispy golden rooster, 2 massive boxes of seasoned chips, and 6 soft rolls. Perfect for groups, meetings, and workplace parties.",
    price: 110, // K110.00
    tag: "Party Pack",
    imagePlaceholder: "huge office sharing party pack containing 12 pieces of golden chicken, chips, and 6 warm butter buns",
    options: [
      {
        name: "Preparation Style",
        choices: ["All Original Crispy", "Mix of Classic & Spicy Hot", "All Spicy Red Rooster Heat"]
      }
    ]
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: "benefit-crispy",
    title: "Signature Golden Crunch",
    description: "Our Secret Double-Breaded Blend gives you the crispiest bite outside, while locking in the juiciest tender flavour inside.",
    iconName: "Flame"
  },
  {
    id: "benefit-fresh",
    title: "100% Locally Sourced & Fresh",
    description: "We work directly with local farms to prepare our rooster meals fresh daily. Never frozen, cooked in high-quality oil.",
    iconName: "CheckCircle2"
  },
  {
    id: "benefit-crowds",
    title: "Made for Big Appetites",
    description: "We do not believe in small portions! We serve real local sizes that satisfy your lunch, dinner, family feeds, and workers' cravings.",
    iconName: "Users"
  },
  {
    id: "benefit-catering",
    title: "Instant Group Feast Prep",
    description: "Whether it is an office presentation, local church, sports team celebration, or birthdays, we deliver box orders hot and right on-time.",
    iconName: "Utensils"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "review-1",
    name: "Jonathan K.",
    location: "Saru, Port Moresby",
    text: "Big Rooster has the absolute crunchiest coating! The Office Pack is our default team lunch every Friday. Always delivered steaming hot.",
    rating: 5,
    date: "Today",
    avatarSeed: "jonathan",
    verifiedOrder: "Office Lunch Pack"
  },
  {
    id: "review-2",
    name: "Elizabeth T.",
    location: "Boroko, NCD",
    text: "My kids absolutely love the Family Rooster Pack! The rolls are incredibly soft, and you get so much hot chicken for K85 compared to other fast-food places.",
    rating: 5,
    date: "2 days ago",
    avatarSeed: "elizabeth",
    verifiedOrder: "Family Rooster Pack"
  },
  {
    id: "review-3",
    name: "Gideon A.",
    location: "Lae Top Town",
    text: "Perfect lunch crunch! I grabbed the Big Rooster Box with spicy chili shaker seasoning today and it exceeded expectations. Free sauce upgrade was a great touch!",
    rating: 5,
    date: "Yesterday",
    avatarSeed: "gideon",
    verifiedOrder: "Big Rooster Box"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "How do I order online from BIG ROOSTER?",
    answer: "It is incredibly easy! Simply select your preferred Rooster Pack from our menu above, customize your choices, and click 'Order on WhatsApp'. It will generate a customized purchase message directly in your WhatsApp app. Send it, and our staff will immediately coordinate your order for collection or delivery!"
  },
  {
    question: "Do you offer delivery in Port Moresby and Lae?",
    answer: "Yes! Direct delivery can be arranged for large orders or catering. For quick individual takeaway, you can also order on WhatsApp for fast, skipped-queue pick up at your nearest Boroko, Waigani, or Lae outlet."
  },
  {
    question: "What is your average takeaway wait time?",
    answer: "Our chicken is freshly cooked throughout the day. Takeaway pickups booked via WhatsApp are typically ready in under 10–15 minutes, guaranteeing you get your rooster scaldingly fresh and sizzling."
  },
  {
    question: "How far in advance should I book Catering Pack orders?",
    answer: "For parties, meetings, or church events requiring more than 20 meals, we appreciate a 2 to 3 hour lead time. For exceptionally large events (50+ meals), ordering 24 hours in advance ensures prime timing and custom volume discount structures!"
  }
];
