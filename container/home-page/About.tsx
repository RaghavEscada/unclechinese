import React, { useEffect } from 'react';
import { ArrowRight, Instagram, MessageCircle, Target, Star, MapPin, Phone, Mail, ChefHat, Clock, Users, Utensils, Heart, Award, Users2 } from 'lucide-react';
import { motion } from 'framer-motion';


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
      icon: <Clock className="w-8 h-8" />,
      title: "Bentogrods",
      subtitle: "Premium Service",
      description: "Experience our exclusive Bentogrods service - beautifully crafted bento boxes with authentic Asian flavors, perfect for corporate events, parties, and special occasions.",
      image: "🍱",
      highlight: "Premium Bento"
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
      {/* About Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#3C3637' }}>
        {/* Background Chinese Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl">🥢</div>
          <div className="absolute top-40 right-20 text-5xl">🍜</div>
          <div className="absolute bottom-20 left-20 text-7xl">🥢</div>
          <div className="absolute bottom-40 right-10 text-4xl">🍜</div>
          <div className="absolute top-1/2 left-1/4 text-5xl">🥢</div>
          <div className="absolute top-1/3 right-1/3 text-6xl">🍜</div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🏮</span>
              <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#F5DF19', fontFamily: 'NeueMontreal' }}>
                About Uncle's Chinese
              </span>
              <span className="text-2xl">🏮</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-6" 
                style={{ color: '#F8F8F8', fontFamily: 'Brice' }}>
              Our <span style={{ color: '#F5DF19' }}>Story 🥢</span>
            </h2>
            <p className="text-lg font-medium max-w-3xl mx-auto" 
               style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
              Since 2000, we've been serving authentic Chinese cuisine with a modern twist, 
              bringing the flavors of the Far East to your table. 🍜
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#F5DF19', fontFamily: 'Brice' }}>24+</div>
              <div className="text-lg font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#F5DF19', fontFamily: 'Brice' }}>6</div>
              <div className="text-lg font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>Locations in Pune</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#F5DF19', fontFamily: 'Brice' }}>100+</div>
              <div className="text-lg font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>Signature Dishes</div>
            </div>
          </div>

          {/* Mission and Vision Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="rounded-2xl p-8 text-left border relative overflow-hidden group hover:scale-105 transition-all duration-500"
                 style={{ backgroundColor: 'rgba(248, 248, 248, 0.95)', color: '#3C3637', borderColor: '#F5DF19', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              {/* Background Chinese Elements */}
              <div className="absolute top-4 right-4 text-5xl opacity-5 group-hover:opacity-10 transition-opacity">🥢</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">🏮</div>
              <div className="absolute top-1/2 right-6 text-3xl opacity-5 group-hover:opacity-10 transition-opacity">🍜</div>
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC3237] to-[#d42a2f] flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Brice' }}>Our Mission 🥢</h3>
              </div>
              <p className="leading-relaxed font-medium text-lg" style={{ fontFamily: 'NeueMontreal', color: '#666666' }}>
                To serve authentic, high-quality Asian flavors in a welcoming and casual dining space,
                creating a memorable experience for every guest. 🍜🏮
              </p>
              {/* Decorative Elements */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium" style={{ color: '#EC3237', fontFamily: 'NeueMontreal' }}>Authentic • Family • Tradition</span>
                <span className="text-lg">🥢</span>
              </div>
            </div>

            {/* Vision Card */}
            <div className="rounded-2xl p-8 text-left border relative overflow-hidden group hover:scale-105 transition-all duration-500"
                 style={{ backgroundColor: 'rgba(248, 248, 248, 0.95)', color: '#3C3637', borderColor: '#F5DF19', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
              {/* Background Chinese Elements */}
              <div className="absolute top-4 right-4 text-5xl opacity-5 group-hover:opacity-10 transition-opacity">🏮</div>
              <div className="absolute bottom-4 left-4 text-4xl opacity-5 group-hover:opacity-10 transition-opacity">🍜</div>
              <div className="absolute top-1/2 right-6 text-3xl opacity-5 group-hover:opacity-10 transition-opacity">🥢</div>
              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC3237] to-[#d42a2f] flex items-center justify-center">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: 'Brice' }}>Our Vision 🏮</h3>
              </div>
              <p className="leading-relaxed font-medium text-lg" style={{ fontFamily: 'NeueMontreal', color: '#666666' }}>
                To become the most loved Chinese restaurant, known for our authentic flavors,
                warm hospitality, and commitment to culinary excellence. 🥢🍜
              </p>
              {/* Decorative Elements */}
              <div className="flex items-center gap-2 mt-6 pt-4 border-t border-gray-200">
                <span className="text-sm font-medium" style={{ color: '#EC3237', fontFamily: 'NeueMontreal' }}>Excellence • Innovation • Heritage</span>
                <span className="text-lg">🏛️</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Excellence Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#3C3637' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-8xl">🥢</div>
          <div className="absolute top-40 right-40 text-6xl">🍜</div>
          <div className="absolute bottom-40 left-40 text-7xl">🏮</div>
          <div className="absolute bottom-20 right-20 text-5xl">🥢</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC3237] to-[#d42a2f] flex items-center justify-center">
                  <span className="text-2xl">👨‍🍳</span>
                </div>
                <span className="text-lg font-medium uppercase tracking-wider" style={{ color: '#F5DF19', fontFamily: 'NeueMontreal' }}>
                  Master Chef's Selection
                </span>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC3237] to-[#d42a2f] flex items-center justify-center">
                  <span className="text-2xl">🥢</span>
                </div>
              </div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-light leading-tight mb-8" 
              style={{ color: '#F8F8F8', fontFamily: 'Brice' }}
            >
              Culinary <span style={{ color: '#F5DF19' }}>Excellence</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl font-medium max-w-4xl mx-auto leading-relaxed" 
              style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}
            >
              Experience the pinnacle of Asian cuisine with our signature dishes, 
              crafted by master chefs using traditional techniques and premium ingredients.
            </motion.p>
          </div>

          {/* Featured Dish Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Large Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/7.jpg"
                    alt="Signature Hakka Noodles"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⭐</span>
                      <span className="font-bold text-lg" style={{ color: '#EC3237', fontFamily: 'Brice' }}>₹289</span>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#F5DF19] to-[#FFD700] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#EC3237] to-[#d42a2f] rounded-full opacity-20 blur-xl"></div>
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl md:text-5xl font-light mb-4" style={{ color: '#F8F8F8', fontFamily: 'Brice' }}>
                    Hakka <span style={{ color: '#F5DF19' }}>Noodles</span>
                  </h3>
                  <p className="text-lg font-medium leading-relaxed mb-6" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
                    Our signature Hakka noodles are stir-fried to perfection with fresh vegetables, 
                    authentic Chinese spices, and our secret sauce blend. Each bite delivers the perfect 
                    balance of texture and flavor that has made this dish a customer favorite for 24 years.
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F5DF19] flex items-center justify-center">
                        <span className="text-sm">🌱</span>
                      </div>
                      <span className="font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>Vegetarian</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F5DF19] flex items-center justify-center">
                        <span className="text-sm">🔥</span>
                      </div>
                      <span className="font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>Wok-Fried</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F5DF19] flex items-center justify-center">
                        <span className="text-sm">⭐</span>
                      </div>
                      <span className="font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>Popular</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#F5DF19] flex items-center justify-center">
                        <span className="text-sm">⚡</span>
                      </div>
                      <span className="font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>Quick</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  className="group relative px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 overflow-hidden"
                  style={{ 
                    backgroundColor: '#EC3237', 
                    color: '#FFFFFF', 
                    fontFamily: 'NeueMontreal',
                    boxShadow: '0 8px 32px rgba(236,50,55,0.3)'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>Order Now</span>
                    <span className="group-hover:translate-x-1 transition-transform">🍜</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F5DF19] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </motion.div>




        </div>
      </section>

      {/* Our Environment Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8" 
                style={{ 
                  color: '#3C3637', 
                  fontFamily: 'Brice',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
                }}>
              OUR ENVIRONMENT
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-4xl mx-auto leading-relaxed" 
               style={{ 
                 color: '#666666', 
                 fontFamily: 'NeueMontreal',
                 lineHeight: '1.8'
               }}>
              Experience the perfect blend of elegant décor and warm hospitality. Our restaurants feature 
              stunning interiors with traditional Chinese elements, creating an inviting atmosphere for 
              memorable dining experiences. 🏮🥢
            </p>
          </div>

          {/* Atmosphere Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/a1.jpg', alt: 'Restaurant Interior - Main Dining Area' },
                { src: '/a2.JPG', alt: 'Restaurant Interior - Cozy Corner' },
                { src: '/a3.JPG', alt: 'Restaurant Interior - Bar Area' },
                { src: '/a4.JPG', alt: 'Restaurant Interior - Private Dining' },
                { src: '/a5.PNG', alt: 'Restaurant Interior - Lounge Area' },
                { src: '/a6.PNG', alt: 'Restaurant Interior - Outdoor Seating' }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                  style={{ 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    border: '1px solid rgba(60, 54, 55, 0.1)'
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                      <span className="text-lg font-semibold" style={{ color: '#3C3637', fontFamily: 'Brice' }}>
                        View Details
                      </span>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">🏮</div>
                  <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-40 transition-opacity">🥢</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Environment Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl group hover:scale-105 transition-all duration-500"
              style={{ 
                backgroundColor: 'rgba(60, 54, 55, 0.05)',
                border: '1px solid rgba(60, 54, 55, 0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🌟</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#3C3637', fontFamily: 'Brice' }}>
                Elegant Décor
              </h3>
              <p className="text-base font-medium leading-relaxed" style={{ color: '#666666', fontFamily: 'NeueMontreal' }}>
                Sophisticated interiors with traditional Chinese elements, modern comfort, and carefully curated lighting to create the perfect dining ambiance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl group hover:scale-105 transition-all duration-500"
              style={{ 
                backgroundColor: 'rgba(60, 54, 55, 0.05)',
                border: '1px solid rgba(60, 54, 55, 0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏮</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#3C3637', fontFamily: 'Brice' }}>
                Warm Hospitality
              </h3>
              <p className="text-base font-medium leading-relaxed" style={{ color: '#666666', fontFamily: 'NeueMontreal' }}>
                Our dedicated staff ensures every guest feels welcome and comfortable, providing attentive service in a family-friendly atmosphere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl group hover:scale-105 transition-all duration-500"
              style={{ 
                backgroundColor: 'rgba(60, 54, 55, 0.05)',
                border: '1px solid rgba(60, 54, 55, 0.1)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
              }}
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🥢</div>
              <h3 className="text-2xl font-semibold mb-4" style={{ color: '#3C3637', fontFamily: 'Brice' }}>
                Perfect Setting
              </h3>
              <p className="text-base font-medium leading-relaxed" style={{ color: '#666666', fontFamily: 'NeueMontreal' }}>
                From intimate family dinners to large celebrations, our versatile spaces accommodate all occasions with style and comfort.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#FDFCF8' }}>
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-8xl">🍜</div>
          <div className="absolute top-40 right-20 text-6xl">🥢</div>
          <div className="absolute bottom-20 left-20 text-7xl">🏮</div>
          <div className="absolute bottom-40 right-10 text-5xl">🍜</div>
          <div className="absolute top-1/2 left-1/4 text-6xl">🥢</div>
          <div className="absolute top-1/3 right-1/3 text-7xl">🏮</div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC3237] to-[#d42a2f] flex items-center justify-center">
                <span className="text-2xl">🍜</span>
              </div>
              <span className="text-lg font-medium uppercase tracking-wider" style={{ color: '#EC3237', fontFamily: 'NeueMontreal' }}>
                Our Signature Dishes
              </span>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EC3237] to-[#d42a2f] flex items-center justify-center">
                <span className="text-2xl">🥢</span>
              </div>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8" 
                style={{ color: '#3C3637', fontFamily: 'Brice' }}>
              Taste of <span style={{ color: '#EC3237' }}>Excellence</span>
            </h2>
            
            <p className="text-xl font-medium max-w-4xl mx-auto leading-relaxed" 
               style={{ color: '#666666', fontFamily: 'NeueMontreal' }}>
              Discover our most beloved dishes, each crafted with authentic recipes and premium ingredients 
              that have delighted customers for over two decades.
            </p>
          </motion.div>

          {/* Food Gallery Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {(() => {
                // Use a carefully selected set of unique images to ensure no repetition
                const uniqueImageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
                
                return uniqueImageNumbers.map((imageNumber, index) => {
                  const imageSrc = `/${imageNumber}.jpg`;
                  const dishNames = [
                    "Hakka Noodles", "Manchurian", "Dim Sum", "Fried Rice", "Spring Rolls",
                    "Sweet & Sour", "Kung Pao", "Mapo Tofu", "Wonton Soup", "Peking Duck",
                    "General Tso's", "Orange Chicken"
                  ];
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                    style={{ 
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      border: '1px solid rgba(60, 54, 55, 0.1)'
                    }}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={imageSrc}
                        alt={dishNames[index]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                        <span className="text-sm font-semibold" style={{ color: '#3C3637', fontFamily: 'Brice' }}>
                          {dishNames[index]}
                        </span>
                      </div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-3 left-3 text-lg opacity-20 group-hover:opacity-40 transition-opacity">🏮</div>
                  </motion.div>
                );
              });
            })()}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-[#EC3237] to-[#F5DF19] rounded-full"></div>
              <span className="text-lg font-medium" style={{ color: '#EC3237', fontFamily: 'NeueMontreal' }}>
                Hungry for More?
              </span>
              <div className="w-16 h-1 bg-gradient-to-r from-[#F5DF19] to-[#EC3237] rounded-full"></div>
            </div>
            
            <p className="text-lg font-medium mb-8" style={{ color: '#666666', fontFamily: 'NeueMontreal' }}>
              Explore our complete menu featuring over 100 authentic Chinese and Asian dishes
            </p>
            
            <button className="group relative px-8 py-4 rounded-2xl font-medium text-lg transition-all duration-300 overflow-hidden"
                    style={{ 
                      backgroundColor: '#EC3237', 
                      color: '#FFFFFF' 
                    }}>
              <span className="relative z-10">View Full Menu</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#F5DF19] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Locations Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#2A2526' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-4xl">📍</div>
          <div className="absolute top-30 right-20 text-3xl">🏪</div>
          <div className="absolute bottom-20 left-20 text-5xl">🎯</div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6" style={{ color: '#F5DF19' }} />
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: '#F5DF19', fontFamily: 'NeueMontreal' }}>
              Find Us
            </span>
            <MapPin className="w-6 h-6" style={{ color: '#F5DF19' }} />
          </div>

          <h2 className="text-4xl md:text-6xl font-light leading-tight" style={{ color: '#F8F8F8', fontFamily: 'Brice' }}>
            Visit Our
            <br />
            <span className="font-normal" style={{ color: '#F5DF19' }}>Locations</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outlets.map((outlet, index) => (
              <div key={index} className="p-6 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden" 
                   style={{ borderColor: '#F5DF19', backgroundColor: 'rgba(60, 54, 55, 0.8)' }}>
                <div className="absolute top-3 right-3 text-2xl opacity-10">🏪</div>
                <MapPin className="w-6 h-6 mb-3 mx-auto" style={{ color: '#F5DF19' }} />
                <h3 className="text-lg font-semibold tracking-wide mb-2" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
                  {outlet.name}
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-4 h-4" style={{ color: '#F5DF19' }} />
                  <span className="text-sm font-medium" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
                    {outlet.rating}
                  </span>
                </div>
                <p className="text-xs font-medium" style={{ color: '#EC3237', fontFamily: 'NeueMontreal' }}>
                  Popular: {outlet.popular}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundColor: '#4A4445' }}>
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-4xl">📞</div>
          <div className="absolute top-40 right-20 text-3xl">📧</div>
          <div className="absolute bottom-20 left-20 text-5xl">💬</div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
          <h2 className="text-4xl md:text-6xl font-light leading-tight" style={{ color: '#F8F8F8', fontFamily: 'Brice' }}>
            Ready to
            <br />
            <span className="font-normal" style={{ color: '#F5DF19' }}>Taste Tradition?</span>
          </h2>

          <p className="text-lg font-medium max-w-2xl mx-auto tracking-wide" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>
            Experience the authentic flavors that have made us Pune's favorite Asian restaurant for over two decades.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105" 
                 style={{ backgroundColor: 'rgba(60, 54, 55, 0.9)', borderColor: '#F5DF19', border: '1px solid', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              <Phone className="w-5 h-5" style={{ color: '#EC3237' }} />
              <span className="font-medium text-base" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>020 2615 2970</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:scale-105" 
                 style={{ backgroundColor: 'rgba(60, 54, 55, 0.9)', borderColor: '#F5DF19', border: '1px solid', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
              <Mail className="w-5 h-5" style={{ color: '#EC3237' }} />
              <span className="font-medium text-base" style={{ color: '#F8F8F8', fontFamily: 'NeueMontreal' }}>uncleskitchen@gmail.com</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 border transform hover:scale-110 hover:shadow-lg"
                style={{ 
                  backgroundColor: 'rgba(60, 54, 55, 0.9)', 
                  borderColor: '#F5DF19',
                  color: '#EC3237',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <button 
            className="px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            style={{ 
              backgroundColor: '#EC3237', 
              color: '#FFFFFF', 
              fontFamily: 'NeueMontreal',
              boxShadow: '0 4px 20px rgba(236,50,55,0.3)'
            }}
          >
            Visit Us Today
          </button>
        </div>
      </section>

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