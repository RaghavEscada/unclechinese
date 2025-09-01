import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(false), 5000);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: '#FDFCF8' }}
    >
      <div className="text-center flex flex-col items-center justify-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-0"
        >
          <motion.img
            src="/uclogo.png"
            alt="Uncle's Chinese"
            className="w-64 h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 object-contain mx-auto"
            animate={{ 
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        
        {/* Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
          className="mt-8 h-1 rounded-full max-w-xs mx-auto"
          style={{ backgroundColor: '#EC3237' }}
        />
      </div>
    </motion.div>
  );
} 