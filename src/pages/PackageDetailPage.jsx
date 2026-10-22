import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Check, ChevronDown, MessageCircle } from 'lucide-react';
import { packages, site } from '../content';
import EnquiryForm from '../components/EnquiryForm';
import Lightbox from '../components/Lightbox';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';
import { inquiryMessage, whatsappUrl } from '../lib/site';
import NotFoundPage from './NotFoundPage';

export default function PackageDetailPage() {
  const { slug } = useParams();
  const item = packages.find(pkg => pkg.slug === slug);
  const [active, setActive] = useState(0);
  const [gallery, setGallery] = useState(null);
  if (!item) return <NotFoundPage />;
  const downloadItinerary = () => {
    const text = `${item.name}\n${item.days - 1} nights / ${item.days} days · ${item.destination}\nIndicative sample rate from ₹${item.price.toLocaleString('en-IN')} per person\n\n${item.itinerary.map(day => `${day.day} — ${day.title}\n${day.details}`).join('\n\n')}\n\nInclusions to discuss:\n${item.inclusions.map(entry => `• ${entry}`).join('\n')}\n\nSample itinerary and indicative rate only. Final itinerary, availability and price must be confirmed with Sai Royal Holidays. Call ${site.phoneDisplay}.`;
    const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.slug}-itinerary.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };
  const tripSchema = {
    '@context': 'https://schema.org', '@type': 'TouristTrip',
    name: item.name, description: item.summary, touristType: item.category,
    itinerary: item.itinerary.map((step) => ({
      '@type': 'ItemList', name: `${step.day}: ${step.title}`, description: step.details,
    })),
    provider: { '@type': 'TravelAgency', name: site.name, url: site.canonical },
    touristDestination: { '@type': 'TouristDestination', name: item.destination },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }}/><Seo path={`/packages/${item.slug}`} titleOverride={`${item.name} Tour Package | Sai Royal Holidays`} descriptionOverride={`${item.days - 1} nights / ${item.days} days ${item.name} itinerary from Coimbatore. Explore this sample route and enquire for a tailored, confirmed quote.`}/><PageHero kicker={`${item.destination} · ${item.days - 1} nights / ${item.days} days`} title={item.name} text={item.summary}/><main className="section page-content route-top"><div className="container detail-grid"><article>
    <div className="detail-hero"><img src={item.image} alt={`${item.name} tour destination landscape`} fetchPriority="high"/></div>
    <span className="eyebrow">A sample journey</span><h2 className="serif" style={{ color: '#2e0140', fontWeight: 500, fontSize: '2rem' }}>An itinerary with room to breathe.</h2><p style={{ color: '#716b71', fontSize: '.82rem', lineHeight: 1.85 }}>{item.summary} This sample route is a starting point: ask us to adjust the pace, stays and experiences for your group.</p>
    <h3 className="serif" style={{ color: '#2e0140', fontSize: '1.5rem', fontWeight: 500, marginTop: 35 }}>Your days, at a glance</h3><div className="itinerary">{item.itinerary.map((step, i) => <div className="accordion-item" key={step.day}><button className="accordion-trigger" aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span><span className="eyebrow" style={{ marginRight: 14 }}>{step.day}</span>{step.title}</span><ChevronDown size={18} style={{ transform: active === i ? 'rotate(180deg)' : undefined }}/></button>{active === i && <div className="accordion-content">{step.details}</div>}</div>)}</div>
    <h3 className="serif" style={{ color: '#2e0140', fontSize: '1.5rem', fontWeight: 500, marginTop: 35 }}>Included in the conversation</h3><div className="check-list">{item.inclusions.map(entry => <span key={entry}><Check size={15}/>{entry}</span>)}</div><p className="price-note">Exact inclusions, stay category, meal plan and transport are confirmed in your personalised quote. Flights, tickets and applicable fees may be additional unless confirmed in writing.</p>
    <h3 className="serif" style={{ color: '#2e0140', fontSize: '1.5rem', fontWeight: 500, marginTop: 38 }}>A few views along the way</h3><div className="detail-gallery">{item.gallery.map(src => <button key={src} onClick={() => setGallery(src)} aria-label="Open itinerary gallery image"><img src={src} alt={`${item.destination} journey landscape`} loading="lazy"/></button>)}</div>
    <a className="btn btn-purple" href={whatsappUrl(inquiryMessage({ Destination: item.destination, 'Package of interest': item.name }))} target="_blank" rel="noopener noreferrer">Request itinerary on WhatsApp <MessageCircle size={15}/></a>
  </article><aside className="enquiry-card"><span className="eyebrow" style={{ color: '#e2c56e' }}>Start a conversation</span><h3>Make this trip yours.</h3><p>Tell us a little about your plans. We’ll continue the conversation on WhatsApp.</p><span className="price-note" style={{ color: '#ddd2df' }}>Indicative sample rate from</span><div className="package-price">₹{item.price.toLocaleString('en-IN')}<small style={{ font: '400 .65rem Poppins', color: '#ddd2df' }}> / person</small></div><p className="price-note" style={{ color: '#ddd2df', marginTop: 8 }}>Not a confirmed offer. Final pricing depends on dates, availability and selected inclusions.</p><EnquiryForm destination={item.destination} packageName={item.name}/><button className="btn btn-outline" style={{ width: '100%', marginTop: 10 }} onClick={downloadItinerary}>Download itinerary</button></aside></div></main>{gallery && <Lightbox src={gallery} onClose={() => setGallery(null)}/>}</>;
}
