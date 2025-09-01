import React, { useState } from 'react';
import { MapPin, Phone, Star, Navigation } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const outlets = [
  { 
    name: "Sanjay Park", 
    rating: "4.8", 
    popular: "Hakka Noodles", 
    image: "/vimnagar.jpeg",
    locationImage: "/a1.jpg",
    address: "Survey No. 23/2A, Sanjay Park, Pune",
    phone: "020 2615 2970",
    timings: "11 AM - 11 PM",
    googleMapsLink: "https://goo.gl/maps/example-sanjay-park"
  },
  { 
    name: "Bavdhan", 
    rating: "4.7", 
    popular: "Manchurian", 
    image: "/bavdan.jpeg",
    locationImage: "/a2.JPG",
    address: "Near Bavdhan Khind, Bavdhan, Pune",
    phone: "020 2615 2971",
    timings: "11 AM - 11 PM",
    googleMapsLink: "https://goo.gl/maps/example-bavdhan"
  },
  { 
    name: "Koregaon Park", 
    rating: "4.9", 
    popular: "Dim Sum", 
    image: "/kp.jpeg",
    locationImage: "/a3.JPG",
    address: "Lane 6, Koregaon Park, Pune",
    phone: "020 2615 2972",
    timings: "11 AM - 11 PM",
    googleMapsLink: "https://goo.gl/maps/example-koregaon-park"
  },
  { 
    name: "Camp", 
    rating: "4.6", 
    popular: "Fried Rice", 
    image: "/camp.jpeg",
    locationImage: "/a4.JPG",
    address: "MG Road, Camp Area, Pune",
    phone: "020 2615 2973",
    timings: "11 AM - 11 PM",
    googleMapsLink: "https://goo.gl/maps/example-camp"
  },
  { 
    name: "Hinjewadi", 
    rating: "4.8", 
    popular: "Spring Rolls", 
    image: "/hinjewadi.jpeg",
    locationImage: "/a5.PNG",
    address: "Phase 1, Hinjewadi, Pune",
    phone: "020 2615 2974",
    timings: "11 AM - 11 PM",
    googleMapsLink: "https://goo.gl/maps/example-hinjewadi"
  },
  { 
    name: "Lulla Nagar", 
    rating: "4.7", 
    popular: "Sweet & Sour", 
    image: "/lullanagar.jpeg",
    locationImage: "/a6.PNG",
    address: "Lulla Nagar, Pune",
    phone: "020 2615 2975",
    timings: "11 AM - 11 PM",
    googleMapsLink: "https://goo.gl/maps/example-lulla-nagar"
  }
];

const BentogridSection = () => {
  const bentogridItems = [
    {
      icon: '🌟',
      title: 'Elegant Décor',
      description: 'Sophisticated interiors with traditional Chinese elements, modern comfort, and carefully curated lighting to create the perfect dining ambiance.'
    },
    {
      icon: '🏮',
      title: 'Warm Hospitality',
      description: 'Our dedicated staff ensures every guest feels welcome and comfortable, providing attentive service in a family-friendly atmosphere.'
    },
    {
      icon: '🥢',
      title: 'Perfect Setting',
      description: 'From intimate family dinners to large celebrations, our versatile spaces accommodate all occasions with style and comfort.'
    }
  ];

  return (
    <section 
      className="py-20 px-4 relative bg-[#FDFCF8] text-[#3C3637]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bentogridItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Brice' }}>
                {item.title}
              </h3>
              <p className="text-base font-medium leading-relaxed" style={{ fontFamily: 'NeueMontreal' }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function LocationsGrid() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <>
      <section 
        className="py-20 px-4 relative bg-black text-white"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outlets.map((outlet, index) => (
              <div 
                key={index} 
                className="group relative"
                onMouseEnter={() => setHoveredLocation(outlet.name)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                {/* Location Card Top (Text Info) */}
                <div 
                  className="relative z-10 bg-[#2A2A2A] rounded-t-xl p-4 flex justify-between items-center border-b border-[#F5DF19]"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {outlet.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-[#F5DF19]" />
                      <span className="text-sm text-[#F5DF19]">
                        {outlet.rating}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#EC3237]">
                      Popular: {outlet.popular}
                    </p>
                  </div>
                </div>

                {/* Location Card Middle (Image) */}
                <div 
                  className="relative w-full h-64 overflow-hidden"
                  style={{ 
                    transform: hoveredLocation === outlet.name ? 'scale(1.05)' : 'scale(1)',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <Image 
                    src={outlet.locationImage} 
                    alt={`Uncle's Chinese - ${outlet.name}`}
                    layout="fill"
                    objectFit="cover"
                    className={`
                      transition-transform duration-300 
                      ${hoveredLocation === outlet.name ? 'scale-110' : 'scale-100'}
                    `}
                  />
                </div>

                {/* Location Card Bottom (Contact Info) */}
                <div 
                  className="relative z-10 bg-[#2A2A2A] rounded-b-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-[#EC3237]" />
                      <span className="text-sm text-white">
                        {outlet.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#EC3237]" />
                      <span className="text-sm text-white">
                        {outlet.phone}
                      </span>
                    </div>
                  </div>
                  <a 
                    href={outlet.googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#EC3237] text-white rounded-full text-sm hover:bg-opacity-90 transition-all"
                  >
                    <Navigation className="w-4 h-4" />
                    View on Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BentogridSection />
    </>
  );
}
