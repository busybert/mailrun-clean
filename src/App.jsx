import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Reviews from '@/pages/Reviews';
import TermsAndConditions from '@/pages/TermsAndConditions';
import SuccessPage from '@/pages/SuccessPage';
import CancelPage from '@/pages/CancelPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        setTimeout(() => window.scrollTo({ top: y, behavior: 'smooth' }), 100);
      }
    } else {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
          </Routes>
        </AnimatePresence>
      </Layout>
      <Toaster />
    </>
  );
}

export default App;