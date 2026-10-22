import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import DomesticPage from './pages/DomesticPage';
import HomePage from './pages/HomePage';
import InternationalPage from './pages/InternationalPage';
import NotFoundPage from './pages/NotFoundPage';
import PackageDetailPage from './pages/PackageDetailPage';
import PackagesPage from './pages/PackagesPage';
import RentalsPage from './pages/RentalsPage';

export default function App() {
  const basename = import.meta.env.BASE_URL.replace(/\/$/, '');
  return (
    <BrowserRouter basename={basename || undefined}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/domestic" element={<DomesticPage />} />
          <Route path="/international" element={<InternationalPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:slug" element={<PackageDetailPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
