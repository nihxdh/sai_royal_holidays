import { useState } from 'react';
import { Link } from 'react-router-dom';
import { domesticDestinations, internationalDestinations } from '../content';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';

export default function DestinationPage({ international = false }) {
  const [filter, setFilter] = useState('All');
  const data = international ? internationalDestinations : domesticDestinations;
  const visible = data.filter(item => filter === 'All' || (filter === 'Kerala first' ? item.name === 'Kerala' : item.name !== 'Kerala'));
  return <>
    <Seo path={international ? '/international' : '/domestic'}/>
    <PageHero kicker={international ? 'Beyond borders' : 'A little closer to home'} title={international ? 'The world, your way.' : 'India, full of possibility.'} text={international ? 'From a few days in the city to a longer island escape, let’s map out what feels right. Flight and visa assistance can be discussed for international plans.' : 'Kerala is our first recommendation from Coimbatore, but there is a whole country to explore. Start with a place and we’ll help shape the route.'}/>
    <main className="section page-content"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">{international ? 'Places to imagine' : 'Find your somewhere'}</span><h2>{international ? 'A world of routes.' : 'Where shall we begin?'}</h2></div><div className="filter-group" style={{ minWidth: 170, margin: 0 }}><label htmlFor="dest-filter">Explore</label><select id="dest-filter" value={filter} onChange={e => setFilter(e.target.value)}><option>All</option>{!international && <><option>Kerala first</option><option>Beyond Kerala</option></>}</select></div></div>
      <div className="destination-grid">{visible.map(place => <Link key={place.name} to={`/contact?destination=${encodeURIComponent(place.name)}`} className="destination-card"><img src={place.image} alt={`${place.name} travel destination`} loading="lazy"/><div className="destination-label"><small>{place.note}</small><h3>{place.name}</h3></div></Link>)}</div>
      {international && <div className="values-grid" style={{ marginTop: 50 }}><article className="value-card"><h3>Visa guidance</h3><p>Requirements depend on destination and traveller circumstances. We can discuss guidance and next steps when you enquire.</p></article><article className="value-card"><h3>Flight assistance</h3><p>Flight options and timing can be discussed as part of your international trip plan.</p></article><article className="value-card"><h3>Forex planning</h3><p>Ask us about practical foreign-exchange planning for your destination and travel dates.</p></article></div>}
    </div></main>
  </>;
}
