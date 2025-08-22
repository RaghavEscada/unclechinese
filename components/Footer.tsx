"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, Suspense } from "react";
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
  const navItems = [
    { id: 1, title: "Menu", href: "/menu" },
    { id: 2, title: "About", href: "/about-us" },
    { id: 3, title: "Locations", href: "/locations" },
    { id: 4, title: "Contact", href: "/contact" },
    { id: 5, title: "Careers", href: "/careers" },
  ];

  const socialItems = [
    { id: 1, title: "Instagram", href: "https://www.instagram.com/uncle_chinese/" },
    { id: 2, title: "Facebook", href: "https://www.facebook.com/uncleschinese" },
    { id: 3, title: "Zomato", href: "https://www.zomato.com/uncle-chinese" },
    { id: 4, title: "Swiggy", href: "https://www.swiggy.com/uncle-chinese" },
  ];

  return (
    <footer className="w-full bg-black text-white px-6 md:px-20 pt-20 pb-12 relative overflow-hidden font-brice">
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
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Top Section - Brand + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          
          {/* Left - Brand Logo */}
          <div className="mb-8 lg:mb-0">
            <div className="mb-6">
              <img
                src="/uclogo.png"
                alt="Uncle's Chinese"
                className="w-48 h-36 md:w-56 md:h-42 lg:w-64 lg:h-48 object-contain filter drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right - Navigation */}
          <div className="lg:pt-8">
            <div className="space-y-1 mb-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block text-white hover:text-red-500 transition-colors text-lg md:text-xl font-light"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Pune North */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Pune North</h3>
            <div className="space-y-4">
              <div className="text-white text-lg font-light">
                Sanjay Park, Aundh<br/>
                Pune, MH 411007
              </div>
              <div className="text-white text-lg font-light">
                Bavdhan, Near Metro<br/>
                Pune, MH 411021
              </div>
            </div>
          </div>

          {/* Pune Central */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Pune Central</h3>
            <div className="space-y-4">
              <div className="text-white text-lg font-light">
                Koregaon Park<br/>
                Pune, MH 411001
              </div>
              <div className="text-white text-lg font-light">
                Camp Area<br/>
                Pune, MH 411001
              </div>
            </div>
          </div>

          {/* Pune West */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Pune West</h3>
            <div className="space-y-4">
              <div className="text-white text-lg font-light">
                Hinjewadi Phase 1<br/>
                Pune, MH 411057
              </div>
              <div className="text-white text-lg font-light">
                Lulla Nagar<br/>
                Pune, MH 411040
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-gray-400 uppercase text-sm tracking-wider mb-6 font-medium">Socials</h3>
            <div className="space-y-4">
              {socialItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white hover:text-red-500 transition-colors text-lg font-light"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pt-12 pb-8 border-t border-gray-800">
          
          {/* Left - Copyright */}
          <div className="mb-8 lg:mb-0">
            <div className="text-gray-500 text-lg mb-2">© Uncle&apos;s Chinese 2025</div>
            <div className="text-white text-lg mb-1">
              <a href="tel:02026152970" className="hover:text-red-500 transition-colors">
                020 2615 2970
              </a>
            </div>
            <div className="text-white text-lg">
              <a href="mailto:uncleskitchen@gmail.com" className="hover:text-red-500 transition-colors">
                uncleskitchen@gmail.com
              </a>
            </div>
          </div>

          {/* Right - Credits & Logo */}
          <div className="flex items-end gap-8">
            <div className="text-right">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-gray-500 text-sm">Website by Raghav</span>
                <div className="flex gap-2">
                  <a 
                    href="https://www.linkedin.com/in/raghav-krishna-m-6357bb290/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/_raaghaavvvv_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0a10 10 0 100 20 10 10 0 000-20zm4.613 4.614a1.49 1.49 0 01.431 1.05v8.672c0 .4-.156.784-.431 1.05a1.49 1.49 0 01-1.05.431H6.437c-.4 0-.784-.156-1.05-.431a1.49 1.49 0 01-.431-1.05V5.664c0-.4.156-.784.431-1.05a1.49 1.49 0 011.05-.431h7.126c.4 0 .784.156 1.05.431zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm3.5-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/916385751370?text=Hi%20Raghav%2C%20I%20found%20your%20contact%20through%20the%20Uncle&apos;s%20Chinese%20website.%20I%27m%20interested%20in%20discussing%20website%20development%20services.%20Could%20we%20schedule%20a%20time%20to%20talk%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-7 h-7 flex items-center justify-center bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

           </div>
        </div>
      </div>
      
      {/* Full width black rectangle at bottom */}
      <div className="w-screen h-16 bg-black absolute bottom-0 left-0 z-50"></div>
    </footer>
  );
}