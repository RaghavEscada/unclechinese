"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Ready } from "@/components";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";

// Location Card Component
interface LocationCardProps {
  name: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  image: string;
  className?: string;
}

const LocationCard = ({ 
  name, 
  address, 
  phone, 
  hours, 
  rating, 
  image,
  className = ""
}: LocationCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className={`
        rounded-2xl p-6 shadow-xl border-4 transition-all duration-300 font-brice
        ${className}
      `}
      style={{ 
        backgroundColor: '#1a1a1a',
        borderColor: '#F5DF19'
      }}
    >
      {/* Location Image */}
      <div className="relative h-48 mb-6 rounded-xl overflow-hidden">
        <Image 
          src={image} 
          alt={`${name} location`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        {/* Location name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" style={{ color: '#EC3237' }} />
            <h3 className="text-xl font-black text-white drop-shadow-lg uppercase tracking-wide font-brice">{name}</h3>
          </div>
        </div>
      </div>

      {/* Location Details */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#EC3237' }} />
          <p className="text-white/70 font-semibold leading-relaxed font-brice">{address}</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5" style={{ color: '#EC3237' }} />
          <a href={`tel:${phone}`} className="text-white/70 font-semibold hover:text-red-600 transition-colors font-brice">
            {phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5" style={{ color: '#EC3237' }} />
          <p className="text-white/70 font-semibold font-brice">{hours}</p>
        </div>

        <div className="flex items-center gap-3">
          <Star className="w-5 h-5" style={{ color: '#F5DF19' }} />
          <div className="flex items-center gap-1">
            <span className="text-white/70 font-semibold font-brice">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-current' : 'text-gray-600'}`}
                  style={{ color: i < Math.floor(rating) ? '#F5DF19' : '#666' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <button 
            className="flex-1 py-2 px-4 rounded-lg font-black transition-colors flex items-center justify-center gap-2 uppercase tracking-wide font-brice"
            style={{ 
              backgroundColor: '#EC3237', 
              color: '#F8F8F8',
              border: '2px solid #F5DF19'
            }}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </button>
          <button 
            className="flex-1 py-2 px-4 rounded-lg font-black transition-colors flex items-center justify-center gap-2 uppercase tracking-wide font-brice"
            style={{ 
              backgroundColor: '#F8F8F8', 
              color: '#EC3237',
              border: '2px solid #F5DF19'
            }}
          >
            <Navigation className="w-4 h-4" />
            Directions
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Hero Section
const LocationsHero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black font-brice">
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tighter mb-8 font-brice"
        >
          <span className="block bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent">LOCATIONS</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium mb-8 text-white font-brice"
        >
          6 locations across Pune serving authentic Chinese & Thai cuisine
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <div className="flex items-center gap-2 text-white/70">
            <Clock className="w-5 h-5" style={{ color: '#EC3237' }} />
            <span className="font-medium font-brice">Open Daily 11 AM - 11 PM</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
          <div className="flex items-center gap-2 text-white/70">
            <Star className="w-5 h-5" style={{ color: '#F5DF19' }} />
            <span className="font-medium font-brice">24 Years of Excellence</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: '#F5DF19' }}>
          <div className="w-1 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#EC3237' }}></div>
        </div>
      </motion.div>
    </section>
  );
};

// Locations Grid Section
const LocationsGrid = () => {
  const locations = [
    {
      name: "Sanjay Park",
      address: "Shop No. 1, Sanjay Park, Pune - 411001",
      phone: "+91 20 2615 2970",
      hours: "11:00 AM - 11:00 PM",
      rating: 4.8,
      image: "/s1.webp"
    },
    {
      name: "Bavdhan",
      address: "Ground Floor, Bavdhan Plaza, Pune - 411021",
      phone: "+91 20 2615 2971",
      hours: "11:00 AM - 11:00 PM",
      rating: 4.7,
      image: "/s2.webp"
    },
    {
      name: "Koregaon Park",
      address: "North Main Road, Koregaon Park, Pune - 411001",
      phone: "+91 20 2615 2972",
      hours: "11:00 AM - 11:00 PM",
      rating: 4.9,
      image: "/s3.webp"
    },
    {
      name: "Camp",
      address: "MG Road, Camp Area, Pune - 411001",
      phone: "+91 20 2615 2973",
      hours: "11:00 AM - 11:00 PM",
      rating: 4.6,
      image: "/s4.webp"
    },
    {
      name: "Hinjewadi",
      address: "Phase 1, Hinjewadi, Pune - 411057",
      phone: "+91 20 2615 2974",
      hours: "11:00 AM - 11:00 PM",
      rating: 4.8,
      image: "/s5.webp"
    },
    {
      name: "Lulla Nagar",
      address: "Lulla Nagar, Pune - 411001",
      phone: "+91 20 2615 2975",
      hours: "11:00 AM - 11:00 PM",
      rating: 4.7,
      image: "/s6.webp"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 font-brice" style={{ backgroundColor: '#3C3637' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-6 text-white font-brice">
            Our <span style={{ color: '#F5DF19' }}>Locations</span>
          </h2>
          <p className="text-xl font-medium max-w-3xl mx-auto leading-relaxed text-white/70 font-brice">
            Visit any of our 6 locations across Pune to experience authentic Chinese & Thai cuisine in a warm, family-friendly atmosphere.
          </p>
          <div className="w-24 h-1 mx-auto mt-8 rounded-full" style={{ backgroundColor: '#EC3237' }}></div>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              name={location.name}
              address={location.address}
              phone={location.phone}
              hours={location.hours}
              rating={location.rating}
              image={location.image}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div 
            className="rounded-2xl p-8 max-w-2xl mx-auto border-4 font-brice"
            style={{ 
              backgroundColor: '#1a1a1a',
              borderColor: '#F5DF19'
            }}
          >
            <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-wide font-brice">Can&apos;t decide which location?</h3>
            <p className="text-white/70 mb-6 font-semibold font-brice">Call us and we&rsquo;ll recommend the best location for you!</p>
            <button 
              className="px-8 py-4 rounded-xl font-black hover:scale-105 transition-all duration-300 uppercase tracking-wide shadow-lg border-2 font-brice"
              style={{ 
                backgroundColor: '#EC3237', 
                color: '#F8F8F8',
                borderColor: '#F5DF19'
              }}
            >
              Call Now: +91 20 2615 2970
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function LocationsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initialize Locomotive Scroll
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});

      return () => {
        locomotiveScroll.destroy();
      };
    })();
  }, []);

  return (
    <div data-scroll-container ref={containerRef} className="bg-black text-white min-h-screen font-brice">
      <LocationsHero />
      <LocationsGrid />
      <Ready />
    </div>
  );
}