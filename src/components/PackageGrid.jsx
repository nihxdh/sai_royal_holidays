import { CircleHelp } from 'lucide-react';
import PackageCard from './PackageCard';

export default function PackageGrid({ list }) {
  if (!list.length) return <div className="empty-state"><CircleHelp size={28}/><h3>No journeys match just yet</h3><p>Try a broader filter or get in touch to plan a custom route.</p></div>;
  return <div className="package-grid">{list.map(item => <PackageCard key={item.slug} item={item}/>)}</div>;
}
