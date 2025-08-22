"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const stats = [
  { number: "24", label: "Years of Experience" },
  { number: "6", label: "Outlet Locations" },
  { number: "1000+", label: "Happy Customers" },
  { number: "100+", label: "Authentic Dishes" }
];

const outlets = [
  "Sanjay Park",
  "Bavdhan", 
  "Koregaon Park",
  "Camp",
  "Hinjewadi",
  "Lulla Nagar"
];

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/uncles_chinese/", icon: <Instagram size={20} /> },
  { id: 2, title: "Facebook", href: "https://www.facebook.com/uncleschinese", icon: <MessageCircle size={20} /> },
  { id: 3, title: "WhatsApp", href: "https://wa.me/916385751370?text=Hi%20Uncle's%20Chinese%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant%20and%20menu.", icon: <MessageCircle size={20} /> },
];

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen font-brice">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-20">
        <div className="flex flex-col items-center justify-center px-4 text-center w-full max-w-6xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter mb-8 font-brice"
          >
            <span className="block bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">ABOUT</span>
            <span className="block bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">US</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium mb-12 text-white font-brice"
          >
            Authentic Thai & Chinese Cuisine
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-xl font-brice"
                  style={{ 
                    backgroundColor: '#1a1a1a',
                    border: '1px solid #333'
                  }}
                >
                  <div 
                    className="text-3xl md:text-4xl font-black mb-2 font-brice" 
                    style={{ color: '#ff6b6b' }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-gray-300 font-brice">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black font-brice"
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
            For over two decades, Uncle&apos;s Chinese has been serving the most authentic Chinese and Pan-Asian cuisine in Pune. Our journey began with a simple mission: to bring the true flavors of Asia to your table, creating a warm and welcoming space where every guest feels like family.
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
                To serve authentic, high-quality Asian flavors in a welcoming and casual dining space, 
                creating a memorable experience for every guest while preserving the traditional recipes 
                passed down through generations.
              </p>
            </div>

            <div className="rounded-2xl p-8 text-left border-4 font-brice" style={{ backgroundColor: '#F8F8F8', borderColor: '#EC3237', color: '#3C3637' }}>
              <h3 className="text-3xl font-black mb-4 uppercase font-brice">Our Vision</h3>
              <p className="leading-relaxed font-semibold font-brice">
                To be the most loved neighborhood Chinese & Pan-Asian restaurant, expanding across multiple 
                locations while staying true to our signature flavors and the warmth of family hospitality 
                that makes every visit special.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4 font-brice" style={{ backgroundColor: '#3C3637' }}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white font-brice"
          >
            Find Us
            <br />
            <span style={{ color: '#F5DF19' }}>Near You</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {outlets.map((outlet, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl border-4 transition-all duration-300 hover:scale-105 hover:shadow-xl font-brice" 
                style={{ borderColor: '#F5DF19', backgroundColor: 'rgba(245, 223, 25, 0.1)' }}
              >
                <MapPin className="w-8 h-8 mb-3 mx-auto" style={{ color: '#F5DF19' }} />
                <h3 className="text-xl font-black uppercase tracking-wide text-white font-brice">{outlet}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 font-brice" style={{ backgroundColor: '#EC3237' }}>
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight text-white font-brice"
          >
            Ready to
            <br />
            <span style={{ color: '#F5DF19' }}>Taste Tradition?</span>
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
              <span className="font-bold text-lg text-white font-brice">020 2615 2970</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm font-brice" style={{ backgroundColor: 'rgba(245, 223, 25, 0.1)' }}>
              <Mail className="w-6 h-6" style={{ color: '#F5DF19' }} />
              <span className="font-bold text-lg text-white font-brice">uncleskitchen@gmail.com</span>
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