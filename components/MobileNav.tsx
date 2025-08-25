"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { footernavbarItems } from "@/constants";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

export default function MobileNav() {
	const [toggle, setToggle] = useState(false);

	return (
		<>
			{/* Mobile Header */}
			<div className="w-full flex justify-between items-center h-16 px-4 md:hidden">
				<Link href="/">
					<Image
						src="/uclogo.png"
						alt="Uncle's Chinese Kitchen"
						width={100}
						height={100}
					/>
				</Link>
				<HiOutlineMenuAlt4
					onClick={() => setToggle(true)}
					className="text-3xl cursor-pointer text-black"
				/>
			</div>

			{/* Slide-in Mobile Menu */}
			{toggle && (
				<div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
					<div className="flex h-full">
						{/* Left Side - Navigation */}
						<div className="w-2/3 flex flex-col justify-center px-8">
							<div className="space-y-8">
								{footernavbarItems.map((item, index) => (
									<Link
										href={item.href}
										key={item.id}
										onClick={() => setToggle(false)}
										className="group block"
										style={{ animationDelay: `${index * 100}ms` }}
									>
										<span className="text-4xl font-light text-white/90 uppercase tracking-wide block hover:text-white hover:tracking-wider transition-all duration-500">
											{item.title}
										</span>
									</Link>
								))}
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