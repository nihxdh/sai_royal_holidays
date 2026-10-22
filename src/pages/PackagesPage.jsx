import { useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { packages } from '../content';
import PackageGrid from '../components/PackageGrid';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';

export default function PackagesPage() {
  const [category, setCategory] = useState('All categories');
  const [duration, setDuration] = useState('Any duration');
  const [destination, setDestination] = useState('All destinations');
  const [budget, setBudget] = useState('Any budget');
  const filtered = useMemo(() => packages.filter(item => (category === 'All categories' || item.category === category || (category === 'International' && item.destination !== 'Kerala')) &&
    (duration === 'Any duration' || (duration === '1–3 days' ? item.days <= 3 : item.days >= 4)) &&
    (destination === 'All destinations' || item.destination === destination) &&
    (budget === 'Any budget' || (budget === 'Under ₹15,000' ? item.price < 15000 : item.price >= 15000))), [category, duration, destination, budget]);
  return <><Seo path="/packages"/><PageHero kicker="Find your next journey" title="A good place to start." text="Browse sample itineraries, then make them yours. Every displayed rate is indicative and confirmed pricing depends on your travel dates, group size and selected inclusions."/><main className="section page-content"><div className="container package-listing"><aside className="filters"><h3>Find a trip</h3><div className="filter-group"><label htmlFor="filter-category">Trip style</label><select id="filter-category" value={category} onChange={e => setCategory(e.target.value)}><option>All categories</option>{['Family', 'Honeymoon', 'Group', 'Educational', 'Corporate', 'Devotional', 'Camping', 'International'].map(x => <option key={x}>{x}</option>)}</select></div><div className="filter-group"><label htmlFor="filter-duration">Duration</label><select id="filter-duration" value={duration} onChange={e => setDuration(e.target.value)}><option>Any duration</option><option>1–3 days</option><option>4+ days</option></select></div><div className="filter-group"><label htmlFor="filter-destination">Destination</label><select id="filter-destination" value={destination} onChange={e => setDestination(e.target.value)}><option>All destinations</option><option>Kerala</option><option>Dubai</option></select></div><div className="filter-group"><label htmlFor="filter-budget">Indicative budget</label><select id="filter-budget" value={budget} onChange={e => setBudget(e.target.value)}><option>Any budget</option><option>Under ₹15,000</option><option>₹15,000 and above</option></select></div><button className="text-link" onClick={() => { setCategory('All categories'); setDuration('Any duration'); setDestination('All destinations'); setBudget('Any budget'); }}>Reset filters <X size={14}/></button></aside><div><p style={{ fontSize: '.72rem', color: '#766f77', margin: '0 0 17px' }}>{filtered.length} sample {filtered.length === 1 ? 'journey' : 'journeys'} · Indicative prices per person</p><PackageGrid list={filtered}/></div></div></main></>;
}
