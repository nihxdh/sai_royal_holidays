import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { site } from '../content';
import { navItems } from '../lib/site';
import Mark from './Mark';

export default function Footer() {
  return <>
    <section className="final-cta"><div className="container final-inner">
      <div><span className="eyebrow" style={{ color: '#e2c56e' }}>YOUR NEXT CHAPTER STARTS HERE</span><h2>Tell us what a good holiday looks like to you.</h2></div>
      <Link className="btn btn-gold" to="/contact">Start planning <ArrowRight size={16}/></Link>
    </div></section>
    <footer className="footer"><div className="container">
      <div className="footer-grid">
        <div><Link to="/"><Mark /></Link><p>Journeys crafted around the places you want to see and the way you want to travel. Planning from Coimbatore, with South India close to heart.</p></div>
        <div><h4>Explore</h4><div className="footer-links">{navItems.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</div></div>
        <div><h4>Plan a journey</h4><div className="footer-links"><Link to="/packages">South India packages</Link><Link to="/domestic">Domestic holidays</Link><Link to="/international">International travel</Link><Link to="/rentals">Vehicle rentals</Link></div></div>
        <div><h4>Speak with us</h4><div className="footer-links"><a href={`tel:${site.phoneLink}`}>{site.phoneDisplay}</a><span>{site.city}, {site.region}</span>{site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}<span>{site.workingHours}</span></div></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Sai Royal Holidays</span><span>Indicative packages are subject to availability and confirmation.</span></div>
    </div></footer>
  </>;
}
