"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Clients() {
  return (
    <>
      {/* Testimonials Section
      <section className="py-20 px-4" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden rounded-lg">
          <div className="mx-auto max-w-4xl p-4 text-center sm:py-14">
            <h1 className="mb-4 text-5xl md:text-7xl font-black uppercase tracking-tight" style={{ color: '#3C3637', fontFamily: 'Montserrat Alternates, sans-serif' }}>
              Our Customers 
              <br />
              <span style={{ color: '#EC3237' }}>
                Love Us!
              </span>
            </h1>
            <p className="text-2xl p-7 font-bold italic" style={{ color: '#3C3637', fontFamily: 'Montserrat Alternates, sans-serif' }}>
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

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-100"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-100"></div>
        </div>
      </section>
      */}
    </>
  );
}

const ReviewCard = ({ img, name, email, description }: any) => {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-black">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{email}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{description}</blockquote> 
    </figure>
  );
};

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

/*
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
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        
        @keyframes marquee-reverse {
          from {
            transform: translateX(calc(-100% - var(--gap)));
          }
          to {
            transform: translateX(0);
          }
        }
        
        .marquee-animation {
          animation: marquee var(--duration) linear infinite;
        }
        
        .marquee-reverse-animation {
          animation: marquee-reverse var(--duration) linear infinite;
        }
        
        .group:hover .marquee-animation,
        .group:hover .marquee-reverse-animation {
          animation-play-state: ${pauseOnHover ? 'paused' : 'running'};
        }
      `}</style>
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around [gap:var(--gap)] ${
              vertical ? "flex-col" : "flex-row"
            } ${
              reverse ? "marquee-reverse-animation" : "marquee-animation"
            }`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
*/