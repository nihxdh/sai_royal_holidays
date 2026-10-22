import { ChevronDown } from 'lucide-react';
import { faqs } from '../content';

export default function Faqs({ active, setActive }) {
  return <div className="faq-list">{faqs.map((faq, i) => <div className="accordion-item" key={faq.q}><button className="accordion-trigger" aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}>{faq.q}<ChevronDown size={18} style={{ transform: active === i ? 'rotate(180deg)' : undefined }}/></button>{active === i && <div className="accordion-content">{faq.a}</div>}</div>)}</div>;
}
