import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, Clock3, MapPin, MessageCircle, Phone } from 'lucide-react';
import { site } from '../content';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { inquiryMessage, whatsappUrl } from '../lib/site';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [params] = useSearchParams();
  const preset = params.get('destination') ?? '';
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {};
    data.forEach((v, k) => { values[k] = String(v); });
    window.open(whatsappUrl(inquiryMessage(values)), '_blank', 'noopener,noreferrer');
    setSent(true);
  };
  return <><Seo path="/contact"/><PageHero kicker="Let’s start somewhere" title="Tell us what you’re dreaming of." text="Ooty or Hampi, Kerala or Pondicherry, a temple trail or a long-overdue holiday. Share a few details and let’s shape a South India journey together."/><main className="section page-content"><div className="container contact-grid"><aside className="contact-panel"><span className="eyebrow" style={{ color: '#e2c56e' }}>A real person, a good plan</span><h2>We’re here to talk it through.</h2><p>Call or WhatsApp the published booking line. We plan from Coimbatore across South India—and we don’t need a perfect plan, just a place to begin.</p><div className="contact-line"><Phone size={20}/><div><strong>Call us</strong><br /><a href={`tel:${site.phoneLink}`}>{site.phoneDisplay}</a></div></div><div className="contact-line"><MessageCircle size={20}/><div><strong>WhatsApp</strong><br /><a href={whatsappUrl(inquiryMessage({ Destination: preset || 'Please help me plan a trip' }))} target="_blank" rel="noopener noreferrer">Send a trip enquiry</a></div></div><div className="contact-line"><MapPin size={20}/><div><strong>Planning from</strong><br />{site.city}, {site.region}, {site.country}</div></div><div className="contact-line"><Clock3 size={20}/><div><strong>Availability</strong><br />{site.workingHours}</div></div>{site.email && <div className="contact-line"><MessageCircle size={20}/><a href={`mailto:${site.email}`}>{site.email}</a></div>}<p style={{ borderTop: '1px solid #ffffff25', paddingTop: 18, marginTop: 28 }}>We’ll confirm any availability, inclusions and pricing before you book.</p></aside>
    <form className="contact-form form-light" onSubmit={submit}>{sent && <div className="form-notice wide" role="status">Your enquiry is ready in WhatsApp. If it did not open, call us on {site.phoneDisplay}.</div>}
      <div className="form-row"><label htmlFor="contact-name">Name *</label><input id="contact-name" required name="Name" autoComplete="name" placeholder="Your name"/></div><div className="form-row"><label htmlFor="contact-phone">Phone *</label><input id="contact-phone" required name="Phone" type="tel" autoComplete="tel" placeholder="+91"/></div>
      <div className="form-row"><label htmlFor="contact-email">Email</label><input id="contact-email" name="Email" type="email" autoComplete="email" placeholder="Optional"/></div><div className="form-row"><label htmlFor="contact-type">Trip type</label><select id="contact-type" name="Tour type" defaultValue=""><option value="">Choose one</option>{['Family holiday', 'Honeymoon', 'Group tour', 'Educational tour', 'Corporate', 'Devotional', 'Camping', 'International', 'Vehicle rental', 'Not sure yet'].map(x => <option key={x}>{x}</option>)}</select></div>
      <div className="form-row"><label htmlFor="contact-destination">Destination</label><input id="contact-destination" name="Destination" defaultValue={preset} placeholder="Ooty, Kerala, Hampi, Pondicherry…"/></div><div className="form-row"><label htmlFor="contact-travel-date">Travel dates</label><input id="contact-travel-date" name="Travel dates" type="date"/></div>
      <div className="form-row"><label htmlFor="contact-travellers">Travellers</label><select name="Travellers" id="contact-travellers" defaultValue=""><option value="">Select</option>{['1', '2', '3', '4', '5', '6', '7+'].map(x => <option key={x}>{x}</option>)}</select></div><div className="form-row"><label htmlFor="contact-message">What should we know?</label><input id="contact-message" name="Message" placeholder="Your ideas, questions or preferences"/></div>
      <div className="wide"><button className="btn btn-purple" type="submit">Send enquiry on WhatsApp <ArrowRight size={16}/></button>{site.email && <p style={{ fontSize: '.7rem', color: '#726a74' }}>Or email us at <a href={`mailto:${site.email}`}>{site.email}</a></p>}<p style={{ fontSize: '.65rem', color: '#817982', lineHeight: 1.6 }}>Submitting opens a WhatsApp message with the details you entered; nothing is stored by this website.</p></div>
    </form></div>
    <div className="container map-wrap"><iframe title="Map showing Coimbatore, Tamil Nadu" src="https://www.google.com/maps?q=Coimbatore,+Tamil+Nadu&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div>
  </main></>;
}
