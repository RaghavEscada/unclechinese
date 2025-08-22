import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Zap, Rocket, Target } from 'lucide-react';

interface Phase {
  name: string;
  objective: string;
  focusAreas: string[];
  icon: React.ElementType;
  color: string;
}

const phases: Phase[] = [
  {
    name: "Inception",
    objective: "Build foundational awareness and mindset needed for entrepreneurship or consultancy.",
    focusAreas: [
      "Clarifying your personal vision and long-term 'why'",
      "Understanding fundamental business concepts: value creation, customer needs, and problem-solving",
      "Learning core business terminology and frameworks",
      "Developing a basic understanding of sales psychology and human motivation",
      "Gaining awareness of what it takes to become an entrepreneur or consultant — mindset, risks, and opportunities"
    ],
    icon: Lightbulb,
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Revelation",
    objective: "Gain clarity in business dynamics, sharpen communication, and understand marketing and sales mechanics.",
    focusAreas: [
      "Building confident, strategic communication for business settings",
      "Understanding how to position ideas, services, or products in the market",
      "Learning modern marketing strategies: content, performance, brand building",
      "Getting hands-on with marketing tools like CRMs, automation platforms, and analytics",
      "Studying real business scenarios through case studies",
      "Deep diving into sales strategies: discovery, handling objections, pitching, and negotiation",
      "Strengthening financial literacy: cash flow, pricing, budgeting",
      "Exploring how to assess and manage risks in business environments"
    ],
    icon: Zap,
    color: "from-purple-500 to-pink-600"
  },
  {
    name: "Transition",
    objective: "Bridge theory and practice; start forming real-world structures and taking ownership.",
    focusAreas: [
      "Moving from idea to action: building a service or business framework",
      "Developing entrepreneurial habits and decision-making processes",
      "Constructing a minimal viable offer or prototype and testing in the real world",
      "Understanding data-driven approaches to strategy and business growth",
      "Beginning to operate in a semi-professional capacity (freelance, consulting, side project)"
    ],
    icon: Target,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Implementation",
    objective: "Apply everything learned in real scenarios; refine tools and prepare for professional performance.",
    focusAreas: [
      "Reviewing and applying all tools, models, and strategies in practical settings",
      "Participating in simulations, roleplays, or client-like interactions",
      "Gaining structured feedback and refining your pitch or value offer",
      "Enhancing your professional toolkit (templates, proposals, decks, SOPs)"
    ],
    icon: ArrowRight,
    color: "from-yellow-500 to-orange-600"
  },
  {
    name: "Revolution",
    objective: "Become client-ready or job-ready; confidently operate as a professional consultant, entrepreneur, or team leader.",
    focusAreas: [
      "Finalizing your personal brand and positioning",
      "Preparing for client acquisition or job interviews",
      "Building and showcasing a project portfolio or case-based pitch",
      "Understanding how to sustain and scale either a consulting career or business venture",
      "Mapping out next steps: business launch, freelancing career, or high-performance corporate role"
    ],
    icon: Rocket,
    color: "from-red-500 to-rose-600"
  }
];

const Timeline = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center mb-16"
        >
          Your Journey to Success
        </motion.h1>

        <div className="space-y-24">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              {/* Phase Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                  <phase.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Phase: {phase.name}
                  </h2>
                  <p className="text-lg text-white/70">
                    {phase.objective}
                  </p>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {phase.focusAreas.map((area, areaIndex) => (
                  <motion.div
                    key={areaIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: areaIndex * 0.1 }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    <p className="text-white/90 leading-relaxed">
                      {area}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Connector Line */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-full w-0.5 h-24 bg-gradient-to-b from-white/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 