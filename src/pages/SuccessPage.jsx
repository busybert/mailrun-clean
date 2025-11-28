import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const SuccessPage = () => {
  return (
    <>
      <Helmet>
        <title>Booking Confirmed! - MailRun-Orlando.com</title>
        <meta name="description" content="Your booking has been placed successfully." />
      </Helmet>
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 max-w-2xl"
        >
          <CheckCircle className="h-24 w-24 text-green-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Thank You!
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Your booking is confirmed! We've sent a confirmation email to you.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold">
            <Link to="/">Back to Home</Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessPage;