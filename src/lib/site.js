import { site } from '../content';

export const navItems = [
  ['Home', '/'], ['About Us', '/about'], ['Domestic', '/domestic'], ['International', '/international'],
  ['Tour Packages', '/packages'], ['Rentals', '/rentals'], ['Contact Us', '/contact'],
];

export const headerNavItems = [
  ['Home', '/'], ['About Us', '/about'], ['Tour Packages', '/packages'],
];

export const pageMeta = {
  '/': { title: 'South India Tour Packages from Coimbatore | Sai Royal Holidays', description: 'Plan a personal South India holiday from Coimbatore with Sai Royal Holidays. Explore Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana and Puducherry with flexible itineraries.' },
  '/about': { title: 'About Sai Royal Holidays | South India Travel Planning', description: 'Meet Sai Royal Holidays, a Coimbatore-based travel company helping travellers plan holidays across South India with personal, practical trip planning.' },
  '/domestic': { title: 'Domestic Tour Packages from Coimbatore | Sai Royal Holidays', description: 'Explore Kerala, Tamil Nadu and destinations across India. Plan a domestic holiday with a flexible itinerary from Sai Royal Holidays.' },
  '/international': { title: 'International Tour Packages | Sai Royal Holidays', description: 'Explore international holiday ideas from Dubai and Singapore to Bali and beyond, with flight and visa assistance available on request.' },
  '/packages': { title: 'Kerala Tour Packages & Sample Itineraries | Sai Royal Holidays', description: 'Browse indicative sample tour packages for Munnar, Alleppey, Thekkady and more. Enquire to personalise your route, dates and inclusions.' },
  '/rentals': { title: 'Vehicle Rentals from Coimbatore | Sai Royal Holidays', description: 'Request a quote for sedan, SUV, Tempo Traveller, mini bus or luxury coach hire from Coimbatore. Share your route and travel dates.' },
  '/contact': { title: 'Contact Sai Royal Holidays | Plan a South India Trip', description: 'Contact Sai Royal Holidays to start planning your South India holiday from Coimbatore. Call or WhatsApp the published booking line for an enquiry.' },
};

export function whatsappUrl(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function inquiryMessage(values) {
  return `Hello Sai Royal Holidays, I would like to enquire about a trip.\n\n${Object.entries(values).filter(([, value]) => value.trim()).map(([key, value]) => `${key}: ${value}`).join('\n')}\n\nPlease share options and an indicative quote.`;
}
