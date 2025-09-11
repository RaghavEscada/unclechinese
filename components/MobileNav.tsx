"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { Phone, MapPin, Clock } from "lucide-react";

// Uncle's Chinese navigation items (same as desktop)
const unclesNavItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Menu", href: "/menu" },
  { id: 3, title: "About", href: "/about-us" },
  { id: 4, title: "Contact", href: "/contact" },
];

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{/* Mobile Header */}
			<div className="w-full flex justify-between items-center h-16 px-4 md:hidden bg-[#FDFCF8]">
				<Link href="/">
					<Image
						src="/uclogo.png"
						alt="Uncle's Chinese Kitchen"
						width={120}
						height={40}
						style={{ height: '40px', width: 'auto' }}
						priority
					/>
				</Link>
				<HiOutlineMenuAlt4
					onClick={() => setToggle(true)}
					className="text-3xl cursor-pointer text-[#2C2C2C]"
				/>
			</div>

			{/* Slide-in Mobile Menu */}
			{toggle && (
				<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
					<div className="flex h-full">
						{/* Left Side - Navigation */}
						<div className="w-2/3 flex flex-col justify-center px-8">
							<div className="space-y-8">
								{unclesNavItems.map((item, index) => (
									<Link
										href={item.href}
										key={item.id}
										onClick={() => setToggle(false)}
										className="group block"
										style={{ animationDelay: `${index * 100}ms` }}
									>
										<span className="text-4xl font-light text-white/90 uppercase tracking-wide block hover:text-white hover:tracking-wider transition-all duration-500 group-hover:text-[#EC3237]">
											{item.title}
										</span>
									</Link>
								))}
							</div>
							
							{/* Contact Info */}
							<div className="mt-12 space-y-4">
								<div className="flex items-center gap-2 text-white/80">
									<Phone className="w-4 h-4 text-[#EC3237]" />
									<span className="text-sm" style={{ fontFamily: 'NeueMontreal' }}>
										+1 (555) 123-4567
									</span>
								</div>
								<div className="flex items-center gap-2 text-white/80">
									<MapPin className="w-4 h-4 text-[#EC3237]" />
									<span className="text-sm" style={{ fontFamily: 'NeueMontreal' }}>
										123 Main St
									</span>
								</div>
								<div className="flex items-center gap-2 text-white/80">
									<Clock className="w-4 h-4 text-[#EC3237]" />
									<span className="text-sm" style={{ fontFamily: 'NeueMontreal' }}>
										Open Daily
									</span>
								</div>
							</div>
						</div>

						{/* Right Side - Logo & Close */}
						<div className="w-1/3 flex flex-col justify-between items-center py-8 border-l border-white/10">
							<Link href="/" className="mt-4">
								<Image
									src="/uclogo.png"
									alt="Uncle's Chinese Kitchen"
									width={120}
									height={120}
									className="opacity-90"
								/>
							</Link>
							
							{/* CTA Button */}
							<Link
								href="/menu"
								onClick={() => setToggle(false)}
								className="bg-[#EC3237] text-white px-6 py-3 rounded-full font-medium hover:bg-[#d42a2f] transition-colors duration-300 text-sm mb-4"
								style={{ fontFamily: 'NeueMontreal' }}
							>
								Order Now
							</Link>
							
							<IoMdClose
								onClick={() => setToggle(false)}
								className="text-3xl cursor-pointer text-white/80 hover:text-white transition-all duration-300 mb-4"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}