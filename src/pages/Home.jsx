import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
// About component removed
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

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
      {/* <About /> */} {/* Removed About component */}
      <Contact />
    </>
  );
};

export default Home;