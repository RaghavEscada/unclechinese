import React, { useState } from 'react';
import { MapPin, Phone, Star, Navigation } from 'lucide-react';
import Image from 'next/image';

const outlets = [
  { 
    name: "Camp", 
    rating: "4.6", 
    popular: "Fried Rice", 
    locationImage: "/camp.png",
    address: "601, Sachapir Street, Camp, Pune - 411001",
    phone: "8605240092, 81800 52400",
    googleMapsLink: "https://goo.gl/maps/example-camp"
  },
  { 
    name: "Bavdhan", 
    rating: "4.5", 
    popular: "Manchurian", 
    locationImage: "/bavdan.png",
    address: "Plot No.7, Building, Vidnya Rd, next to Fortune Plaza, Opp. Sagar Co-Op. Hsg. Soc., Bavdhan, Pune 411 021",
    phone: "9850 666 146",
    googleMapsLink: "https://goo.gl/maps/example-bavdhan"
  },
  { 
    name: "Koregaon Park", 
    rating: "4.3", 
    popular: "Dim Sum", 
    locationImage: "/kp.png",
    address: "Meera Garden Soc., Bldg. A/10, Shop No. 3 & 5, Meera Nagar, Koregaon Park, Pune - 411 001",
    phone: "020-2615 2970, 97637 93513",
    googleMapsLink: "https://goo.gl/maps/example-koregaon-park"
  },
  { 
    name: "Viman Nagar", 
    rating: "4.3", 
    popular: "Hakka Noodles", 
    locationImage: "/vimannagar.png",
    address: "Rushab Apartment, Near Ganga Truno Building, Sanjay Park road, Dorabjee Chowk, Viman Nagar, Pune - 411 032",
    phone: "8888 277 429, 8888 277 958",
    googleMapsLink: "https://goo.gl/maps/example-viman-nagar"
  },
  { 
    name: "Hinjewadi", 
    rating: "4.3", 
    popular: "Spring Rolls", 
    locationImage: "/hinjenwad.png",
    address: "Hinjewadi Highstreet, above KFC, Hinjawadi, Pune - 411057",
    phone: "84848 58418, 92721 33323",
    googleMapsLink: "https://goo.gl/maps/example-hinjewadi"
  },
  { 
    name: "Lullanagar", 
    rating: "4.1", 
    popular: "Sweet & Sour", 
    locationImage: "/lullanagar.png",
    address: "Mohit Towers, Sahaney Sujan Park, Ahead Signature Bar & Restaurant, Lullanagar, Pune - 411 040",
    phone: "7798 980 200, 7798 980 400",
    googleMapsLink: "https://goo.gl/maps/example-lullanagar"
  }
];

export default function LocationsSection() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  // Function to open Google Maps with specific address
  const openGoogleMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section 
      className="py-20 px-4 relative bg-black text-white"
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6" style={{ color: '#F5DF19' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#F5DF19', fontFamily: 'Poppins, sans-serif' }}>
              FIND US
            </span>
            <MapPin className="w-6 h-6" style={{ color: '#F5DF19' }} />
          </div>

          <h2 className="text-4xl md:text-6xl font-light leading-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            VISIT OUR <span className="font-normal" style={{ color: '#F5DF19' }}>LOCATIONS</span>
          </h2>
        </div>

        <div className="space-y-12">
          {outlets.map((outlet, index) => (
            <div 
              key={index} 
              className={`group flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              onMouseEnter={() => setHoveredLocation(outlet.name)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Image Section */}
              <div className="flex-1 relative">
                <div 
                  className="relative w-full h-80 overflow-hidden rounded-2xl shadow-2xl"
                  style={{ 
                    transform: hoveredLocation === outlet.name ? 'scale(1.02)' : 'scale(1)',
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-[#F5DF19] text-black px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
                    <Star className="w-4 h-4" />
                    <span>{outlet.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {outlet.name}
                  </h3>
                  <div className="w-16 h-1 bg-[#F5DF19] rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#EC3237] mt-1 flex-shrink-0" />
                    <p className="text-gray-300 leading-relaxed">
                      {outlet.address}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#EC3237] flex-shrink-0" />
                    <p className="text-gray-300">
                      {outlet.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => openGoogleMaps(outlet.address)}
                    className="flex items-center gap-2 px-6 py-3 bg-[#EC3237] text-white rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
                  >
                    <Navigation className="w-5 h-5" />
                    VIEW ON MAP
                  </button>
                  
                  <div className="text-[#F5DF19] text-sm font-medium">
                    Popular: {outlet.popular}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
