import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { inquiryMessage, whatsappUrl } from '../lib/site';

export default function SearchBar() {
  const [destination, setDestination] = useState('South India');
  const [tour, setTour] = useState('Family');
  const [date, setDate] = useState('');
  const [travellers, setTravellers] = useState('2');
  const submit = (event) => {
    event.preventDefault();
    const link = whatsappUrl(inquiryMessage({ Destination: destination, 'Tour type': tour, Dates: date || 'Flexible', Travellers: travellers }));
    window.open(link, '_blank', 'noopener,noreferrer');
  };
  return <form className="hero-search" onSubmit={submit} aria-label="Find your holiday">
    <div className="search-field"><label htmlFor="destination-search">Where to?</label><select id="destination-search" value={destination} onChange={e => setDestination(e.target.value)}><option>South India</option><option>Tamil Nadu</option><option>Kerala</option><option>Karnataka</option><option>Andhra Pradesh</option><option>Telangana</option><option>Pondicherry</option><option>Not sure yet</option></select></div>
    <div className="search-field"><label htmlFor="tour-search">Your kind of trip</label><select id="tour-search" value={tour} onChange={e => setTour(e.target.value)}>{['Family', 'Honeymoon', 'Group', 'Educational', 'Corporate', 'Devotional', 'Camping'].map(x => <option key={x}>{x}</option>)}</select></div>
    <div className="search-field"><label htmlFor="date-search">Travel dates</label><input id="date-search" type="date" value={date} onChange={e => setDate(e.target.value)} aria-label="Travel date"/></div>
    <div className="search-field"><label htmlFor="traveller-search">Travellers</label><select id="traveller-search" value={travellers} onChange={e => setTravellers(e.target.value)}>{['1', '2', '3', '4', '5', '6', '7+'].map(x => <option key={x} value={x}>{x} {x === '1' ? 'guest' : 'guests'}</option>)}</select></div>
    <button className="search-submit" aria-label="Enquire on WhatsApp"><ArrowRight /></button>
  </form>;
}
