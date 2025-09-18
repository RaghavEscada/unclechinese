import React, { useEffect } from 'react';
import { ArrowRight, Instagram, MessageCircle, Target, Star, MapPin, Phone, Mail, ChefHat, Clock, Users, Utensils, Heart, Award, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';
import LocationsSection from './LocationsSection';


declare global {
  interface Window {
    gsap: {
      ticker: {
        add: (callback: (time: number) => void) => void;
        lagSmoothing: (value: number) => void;
      };
      utils: {
        interpolate: (start: number, end: number, progress: number) => number;
      };
      set: (target: Element, vars: any) => void;
      registerPlugin: (plugin: any) => void;
    };
    ScrollTrigger: {
      update: () => void;
      create: (config: any) => {
        progress: number;
      };
      getAll: () => Array<{ kill: () => void }>;
    };
    Lenis: new () => {
      on: (event: string, callback: () => void) => void;
      raf: (time: number) => void;
    };
  }
}

// Review Card Component
const ReviewCard = ({ img, name, email, description }: any) => {
  return (
    <figure className="relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:scale-105 shadow-lg"
            style={{ borderColor: '#F5DF19', backgroundColor: 'rgba(248, 248, 248, 0.95)' }}>
      <div className="flex flex-row items-center gap-3 mb-4">
        <img
          className="rounded-full border-2"
          style={{ borderColor: '#EC3237' }}
          width="48"
          height="48"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-semibold" 
                      style={{ color: '#2C2C2C', fontFamily: 'Playfair Display, serif' }}>
            {name}
          </figcaption>
          <p className="text-sm font-medium" style={{ color: '#EC3237', fontFamily: 'Poppins, sans-serif' }}>
            {email}
          </p>
        </div>
      </div>
      <blockquote className="text-base font-medium leading-relaxed" 
                  style={{ color: '#2C2C2C', fontFamily: 'Poppins, sans-serif' }}>
        "{description}"
      </blockquote> 
    </figure>
  );
};

// Testimonial Marquee Component
interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function TestimonialMarquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"
            } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""} ${
              reverse ? "[animation-direction:reverse]" : ""
            }`}
            style={{
              animation: `${reverse ? 'marquee-reverse' : 'marquee'} var(--duration) linear infinite`,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Gallery Marquee Component
interface GalleryMarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function GalleryMarquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: GalleryMarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row"
            } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""} ${
              reverse ? "[animation-direction:reverse]" : ""
            }`}
            style={{
              animation: `${reverse ? 'gallery-marquee-reverse' : 'gallery-marquee'} var(--duration) linear infinite`,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

// Gallery Image Component
const GalleryImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative w-80 h-64 cursor-pointer overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
      <img
        className="w-full h-full object-cover"
        src={src}
        alt={alt}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

// Services Section Component
const ServicesSection = () => {
  // Create arrays for each row with different images
  const firstRowImages = Array.from({ length: 10 }, (_, i) => `${i + 1}.jpg`);
  const secondRowImages = Array.from({ length: 10 }, (_, i) => `${i + 11}.jpg`);
  const thirdRowImages = Array.from({ length: 9 }, (_, i) => `${i + 21}.jpg`);

  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#5A5455' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-7xl">🥢</div>
        <div className="absolute top-20 right-20 text-6xl">🍜</div>
        <div className="absolute bottom-20 left-20 text-8xl">🥢</div>
        <div className="absolute bottom-10 right-10 text-5xl">🍜</div>
        <div className="absolute top-1/2 left-1/3 text-6xl">🥢</div>
        <div className="absolute top-1/4 right-1/4 text-7xl">🍜</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Utensils className="w-6 h-6" style={{ color: '#F5DF19' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#F5DF19', fontFamily: 'Poppins, sans-serif' }}>
              Our Delicious Creations 🥢
            </span>
            <Utensils className="w-6 h-6" style={{ color: '#F5DF19' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6" 
              style={{ color: '#F8F8F8', fontFamily: 'Playfair Display, serif' }}>
            Taste Our <span style={{ color: '#F5DF19' }}>Signature Dishes 🍜</span>
          </h2>
          <p className="text-lg font-medium max-w-2xl mx-auto" 
             style={{ color: '#F8F8F8', fontFamily: 'Poppins, sans-serif' }}>
            From traditional recipes to modern innovations, explore our gallery of authentic Asian flavors. 🥢🍜
          </p>
        </div>

        {/* Three Row Gallery */}
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          
          {/* First Row - Left to Right */}
          <GalleryMarquee pauseOnHover className="[--duration:30s] mb-4">
            {firstRowImages.map((image, index) => (
              <GalleryImage 
                key={`row1-${index}`}
                src={`/${image}`} 
                alt={`Delicious dish ${index + 1}`} 
              />
            ))}
          </GalleryMarquee> 
          
          {/* Second Row - Right to Left */}
          <GalleryMarquee reverse pauseOnHover className="[--duration:35s] mb-4">
            {secondRowImages.map((image, index) => (
              <GalleryImage 
                key={`row2-${index}`}
                src={`/${image}`} 
                alt={`Delicious dish ${index + 11}`} 
              />
            ))}
          </GalleryMarquee>
          
          {/* Third Row - Left to Right */}
          <GalleryMarquee pauseOnHover className="[--duration:40s]">
            {thirdRowImages.map((image, index) => (
              <GalleryImage 
                key={`row3-${index}`}
                src={`/${image}`} 
                alt={`Delicious dish ${index + 21}`} 
              />
            ))}
          </GalleryMarquee>

          {/* Gradient overlays for smooth edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#5A5455]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#5A5455]"></div>
        </div>
      </div>
    </section>
  );
};

const socialLinks = [
  { id: 1, title: "Instagram", href: "https://www.instagram.com/uncles_chinese/", icon: <Instagram size={24} /> },
  { id: 2, title: "WhatsApp", href: "https://wa.me/919789985132", icon: <MessageCircle size={24} /> },
];

const stats = [
  { number: "25", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
  { number: "6", label: "Outlet Locations", icon: <MapPin className="w-6 h-6" /> },
  { number: "1000+", label: "Happy Customers", icon: <Users2 className="w-6 h-6" /> },
  { number: "100+", label: "Authentic Dishes", icon: <ChefHat className="w-6 h-6" /> }
];

const outlets = [
  { name: "Sanjay Park", rating: "4.8", popular: "Hakka Noodles" },
  { name: "Bavdhan", rating: "4.7", popular: "Manchurian" },
  { name: "Koregaon Park", rating: "4.9", popular: "Dim Sum" },
  { name: "Camp", rating: "4.6", popular: "Fried Rice" },
  { name: "Hinjewadi", rating: "4.8", popular: "Spring Rolls" },
  { name: "Lulla Nagar", rating: "4.7", popular: "Sweet & Sour" }
];

// Testimonials data
const testimonials = [
  {
    name: "Rajesh Sharma",
    email: "rajesh.s@gmail.com",
    description: "The best Chinese food in Pune! Uncle's Chinese never disappoints. Authentic flavors every single time.",
    img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
  },
  {
    name: "Priya Patel",
    email: "priya.patel@gmail.com", 
    description: "Been coming here for 5 years. The Hakka noodles and Manchurian are absolutely divine!",
    img: "https://img.freepik.com/free-photo/smiling-asian-woman_23-2147766303.jpg",
  },
  {
    name: "Amit Joshi",
    email: "amit.j@gmail.com",
    description: "Family atmosphere, incredible food, and great service. This is our go-to place for celebrations!",
    img: "https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg",
  },
  {
    name: "Sneha Desai",
    email: "sneha.desai@gmail.com",
    description: "Uncle's Chinese maintains the perfect balance of authentic taste and modern presentation.",
    img: "https://img.freepik.com/free-photo/portrait-smiling-blonde-woman_23-2148316635.jpg",
  },
  {
    name: "Vikram Singh",
    email: "vikram.singh@gmail.com",
    description: "25 years of excellence! Every dish tells a story of passion and authentic Asian cooking.",
    img: "https://img.freepik.com/free-photo/brunette-girl-posing_23-2148108748.jpg",
  },
  {
    name: "Kavya Iyer",
    email: "kavya.iyer@gmail.com",
    description: "The warmth of the staff and the incredible flavors make this place truly special.",
    img: "https://img.freepik.com/premium-photo/woman-wearing-glasses-yellow-shirt-is-wearing-yellow-shirt_911060-133057.jpg",
  },
];

const firstRow = testimonials.slice(0, 2);
const secondRow = testimonials.slice(2, 4);
const thirdRow = testimonials.slice(4, 6);

export default function UnclesChineseWebsite() {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }} className="bg-white text-gray-900">
      {/* Removed About Section */}

      {/* Services Section */}
      <ServicesSection />

      {/* Locations Section */}
      <LocationsSection />

      {/* Contact Section - removed duplicate above testimonials */}

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#3C3637' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-4xl">💬</div>
          <div className="absolute top-30 right-20 text-3xl">⭐</div>
          <div className="absolute bottom-20 left-20 text-5xl">❤️</div>
        </div>

        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg z-10">
          <div className="mx-auto max-w-4xl p-4 text-center sm:py-14">
            <h1 className="mb-4 text-4xl md:text-6xl font-light leading-tight" style={{ color: '#F8F8F8', fontFamily: 'Playfair Display, serif' }}>
              What Our
              <br />
              <span style={{ color: '#F5DF19' }}>
                Customers Say
              </span>
            </h1>
            <p className="text-lg p-7 font-medium" style={{ color: '#F8F8F8', fontFamily: 'Poppins, sans-serif' }}>
              "Ordinary doesn't live here. We craft extraordinary flavors, one authentic dish at a time."
            </p>
          </div>

          <TestimonialMarquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.email} {...review} />
            ))}
          </TestimonialMarquee> 
          <TestimonialMarquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.email} {...review} />
            ))}
          </TestimonialMarquee>
          <TestimonialMarquee pauseOnHover className="[--duration:20s]">
            {thirdRow.map((review) => (
              <ReviewCard key={review.email} {...review} />
            ))}
          </TestimonialMarquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#3C3637]"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#3C3637]"></div>
        </div>
      </section>

      {/* Taste Tradition Section */}
            <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative" style={{ backgroundColor: '#000000' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1563379091339-03246963d96a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Chinese food background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
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

          <div className="mt-6 sm:mt-8">
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

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        
        @keyframes marquee-reverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        @keyframes gallery-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        
        @keyframes gallery-marquee-reverse {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
     </div>
  );
}