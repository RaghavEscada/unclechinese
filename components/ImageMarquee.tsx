"use client";

import React from "react";
import Image from "next/image";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

function Marquee({
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
              animation: `marquee ${reverse ? 'reverse' : 'normal'} var(--duration) linear infinite`,
            }}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

interface ImageCardProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageCard = ({ src, alt, className }: ImageCardProps) => (
  <div className={`relative overflow-hidden rounded-xl shadow-lg ${className}`}>
    <Image
      src={src}
      alt={alt}
      width={400}
      height={300}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      onError={(e) => {
        console.log(`Failed to load image: ${src}`);
      }}
    />
    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300" />
  </div>
);

export default function ImageMarquee() {
  const images = [
    { src: "/home1.webp", alt: "Uncle's Chinese Restaurant Interior 1" },
    { src: "/home15.webp", alt: "Uncle's Chinese Restaurant Interior 2" },
    { src: "/home3.webp", alt: "Uncle's Chinese Restaurant Interior 3" },
    { src: "/home4.webp", alt: "Uncle's Chinese Restaurant Interior 4" },
    { src: "/home5.webp", alt: "Uncle's Chinese Restaurant Interior 5" },
    { src: "/home6.webp", alt: "Uncle's Chinese Restaurant Interior 6" },
    { src: "/home7.webp", alt: "Uncle's Chinese Restaurant Interior 7" },
    { src: "/home8.webp", alt: "Uncle's Chinese Restaurant Interior 8" },
    { src: "/home9.webp", alt: "Uncle's Chinese Restaurant Interior 9" },
    { src: "/home10.webp", alt: "Uncle's Chinese Restaurant Interior 10" },
    { src: "/home11.webp", alt: "Uncle's Chinese Restaurant Interior 11" },
    { src: "/home12.webp", alt: "Uncle's Chinese Restaurant Interior 12" },
    { src: "/home13.webp", alt: "Uncle's Chinese Restaurant Interior 13" },
    { src: "/home14.webp", alt: "Uncle's Chinese Restaurant Interior 14" },
    { src: "/home15.webp", alt: "Uncle's Chinese Restaurant Interior 15" },
  ];

  // Create 3 rows with 5 unique photos each
  const firstRow = images.slice(0, 5);   // home1 to home5
  const secondRow = images.slice(5, 10); // home6 to home10
  const thirdRow = images.slice(10, 15); // home11 to home15

  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden bg-black py-20">
      {/* Title Section */}
      <div className="mx-auto max-w-4xl p-4 text-center mb-12">
        <h2 className="mb-4 text-4xl md:text-6xl font-light text-white">
          Our Restaurant
          <br />
          <span className="bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Take a glimpse into our beautiful restaurant spaces and authentic dining experience
        </p>
      </div>

      {/* Marquee Gallery */}
      <div className="relative w-full">
        <Marquee pauseOnHover className="[--duration:30s] mb-4">
          {firstRow.map((image, index) => (
            <ImageCard 
              key={`first-${index}`} 
              src={image.src} 
              alt={image.alt}
              className="w-80 h-60"
            />
          ))}
        </Marquee>
        
        <Marquee reverse pauseOnHover className="[--duration:25s] mb-4">
          {secondRow.map((image, index) => (
            <ImageCard 
              key={`second-${index}`} 
              src={image.src} 
              alt={image.alt}
              className="w-80 h-60"
            />
          ))}
        </Marquee>
        
        <Marquee pauseOnHover className="[--duration:35s]">
          {thirdRow.map((image, index) => (
            <ImageCard 
              key={`third-${index}`} 
              src={image.src} 
              alt={image.alt}
              className="w-80 h-60"
            />
          ))}
        </Marquee>

        {/* Gradient overlays for smooth fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
      </div>
    </div>
  );
}
