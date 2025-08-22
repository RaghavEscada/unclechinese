import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
	// Video optimization
	experimental: {
		optimizePackageImports: ['framer-motion'],
	},
	
	// Headers for video caching and compression
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
				],
			},
			{
				source: '/public/(.*).mp4',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable',
					},
					{
						key: 'Accept-Ranges',
						value: 'bytes',
					},
				],
			},
		];
	},
	
	// Optimize images and static assets
	images: {
		domains: [],
		formats: ['image/webp', 'image/avif'],
	},
};

export default withNextVideo(nextConfig);