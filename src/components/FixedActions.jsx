import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { site } from '../content';
import { inquiryMessage, whatsappUrl } from '../lib/site';

export default function FixedActions() {
  const message = inquiryMessage({ Destination: 'Please help me plan a trip', From: site.city });
  return <>
    <a className="float-whatsapp" aria-label="Enquire on WhatsApp" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={23}/></a>
    <nav className="mobile-cta" aria-label="Quick contact"><a href={`tel:${site.phoneLink}`}><Phone size={15}/>Call</a><a href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer"><MessageCircle size={15}/>WhatsApp</a><Link to="/contact"><Sparkles size={15}/>Enquire</Link></nav>
  </>;
}
