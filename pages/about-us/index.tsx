"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle, ExternalLink } from "lucide-react";
import LocationsSection from "@/container/home-page/LocationsSection";

const stats = [
  { number: "24", label: "Years of Experience" },
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
    <div className="bg-black text-white min-h-screen font-brice">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center py-20" style={{ backgroundColor: '#000000' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Restaurant background" 
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
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight font-brice bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent uppercase"
              >
                ABOUT US
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 font-brice"
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
                  <span className="text-white font-medium font-brice">Since 2000</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs">📍</span>
                  </div>
                  <span className="text-white font-medium font-brice">6 Locations in Pune</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                    <span className="text-white text-xs">⭐</span>
                  </div>
                  <span className="text-white font-medium font-brice">24 Years of Excellence</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white font-brice">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-tight text-black font-brice bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
          >
            Our Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto font-brice"
          >
            Since 2000, we&apos;ve been serving authentic Chinese cuisine with a modern twist, bringing the flavors of the Far East to your table.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 pt-12"
          >
            <div className="rounded-2xl p-8 text-left border-4 font-brice" style={{ backgroundColor: '#EC3237', color: '#F8F8F8', borderColor: '#F5DF19' }}>
              <h3 className="text-3xl font-black mb-4 uppercase font-brice">Our Mission</h3>
              <p className="leading-relaxed font-semibold font-brice">
                To serve authentic, high-quality Asian flavors in a welcoming and casual dining space, creating a memorable experience for every guest.
              </p>
            </div>

            <div className="rounded-2xl p-8 text-left border-4 font-brice" style={{ backgroundColor: '#F8F8F8', borderColor: '#EC3237', color: '#3C3637' }}>
              <h3 className="text-3xl font-black mb-4 uppercase font-brice">Our Vision</h3>
              <p className="leading-relaxed font-semibold font-brice">
                To become the most loved Chinese restaurant, known for our authentic flavors, warm hospitality, and commitment to culinary excellence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <LocationsSection />

      {/* Contact Section */}
      <section className="py-20 px-4 font-brice" style={{ backgroundColor: '#EC3237' }}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light uppercase tracking-tight font-brice bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent"
          >
            READY TO TASTE TRADITION?
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl font-bold max-w-2xl mx-auto uppercase tracking-wide text-white font-brice"
          >
            Experience the authentic flavors and warm hospitality that have made us Pune&apos;s favorite Asian restaurant for over two decades.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <div className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm font-brice" style={{ backgroundColor: 'rgba(245, 223, 25, 0.1)' }}>
              <Phone className="w-6 h-6" style={{ color: '#F5DF19' }} />
              <span className="font-bold text-lg text-white font-brice">+91 7709651313</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm font-brice" style={{ backgroundColor: 'rgba(245, 223, 25, 0.1)' }}>
              <Mail className="w-6 h-6" style={{ color: '#F5DF19' }} />
              <span className="font-bold text-lg text-white font-brice">ucviman21@gmail.com</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 border-4 transform hover:scale-110 hover:shadow-xl font-brice"
                style={{ 
                  backgroundColor: 'rgba(245, 223, 25, 0.1)', 
                  borderColor: '#F5DF19',
                  color: '#F8F8F8'
                }}
              >
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="px-12 py-6 rounded-xl font-black text-xl transition-all duration-300 transform hover:scale-110 uppercase tracking-wide shadow-2xl font-brice"
            style={{ 
              backgroundColor: '#F8F8F8', 
              color: '#EC3237', 
              boxShadow: '0 10px 30px rgba(248,248,248,0.3)',
              border: '3px solid #F5DF19'
            }}
          >
            Order Now
          </motion.button>
        </div>
      </section>
    </div>
  );
}