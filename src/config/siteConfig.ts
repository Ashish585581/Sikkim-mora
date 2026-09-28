export interface SiteConfig {
  name: string;
  shortName: string;
  siteUrl: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsappNumber: string; // international format without + or spaces
  whatsappDisplay: string;
  email: string;
  address: {
    line1: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  operatingHours: string;
  workingDays: string;
  experienceYears: number;
  completedTrips: string;
  verifiedDrivers: string;
  rating: number;
  reviewCount: number;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
    whatsapp: string;
  };
}

const configuredPhone = (import.meta as any).env?.VITE_PHONE_NUMBER || "+919876543210";
const configuredPhoneDisplay = (import.meta as any).env?.VITE_PHONE_DISPLAY || "+91 98765 43210";
const configuredWhatsApp = (import.meta as any).env?.VITE_WHATSAPP_NUMBER || "919876543210";
const configuredWhatsAppDisplay = (import.meta as any).env?.VITE_WHATSAPP_DISPLAY || "+91 98765 43210";
const configuredEmail = (import.meta as any).env?.VITE_EMAIL || "info@example.com";
const configuredSiteUrl = (import.meta as any).env?.VITE_SITE_URL || "https://sikkimora.com";

export const siteConfig: SiteConfig = {
  name: "SIKKIMORA CAB SERVICE",
  shortName: "SIKKIMORA CAB SERVICE",
  siteUrl: configuredSiteUrl,
  tagline: "Reliable Car Rental & Taxi Services across Darjeeling, Sikkim & Kalimpong",
  phone: configuredPhone,
  phoneDisplay: configuredPhoneDisplay,
  whatsappNumber: configuredWhatsApp, // Single configuration location for WhatsApp number
  whatsappDisplay: configuredWhatsAppDisplay,
  email: configuredEmail,
  address: {
    line1: "Near Mall Road / Taxi Stand",
    area: "Gandhi Road",
    city: "Darjeeling",
    state: "West Bengal",
    pincode: "734101",
    country: "India",
    full: "Near Mall Road, Darjeeling, West Bengal 734101, India"
  },
  operatingHours: "24/7 Service (Customer Support: 6:00 AM - 10:00 PM)",
  workingDays: "Monday – Sunday (All 7 Days)",
  experienceYears: 12,
  completedTrips: "25,000+",
  verifiedDrivers: "50+",
  rating: 4.9,
  reviewCount: 1420,
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://x.com",
    whatsapp: `https://wa.me/${configuredWhatsApp}`
  }
};
