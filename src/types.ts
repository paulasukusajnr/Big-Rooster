/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in Kina (K)
  tag?: string; // e.g. "Signature", "Best Seller", "Value Pack"
  imagePlaceholder: string; // Describes the appetizing image
  options?: {
    name: string;
    choices: string[];
    priceModifiers?: number[];
  }[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
  avatarSeed: string;
  verifiedOrder: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
