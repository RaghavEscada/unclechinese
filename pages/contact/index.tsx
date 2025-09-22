"use client";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MessageCircle, Instagram, Facebook, ExternalLink } from "lucide-react";
import LocationsSection from "@/container/home-page/LocationsSection";

export default function Contact() {

  const socialLinks = [
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/uncle_chinese/", 
      icon: <Instagram size={24} />,
      color: "hover:text-pink-500"
    },
    { 
      name: "Facebook", 
      href: "https://www.facebook.com/uncleschinese", 
      icon: <Facebook size={24} />,
      color: "hover:text-blue-500"
    },
    { 
      name: "WhatsApp", 
      href: "https://wa.me/916385751370?text=Hi%20Uncle's%20Chinese%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant%20and%20menu.", 
      icon: <MessageCircle size={24} />,
      color: "hover:text-green-500"
    },
    { 
      name: "Zomato", 
      href: "https://www.zomato.com/pune/restaurants/uncles-chinese?subzone=3419", 
      icon: <ExternalLink size={24} />,
      color: "hover:text-red-500"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section - Same as About Us */}
      <section className="relative w-full min-h-screen flex items-center py-20" style={{ backgroundColor: '#000000' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/7.jpg" 
            alt="Uncle's Chinese contact" 
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
                CONTACT US
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

      {/* Minimal Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Simple Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-black mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}>
              Get In Touch
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto"
               style={{ fontFamily: 'Poppins, sans-serif' }}>
              We'd love to hear from you. Reach out to us anytime.
            </p>
          </motion.div>

          {/* Clean Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Call Us
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                +91 7709651313
              </p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Email Us
              </h3>
              <p className="text-gray-600 text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ucviman21@gmail.com
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-red-500 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                Hours
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                11:00 AM - 11:00 PM
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Section - Same as Home Page */}
      <LocationsSection />

      {/* Get In Touch Section */}
      <section className="py-20 px-4 bg-black relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/21.jpg" 
            alt="Uncle's Chinese delicious dishes" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-white uppercase tracking-wider"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            WHERE FLAVOR MEETS
            <br />
            <span className="text-yellow-400">25 YEARS</span> OF CRAFT
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Experience authentic Chinese and Pan-Asian flavors that have been perfected over 25 years. Visit any of our 6 locations across Pune or reach out to us directly.
          </motion.p>

          {/* QR Code Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700 max-w-sm">
              <img
                src="/qr-code.svg"
                alt="Scan for menu"
                className="w-32 h-32 mb-4 p-3 bg-white rounded-xl"
              />
              <p className="text-gray-300 text-sm font-medium text-center mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Scan to view our menu & exclusive offers
              </p>
              
              {/* Delivery Partners */}
              <div className="flex flex-col gap-4 items-center">
                <p className="text-white text-sm font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Order Online
                </p>
                <div className="flex gap-6 items-center">
                  <a
                    href="https://www.zomato.com/uncle-chinese"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:scale-105 transition-transform"
                  >
                    <img
                      src="/Zomato_Logo.svg"
                      alt="Order on Zomato"
                      className="h-8 w-auto"
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
                      alt="Order on Swiggy"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href="https://www.instagram.com/uncles_chinese/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:scale-105 transition-all"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Instagram className="w-5 h-5" />
              Follow Us
            </a>
            
            <button 
              className="px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 uppercase tracking-wide shadow-2xl bg-white text-black"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              ORDER NOW →
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-gray-800 border border-gray-600 hover:border-red-500 hover:scale-110 text-gray-300 hover:text-white"
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}