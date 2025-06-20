import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-4"
        >
          <Activity className="h-12 w-12 text-primary-600 mr-2" />
          <span className="text-3xl font-bold text-gray-800">Innovant</span>
        </motion.div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-1 bg-primary-600 rounded-full max-w-xs mx-auto"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-gray-600"
        >
          Loading engineering excellence...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;