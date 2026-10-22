import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, BookOpen, BriefcaseBusiness, Heart, House, Landmark, Tent, Users } from 'lucide-react';
import { images, packages, services } from '../content';
import Faqs from '../components/Faqs';
import FeaturedCarousel from '../components/FeaturedCarousel';
import Lightbox from '../components/Lightbox';
import SearchBar from '../components/SearchBar';
import SectionHeading from '../components/SectionHeading';
import Seo from '../components/Seo';

const iconMap = {
  book: <BookOpen size={21} />, users: <Users size={21} />, briefcase: <BriefcaseBusiness size={21} />,
  heart: <Heart size={21} />, landmark: <Landmark size={21} />, house: <House size={21} />, tent: <Tent size={21} />,
};

export default function HomePage() {
  const [gallery, setGallery] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);
  const galleryImages = [images.tea, images.houseboat, images.temple, images.mysore, images.beach, images.hampi];
  return <>
    <Seo path="/" />
    <section className="hero">
      <img className="hero-image" src={images.hero} alt="Mysore Palace in Karnataka, a landmark of South India travel" fetchPriority="high" />
      <div className="hero-content"><div className="hero-kicker">Coimbatore to South India</div><h1>Go where<br />the <em>story</em> takes you.</h1><p className="hero-copy">Thoughtful journeys across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. Planned from Coimbatore, made personal.</p><div className="hero-actions"><Link to="/packages" className="btn btn-gold">Explore journeys <ArrowRight size={16} /></Link><Link to="/about" className="btn btn-outline">Our way of travel</Link></div></div>
      <div className="hero-bottom-note">SOUTH INDIA, AT YOUR OWN PACE <ArrowDown size={12} style={{ display: 'inline', marginLeft: 7 }} /></div><div className="hero-index"><span>01</span> / JOURNEYS, MADE PERSONAL</div>
      <SearchBar />
    </section>
    <main>
      <section className="section"><div className="container intro-grid">
        <div className="intro-art"><div className="intro-photo"><img src={images.temple} alt="Dravidian temple gopuram glowing at sunrise in South India" loading="lazy" /></div><div className="photo-stamp"><span>South</span><span>From the Nilgiris to the coast</span></div></div>
        <div className="intro-copy"><span className="eyebrow">A more personal way to go</span><h2>Big on feeling.<br />Easy on the details.</h2><p>Start in Coimbatore. Take the road into the Nilgiris, follow temple towns across Tamil Nadu, find quiet on Kerala’s water, or wander Karnataka’s heritage and coffee country. We help bring your route, stay and travel details into one considered plan.</p><p>Tell us how you like to travel. We’ll help shape a South India journey around it—never one-size-fits-all.</p><Link className="text-link" to="/about">Get to know us <ArrowRight size={16} /></Link><div className="stats-strip"><div className="stat"><strong>South India</strong><span>OUR CLOSE-TO-HOME SPECIALTY</span></div><div className="stat"><strong>Your pace</strong><span>FLEXIBLE TRIP PLANNING</span></div><div className="stat"><strong>From here</strong><span>PLANNING IN COIMBATORE</span></div></div></div>
      </div></section>
      <section className="section soft-section"><div className="container"><SectionHeading kicker="Ways to wander" title="The right kind of trip, for your kind of people." text="From a family escape to a school group on the move, every journey starts with listening." /><div className="service-grid">{services.map(item => <article className="service-card" key={item.title}><div className="service-icon">{iconMap[item.icon]}</div><h3>{item.title}</h3><p>{item.text}</p><Link className="service-link" to="/contact" aria-label={`Enquire about ${item.title}`}>Enquire <ArrowRight size={14} /></Link></article>)}</div></div></section>
      <section className="section"><div className="container"><SectionHeading kicker="A little closer to home" title="Seven shades of the South." text="Hill stations, temple towns, coffee country, backwaters and coast. Find the South India that feels like yours." action={<Link className="text-link" to="/domestic">Explore destinations <ArrowRight size={16} /></Link>} /><div className="destination-grid home-destinations">{[
        ['Ooty', 'Nilgiri mornings & tea air', images.tea], ['Kerala', 'Backwaters, hills & coast', images.houseboat], ['Hampi', 'Stone, sky and old stories', images.hampi], ['Coorg', 'Coffee country & mist', images.hills], ['Pondicherry', 'Quiet streets by the sea', images.pondicherry], ['Mysore', 'Palaces and unhurried heritage', images.mysore], ['Hyderabad', 'Old city light & flavour', images.hyderabad],
      ].map(([name, note, image]) => <Link to="/packages" className="destination-card" key={name}><img src={image} alt={`${name}, South India`} loading="lazy" /><div className="destination-label"><small>{note}</small><h3>{name}</h3></div></Link>)}</div></div></section>
      <section className="section soft-section"><div className="container"><SectionHeading kicker="A place to begin" title="Routes worth lingering over." text="Sample journeys across South India to spark an idea. Every itinerary can be adjusted to your dates and style." action={<Link className="text-link" to="/packages">All sample journeys <ArrowRight size={16} /></Link>} /><FeaturedCarousel list={packages} /></div></section>
      <section className="section"><div className="container"><SectionHeading kicker="The good stuff, without the guesswork" title="A little more thought in every detail." /><div className="values-grid">{[
        ['Your trip, your rhythm', 'Choose a relaxed route or fill the days with discovery. The plan starts with what matters to you.'],
        ['Clarity before you go', 'We talk through the route, stay options and what is included before you decide.'],
        ['A real conversation', 'Questions are welcome. Tell us what you need, and we’ll help you work through the details.'],
        ['The South, thoughtfully', 'From Nilgiri roads to houseboat nights and temple towns, we make room for the moments between the stops.'],
        ['Room to make it yours', 'The sample itineraries are starting points, not a rulebook.'],
        ['A journey from here', 'Planning a South India trip from Coimbatore? Start with a route that makes sense for you.'],
      ].map(([title, text]) => <article className="value-card" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="section soft-section"><div className="container"><SectionHeading kicker="Four simple steps" title="From first thought to going places." /><div className="counter-grid">{[['01', 'Tell us the idea'], ['02', 'Shape your route'], ['03', 'Review the details'], ['04', 'Get ready to go']].map(([n, t]) => <div key={n}><strong>{n}</strong><span>{t}</span></div>)}</div></div></section>
      {/* <section className="section"><div className="container"><SectionHeading kicker="A few moments in between" title="Take a look around the South." text="A small collection of landscapes to get you dreaming." /><div className="gallery-grid">{galleryImages.map((src, i) => <button key={src} onClick={() => setGallery(src)} aria-label={`View South India travel photograph ${i + 1}`}><img src={src} alt={['Tea plantations in the Nilgiris', 'Houseboat on Kerala backwaters', 'Temple gopuram in South India', 'Mysore Palace, Karnataka', 'A South Indian shoreline', 'Stone chariot at Hampi'][i]} loading="lazy" /></button>)}</div></div></section> */}
      <section className="section"><div className="container faq-grid"><div><span className="eyebrow">Before you set off</span><h2 className="serif" style={{ color: '#2e0140', fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 500 }}>A few good questions.</h2><p style={{ color: '#716b71', fontSize: '.8rem', lineHeight: 1.8 }}>Not sure where to start? These might help.</p><Link className="text-link" to="/contact">Ask us directly <ArrowRight size={16} /></Link></div><Faqs active={activeFaq} setActive={setActiveFaq} /></div></section>
    </main>
    {gallery && <Lightbox src={gallery} onClose={() => setGallery(null)} />}
  </>;
}
