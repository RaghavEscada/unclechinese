"use client";
import React, { useEffect, useState } from 'react';
import { ArrowDown, Play, Star, Users, MapPin, ChefHat, Utensils, Heart } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 200);
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden py-8"
      id="hero"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.5) contrast(1.1)' }}
        >
          <source src="/herobg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
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
        
        {/* Logo - Top - Very Prominent & Eye-Catching */}
        <div className={`mb-16 transform transition-all duration-1000 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
          <img
            src="/uclogo.png"
            alt="Uncle's Chinese"
            className="w-72 h-54 md:w-88 md:h-66 lg:w-[28rem] lg:h-[21rem] xl:w-[36rem] xl:h-[27rem] 2xl:w-[44rem] 2xl:h-[33rem] object-contain filter drop-shadow-2xl"
            style={{ 
              filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.8)) drop-shadow(0 0 60px rgba(255,255,255,0.6))',
              animation: 'simpleGlow 3s ease-in-out infinite alternate'
            }}
          />
        </div>
        
        {/* Main Headline - Smaller to Highlight Logo */}
        <div className={`mb-8 transform transition-all duration-1200 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-[0.9] tracking-tight relative" style={{ fontFamily: 'Brice' }}>
            <span className="block text-white font-light mb-2 drop-shadow-2xl">
              AUTHENTIC
            </span>
            <span className="block text-white font-normal drop-shadow-2xl">
              CHINESE CUISINE
            </span>
          </h1>
        </div>

        {/* Call to Action Buttons - Elegant */}
        <div className={`mb-10 transform transition-all duration-1400 delay-300 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5DF19] via-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5DF19] via-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </button>
          </div>
        </div>

        {/* Descriptive Text Block - Professional */}
        <div className={`mb-10 max-w-2xl transform transition-all duration-1600 delay-500 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-base md:text-lg font-medium leading-relaxed tracking-wide text-white/95 drop-shadow-lg" style={{ fontFamily: 'NeueMontreal' }}>
            Experience the finest Chinese culinary traditions, from delicate dim sum to bold wok-fired specialties. Every dish tells a story of authentic flavors and masterful technique.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-6"></div>
        </div>

        {/* Locations Bar - Full Width */}
        <div className={`w-full max-w-5xl transform transition-all duration-1800 delay-700 ease-out ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl">
            
            {/* Downtown Location */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 shadow-lg border border-white/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
              <div className="text-white/95">
                <div className="text-xs font-semibold leading-tight drop-shadow-lg" style={{ fontFamily: 'NeueMontreal' }}>
                  Downtown
                </div>
                <div className="text-xs text-white/80 leading-tight" style={{ fontFamily: 'NeueMontreal' }}>
                  123 Main St
                </div>
              </div>
            </div>

            {/* Midtown Location */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 shadow-lg border border-white/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
              <div className="text-white/95">
                <div className="text-xs font-semibold leading-tight drop-shadow-lg" style={{ fontFamily: 'NeueMontreal' }}>
                  Midtown
                </div>
                <div className="text-xs text-white/80 leading-tight" style={{ fontFamily: 'NeueMontreal' }}>
                  456 Oak Ave
                </div>
              </div>
            </div>

            {/* Uptown Location */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 shadow-lg border border-white/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
              <div className="text-white/95">
                <div className="text-xs font-semibold leading-tight drop-shadow-lg" style={{ fontFamily: 'NeueMontreal' }}>
                  Uptown
                </div>
                <div className="text-xs text-white/80 leading-tight" style={{ fontFamily: 'NeueMontreal' }}>
                  789 Pine Blvd
                </div>
              </div>
            </div>

            {/* Westside Location */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 shadow-lg border border-white/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
              <div className="text-white/95">
                <div className="text-xs font-semibold leading-tight drop-shadow-lg" style={{ fontFamily: 'NeueMontreal' }}>
                  Westside
                </div>
                <div className="text-xs text-white/80 leading-tight" style={{ fontFamily: 'NeueMontreal' }}>
                  321 Elm St
                </div>
              </div>
            </div>

            {/* Eastside Location */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 shadow-lg border border-white/30 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-white drop-shadow-lg" />
              </div>
              <div className="text-white/95">
                <div className="text-xs font-semibold leading-tight drop-shadow-lg" style={{ fontFamily: 'NeueMontreal' }}>
                  Eastside
                </div>
                <div className="text-xs text-white/80 leading-tight" style={{ fontFamily: 'NeueMontreal' }}>
                  654 Maple Dr
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M50 50c0-2-1.6-4-4-4s-4 2-4 4 1.6 4 4 4 4-2 4-4zm8 0c0-2-1.6-4-4-4s-4 2-4 4 1.6 4 4 4 4-2 4-4zm-16 0c0-2-1.6-4-4-4s-4 2-4 4 1.6 4 4 4 4-2 4-4z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
}