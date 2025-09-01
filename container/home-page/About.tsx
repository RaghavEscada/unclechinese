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
                      style={{ color: '#2C2C2C', fontFamily: 'NeueMontreal' }}>
            {name}
          </figcaption>
          <p className="text-sm font-medium" style={{ color: '#EC3237', fontFamily: 'NeueMontreal' }}>
            {email}
          </p>
        </div>
      </div>
      <blockquote className="text-base font-medium leading-relaxed" 
                  style={{ color: '#2C2C2C', fontFamily: 'NeueMontreal' }}>
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

// Services Section Component
const ServicesSection = () => {
  const services = [
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Dine-In Experience",
      subtitle: "Restaurant",
      description: "Immerse yourself in our warm, family-friendly atmosphere across 6 locations in Pune. Enjoy authentic Chinese and Thai cuisine with exceptional hospitality.",
      image: "🍜",
      highlight: "Family Atmosphere"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Private Events",
      subtitle: "Catering",
      description: "Make your celebrations special with our catering services. From intimate family gatherings to large corporate events, we bring authentic taste to your occasion.",
      image: "🎉",
      highlight: "Special Occasions"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Chef's Specials",
      subtitle: "Menu",
      description: "Discover our signature dishes crafted by experienced chefs using traditional recipes and premium ingredients. Each dish tells a story of 24 years of expertise.",
      image: "👨‍🍳",
      highlight: "Signature Dishes"
    }
  ];

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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Utensils className="w-6 h-6" style={{ color: '#F5DF19' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#F5DF19', fontFamily: 'NeueMontreal' }}>
              Our Services 🥢
            </span>
            <Utensils className="w-6 h-6" style={{ color: '#F5DF19' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6" 
              style={{ color: '#F8F8F8', fontFamily: 'Brice' }}>
            Experience <span style={{ color: '#F5DF19' }}>Excellence 🍜</span>
          </h2>
          <p className="text-lg font-medium max-w-2xl mx-auto" 
             style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
            From traditional dining to modern convenience, we bring authentic Asian flavors to every occasion. 🥢🍜
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} 
                 className="group p-8 rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-xl relative overflow-hidden"
                 style={{ 
                   backgroundColor: 'rgba(60, 54, 55, 0.9)', 
                   borderColor: '#F5DF19',
                   boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                 }}>
              {/* Background Food Icon */}
              <div className="absolute top-4 right-4 text-5xl opacity-10 group-hover:opacity-20 transition-opacity">
                {service.image}
              </div>
              
              <div className="text-[#EC3237] mb-6 relative z-10">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 relative z-10" 
                  style={{ color: '#F8F8F8', fontFamily: 'Brice' }}>
                {service.title} 🥢
              </h3>
              <p className="text-sm font-medium uppercase mb-4 tracking-wide relative z-10" 
                 style={{ color: '#F5DF19', fontFamily: 'NeueMontreal' }}>
                {service.subtitle} 🍜
              </p>
              <p className="text-base font-medium leading-relaxed mb-4 relative z-10" 
                 style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
                {service.description} 🥢
              </p>
              
              {/* Highlight Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium relative z-10"
                   style={{ backgroundColor: '#EC3237', color: '#FFFFFF' }}>
                <Heart className="w-3 h-3" />
                {service.highlight} 🍜
              </div>
            </div>
          ))}
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
  { number: "24", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
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
    description: "24 years of excellence! Every dish tells a story of passion and authentic Asian cooking.",
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
    <div style={{ fontFamily: 'NeueMontreal, sans-serif' }} className="bg-white text-gray-900">
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

        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg relative z-10">
          <div className="mx-auto max-w-4xl p-4 text-center sm:py-14">
            <h1 className="mb-4 text-4xl md:text-6xl font-light leading-tight" style={{ color: '#F8F8F8', fontFamily: 'Brice' }}>
              What Our
              <br />
              <span style={{ color: '#F5DF19' }}>
                Customers Say
              </span>
            </h1>
            <p className="text-lg p-7 font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
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
      <section className="py-20 px-4 relative" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight text-white uppercase tracking-wider" style={{ fontFamily: 'Brice' }}>
            READY TO
            <br />
            TASTE
            <br />
            <span className="font-bold" style={{ color: '#FFFFFF' }}>TRADITION?</span>
          </h2>

          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto tracking-wide text-gray-300" style={{ fontFamily: 'NeueMontreal' }}>
            Experience authentic Chinese and Pan-Asian flavors that have been perfected over 24 years. Order now and taste the difference that tradition makes.
          </p>

          {/* QR Code Section */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center p-6 bg-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700">
              <img
                src="/qr-code.svg"
                alt="Scan for menu"
                className="w-32 h-32 mb-4 p-3 bg-white rounded-xl"
              />
              <p className="text-gray-300 text-sm font-medium text-center mb-6" style={{ fontFamily: 'NeueMontreal' }}>
                Scan to view our menu & exclusive offers
              </p>
              
              {/* Delivery Partners */}
              <div className="flex flex-col gap-4 items-center">
                <p className="text-white text-sm font-medium" style={{ fontFamily: 'NeueMontreal' }}>
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
          </div>

          <div className="mt-8">
            <button 
              className="px-16 py-4 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 uppercase tracking-wide shadow-2xl"
              style={{ 
                backgroundColor: '#FFFFFF', 
                color: '#000000', 
                boxShadow: '0 10px 30px rgba(255,255,255,0.3)',
                fontFamily: 'Brice'
              }}
            >
              ORDER NOW →
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-gray-400 text-sm font-medium" style={{ fontFamily: 'NeueMontreal' }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span>6 LOCATIONS ACROSS PUNE</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>24 YEARS OF TRADITION</span>
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
      `}</style>
     </div>
  );
}