import { useState } from 'react';
import { ArrowRight, CarFront, MapPin, Phone } from 'lucide-react';
import { site } from '../content';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';
import { inquiryMessage, whatsappUrl } from '../lib/site';

const rentalOptions = [
  { name: 'Sedan', seats: 'Up to 4 guests', type: 'Air-conditioned', rate: 'Quote on request' },
  { name: 'SUV / Innova', seats: 'Up to 6 guests', type: 'Air-conditioned', rate: 'Quote on request' },
  { name: 'Tempo Traveller', seats: 'Multiple seating options', type: 'Air-conditioned options', rate: 'Quote on request' },
  { name: 'Mini Bus', seats: 'Group seating options', type: 'Air-conditioned options', rate: 'Quote on request' },
  { name: 'Luxury Coach', seats: 'Large group options', type: 'Comfort options', rate: 'Quote on request' },
];

export default function RentalsPage() {
  const [sent, setSent] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {};
    data.forEach((v, k) => { values[k] = String(v); });
    window.open(whatsappUrl(inquiryMessage({ 'Rental quote': 'Vehicle enquiry', ...values })), '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  return <><Seo path="/rentals"/><PageHero kicker="The road is part of the journey" title="A comfortable way there." text="Tell us your route, dates and group size. We’ll help you explore suitable vehicle options and share a quote to confirm."/><main className="page-content"><section className="section"><div className="container"><SectionHeading kicker="Choose your kind of ride" title="Room for the whole journey." text="Vehicle availability and final rates depend on route, dates, hours and passenger count. Ask for a tailored quote."/><div className="fleet-grid">{rentalOptions.map((vehicle) => <article className="fleet-card" key={vehicle.name}><div className="fleet-art"><CarFront size={54} strokeWidth={1.2}/></div><h3>{vehicle.name}</h3><div className="fleet-spec"><span>Capacity</span><strong>{vehicle.seats}</strong></div><div className="fleet-spec"><span>Comfort</span><strong>{vehicle.type}</strong></div><div className="fleet-spec"><span>Rate</span><strong>{vehicle.rate}</strong></div><a className="text-link" style={{ marginTop: 17 }} href="#rental-quote">Request a quote <ArrowRight size={15}/></a></article>)}</div></div></section>
    <section className="section soft-section" id="rental-quote"><div className="container contact-grid"><div><span className="eyebrow">Get a rental quote</span><h2 className="serif" style={{ color: '#2e0140', fontSize: '2.8rem', fontWeight: 500 }}>Where are we taking you?</h2><p style={{ color: '#716b71', fontSize: '.82rem', lineHeight: 1.8 }}>Share a few trip details. We’ll use them to understand the vehicle and route that might suit you.</p><div className="contact-line"><MapPin size={20}/><span>Planning from {site.city}, {site.region}</span></div><div className="contact-line"><Phone size={20}/><a href={`tel:${site.phoneLink}`}>{site.phoneDisplay}</a></div></div><form onSubmit={submit} className="contact-form form-light">
      {sent && <div className="form-notice wide" role="status">Your rental details are ready to send in WhatsApp.</div>}
      <div className="form-row"><label htmlFor="rent-name">Name *</label><input required id="rent-name" name="Name" autoComplete="name"/></div><div className="form-row"><label htmlFor="rent-phone">Phone *</label><input required id="rent-phone" name="Phone" type="tel" autoComplete="tel"/></div>
      <div className="form-row"><label htmlFor="rent-pickup">Pickup *</label><input required id="rent-pickup" name="Pickup" placeholder="City or pickup point"/></div><div className="form-row"><label htmlFor="rent-drop">Drop *</label><input required id="rent-drop" name="Drop" placeholder="Destination"/></div>
      <div className="form-row"><label htmlFor="rent-date">Travel date *</label><input required id="rent-date" name="Date" type="date"/></div><div className="form-row"><label htmlFor="rent-vehicle">Vehicle *</label><select required name="Vehicle" id="rent-vehicle" defaultValue=""><option value="" disabled>Select a vehicle</option>{rentalOptions.map(v => <option key={v.name}>{v.name}</option>)}</select></div>
      <div className="form-row"><label htmlFor="rent-travellers">Passengers</label><input id="rent-travellers" name="Passengers" type="number" min="1" placeholder="Number of passengers"/></div><div className="form-row"><label htmlFor="rent-notes">Additional details</label><input id="rent-notes" name="Additional details" placeholder="Return trip, stops, luggage..."/></div>
      <div className="wide"><button className="btn btn-purple" type="submit">Request quote on WhatsApp <ArrowRight size={16}/></button></div>
    </form></div></section></main></>;
}
