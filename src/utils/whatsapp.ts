import { siteConfig } from '../config/siteConfig';

export interface BookingFormData {
  pickupLocation: string;
  destination: string;
  travelDate: string;
  passengers: string;
  serviceType: string;
  vehiclePreference?: string;
  additionalNotes?: string;
}

/**
 * Encodes text and creates standard WhatsApp URL for direct chat
 */
export function getWhatsAppChatUrl(customMessage?: string): string {
  const defaultMessage = `Hello, I would like to enquire about taxi and car rental services in Darjeeling & Sikkim.`;
  const message = customMessage || defaultMessage;
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds formatted WhatsApp message for the Hero / Main Booking Form
 */
export function buildBookingWhatsAppUrl(data: BookingFormData): string {
  const lines = [
    `*Taxi & Car Rental Inquiry - ${siteConfig.shortName}*`,
    ``,
    `Hello, I would like to enquire about a taxi/car rental.`,
    ``,
    `📍 *Pickup:* ${data.pickupLocation || 'Not specified'}`,
    `🏁 *Destination:* ${data.destination || 'Not specified'}`,
    `📅 *Travel Date:* ${data.travelDate || 'Not specified'}`,
    `👥 *Passengers:* ${data.passengers || '1-4'}`,
    `🚖 *Service Type:* ${data.serviceType || 'Taxi Service'}`,
  ];

  if (data.vehiclePreference && data.vehiclePreference !== 'any') {
    lines.push(`🚗 *Preferred Vehicle:* ${data.vehiclePreference}`);
  }

  if (data.additionalNotes && data.additionalNotes.trim() !== '') {
    lines.push(`📝 *Notes:* ${data.additionalNotes.trim()}`);
  }

  lines.push(``);
  lines.push(`Please share availability and pricing.`);

  const message = lines.join('\n');
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds formatted WhatsApp message for specific vehicle booking
 */
export function buildCarBookingUrl(carName: string, startingPrice: string): string {
  const message = [
    `*Car Booking Inquiry - ${carName}*`,
    ``,
    `Hello, I am interested in booking the *${carName}* (${startingPrice}).`,
    ``,
    `Please share vehicle availability, itinerary rates, and driver details.`,
    ``,
    `Thank you!`
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds formatted WhatsApp message for route / pricing booking
 */
export function buildRouteBookingUrl(route: string, vehicleType: string, startingPrice: string): string {
  const message = [
    `*Route Fare Inquiry - ${route}*`,
    ``,
    `Hello, I want to book a taxi for the route:`,
    `📍 *Route:* ${route}`,
    `🚗 *Vehicle Type:* ${vehicleType}`,
    `💰 *Estimated Fare:* ${startingPrice}`,
    ``,
    `Please confirm the exact fare and car availability for my travel dates.`
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds formatted WhatsApp message for travel package
 */
export function buildPackageBookingUrl(packageName: string, duration: string, startingPrice: string): string {
  const message = [
    `*Tour Package Inquiry - ${packageName}*`,
    ``,
    `Hello, I am interested in the *${packageName}* (${duration}) package starting at ${startingPrice}.`,
    ``,
    `Please send me the detailed day-wise itinerary, inclusions, and vehicle options.`
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds formatted WhatsApp message for popular destination taxi
 */
export function buildDestinationBookingUrl(destinationName: string): string {
  const message = [
    `*Destination Taxi Inquiry - ${destinationName}*`,
    ``,
    `Hello, I am planning to travel to *${destinationName}*.`,
    `Please provide taxi options, permit assistance, and approximate fare.`
  ].join('\n');

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
