import React from 'react';
import { Helmet } from 'react-helmet';

// FIXED — Removed alias imports, replaced with relative paths
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import Pricing from '../components/Pricing.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>MailRun - Helping You Save Time!</title>
        <meta name="description" content="MailRun Orlando – Fast Courier & Pickup Service." />
      </Helmet>

      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
