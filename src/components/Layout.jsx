import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FixedActions from './FixedActions';
import Footer from './Footer';
import Header from './Header';
import QuotePopup from './QuotePopup';
import ScrollExperience from './ScrollExperience';
import StructuredData from './StructuredData';

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <>
    <StructuredData />
    <a href="#main-start" className="sr-only focus:not-sr-only">Skip to content</a>
    <Header />
    <div id="main-start"><Outlet /></div>
    <Footer />
    <FixedActions />
    <ScrollExperience />
    <QuotePopup />
  </>;
}
