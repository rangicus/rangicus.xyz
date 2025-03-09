// Imports

import ProjectItem from "@/components/ProjectItem";

// Main Component

export default function HomePage () {
	return (
		<div className="w-screen h-screen">
			{/* Header */}
			<div className="w-screen bg-primary text-white text-center">
				<div className="text-3xl"><span>rangicus.xyz</span></div>
				<div className="text-xl"><span>personal site & portfolio</span></div>
			</div>

			{/* Projects */}
			<div className="w-screen flex flex-wrap gap-1 justify-around">
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				<ProjectItem />
				{/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo aperiam doloremque eveniet earum accusantium natus rem, magni nostrum ad inventore, nisi pariatur consequatur possimus, provident nulla voluptatibus deserunt fuga!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo aperiam doloremque eveniet earum accusantium natus rem, magni nostrum ad inventore, nisi pariatur consequatur possimus, provident nulla voluptatibus deserunt fuga!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo aperiam doloremque eveniet earum accusantium natus rem, magni nostrum ad inventore, nisi pariatur consequatur possimus, provident nulla voluptatibus deserunt fuga!</p>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod explicabo aperiam doloremque eveniet earum accusantium natus rem, magni nostrum ad inventore, nisi pariatur consequatur possimus, provident nulla voluptatibus deserunt fuga!</p> */}
			</div>
		</div>
	);
}
