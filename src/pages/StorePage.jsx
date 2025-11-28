import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import ProductsList from '@/components/ProductsList';

const StorePage = () => {
  return (
    <>
      <Helmet>
        <title>Store - MailRun-Orlando.com</title>
        <meta name="description" content="Browse our collection of products." />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Store</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our exclusive products and services.
          </p>
        </motion.div>
        <ProductsList />
      </div>
    </>
  );
};

export default StorePage;