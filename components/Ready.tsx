import React, { useRef } from "react";
import Link from "next/link";
import { TextMask } from "@/animation";
import { ArrowUpRight } from "lucide-react";
import { Rounded } from "@/components";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Ready() {
  const container = useRef(null);
  const phrase = ["READY TO", "TASTE", "TRADITION?"];

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  
  // Responsive transform values
  const mq = useTransform(scrollYProgress, [0, 1], [0, -700]);
  const mobileTransform = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const tabletTransform = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section
      ref={container}
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16 xl:px-24 py-16 md:py-24 lg:py-32 relative overflow-hidden bg-black text-white"
    >
      {/* Background Motion Element */}
      <motion.div
        style={{ 
          y: mq,
        }}
        className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-500/20 opacity-50"
      />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        
        {/* Animated Text */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <TextMask>
            {phrase}
          </TextMask>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8 md:mb-12"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Experience authentic Chinese and Pan-Asian flavors that have been perfected over 24 years. Order now and taste the difference that tradition makes.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <Rounded className="group" backgroundColor="#EC3237">
            <Link 
              href="/menu"
              className="flex items-center gap-3 md:gap-4 px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 text-sm md:text-base lg:text-lg font-semibold bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 group-hover:scale-105"
            >
              <span>ORDER NOW</span>
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:rotate-45 transition-transform duration-300" />
            </Link>
          </Rounded>
        </motion.div>

        {/* Additional Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 md:mt-16 lg:mt-20 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-400 uppercase tracking-wider"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>6 locations across Pune</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-600" />
          <div className="flex items-center gap-2">
            <span>24 years of tradition</span>
            <div className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Responsive CSS for custom transforms */}
      <style jsx>{`
        @media (max-width: 768px) {
          .motion-div {
            transform: translateY(var(--mobile-y));
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .motion-div {
            transform: translateY(var(--tablet-y));
          }
        }
      `}</style>
    </section>
  );
}