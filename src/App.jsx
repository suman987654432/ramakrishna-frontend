import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';

// Components that are always visible on initial load should NOT be lazy loaded
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Navbar2 from './components/common/Navbar';
import Footer2 from './components/common/Footer';
import FloatingButtons from './components/FloatingButtons';
import MapSection from './components/HeroPage/MapSection';
import SEOUpdater from './components/SEOUpdater';
import ScrollToTop from './components/ScrollToTop';
import Privacy from './components/common/Privacy';
import Insurance from './components/common/Insurance';
import Terms from './components/common/Terms';

// Lazy load all pages so they only load when the user visits them
const LandingPage = lazy(() => import('./pages/LandingPage'));
const SpecialtyPage = lazy(() => import('./pages/SpecialtyPage'));
const DoctorsPages = lazy(() => import('./components/DoctorsPages'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AdsPage = lazy(() => import('./pages/AdsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Login = lazy(() => import('./pages/Login'));
const DoctorProfilePage = lazy(() => import('./components/DoctorProfilePage'));

const MainLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <FloatingButtons />
    <main className="flex-1">
      <Outlet />
    </main>
    <MapSection />
    <Footer />
  </div>
);

const AdsLayout = () => (
  <div className="font-canela min-h-screen flex flex-col">
    <FloatingButtons />
    <Navbar2 />
    <div className="flex-1">
      <Outlet />
    </div>
    <Footer2 />
  </div>
);

const App = () => {
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const API_BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:4000' : 'https://atreum.onrender.com';
        const res = await fetch(`${API_BASE_URL}/api/settings`);
        const data = await res.json();
        if (data) {
          if (data.faviconUrl) {
            let link = document.querySelector("link[rel~='icon']");
            if (!link) {
              link = document.createElement('link');
              link.rel = 'icon';
              document.getElementsByTagName('head')[0].appendChild(link);
            }
            link.href = data.faviconUrl;
          }
        }
      } catch (e) { console.error('Failed to load site settings:', e); }
    };
    fetchSettings();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SEOUpdater />
      <Suspense fallback={<div className="min-h-screen"></div>}>
        <Routes>
          {/* Main Website Layout */}
          <Route element={<MainLayout />}>
            <Route path='/' element={<LandingPage />} />
            <Route path='/department/:slug' element={<SpecialtyPage />} />
            <Route path='/doctors' element={<DoctorsPages />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/doctor-profile' element={<DoctorProfilePage />} />
            <Route path='/doctor-profile/:id' element={<DoctorProfilePage />} />
            <Route path="/privacy" element={<Privacy />} />

            <Route path="/insurance" element={<Insurance />} />
            <Route path="/terms" element={<Terms />} />

            {/* <Route path='/orthopedics' element={<Navigate to="/department/orthopedics" replace />} /> */}
          </Route>

          <Route path="/admin-login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/404" element={<NotFound />} />



          {/* Ads Pages - Dynamic routing (placed at the bottom to avoid conflicts with main routes) */}
          <Route element={<AdsLayout />}>
            <Route path='/:slug' element={<AdsPage />} />
          </Route>

          {/* Fallback for unknown routes */}
          <Route path="*" element={<Navigate to="/404" replace />} />

        </Routes>
      </Suspense>
    </BrowserRouter>

  );
};

export default App;
