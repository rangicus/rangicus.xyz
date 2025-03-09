// Imports

import ProjectItem from "@/components/ProjectItem";
import { hasOwnProperty } from "@/lib/util";

// Types

export interface Project {
	name: string;
	desc: string;

	url: string;
	img?: string;
}

// Validators

function parseProject (x: unknown): Project | undefined {
	if (typeof x !== `object`) return;
	if (x === null) return;	

	// name
	if (!hasOwnProperty(x, `name`) || typeof x.name !== `string`) {
		console.warn(`Invalid Project.name found!`);
		return;
	}

	// url
	if (!hasOwnProperty(x, `url`) || typeof x.url !== `string`) {
		console.warn(`Invalid Project.url on "${x.name}"!`);
		return;
	}

	// description
	if (!hasOwnProperty(x, `desc`) || typeof x.desc !== `string`) {
		console.warn(`Invalid Project.desc on "${x.name}"!`);
		return;
	}

	// img
	if (!hasOwnProperty(x, `img`)) console.warn(`No Project.img assigned to "${x.name}"!`);
	else if (typeof x.img !== `string`) console.warn(`Invalid Project.img on "${x.name}"!`);

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

	return parseProjects(json);
}

// Main Component

export default async function HomePage () {
	const projects = await fetchProjects();
	console.log(`projects`, projects);

	return (
		<div className="w-screen h-screen">
			{/* Header */}
			<div className="w-screen bg-primary text-white text-center">
				<div className="text-3xl">rangicus.xyz</div>
				<div className="text-xl">personal site & portfolio</div>
			</div>

			{/* Projects */}
			<div className="text-2xl text-center text-foreground underline">Projects</div>
			<div className="text-foreground text-center mb-2">
				This is a random assortment of projects that I&apos;ve found myself working on in my spare time.<br />
				If you have any ideas for additions to projects or new ones entirely, shoot me an email and I&apos;ll look into it.
			</div>
			<div className="w-screen flex flex-wrap gap-3 justify-around">
				{projects.map((project) => (
					<ProjectItem project={project} key={project.name} />
				))}
			</div>
		</div>
	);
}
