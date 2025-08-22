
import { Heading, ProjectCard, RoundButton, Tags } from "@/components";



export default function Projects() {
	return (
		<section className="w-full text-center rounded-t-[20px]">
			{/* Heading */}
			<Heading
				title="Featured projects"
				className="padding-x padding-y pb-[50px] border-b border-[#21212155]"
			/>

			{/* Projects List */}
			


			{/* Button Section */}
			<div className="w-full flex justify-center mt-10">
				<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
					<RoundButton
						href="/nuke-works"
						title="view all projects"
						bgcolor="#000"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>

		
		
			
		</section>
	);
}
