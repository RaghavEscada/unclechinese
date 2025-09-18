"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, ExternalLink } from "lucide-react";

export default function Contact() {
  const outlets = [
    {
      name: "Sanjay Park, Aundh",
      address: "Pune, MH 411007",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Bavdhan, Near Metro",
      address: "Pune, MH 411021", 
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Koregaon Park",
      address: "Pune, MH 411001",
      phone: "020 2615 2970", 
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Camp Area",
      address: "Pune, MH 411001",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Hinjewadi Phase 1",
      address: "Pune, MH 411057",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    },
    {
      name: "Lulla Nagar",
      address: "Pune, MH 411040",
      phone: "020 2615 2970",
      hours: "11:00 AM - 11:00 PM"
    }
  ];

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
    <div className="bg-black text-white min-h-screen" style={{ fontFamily: 'NeueMontreal, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center items-center py-20" style={{ backgroundColor: '#3C3637' }}>
        {/* Background Chinese Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl">🥢</div>
          <div className="absolute top-40 right-20 text-5xl">🍜</div>
          <div className="absolute bottom-20 left-20 text-7xl">🥢</div>
          <div className="absolute bottom-40 right-10 text-4xl">🍜</div>
          <div className="absolute top-1/2 left-1/4 text-5xl">🏮</div>
          <div className="absolute top-1/3 right-1/3 text-6xl">🥢</div>
        </div>

        <div className="flex flex-col items-center justify-center px-4 text-center w-full max-w-6xl relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight tracking-tight mb-8 bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent font-brice uppercase"
          >
            GET IN TOUCH 🥢
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-light mb-12 text-gray-300 font-brice"
          >
            We&apos;d love to hear from you 🍜
          </motion.p>

          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center p-6 rounded-xl group hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(60, 54, 55, 0.9)',
                border: '2px solid #F5DF19',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              <Phone className="w-6 h-6 mb-4 mx-auto" style={{ color: '#EC3237' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Brice', color: '#F8F8F8' }}>Call Us 🥢</h3>
              <p style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>+91 7709651313</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center p-6 rounded-xl group hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(60, 54, 55, 0.9)',
                border: '2px solid #F5DF19',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              <Mail className="w-6 h-6 mb-4 mx-auto" style={{ color: '#EC3237' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Brice', color: '#F8F8F8' }}>Email Us 🍜</h3>
              <p style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>ucviman21@gmail.com</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center p-6 rounded-xl group hover:scale-105 transition-all duration-300"
              style={{ 
                backgroundColor: 'rgba(60, 54, 55, 0.9)',
                border: '2px solid #F5DF19',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            >
              <Clock className="w-6 h-6 mb-4 mx-auto" style={{ color: '#EC3237' }} />
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Brice', color: '#F8F8F8' }}>Hours 🏮</h3>
              <p style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>11:00 AM - 11:00 PM</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#2A2526' }}>
        {/* Background Chinese Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-5xl">📍</div>
          <div className="absolute top-30 right-20 text-4xl">🏪</div>
          <div className="absolute bottom-20 left-20 text-6xl">🎯</div>
          <div className="absolute bottom-10 right-10 text-3xl">🥢</div>
          <div className="absolute top-1/2 left-1/3 text-4xl">🍜</div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight text-center mb-16 font-brice"
            style={{ fontFamily: 'Brice', color: '#F8F8F8' }}
          >
            <span className="bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent">FIND US NEAR YOU 🥢</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {outlets.map((outlet, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl group" 
                style={{ 
                  borderColor: '#F5DF19', 
                  backgroundColor: 'rgba(60, 54, 55, 0.8)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                <MapPin className="w-6 h-6 mb-4" style={{ color: '#F5DF19' }} />
                <h3 className="text-xl font-semibold tracking-wide mb-4" style={{ fontFamily: 'Brice', color: '#F8F8F8' }}>
                  {outlet.name} 🍜
                </h3>
                <div className="space-y-2" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
                  <p className="text-sm">{outlet.address}</p>
                  <p className="text-sm font-medium">{outlet.phone}</p>
                  <p className="text-sm">{outlet.hours} 🏮</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#4A4445' }}>
        {/* Background Chinese Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-4xl">📞</div>
          <div className="absolute top-40 right-20 text-3xl">📧</div>
          <div className="absolute bottom-20 left-20 text-5xl">💬</div>
          <div className="absolute bottom-40 right-10 text-2xl">🥢</div>
          <div className="absolute top-1/2 left-1/4 text-3xl">🍜</div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight font-brice"
            style={{ fontFamily: 'Brice', color: '#F8F8F8' }}
          >
            <span className="bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent">SEND US A MESSAGE 🥢</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl mx-auto p-8 rounded-2xl shadow-2xl text-center group hover:scale-105 transition-all duration-300"
            style={{ 
              backgroundColor: 'rgba(60, 54, 55, 0.9)',
              border: '2px solid #F5DF19',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Brice', color: '#F8F8F8' }}>
                Ready to Experience Authentic Flavors? 🍜
              </h3>
              <p className="text-base" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
                Visit any of our 6 locations across Pune or reach out to us directly. We&apos;re here to serve you the most authentic Chinese and Pan-Asian cuisine. 🥢🏮
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <a 
                  href="tel:02026152970"
                  className="px-6 py-3 font-medium rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#EC3237', 
                    color: '#FFFFFF',
                    fontFamily: 'NeueMontreal',
                    boxShadow: '0 4px 20px rgba(236,50,55,0.3)'
                  }}
                >
                  Call Now 🥢
                </a>
                <a 
                  href="https://wa.me/916385751370?text=Hi%20Uncle's%20Chinese%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant%20and%20menu."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-medium rounded-xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#F5DF19', 
                    color: '#3C3637',
                    fontFamily: 'NeueMontreal',
                    boxShadow: '0 4px 20px rgba(245,223,25,0.3)'
                  }}
                >
                  WhatsApp Us 🍜
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4" style={{ backgroundColor: '#3C3637' }}>
        {/* Background Chinese Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-4xl">💬</div>
          <div className="absolute top-30 right-20 text-3xl">⭐</div>
          <div className="absolute bottom-20 left-20 text-5xl">❤️</div>
          <div className="absolute bottom-10 right-10 text-2xl">🥢</div>
          <div className="absolute top-1/2 left-1/4 text-3xl">🍜</div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight tracking-tight font-brice"
            style={{ fontFamily: 'Brice', color: '#F8F8F8' }}
          >
            <span className="bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent">FOLLOW US ON SOCIAL 🥢</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg font-medium max-w-2xl mx-auto tracking-wide"
            style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}
          >
            Stay updated with our latest dishes, special offers, and behind-the-scenes moments. 🍜🏮
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 transform hover:scale-110 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'rgba(60, 54, 55, 0.9)', 
                  borderColor: '#F5DF19',
                  color: '#F8F8F8',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.button 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="px-8 py-4 font-medium text-lg transition-all duration-300 transform hover:scale-110 uppercase tracking-wide shadow-2xl rounded-xl"
            style={{ 
              backgroundColor: '#F8F8F8', 
              color: '#EC3237', 
              fontFamily: 'NeueMontreal',
              boxShadow: '0 10px 30px rgba(248,248,248,0.3)',
              border: '2px solid #F5DF19'
            }}
          >
            Order Now 🥢🍜
          </motion.button>
        </div>
      </section>
    </div>
  );
}