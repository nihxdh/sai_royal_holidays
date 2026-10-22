import { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { site } from '../content';
import { inquiryMessage, whatsappUrl } from '../lib/site';

export default function EnquiryForm({ destination, packageName }) {
  const [success, setSuccess] = useState(false);
  const submit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = {};
    data.forEach((value, key) => { fields[key] = String(value); });
    fields.Destination = fields.Destination || destination || '';
    fields['Package of interest'] = packageName || '';
    const message = inquiryMessage(fields);
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
    setSuccess(true);
  };
  return <form onSubmit={submit}>
    {success && <div className="form-notice" role="status">Your WhatsApp enquiry is ready in a new tab. If it did not open, use the WhatsApp button or call us directly.</div>}
    <div className="form-row"><label htmlFor="enq-name">Your name *</label><input id="enq-name" name="Name" required autoComplete="name" placeholder="Name"/></div>
    <div className="form-row"><label htmlFor="enq-phone">Phone number *</label><input id="enq-phone" name="Phone" required type="tel" autoComplete="tel" placeholder="+91"/></div>
    <div className="form-row"><label htmlFor="enq-date">Travel date</label><input id="enq-date" name="Travel dates" type="date"/></div>
    <div className="form-row"><label htmlFor="enq-travellers">Travellers</label><select id="enq-travellers" name="Travellers" defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select></div>
    <div className="form-row"><label htmlFor="enq-message">Anything else?</label><textarea id="enq-message" name="Message" placeholder="Tell us what you have in mind"/></div>
    <button type="submit" className="btn btn-gold">Continue on WhatsApp <MessageCircle size={16}/></button>
    {site.email && <a className="text-link" style={{ color: 'white', marginTop: 14 }} href={`mailto:${site.email}?subject=${encodeURIComponent(`Trip enquiry${packageName ? ` — ${packageName}` : ''}`)}`}>Or email your enquiry <ArrowUpRight size={14}/></a>}
  </form>;
}
