"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Smartphone, TrendingUp, User, PenTool, Camera, Globe, Video, Palette
} from "lucide-react";

const services = [
  {
    id: 1,
    number: "01",
    title: "Social Media Marketing",
    description: "Building your digital presence",
    icon: Smartphone,
    highlights: [
      "Content strategy & planning",
      "Community management",
      "Analytics & growth tracking",
      "Platform optimization"
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Digital Marketing",
    description: "Driving results through data",
    icon: TrendingUp,
    highlights: [
      "Google & Social Media Ads",
      "Campaign strategy",
      "Performance optimization",
      "Conversion tracking"
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Personal Branding",
    description: "Crafting your unique story",
    icon: User,
    highlights: [
      "Brand positioning",
      "Visual identity design",
      "Content strategy",
      "Reputation management"
    ]
  },
  {
    id: 4,
    number: "04",
    title: "Content Creation",
    description: "Stories that captivate",
    icon: PenTool,
    highlights: [
      "Blog & social content",
      "SEO optimization",
      "Editorial planning",
      "Performance tracking"
    ]
  },
  {
    id: 5,
    number: "05",
    title: "Product Photography",
    description: "Capturing your vision",
    icon: Camera,
    highlights: [
      "Product & lifestyle shoots",
      "Professional editing",
      "E-commerce optimization",
      "Quick turnaround"
    ]
  },
  {
    id: 6,
    number: "06",
    title: "Website Development",
    description: "Digital experiences that convert",
    icon: Globe,
    highlights: [
      "Custom websites",
      "E-commerce solutions",
      "Mobile optimization",
      "SEO & performance"
    ]
  },
  {
    id: 7,
    number: "07",
    title: "Video Editing",
    description: "Bringing stories to life",
    icon: Video,
    highlights: [
      "Promotional videos",
      "Social media clips",
      "Motion graphics",
      "Professional editing"
    ]
  },
  {
    id: 8,
    number: "08",
    title: "Brand Identity and Designing",
    description: "Visual excellence, memorable impact",
    icon: Palette,
    highlights: [
      "Logo & brand design",
      "Marketing materials",
      "Digital assets",
      "Brand guidelines"
    ]
  }
];

// Simplified ServiceCard component
const ServiceCard = ({ service }: { service: any }) => {
  const Icon = service.icon;
  
  return (
    <div className="w-screen min-w-screen flex-shrink-0 h-full px-10 flex items-center justify-center relative">
      {/* Content card */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full mx-auto ml-auto mr-12 relative z-20 overflow-hidden h-4/5 border border-gray-200">
        {/* Icon header */}
        <div className="absolute top-0 right-0 w-28 h-28 flex items-center justify-center rounded-bl-3xl bg-black">
          <Icon className="w-10 h-10 text-white" />
        </div>
        
        {/* Number tab */}
        <div className="absolute left-10 top-0 rounded-b-xl px-5 py-2 text-base font-medium bg-black text-white">
          {service.number}
        </div>
        
        {/* Card Content */}
        <div className="pt-20 px-10 pb-10 h-full flex flex-col">
          <h2 className="text-4xl font-bold text-black">{service.title}</h2>
          <p className="text-lg font-light italic text-gray-600 mt-2 mb-6">{service.description}</p>
          
          <div className="w-24 h-1 rounded-full mb-6 bg-black"></div>
          
          {/* Highlights */}
          <div className="space-y-4 flex-1">
            {service.highlights.map((highlight: string, idx: number) => (
              <div key={idx} className="flex items-center">
                <div className="w-2 h-2 rounded-full bg-black mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 text-base">{highlight}</p>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Link href="/contact" className="mt-6 w-full">
            <button className="w-full py-3 rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      
      {/* Step indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {services.map((_, i) => (
          <div 
            key={i} 
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              i === service.id - 1 ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ServicesPage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  // Balanced speed - not too slow, not too fast
  const x = useTransform(scrollYProgress, [0, 0.92], ["0%", `-${(services.length - 1) * 100}%`]);  
  const progressWidth = useTransform(scrollYProgress, [0, 0.92], ["0%", "100%"]);
  
  return (
    <section 
      ref={targetRef} 
      className="relative bg-black"
      style={{ height: `${2000}vh` }}
    >
      {/* Progress bar */}
      <div className="sticky top-6 left-0 w-full z-50 px-12">
        <div className="h-1 bg-gray-800 rounded-full">
          <motion.div 
            className="h-full bg-white rounded-full"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-start">
        {/* Background heading text */}
        <div className="absolute left-16 px-12 top-1/2 transform -translate-y-1/2 text-white max-w-lg z-0 pointer-events-none">
          <h1 className="text-6xl font-light leading-tight">
            Our
            <br />
            <span className="flex">
              Services
            </span>
          </h1>
        </div>
        
        {/* Horizontal carousel */}
        <motion.div
          style={{ x }}
          className="flex flex-nowrap h-screen pt-20 pb-0 w-full"
        >
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}