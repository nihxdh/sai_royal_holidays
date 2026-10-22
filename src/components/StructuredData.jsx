import { useLocation } from 'react-router-dom';
import { faqs, site } from '../content';

export default function StructuredData() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, '') || '/';
  const address = {
    '@type': 'PostalAddress', addressLocality: site.city,
    addressRegion: site.region, addressCountry: 'IN',
  };
  const agency = {
    '@context': 'https://schema.org', '@type': 'TravelAgency',
    '@id': `${site.canonical}/#agency`, name: site.name, url: site.canonical,
    telephone: site.phoneDisplay, address,
    areaServed: [
      { '@type': 'City', name: site.city },
      { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
      { '@type': 'AdministrativeArea', name: 'Kerala' },
      { '@type': 'AdministrativeArea', name: 'Karnataka' },
      { '@type': 'AdministrativeArea', name: 'Andhra Pradesh' },
      { '@type': 'AdministrativeArea', name: 'Telangana' },
      { '@type': 'AdministrativeArea', name: 'Puducherry' },
    ],
  };
  const localBusiness = {
    '@context': 'https://schema.org', '@type': 'LocalBusiness',
    '@id': `${site.canonical}/#local-business`, name: site.name, url: site.canonical,
    telephone: site.phoneDisplay, address, parentOrganization: { '@id': agency['@id'] },
  };
  const data = [agency, localBusiness];
  if (path === '/') {
    data.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question', name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}/>;
}
