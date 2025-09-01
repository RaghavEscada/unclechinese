"use client";
import React from 'react';
import { MapPin, Utensils, Info } from 'lucide-react';
import Video from 'next-video';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const herobg = "https://stream.mux.com/KgsV6S02tvj00MzcYJnoh02y0000HKA7mT7ezZlUcgfKZNXA.m3u8";

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
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
        
        {/* Enhanced overlay with better gradient */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0.8) 100%)'
          }}
        />
        
        {/* Additional subtle texture overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)'
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white flex flex-col items-center">
          
          {/* Logo Container with enhanced styling */}
          <div className="mb-8 sm:mb-12 w-full max-w-md relative">
            <div className="relative">
              <Image 
                src="/uclogo.png"
                alt="Uncle's Chinese Logo"
                width={600}
                height={300}
                className="mx-auto object-contain drop-shadow-2xl"
                priority
              />
              {/* Subtle glow effect behind logo */}
              <div className="absolute inset-0 bg-white/5 rounded-3xl blur-3xl -z-10 scale-110"></div>
            </div>
          </div>

          {/* Enhanced tagline with better typography */}
          <div className="mb-12 sm:mb-16 relative">
            <div className="absolute -inset-1 bg-[#EC3237] rounded-lg opacity-50 blur-xl group-hover:opacity-100 transition duration-500"></div>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-center" style={{ fontFamily: 'Brice' }}>
              LOVED BY GENERATIONS, CRAFTED BY UNCLE'S
            </p>
            {/* Decorative line with enhanced effect */}
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#EC3237] to-transparent mx-auto mt-4 animate-pulse"></div>
          </div>

          {/* Enhanced Navigation Buttons with more interactive design */}
          <div className="flex justify-center items-center space-x-6 sm:space-x-8 group">
            {[
              { 
                href: "/menu", 
                icon: Utensils, 
                label: "View Menu",
                bgClass: "from-red-600 via-red-500 to-red-700"
              },
              { 
                href: "/about-us", 
                icon: Info, 
                label: "About Us",
                bgClass: "from-red-700 via-red-600 to-red-800"
              },
              { 
                href: "/locations", 
                icon: MapPin, 
                label: "Visit Us",
                bgClass: "from-red-800 via-red-700 to-red-900"
              }
            ].map(({ href, icon: Icon, label, bgClass }, index) => (
              <Link key={href} href={href} passHref>
                <div className="group/button relative transform transition-all duration-300 hover:-translate-y-2 hover:scale-105">
                  {/* Subtle background glow */}
                  <div 
                    className={`absolute -inset-1 bg-[#EC3237] rounded-2xl opacity-0 blur-xl group-hover/button:opacity-50 transition duration-500 ${bgClass}`}
                  ></div>
                  
                  {/* Main button with layered effects */}
                  <div className={`
                    relative flex items-center justify-center 
                    w-20 h-20 sm:w-24 sm:h-24 
                    rounded-2xl 
                    bg-gradient-to-br ${bgClass}
                    text-white cursor-pointer 
                    shadow-2xl hover:shadow-[#EC3237]/50 
                    transition-all duration-500 ease-out
                    border border-white/10
                  `}>
                    {/* Icon with hover scale */}
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 transform group-hover/button:scale-125 transition-transform duration-300" />
                    
                    {/* Hover overlay effect */}
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/button:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
                  </div>
                  
                  {/* Enhanced tooltip */}
                  <div className="
                    absolute -bottom-12 left-1/2 
                    transform -translate-x-1/2 
                    opacity-0 group-hover/button:opacity-100 
                    transition-all duration-300 
                    pointer-events-none
                  ">
                    <div className="
                      bg-black/80 backdrop-blur-sm 
                      text-white text-xs font-medium 
                      py-2 px-3 rounded-lg 
                      whitespace-nowrap 
                      border border-white/10 
                      shadow-lg
                    ">
                      {label}
                      {/* Tooltip arrow */}
                      <div className="
                        absolute -top-1 left-1/2 
                        transform -translate-x-1/2 
                        w-2 h-2 
                        bg-black/80 rotate-45 
                        border-l border-t border-white/10
                      "></div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}