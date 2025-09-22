"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import LocationsSection from "@/container/home-page/LocationsSection";

const stats = [
  { number: "25", label: "Years of Experience" },
  { number: "6", label: "Outlet Locations" },
  { number: "1000+", label: "Happy Customers" },
  { number: "100+", label: "Authentic Dishes" }
];


const socialLinks = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/uncles_chinese/", icon: <Instagram size={20} /> },
  { id: 2, title: "Facebook", href: "https://www.facebook.com/uncleschinese", icon: <MessageCircle size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/916385751370?text=Hi%20Uncle's%20Chinese%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant%20and%20menu.", icon: <MessageCircle size={20} /> },
  { id: 4, title: "Zomato", href: "https://www.zomato.com/pune/restaurants/uncles-chinese?subzone=3419", icon: <ExternalLink size={20} /> },
];

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center py-20" style={{ backgroundColor: '#000000' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/16.jpg" 
            alt="Uncle's Chinese delicious cuisine" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Centered Content */}
            <div className="space-y-8 max-w-4xl">
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent uppercase"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                ABOUT US
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Authentic Thai & Chinese Cuisine
              </motion.p>

              {/* Stats with Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs">🕐</span>
                  </div>
                  <span className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>Since 2000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <span className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>6 Locations in Pune</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-white text-xs">⭐</span>
                  </div>
                  <span className="text-white font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>25 Years of Excellence</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-10 text-9xl rotate-12">🥢</div>
          <div className="absolute bottom-32 right-16 text-8xl -rotate-12">🍜</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl opacity-50">🏮</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Creative Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.2 }}
            viewport={{ once: true }}
              className="relative inline-block"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 relative"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Our <span className="relative">
                  Story
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#EC3237] via-[#F5DF19] to-[#EC3237] rounded-full"></div>
                </span>
              </h2>
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -right-6 w-3 h-3 bg-[#F5DF19] rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-[#EC3237] rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
            </motion.div>

          <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-4xl mx-auto mt-8 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              From humble beginnings to becoming a beloved culinary destination, 
              we've been crafting authentic Chinese and Thai cuisine with unwavering passion.
            </motion.p>

            {/* Enhanced Creative Timeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="mt-12 relative"
            >
              {/* Timeline Container */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
                {/* Timeline */}
                <div className="flex items-center justify-center gap-12 mb-8">
                  <motion.div 
                    className="text-center relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#EC3237] to-red-600 rounded-full flex items-center justify-center mb-3 shadow-lg relative">
                      <span className="text-white font-bold">2000</span>
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#EC3237] to-red-600 rounded-full opacity-20 animate-ping"></div>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Founded</p>
                  </motion.div>
                  
                  {/* Creative Connection Line */}
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-0.5 bg-gradient-to-r from-[#EC3237] to-[#F5DF19] rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                        viewport={{ once: true }}
                      />
                    ))}
                  </div>
                  
                  <motion.div 
                    className="text-center relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F5DF19] to-yellow-500 rounded-full flex items-center justify-center mb-3 shadow-lg relative">
                      <span className="text-black font-bold">2025</span>
                      <div className="absolute -inset-1 bg-gradient-to-br from-[#F5DF19] to-yellow-500 rounded-full opacity-20 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <p className="text-sm text-gray-600 font-semibold">Today</p>
                  </motion.div>
                </div>

                {/* Enhanced Chinese Quote */}
                <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 rounded-2xl border-2 border-gray-200 relative overflow-hidden">
                    {/* Decorative corner elements */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#EC3237] rounded-tl-lg"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#EC3237] rounded-tr-lg"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#F5DF19] rounded-bl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#F5DF19] rounded-br-lg"></div>
                    
                    <div className="text-3xl text-gray-800 mb-3 font-serif leading-relaxed">
                      传承二十五年，味道如初
                    </div>
                    <div className="text-base text-gray-600 font-medium mb-3 italic" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      "Twenty-five years of heritage, taste remains unchanged"
                    </div>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EC3237] to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
                      <span>🏮</span>
                      25 Years of Legacy
                      <span>🏮</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Creative Mission & Vision Layout */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-[#EC3237] to-[#F5DF19] hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              {/* Mission - Enhanced */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
                className="relative group"
              >
                {/* Floating Image with Creative Frame */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#EC3237]/10 to-transparent rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-500"></div>
                  <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img 
                      src="/9.jpg"
                      alt="Our Mission"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Creative Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                        <span className="text-[#EC3237] font-bold text-sm flex items-center gap-2">
                          <span>🎯</span> Mission
                        </span>
                      </div>
                    </div>

                    {/* Floating Number */}
                    <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#EC3237] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      01
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      Our Mission
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#EC3237] to-transparent"></div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg"
                     style={{ fontFamily: 'Poppins, sans-serif' }}>
                    To serve authentic, high-quality Asian flavors in a welcoming space, 
                    creating memorable experiences that bring families and friends together 
                    over exceptional food.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-[#EC3237] relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-2xl opacity-20">🥢</div>
                    <p className="text-gray-700 font-medium italic relative z-10"
                       style={{ fontFamily: 'Poppins, sans-serif' }}>
                      "Every dish carries 25 years of tradition and passion."
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vision - Enhanced */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Floating Image with Creative Frame */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-gradient-to-bl from-[#F5DF19]/10 to-transparent rounded-3xl transform -rotate-2 group-hover:-rotate-1 transition-transform duration-500"></div>
                  <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                    <img 
                      src="/26.jpg"
                      alt="Our Vision"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Creative Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/20">
                        <span className="text-[#EC3237] font-bold text-sm flex items-center gap-2">
                          <span>🌟</span> Vision
                        </span>
                      </div>
                    </div>

                    {/* Floating Number */}
                    <div className="absolute bottom-6 left-6 w-12 h-12 bg-[#F5DF19] rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg">
                      02
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="space-y-6 relative">
                  <div className="flex items-center gap-4">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900"
                        style={{ fontFamily: 'Playfair Display, serif' }}>
                      Our Vision
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#F5DF19] to-transparent"></div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-lg"
                     style={{ fontFamily: 'Poppins, sans-serif' }}>
                    To become Pune's most beloved destination for authentic Asian cuisine, 
                    known for our commitment to quality, innovation, and the warmth of 
                    genuine hospitality.
                  </p>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-2xl border-l-4 border-[#F5DF19] relative overflow-hidden">
                    <div className="absolute top-2 right-2 text-2xl opacity-20">🍜</div>
                    <p className="text-gray-700 font-medium italic relative z-10"
                       style={{ fontFamily: 'Poppins, sans-serif' }}>
                      "Building a legacy of authentic flavors and cherished memories."
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Enhanced Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 pt-16 relative"
          >
            {/* Decorative separator */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#EC3237] to-transparent"></div>
            
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "25", label: "Years of Excellence", icon: "🏆", color: "#EC3237" },
                  { number: "6", label: "Locations", icon: "📍", color: "#EC3237" },
                  { number: "1000+", label: "Happy Customers", icon: "😊", color: "#EC3237" },
                  { number: "100+", label: "Authentic Dishes", icon: "🍜", color: "#EC3237" }
                ].map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold mb-2" 
                         style={{ fontFamily: 'Playfair Display, serif', color: stat.color }}>
                      {stat.number}
                    </div>
                    <p className="text-sm text-gray-600 font-medium"
                       style={{ fontFamily: 'Poppins, sans-serif' }}>
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection />

      {/* Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#000000' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/22.jpg" 
            alt="Uncle's Chinese delicious dishes" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-white uppercase tracking-wider px-2 text-center" style={{ fontFamily: 'Playfair Display, serif' }}>
            WHERE FLAVOR MEETS
            <br />
            <span style={{ color: '#F5DF19' }}>25 YEARS</span> OF CRAFT.
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold max-w-3xl sm:max-w-4xl mx-auto tracking-wide text-yellow-300 px-4 sm:px-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Experience authentic Chinese and Pan-Asian flavors that have been perfected over 25 years. Order now and taste the difference that tradition makes.
          </p>

          {/* QR Code Section */}
          <div className="flex justify-center px-4">
            <div className="flex flex-col items-center p-4 sm:p-6 bg-gray-900/50 rounded-xl sm:rounded-2xl backdrop-blur-sm border border-gray-700 w-full max-w-sm">
              <img
                src="/qr-code.svg"
                alt="Scan for menu"
                className="w-24 h-24 sm:w-32 sm:h-32 mb-3 sm:mb-4 p-2 sm:p-3 bg-white rounded-lg sm:rounded-xl"
              />
              <p className="text-gray-300 text-xs sm:text-sm font-medium text-center mb-4 sm:mb-6 px-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Scan to view our menu & exclusive offers
              </p>
              
              {/* Delivery Partners */}
              <div className="flex flex-col gap-3 sm:gap-4 items-center">
                <p className="text-white text-xs sm:text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Order Online
                </p>
                <div className="flex gap-4 sm:gap-6 items-center">
                  <a
                    href="https://www.zomato.com/uncle-chinese"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform"
                  >
                    <img
                      src="/Zomato_Logo.svg"
                      alt="Order on Zomato"
                      className="h-6 sm:h-8 w-auto"
                    />
                  </a>
                  <a
                    href="https://www.swiggy.com/uncle-chinese"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform"
                  >
                    <img
                      src="/Swiggy_Logo_2024.webp"
                      className="h-6 sm:h-8 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
            </div>

          {/* Instagram and Order Now */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://www.instagram.com/uncles_chinese/"
                target="_blank"
                rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:scale-105 transition-all"
            >
              <Instagram className="w-5 h-5" />
              <span style={{ fontFamily: 'Poppins, sans-serif' }}>Follow Us</span>
            </a>
            
            <button 
              className="px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 uppercase tracking-wide shadow-2xl"
            style={{ 
                backgroundColor: '#FFFFFF', 
                color: '#000000', 
                boxShadow: '0 10px 30px rgba(255,255,255,0.3)',
                fontFamily: 'Playfair Display, serif'
              }}
            >
              ORDER NOW →
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center text-gray-400 text-xs sm:text-sm font-medium px-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-center">6 LOCATIONS ACROSS PUNE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-center">25 YEARS OF TRADITION</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}