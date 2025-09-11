import { Eyes } from "@/components";

export default function Hero() {
	return (
		<section className="w-full padding-x bg-white sticky top-0 h-[65vh]">
			<div className="w-full pt-[170px] pb-[20px]">
				<div className="w-fit relative">
					<h1 className="heading tracking-[-1.3px] font-semibold font-FoundersGrotesk uppercase bg-gradient-to-r from-white via-red-300 to-orange-300 bg-clip-text text-transparent">
					Our Works
						<sup className="paragraph bg-black font-normal absolute top-[20px] ml-[10px] font-NeueMontreal">
						
						</sup>
					</h1>
				</div>
			</div>
			<Eyes className="w-[300px] h-[300px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] xm:w-[150px] xm:h-[150px] sm:flex-col xm:flex-col" />
		</section>
	);
}