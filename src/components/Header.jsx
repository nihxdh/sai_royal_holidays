import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Menu, Phone, X } from 'lucide-react';
import { site } from '../content';
import { headerNavItems } from '../lib/site';
import Mark from './Mark';

export default function Header() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 25);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const key = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = prior; window.removeEventListener('keydown', key); };
  }, [open]);
  return <>
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" aria-label="Sai Royal Holidays home"><Mark /></Link>
        <nav className="nav-links" aria-label="Main navigation">
          {headerNavItems.map(([label, href]) => <Link key={href} to={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>)}
          <Link className="btn btn-gold" to="/contact">Book Now <ArrowUpRight size={15}/></Link>
        </nav>
        <button className="menu-toggle" aria-label="Open navigation menu" aria-expanded={open} onClick={() => setOpen(true)}><Menu size={25}/></button>
      </div>
    </header>
    {open && <button className="drawer-scrim" aria-label="Close menu" onClick={() => setOpen(false)}/>}
    <aside className={`mobile-drawer ${open ? 'open' : ''}`} aria-label="Mobile navigation" aria-hidden={!open}>
      <div className="drawer-top"><Link to="/" aria-label="Sai Royal Holidays home"><Mark /></Link><button className="drawer-close" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button></div>
      <nav className="drawer-links">{headerNavItems.map(([label, href]) => <Link key={href} to={href}>{label}<ArrowRight size={16}/></Link>)}</nav>
      <div className="drawer-ctas"><Link className="btn btn-gold" to="/contact">Plan a trip <ArrowUpRight size={16}/></Link><a className="btn btn-purple" href={`tel:${site.phoneLink}`}><Phone size={16}/> {site.phoneDisplay}</a></div>
    </aside>
  </>;
}
