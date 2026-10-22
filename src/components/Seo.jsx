import { useEffect } from 'react';
import { images, site } from '../content';
import { pageMeta } from '../lib/site';

export default function Seo({ path, titleOverride, descriptionOverride }) {
  useEffect(() => {
    const meta = pageMeta[path] ?? { title: titleOverride ?? 'Tour Package | Sai Royal Holidays', description: descriptionOverride ?? 'Explore a flexible holiday itinerary from Sai Royal Holidays. Contact us for a tailored plan and confirmed quote.' };
    const title = titleOverride ?? meta.title;
    const description = descriptionOverride ?? meta.description;
    document.title = title;
    const setMeta = (selector, attr, value) => {
      let node = document.head.querySelector(selector);
      if (!node) {
        node = document.createElement('meta');
        document.head.appendChild(node);
      }
      node.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', 'name', 'description');
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title');
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description');
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url');
    setMeta('meta[property="og:url"]', 'content', `${site.canonical}${path}`);
    setMeta('meta[property="og:image"]', 'property', 'og:image');
    setMeta('meta[property="og:image"]', 'content', `${site.canonical}${images.hero}`);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description');
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image');
    setMeta('meta[name="twitter:image"]', 'content', `${site.canonical}${images.hero}`);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${site.canonical}${path}`;
  }, [path, titleOverride, descriptionOverride]);
  return null;
}
