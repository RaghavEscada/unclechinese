"use client";
import React from 'react';
import { MapPin, Utensils } from 'lucide-react';
import Video from 'next-video';
import herobg from '/videos/herobg.mp4';

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden py-8"
      id="hero"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <Video
          src={herobg}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) contrast(1.1)' }}
        />
        
        {/* Subtle overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(44, 71, 59, 0.3) 50%, rgba(0, 0, 0, 0.5) 100%)'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-16">
          <img
            src="/uclogo.png"
            alt="Uncle's Chinese"
            className="w-72 h-54 md:w-88 md:h-66 lg:w-[28rem] lg:h-[21rem] xl:w-[36rem] xl:h-[27rem] 2xl:w-[44rem] 2xl:h-[33rem] object-contain filter drop-shadow-2xl"
          />
        </div>
        
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-[0.9] tracking-tight relative text-white" style={{ fontFamily: 'Brice' }}>
            <span className="block mb-2">AUTHENTIC</span>
            <span className="block">CHINESE CUISINE</span>
          </h1>
        </div>

        {/* Call to Action Buttons */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-6">
            {/* View Menu Button */}
            <button 
              type="button"
              className="group relative w-28 h-28 rounded-full transition-all duration-700 shadow-2xl hover:shadow-[0_0_40px_rgba(236,50,55,0.4)] overflow-hidden border-2 border-white/30"
              style={{ 
                background: 'linear-gradient(135deg, #EC3237 0%, #d42a2f 100%)',
                color: '#FFFFFF'
              }}
              aria-label="View our menu"
            >
              <span className="relative z-10 flex flex-col items-center justify-center gap-1 font-medium text-base" style={{ fontFamily: 'NeueMontreal' }}>
                <Utensils className="w-6 h-6 mb-1 drop-shadow-lg" />
                <span className="font-semibold tracking-wide">View</span>
                <span className="font-semibold tracking-wide">Menu</span>
              </span>
            </button>

            {/* Location Button */}
            <button 
              type="button"
              className="group relative w-28 h-28 rounded-full transition-all duration-700 shadow-2xl hover:shadow-[0_0_40px_rgba(236,50,55,0.4)] overflow-hidden border-2 border-white/30"
              style={{ 
                background: 'linear-gradient(135deg, #EC3237 0%, #d42a2f 100%)',
                color: '#FFFFFF'
              }}
              aria-label="Visit our restaurant"
            >
              <span className="relative z-10 flex flex-col items-center justify-center gap-1 font-medium text-base" style={{ fontFamily: 'NeueMontreal' }}>
                <MapPin className="w-6 h-6 mb-1 drop-shadow-lg" />
                <span className="font-semibold tracking-wide">Visit</span>
                <span className="font-semibold tracking-wide">Us</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}