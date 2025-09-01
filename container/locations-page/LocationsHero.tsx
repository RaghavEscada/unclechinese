import React from 'react';
import { MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LocationsHero() {
  return (
    <section 
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center bg-black text-white py-20 px-4 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10 z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.1, 0.05],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className="absolute top-10 left-10 text-7xl text-gray-800">📍</div>
        <div className="absolute bottom-20 right-20 text-6xl text-gray-800">🏪</div>
        <div className="absolute top-1/2 left-1/4 text-5xl text-gray-800">🗺️</div>
        <div className="absolute bottom-10 left-1/3 text-4xl text-gray-800">🚩</div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Location Marker */}
        <div className="inline-flex items-center gap-2 mb-6">
          <MapPin 
            className="w-8 h-8 animate-pulse" 
            style={{ color: '#F5DF19' }} 
          />
          <motion.span 
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: '#F5DF19', fontFamily: 'NeueMontreal' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Discover Our Locations
          </motion.span>
          <MapPin 
            className="w-8 h-8 animate-pulse" 
            style={{ color: '#F5DF19' }} 
          />
        </div>

        {/* Main Heading */}
        <motion.h1 
          className="text-5xl md:text-7xl font-light leading-tight mb-8"
          style={{ fontFamily: 'Brice', color: '#F8F8F8' }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Explore <span style={{ color: '#F5DF19' }}>Uncle's Chinese</span>
          <br />
          <span className="text-3xl md:text-5xl">Locations</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          className="text-xl md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed mb-12"
          style={{ fontFamily: 'NeueMontreal', color: '#F8F8F8' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Six unique restaurant locations across Pune, each offering an authentic 
          Chinese dining experience with its own local charm and flavor.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [20, 0, 20]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <ChevronDown 
            className="w-10 h-10 text-[#F5DF19] animate-bounce" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
