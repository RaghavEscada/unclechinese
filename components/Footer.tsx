"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, Suspense } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

// 3D Ramen Bowl Component
const RamenBowl3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const bowlRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Responsive sizing
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    sceneRef.current = scene;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    const spotLight = new THREE.SpotLight(0xff6b6b, 0.5);
    spotLight.position.set(-5, 5, 2);
    scene.add(spotLight);

    // Load GLB model
    const loader = new GLTFLoader();
    const createFallbackBowl = () => {
      const group = new THREE.Group();
      
      // Bowl geometry
      const bowlGeometry = new THREE.SphereGeometry(1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.7);
      const bowlMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8B4513,
        shininess: 30
      });
      const bowl = new THREE.Mesh(bowlGeometry, bowlMaterial);
      bowl.position.y = -0.5;
      group.add(bowl);

      // Broth
      const brothGeometry = new THREE.SphereGeometry(1.1, 32, 16, 0, Math.PI * 2, 0, Math.PI * 0.6);
      const brothMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xD2691E,
        transparent: true,
        opacity: 0.8
      });
      const broth = new THREE.Mesh(brothGeometry, brothMaterial);
      broth.position.y = -0.3;
      group.add(broth);

      // Noodles (simplified as curved lines)
      for (let i = 0; i < 8; i++) {
        const curve = new THREE.QuadraticBezierCurve3(
          new THREE.Vector3(-0.8 + Math.random() * 1.6, -0.2, -0.8 + Math.random() * 1.6),
          new THREE.Vector3(-0.4 + Math.random() * 0.8, 0.2, -0.4 + Math.random() * 0.8),
          new THREE.Vector3(-0.6 + Math.random() * 1.2, -0.1, -0.6 + Math.random() * 1.2)
        );
        
        const tubeGeometry = new THREE.TubeGeometry(curve, 20, 0.02, 8, false);
        const noodleMaterial = new THREE.MeshPhongMaterial({ color: 0xFFF8DC });
        const noodle = new THREE.Mesh(tubeGeometry, noodleMaterial);
        group.add(noodle);
      }

      // Chopsticks
      const stickGeometry = new THREE.CylinderGeometry(0.02, 0.02, 2);
      const stickMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
      
      const chopstick1 = new THREE.Mesh(stickGeometry, stickMaterial);
      chopstick1.position.set(0.8, 0.5, 0.2);
      chopstick1.rotation.z = 0.3;
      group.add(chopstick1);
      
      const chopstick2 = new THREE.Mesh(stickGeometry, stickMaterial);
      chopstick2.position.set(0.7, 0.3, 0.1);
      chopstick2.rotation.z = 0.2;
      group.add(chopstick2);

      return group;
    };
    loader.load(
      '/stylized_ramen_bowl.glb',
      (gltf) => {
        const model = gltf.scene;
        model.scale.setScalar(12); // Bigger scale for footer
        model.position.y = -1;
        model.rotation.x = 0.3; // Face up slightly
        scene.add(model);
        bowlRef.current = model;
      },
      undefined,
      (error) => {
        const fallbackBowl = createFallbackBowl();
        fallbackBowl.scale.setScalar(12); // Also scale fallback bigger
        fallbackBowl.rotation.x = 0.3; // Face up slightly
        scene.add(fallbackBowl);
        bowlRef.current = fallbackBowl;
      }
    );
    camera.position.z = 4;
    camera.position.y = 1;

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !rendererRef.current || !sceneRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      rendererRef.current.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (bowlRef.current) {
        bowlRef.current.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default function Footer() {
  const quickLinks = [
    { id: 1, title: "Menu", href: "/menu" },
    { id: 2, title: "About Us", href: "/about-us" },
    { id: 3, title: "Our Locations", href: "/locations" },
    { id: 4, title: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    { id: 1, title: "Instagram", href: "https://www.instagram.com/uncles_chinese/", icon: <Instagram size={20} /> },
    { id: 2, title: "Facebook", href: "https://www.facebook.com/uncleschinese", icon: <Facebook size={20} /> },
    { id: 3, title: "Twitter", href: "https://twitter.com/uncles_chinese", icon: <Twitter size={20} /> },
    { id: 4, title: "YouTube", href: "https://youtube.com/uncles_chinese", icon: <Youtube size={20} /> },
  ];

  const deliveryPartners = [
    { id: 1, title: "Zomato", href: "https://www.zomato.com/uncle-chinese", icon: "/Zomato_Logo.svg" },
    { id: 2, title: "Swiggy", href: "https://www.swiggy.com/uncle-chinese", icon: "/Swiggy_Logo_2024.webp" },
  ];

  return (
    <footer className="w-full min-h-screen bg-black text-white px-6 md:px-20 pt-20 pb-0 relative overflow-hidden font-brice flex flex-col justify-between gap-8">
      {/* 3D Animation Background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40">
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem] xl:w-[44rem] xl:h-[44rem] 2xl:w-[52rem] 2xl:h-[52rem] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl animate-spin">🍜</div>
              </div>
            }>
              <RamenBowl3D />
            </Suspense>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1400px] mx-auto relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1 - Brand & About */}
          <div className="lg:col-span-6">
            <div className="mb-12">
              <img
                src="/uclogo.png"
                alt="Uncle's Chinese"
                className="w-64 h-48 md:w-80 md:h-60 lg:w-96 lg:h-72 object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                style={{ 
                  filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15)) drop-shadow(0 0 60px rgba(236,50,55,0.2))'
                }}
              />
            </div>
            <p className="text-gray-400 text-base font-light mb-6">
              Authentic Chinese & Thai cuisine served with love since 2000. Experience the finest Asian flavors at our 6 locations across Pune.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-colors"
                >
                  <span className="sr-only">{item.title}</span>
                  <span className="text-white">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-light text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-1 gap-3">
              {quickLinks.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="text-gray-400 hover:text-red-500 transition-colors text-base font-light"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-light text-white mb-6">Contact Us</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <a href="tel:02026152970" className="block hover:text-red-500 transition-colors">
                Main: 020 2615 2970
              </a>
              <a href="tel:9637496513" className="block hover:text-red-500 transition-colors">
                Mobile: 96374 96513
              </a>
              <a href="mailto:uncleskitchen@gmail.com" className="block hover:text-red-500 transition-colors">
                uncleskitchen@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Opening Hours */}
            <div>
              <h4 className="text-white font-light mb-4">Opening Hours</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Monday - Sunday</p>
                <p className="font-light">11:00 AM - 11:00 PM</p>
                <p className="text-red-500">Happy Hours: 3:30 PM - 6:30 PM</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-light mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <a href="tel:02026152970" className="block hover:text-red-500 transition-colors">
                  Main: 020 2615 2970
                </a>
                <a href="tel:9637496513" className="block hover:text-red-500 transition-colors">
                  Mobile: 96374 96513
                </a>
                <a href="mailto:uncleskitchen@gmail.com" className="block hover:text-red-500 transition-colors">
                  uncleskitchen@gmail.com
                </a>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div>
              <h4 className="text-white font-light mb-4">Awards & Recognition</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>🏆 Best Chinese Restaurant 2023</p>
                <p>⭐ Zomato Gold Partner</p>
                <p>🌟 24 Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Copyright & Credits */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-8 pb-6 border-t border-gray-800 text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Uncle&apos;s Chinese. All rights reserved.</span>
            <div className="flex items-center gap-2">
              <span>Designed & Developed by</span>
              <a 
                href="https://www.instagram.com/_raaghaavvvv_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 font-medium"
              >
                <span className="text-white group-hover:text-red-500 transition-colors">Raghav</span>
                <span className="flex gap-1">
                  <div className="w-5 h-5 rounded bg-gradient-to-r from-[#fd5949] via-[#d6249f] to-[#285AEB] p-1 group-hover:opacity-90">
                    <svg viewBox="0 0 24 24" fill="white">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                    </svg>
                  </div>
                  <div className="w-5 h-5 rounded overflow-hidden">
                    <div className="w-full h-1/3 bg-[#FF9933]"></div>
                    <div className="w-full h-1/3 bg-white flex items-center justify-center">
                      <div className="w-[8px] h-[8px] rounded-full border-[1px] border-[#000080]"></div>
                    </div>
                    <div className="w-full h-1/3 bg-[#138808]"></div>
                  </div>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}