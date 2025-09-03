import React, { useState } from 'react';
import { MapPin, Phone, Star, Navigation } from 'lucide-react';
import Image from 'next/image';

const outlets = [
  { 
    name: "Koregaon Park", 
    rating: "4.9", 
    popular: "Dim Sum", 
    locationImage: "/kp.png",
    address: "Meera Garden Soc., Bldg. A/10, Shop No. 3 & 5, Meera Nagar, Koregaon Park, Pune - 411 001",
    phone: "020-2615 2970, 97637 93513",
    googleMapsLink: "https://goo.gl/maps/example-koregaon-park"
  },
  { 
    name: "Viman Nagar", 
    rating: "4.8", 
    popular: "Hakka Noodles", 
    locationImage: "/vimannagar.png",
    address: "Rushab Apartment, Near Ganga Truno Building, Sanjay Park road, Dorabjee Chowk, Viman Nagar, Pune - 411 032",
    phone: "8888 277 429, 8888 277 958",
    googleMapsLink: "https://goo.gl/maps/example-viman-nagar"
  },
  { 
    name: "Bavdhan", 
    rating: "4.7", 
    popular: "Manchurian", 
    locationImage: "/bavdan.png",
    address: "Plot No.7, Building, Vidnya Rd, next to Fortune Plaza, Opp. Sagar Co-Op. Hsg. Soc., Bavdhan, Pune 411 021",
    phone: "9850 666 146",
    googleMapsLink: "https://goo.gl/maps/example-bavdhan"
  },
  { 
    name: "Hinjewadi", 
    rating: "4.8", 
    popular: "Spring Rolls", 
    locationImage: "/hinjenwad.png",
    address: "Hinjewadi Highstreet, above KFC, Hinjawadi, Pune - 411057",
    phone: "84848 58418, 92721 33323",
    googleMapsLink: "https://goo.gl/maps/example-hinjewadi"
  },
  { 
    name: "Lullanagar", 
    rating: "4.7", 
    popular: "Sweet & Sour", 
    locationImage: "/lullanagar.png",
    address: "Mohit Towers, Sahaney Sujan Park, Ahead Signature Bar & Restaurant, Lullanagar, Pune - 411 040",
    phone: "7798 980 200, 7798 980 400",
    googleMapsLink: "https://goo.gl/maps/example-lullanagar"
  },
  { 
    name: "Camp", 
    rating: "4.6", 
    popular: "Fried Rice", 
    locationImage: "/camp.png",
    address: "601, Sachapir Street, Camp, Pune - 411001",
    phone: "8605240092, 81800 52400",
    googleMapsLink: "https://goo.gl/maps/example-camp"
  }
];

export default function LocationsSection() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section 
      className="py-20 px-4 relative bg-black text-white"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6" style={{ color: '#F5DF19' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#F5DF19', fontFamily: 'NeueMontreal' }}>
              Find Us
            </span>
            <MapPin className="w-6 h-6" style={{ color: '#F5DF19' }} />
          </div>

          <h2 className="text-4xl md:text-6xl font-light leading-tight text-white" style={{ fontFamily: 'Brice' }}>
            Visit Our
            <br />
            <span className="font-normal" style={{ color: '#F5DF19' }}>Locations</span>
          </h2>
        </div>

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
  );
}
