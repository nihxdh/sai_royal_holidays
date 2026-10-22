import { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { site } from '../content';
import { inquiryMessage, whatsappUrl } from '../lib/site';

export default function QuotePopup() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (window.sessionStorage.getItem('sai-quote-popup-dismissed')) return;
    const show = () => setOpen(true);
    const timer = window.setTimeout(show, 45000);
    const handleExit = (event) => {
      if (event.clientY <= 0 && event.relatedTarget === null) show();
    };
    window.addEventListener('mouseout', handleExit);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('mouseout', handleExit);
    };
  }, []);
  const dismiss = () => {
    window.sessionStorage.setItem('sai-quote-popup-dismissed', 'true');
    setOpen(false);
  };
  useEffect(() => {
    if (!open) return;
    const handleKey = (event) => { if (event.key === 'Escape') dismiss(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);
  if (!open) return null;
  const message = inquiryMessage({ Destination: 'I would like a free custom travel quote', From: site.city });
  return <div className="quote-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) dismiss(); }}>
    <section className="quote-dialog" role="dialog" aria-modal="true" aria-labelledby="quote-dialog-title">
      <button className="quote-close" aria-label="Close offer" onClick={dismiss}><X size={19}/></button>
      <span className="eyebrow">A little something to get started</span>
      <h2 id="quote-dialog-title">Your next journey, thoughtfully planned.</h2>
      <p>Tell us what you have in mind. Get a free custom quote in 2 hours.</p>
      <a className="btn btn-gold" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" onClick={dismiss}>Ask for a free quote <ArrowRight size={16}/></a>
    </section>
  </div>;
}
