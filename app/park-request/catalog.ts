// Keep in sync with e7parks server/src/catalog.js and mobile/src/lib/catalog.ts
export const PARK_TYPES = {
  amusement_park: "Amusement park",
  theme_park: "Theme park",
  water_park: "Water park",
  child_playground: "Children's playground",
  indoor_play: "Indoor play zone / soft play",
  dinosaur_park: "Dinosaur / animatronic park",
  adventure_park: "Adventure park",
  snow_park: "Snow park",
  game_zone: "Arcade / VR game zone",
  other: "Other",
} as const;

export const TIMELINES = {
  asap: "As soon as possible",
  "3_6_months": "In 3–6 months",
  "6_12_months": "In 6–12 months",
  "12_plus_months": "More than a year away",
  exploring: "Just exploring",
} as const;

export const CONTACT_METHODS = {
  email: "Email",
  phone: "Phone call",
  whatsapp: "WhatsApp",
} as const;

export const CURRENCIES = ["INR", "USD", "AED", "EUR"] as const;

export type ParkType = keyof typeof PARK_TYPES;
export type Timeline = keyof typeof TIMELINES;
export type ContactMethod = keyof typeof CONTACT_METHODS;
export type Currency = (typeof CURRENCIES)[number];

export type Ticket = {
  ref: string;
  parkTypes: ParkType[];
  budget: number;
  currency: Currency;
  location: string;
  siteArea: string | null;
  expectedVisitors: number | null;
  timeline: Timeline;
  contactMethod: ContactMethod;
  notes: string | null;
  status: string;
  createdAt: string;
};
