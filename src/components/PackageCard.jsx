import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function PackageCard({ item }) {
  return <article className="package-card"><Link to={`/packages/${item.slug}`} aria-label={`View ${item.name} package`}><div className="package-image"><img src={item.image} alt={`${item.name} tour landscape`} loading="lazy"/><span className="package-tag">{item.category} · {item.destination}</span><span className="package-days">{item.days - 1} nights / {item.days} days</span></div></Link><div className="package-body"><span className="package-place">{item.destination} · From Coimbatore</span><h3><Link to={`/packages/${item.slug}`}>{item.name}</Link></h3><p>{item.summary}</p><div className="package-foot"><div><span className="price-note">Indicative from</span><span className="package-price">₹{item.price.toLocaleString('en-IN')}<small style={{ font: '400 .61rem Poppins', color: '#77717a' }}> / person</small></span></div><Link className="text-link" to={`/packages/${item.slug}`} aria-label={`View ${item.name} details`}>View <ArrowRight size={15}/></Link></div></div></article>;
}
