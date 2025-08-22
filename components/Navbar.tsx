"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Phone, MapPin, Clock, ChefHat, Star } from "lucide-react";
import MobileNav from "./MobileNav";

const navVariants = {
  vissible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
  hidden: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.17, 0.55, 0.55, 1],
    },
  },
};

// Uncle's Chinese navigation items
const unclesNavItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Menu", href: "/menu" },
  { id: 3, title: "About", href: "/about-us" },
  { id: 4, title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Set background based on scroll position
    setIsScrolled(latest > 50);
    
    // Hide/show navbar based on scroll direction
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Desktop Navbar - only visible on lg+ */}
      <div className="hidden lg:block">
        <motion.nav
          variants={navVariants}
          className="w-full h-[60px] px-4 lg:px-6 xl:px-8 fixed top-0 left-0 z-50"
          animate={hidden ? "hidden" : "vissible"}
          style={{ backgroundColor: '#FDFCF8' }}
        >
          {/* Light background navbar */}
          <div className="relative z-10 h-full flex items-center justify-between">
            {/* Uncle's Chinese Logo */}
            <Link href="/" className="flex items-center gap-2">
              <img
                src="/uclogo.png"
                alt="Uncle's Chinese Kitchen Logo"
                style={{ height: '36px', width: 'auto' }}
              />
            </Link>
            
            {/* Center Navigation */}
            <div className="flex items-center gap-6 xl:gap-8">
              {unclesNavItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Link href={item.href} className="group relative">
                    <motion.span 
                      className="font-medium text-[#2C2C2C] hover:text-[#EC3237] transition-colors duration-300 relative py-1 px-1 text-sm"
                      style={{ fontFamily: 'NeueMontreal' }}
                      whileHover={{ y: -1 }}
                    >
                      {item.title}
                    </motion.span>
                    {/* Underline Animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EC3237] origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {/* Right Section - Contact Info */}
            <div className="flex items-center gap-3 xl:gap-4">
              {/* Contact Information */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="hidden xl:flex items-center gap-3"
              >
                {/* Phone */}
                <div className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-[#EC3237]" />
                  <span className="text-xs text-[#2C2C2C] font-medium" style={{ fontFamily: 'NeueMontreal' }}>
                    +1 (555) 123-4567
                  </span>
                </div>
                
                {/* Address */}
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#EC3237]" />
                  <span className="text-xs text-[#2C2C2C] font-medium" style={{ fontFamily: 'NeueMontreal' }}>
                    123 Main St
                  </span>
                </div>
                
                {/* Hours */}
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#EC3237]" />
                  <span className="text-xs text-[#2C2C2C] font-medium" style={{ fontFamily: 'NeueMontreal' }}>
                    Open Daily
                  </span>
                </div>
              </motion.div>
              
              {/* CTA Button */}
              <motion.button
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-[#EC3237] text-white px-4 py-1.5 rounded-full font-medium hover:bg-[#d42a2f] transition-colors duration-300 text-xs"
                style={{ fontFamily: 'NeueMontreal' }}
              >
                Order Now
              </motion.button>
            </div>
          </div>
        </motion.nav>
      </div>
      {/* Mobile Navbar - only visible on mobile */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </>
  );
}