import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PackageCard from './PackageCard';

export default function FeaturedCarousel({ list }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || list.length < 2) return;
    const timer = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;
      const first = track.firstElementChild;
      const step = (first?.getBoundingClientRect().width ?? track.clientWidth) + 18;
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 8) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 5200);
    return () => window.clearInterval(timer);
  }, [paused, list.length]);
  const move = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild;
    track.scrollBy({ left: direction * ((first?.getBoundingClientRect().width ?? track.clientWidth) + 18), behavior: 'smooth' });
  };
  return <div className="featured-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}>
    <div className="featured-track" ref={trackRef} aria-label="Featured tour packages">{list.map(item => <div className="featured-slide" key={item.slug}><PackageCard item={item}/></div>)}</div>
    <div className="carousel-controls"><span>Swipe to explore more journeys</span><div><button type="button" aria-label="Previous packages" onClick={() => move(-1)}><ArrowLeft size={17}/></button><button type="button" aria-label="Next packages" onClick={() => move(1)}><ArrowRight size={17}/></button></div></div>
  </div>;
}
