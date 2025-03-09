// Imports

import { FaGlobe, FaGithub } from "react-icons/fa6";

import { Project } from "@/app/page"

// Main Component

export default function ProjectItem ({ project }: {
    project: Project;
}) {
	// Rendering

	return (
		<div className="w-sm rounded bg-surface shadow shadow-shadow flex flex-col justify-between">
			{/* Image here. */}
            {(project.img) && <img className="w-full aspect-video" src={project.img} />}

			<div className="px-2 py-4 flex-grow">
				<div className="font-bold text-xl mb-2">{project.name}</div>
				<p className="text-base">{project.desc}</p>
			</div>

			<div className="px-2 pb-2">
                <a href={process.env.BASE_URL + project.url}>
                    <button className="bg-primary px-3 py-2 rounded cursor-pointer mr-1">
                        <FaGlobe className="text-white" />
                    </button>
                </a>

                {(project.github) && (
                    <a href={project.github} target="_blank">
                        <button className="bg-secondary px-3 py-2 rounded cursor-pointer">
                            <FaGithub className="text-white"/>
                        </button>
                    </a>
                )}
			</div>
		</div>
	)
}
