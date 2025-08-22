"use client";
import Image from "next/image";
import { eyes } from "@/public";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useVideoPreload } from "@/hooks/useVideoPreload";

interface OptimizedVideoProps {
  videosrc: string;
  priority?: boolean;
  autoPlay?: boolean;
  showControls?: boolean;
}

export default function OptimizedVideo({ 
  videosrc, 
  priority = true, 
  autoPlay = false,
  showControls = false 
}: OptimizedVideoProps) {
	const [rotate, setRotate] = useState(0);
	const [isPlaying, setIsPlaying] = useState(autoPlay);
	const videoRef = useRef<HTMLVideoElement>(null);

	// Use custom preload hook
	const { isLoaded, isLoading, error } = useVideoPreload({
		src: videosrc,
		preload: true,
		priority
	});

	// Preload video when component mounts
	useEffect(() => {
		if (videoRef.current && isLoaded) {
			// Set preload attribute for faster loading
			videoRef.current.preload = "auto";
			
			// Start loading the video immediately
			videoRef.current.load();
		}
	}, [isLoaded]);

	const handleVideoLoad = () => {
		// Video is ready to play
	};

	const handleVideoError = () => {
		console.error("Video failed to load:", videosrc);
	};

	const togglePlay = () => {
		if (videoRef.current && isLoaded) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play().catch((error) => {
					console.error("Failed to play video:", error);
				});
			}
			setIsPlaying(!isPlaying);
		}
	};

	// Auto-play when video is loaded
	useEffect(() => {
		if (isLoaded && autoPlay && videoRef.current) {
			videoRef.current.play().catch((error) => {
				console.error("Failed to auto-play video:", error);
			});
		}
	}, [isLoaded, autoPlay]);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setRotate(angle - 180);
		};

		window.addEventListener("mousemove", handleMouseMove);
		
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const mq = useTransform(scrollYProgress, [0, 1], [0, -400]);

	// Show error state
	if (error) {
		return (
			<div className="w-full h-full bg-gray-900 flex items-center justify-center">
				<p className="text-white">Failed to load video</p>
			</div>
		);
	}

	return (
		<div
			className="w-full relative overflow-hidden cursor-pointer"
			ref={container}
			onClick={togglePlay}>
			<div
				className="w-full h-full"
				data-scroll
				data-scroll-speed="-.8"
				data-scroll-section>
				
				{/* Loading state */}
				{isLoading && (
					<div className="absolute inset-0 bg-black/20 flex items-center justify-center z-10">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
					</div>
				)}

				{/* Video placeholder while loading */}
				{!isLoaded && (
					<div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
						<div className="text-white text-lg">Loading video...</div>
					</div>
				)}

				<video
					className="w-full h-full object-cover"
					loop
					muted
					playsInline
					preload="auto"
					ref={videoRef}
					src={videosrc}
					onLoadedData={handleVideoLoad}
					onError={handleVideoError}
					// Performance optimizations
					disablePictureInPicture
					disableRemotePlayback
					controls={showControls}
					autoPlay={autoPlay}
				/>
				
				{/* Play/Pause overlay */}
				<motion.div
					className={`w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center ${
						isPlaying && "hidden"
					}`}
					style={{ y: mq }}
					initial={{ opacity: 0 }}
					animate={{ opacity: isLoaded ? 1 : 0 }}
					transition={{ duration: 0.3 }}>
					<div
						className="w-[200px] h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] bg-white rounded-full flex items-center justify-center cursor-pointer"
						onClick={togglePlay}>
						<div className="relative w-full h-full">
							<Image
								style={{
									transform: `rotate(${rotate}deg)`,
								}}
								src={eyes}
								alt="img"
								className="w-full h-full object-cover"
								priority
							/>
							<p className="absolute top-1/2 left-1/2 paragraph uppercase text-white font-NeueMontreal font-medium transform translate-x-[-50%] translate-y-[-50%]">
								{isPlaying ? "Pause" : "Play"}
							</p>
						</div>
					</div>
					<div
						className="w-[200px] sm:w-[150px] sm:h-[150px] xm:w-[100px] xm:h-[100px] bg-white rounded-full flex items-center justify-center cursor-pointer"
						onClick={togglePlay}>
						<div className="relative w-full h-full">
							<Image
								style={{
									transform: `rotate(${rotate}deg)`,
								}}
								src={eyes}
								alt="img"
								className="w-full h-full object-cover"
								priority
							/>
							<p className="absolute top-1/2 left-1/2 paragraph uppercase text-white font-NeueMontreal font-medium transform translate-x-[-50%] translate-y-[-50%]">
								{isPlaying ? "Pause" : "Play"}
							</p>
						</div>
					</div>
				</motion.div>
				
				{/* Pause button overlay */}
				<div
					onClick={togglePlay}
					className={`w-full absolute top-[50%] transform translate-y-[-50%] gap-[30px] flex items-center justify-center ${
						!isPlaying && "hidden"
					}`}>
					<button className="text-white text-[18px] bg-black px-[10px] leading-none font-normal py-[5px] font-NeueMontreal rounded-[20px]">
						pause
					</button>
				</div>
			</div>
		</div>
	);
}
