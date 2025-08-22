"use client";
import { Footer, Ready } from "@/components";
import { About, Clients, Hero, Projects, VideoHome, X } from "@/container";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
	const [isLoading, setIsLoading] = useState(true);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		// Set mounted
		setIsMounted(true);
		
		// Preload the Sketchfab animation
		const preloadIframe = document.createElement('iframe');
		preloadIframe.src = "https://sketchfab.com/models/66f01ab2a0fd4a589ddecb0a565adfba/embed?autostart=1&ui_hint=0";
		preloadIframe.style.display = 'none';
		preloadIframe.style.position = 'absolute';
		preloadIframe.style.left = '-9999px';
		
		// Add to DOM to start loading
		document.body.appendChild(preloadIframe);
		
		// 7-second timer to allow for preloading
		const timer = setTimeout(() => {
			setIsLoading(false);
			// Remove the preloaded iframe
			document.body.removeChild(preloadIframe);
		}, 7000);

		return () => {
			clearTimeout(timer);
			setIsMounted(false);
			// Clean up preloaded iframe if component unmounts
			if (preloadIframe.parentNode) {
				preloadIframe.parentNode.removeChild(preloadIframe);
			}
		};
	}, []);

	// Don't render anything until mounted (prevents hydration mismatch)
	if (!isMounted) {
		return null;
	}

	return (
		<div className="relative w-full h-full">
			{/* Main content */}
			<motion.div 
				initial={{ opacity: 0 }}
				animate={{ opacity: isLoading ? 0 : 1 }}
				transition={{ duration: 0.5 }}
				className={`${isLoading ? 'pointer-events-none' : ''}`}
			>
				<Hero />
				<About />
				<Clients />
				<Ready />
			</motion.div>

			{/* Simple Loader */}
			{isLoading && (
				<motion.div 
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-white"
				>
					<div className="text-center">
						{/* Logo */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.8 }}
							className="mb-8"
						>
							<img 
								src="/uclogo.png" 
								alt="Uncle&apos;s Chinese Logo" 
								className="w-32 h-24 md:w-40 md:h-30 lg:w-48 lg:h-36 object-contain mx-auto"
							/>
						</motion.div>
						
						{/* Text Animation */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-black"
						>
							<h1 className="text-3xl md:text-4xl font-bold mb-2 font-brice">
								UNCLE&apos;S <span className="text-red-500">CHINESE</span>
							</h1>
							<p className="text-lg md:text-xl text-gray-600 font-brice">
								Loading authentic flavors...
							</p>
						</motion.div>
						
						{/* Progress Bar */}
						<motion.div
							initial={{ width: 0 }}
							animate={{ width: "100%" }}
							transition={{ duration: 7, ease: "linear" }}
							className="mt-8 h-1 bg-red-500 rounded-full max-w-xs mx-auto"
						/>
					</div>
				</motion.div>
			)}
		</div>
	);
}