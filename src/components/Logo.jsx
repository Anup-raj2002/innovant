import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Activity className="h-7 w-7 mr-2 text-primary-500" />
      <span className="text-2xl font-bold text-gray-800">
        Innovant
      </span>
    </motion.div>
  );
};

export default Logo;