import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CancelPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
        className="text-center bg-slate-800/50 p-8 rounded-2xl shadow-2xl border border-red-500/30 max-w-lg"
      >
        <div className="flex justify-center mb-6">
          <XCircle className="w-20 h-20 text-red-500" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
          Payment Canceled
        </h1>
        <p className="text-gray-300 text-lg mb-8">
          Your order was canceled. You have not been charged.
        </p>
        <Link to="/#pricing">
          <Button 
            className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-3 px-6 rounded-lg text-lg transition-transform transform hover:scale-105"
            size="lg"
          >
            Return to Booking
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default CancelPage;