// Imports

import { FaGithub, FaLinkedin } from "react-icons/fa6"

import ProjectItem from "@/components/ProjectItem";
import { hasOwnProperty } from "@/lib/util";

// Types

export interface Project {
	name: string;
	desc: string;

	url: string;
	img?: string;

	github?: string;
}

// Validators

function parseProject (x: unknown): Project | undefined {
	if (typeof x !== `object`) return;
	if (x === null) return;	

	// name
	if (!hasOwnProperty(x, `name`) || typeof x.name !== `string`) {
		console.error(`Invalid Project.name found!`);
		return;
	}

	// url
	if (!hasOwnProperty(x, `url`) || typeof x.url !== `string`) {
		console.error(`Invalid Project.url on "${x.name}"!`);
		return;
	}

	// description
	if (!hasOwnProperty(x, `desc`) || typeof x.desc !== `string`) {
		console.error(`Invalid Project.desc on "${x.name}"!`);
		return;
	}

	// img
	if (!hasOwnProperty(x, `img`)) console.warn(`No Project.img assigned to "${x.name}"!`);
	else if (typeof x.img !== `string`) {
		console.warn(`Invalid Project.img on "${x.name}"!`);
		delete x.img;
	}

	// github
	if (!hasOwnProperty(x, `github`)) console.warn(`No Project.github assigned to "${x.name}"!`);
	else if (typeof x.github !== `string`) {
		console.warn(`Invalid Project.github assigned to "${x.name}"!`);
		delete x.github;
	}

	return x as Project;
}

function parseProjects (json: unknown): Project[] {
	if (typeof json !== `object` || json === null) throw new Error(`Received non-JSON!`);
	if (!hasOwnProperty(json, `projects`) || !Array.isArray(json.projects)) throw new Error(`Received malformed projects.json!`);

	const projects: Project[] = [];
	for (const projectRaw of json.projects) {
		const project = parseProject(projectRaw);
		if (!project) continue;

		projects.push(project);
	}

	return projects;
}

// Functions

async function fetchProjects (): Promise<Project[]> {
	const response = await fetch(`${process.env.BASE_URL}/projects.json`);
	const json = await response.json();

	const projects = parseProjects(json);
	return projects.sort((a, b) => a.name.localeCompare(b.name));
}

// Main Component

export default async function HomePage () {
	const projects = await fetchProjects();
	console.log(`Loaded`, projects.length, `projects.`);

	return (
		<div className="max-w-screen min-h-screen overflow-x-hidden flex flex-col justify-between">
			{/* Header */}
			<div className="w-screen bg-primary text-white text-center mb-2">
				<div className="text-3xl">rangicus.xyz</div>
				<div className="text-xl">personal site & portfolio</div>
			</div>

			{/* Projects */}
			<section className="flex-grow">
				{/* Text */}
				<div className="text-2xl text-center text-foreground underline">Projects</div>
				<div className="text-foreground text-center mb-2">
					This is a random assortment of projects that I&apos;ve found myself working on in my spare time.<br />
					If you have any ideas for additions to projects or new ones entirely, shoot me an email and I&apos;ll look into it.
				</div>

				{/* Projects Display */}
				<div className="w-screen flex flex-wrap gap-4 justify-center">
					{projects.map((project) => (
						<ProjectItem project={project} key={project.name} />
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="w-screen flex justify-center gap-2 mb-2 mt-5 text-gray-500">
				{/* GitHub */}
				<a href="https://github.com/rangicus" target="_blank">
					<FaGithub />
				</a>

				{/* LinkedIn */}
				<a href="https://www.linkedin.com/in/xavier-horn/" target="_blank">
					<FaLinkedin />
				</a>
			</footer>
		</div>
	);
}
