// Imports

import { FaGlobe, FaGithub } from "react-icons/fa6";

import { Project } from "@/app/page"

// Main Component

export default function ProjectItem ({ project }: {
    project: Project;
}) {
	// Rendering

	return (
		<div className="w-sm rounded bg-gray-800 shadow shadow-gray-700">
			{/* Image here. */}
            {(project.img) && <img className="w-full aspect-video" src={project.img} />}

			<div className="px-2 py-4">
				<div className="font-bold text-xl mb-2">{project.name}</div>
				<p className="text-base">{project.desc}</p>
			</div>

			<div className="px-2 pb-2">
                <a href={process.env.BASE_URL + project.url}>
                    <button className="bg-primary px-3 py-2 rounded cursor-pointer mr-1">
                        <FaGlobe />
                    </button>
                </a>

                {(project.github) && (
                    <a href={project.github} target="_blank">
                        <button className="bg-secondary px-3 py-2 rounded cursor-pointer">
                            <FaGithub />
                        </button>
                    </a>
                )}

				{/* <button>Github</button> */}
			</div>
		</div>
	)
}
