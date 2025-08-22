"use client";
import { motion } from "framer-motion";

const logos = [
  {
    name: "Babel",
    url: "/l1.webp",
  },
  {
    name: "Ngrok", 
    url: "/l2.webp",
  },
  {
    name: "Webflow",
    url: "/l3.webp",
  },
  {
    name: "Perplexity",
    url: "/l4.webp",
  },
  {
    name: "Sanity",
    url: "/l5.webp",
  },
  {
    name: "Post CSS",
    url: "/l6.webp",
  },
];

const MinimalLogoCloud = () => {
  return (
    <div className="w-full py-12 md:py-20">
      <style jsx>{`
        @keyframes logo-cloud {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 3rem));
          }
        }
        
        .animate-logo-cloud {
          animation: logo-cloud 20s linear infinite;
        }
      `}</style>
      
      <div className="mx-auto w-full px-4">
        <motion.h3 
          className="text-center text-sm font-light text-zinc-500 tracking-wide uppercase mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Trusted Partners
        </motion.h3>
        
        <div
          className="relative flex gap-4 md:gap-8 overflow-hidden py-4"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%)",
          }}
        >
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <motion.div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6 md:gap-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                {logos.map((logo, key) => (
                  <div key={key} className="group relative">
                    <div className="relative bg-zinc-950/30 border border-zinc-800/30 rounded-lg p-2 md:p-4 hover:border-zinc-700/50 transition-all duration-300">
                      <img
                        src={logo.url}
                        className="w-32 md:w-48 lg:w-64 bg-white rounded-sm opacity-90 hover:opacity-100 transition-opacity duration-300"
                        alt={logo.name}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div className="w-full min-h-screen bg-black text-white relative">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-20">
        {/* Main Hook */}
        <div className="space-y-12 md:space-y-20 mb-20 md:mb-40">
          <div className="relative">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-tight leading-none">
              Your audience is
              <br />
              <span className="text-zinc-400 font-light">scrolling.</span>
              <br />
              <span className="text-zinc-500 font-light">Are they stopping?</span>
            </h1>
            
            {/* Simple line decoration - hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 -right-12 w-20 h-[1px] bg-white/30" />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 ml-2">
            <div className="w-8 md:w-16 h-[1px] bg-white/40" />
            <p className="text-base md:text-lg font-normal tracking-wide text-zinc-300">
              Stop the scroll. Start the growth.
            </p>
          </div>
        </div>

        {/* Image Placeholder Section - FIXED */}
        <div className="mb-40">
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
            <img 
              src="/m1.webp" 
              alt="Image Placeholder" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-40">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-10">
            <div className="border border-zinc-700 rounded-xl md:rounded-2xl p-6 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-6 md:mb-8 leading-relaxed">
                Social media isn't just posting—
                <span className="block text-zinc-400 font-light mt-2">
                  it's about standing out.
                </span>
              </h2>
              
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light">
                A weak presence means missed opportunities. We create content that 
                turns scrollers into followers and followers into loyal customers.
              </p>
            </div>
            
            <a href="/contact">
              <button className="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-normal tracking-wide hover:bg-zinc-200 transition-colors duration-300 w-full sm:w-auto">
                Let's Create →
              </button>
            </a>
          </div>

          {/* Right Column with Image Space - FIXED */}
          <div className="space-y-6 md:space-y-10">
            {/* Image Placeholder - FIXED */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
              <img 
                src="/a1.webp" 
                alt="About Image" 
                className="w-full h-48 sm:h-64 md:h-80 object-cover" 
              />
            </div>
            
            <div className="border border-zinc-700 rounded-xl md:rounded-2xl p-6 md:p-10">
              <h3 className="text-xl md:text-2xl font-normal mb-4 md:mb-6">
                Nuke is a winning formula
              </h3>
              
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-light mb-6 md:mb-8">
                Your brand deserves a strategy that pulls in leads like a magnet. 
                With viral-worthy content and a brand identity that sticks.
              </p>
              
              <div className="flex items-center gap-4 text-sm">
                <span className="text-zinc-400 font-normal">Meet the team</span>
                <div className="w-6 h-[1px] bg-zinc-600" />
                <span className="text-white font-medium">5 Masterminds</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section - FIXED */}
        <div className="mb-20 md:mb-40">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-16 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 md:mb-4">The Masterminds</h2>
              <div className="w-12 md:w-20 h-[1px] bg-white/40" />
            </div>
            <button className="text-zinc-400 hover:text-white transition-colors duration-300 font-normal rounded-full border border-zinc-600 hover:border-white px-4 md:px-6 py-2 text-sm md:text-base">
              View All →
            </button>
          </div>

          {/* Image Space for Team - FIXED */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 mb-12">
            <img 
              src="/g.webp" 
              alt="Team Image" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Stats with Image Space - FIXED */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-32">
          {/* Stats */}
          <div className="border border-zinc-700 rounded-2xl md:rounded-3xl p-6 md:p-12">
            <div className="grid grid-cols-1 gap-6 md:gap-8">
              {[
                { number: "500K+", label: "Impressions Generated" },
                { number: "< 3 Months ", label: "in Time" },
                { number: "1.2M+", label: "Viral Views" }
              ].map((stat, index) => (
                <div key={index} className="text-center relative pb-4 md:pb-6 border-b border-zinc-800 last:border-b-0">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-light mb-2">
                    {stat.number}
                  </div>
                  <div className="text-zinc-400 text-xs md:text-sm font-normal">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Space - FIXED */}
          <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
            <img 
              src="/lr6.webp" 
              alt="Image Placeholder" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Logo Cloud Section */}
      <div className="bg-black">
        <MinimalLogoCloud />
      </div>

      {/* CTA Section - FIXED */}
      <div className="bg-black text-white py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Image Space for CTA - FIXED */}
          <div className="bg-zinc-900 rounded-2xl md:rounded-3xl overflow-hidden border border-zinc-800 mb-8 md:mb-16">
            <img 
              src="/cta.webp" 
              alt="CTA Image" 
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover" 
            />
          </div>
          
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 md:mb-8 leading-tight">
              Ready to go
              <span className="block text-zinc-400 font-light">
                viral?
              </span>
            </h2>
            
            <p className="text-lg md:text-xl mb-12 md:mb-16 text-zinc-300 font-light max-w-2xl mx-auto px-4">
              Let's create content that stops the scroll—starting today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
              <a href="/contact" className="w-full sm:w-auto">
                <button className="bg-white text-black px-8 md:px-12 py-3 md:py-4 rounded-full font-normal tracking-wide hover:bg-zinc-200 transition-colors duration-300 w-full">
                  Book A Call
                </button>
              </a>
              
              <a href="/nuke-works" className="w-full sm:w-auto">
                <button className="border border-white text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-normal tracking-wide hover:bg-white hover:text-black transition-all duration-300 w-full">
                  View Our Work
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}