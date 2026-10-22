import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHero from '../components/PageHero';
import Seo from '../components/Seo';

export default function NotFoundPage() {
  return <><Seo path="/not-found"/><PageHero kicker="A little detour" title="This page wandered off." text="Let’s get you back to the journeys, or start planning a new one."/><main className="section"><div className="container"><Link className="btn btn-purple" to="/">Back to the beginning <ArrowLeft size={16}/></Link></div></main></>;
}
