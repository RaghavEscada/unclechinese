"use client";
import { Footer, Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome, X } from "@/container";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Hero />
      <About />
      <Clients />
      <Ready />
    </div>
  );
}