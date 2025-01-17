import { Project } from "@/Project";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a key={project.name} className="flex flex-col items-center border border-[var(--foreground-alpha)] bg-[var(--background-alpha)] rounded-lg shadow-[0px_0px_32px_rgba(0,0,0,0.6)] backdrop-blur-[6px] md:max-w-xl hover:scale-105 transition-transform" href={project.url ? project.url : "#" + project.name.replace(/ /g, "-")} id={project.name.replace(/ /g, "-")}>
      <div>
        {
          project.image && (
            <Image src={project.image} className="object-cover w-full rounded-t-lg h-96 md:h-[16rem]
            " width={512} height={512} alt="" />
          )
        }

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {project.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {project.description.join(" ")}
          </p>

          <p><span className="font-bold">Created:</span> <span className="text-gray-400">{project.date}</span></p>
          <p><span>Type:</span> <span className="text-gray-400">{project.type}</span></p>
          
          {
            project.info.languages && (
              <p><span className="font-bold">Language{project.info.languages.length > 1 ? "s" : ""} used: </span><span className="text-gray-400">{project.info.languages.join(", ")}</span></p>
            )
          }

          {
            project.info.frameworks && (
              <p><span className="font-bold">Framework{project.info.frameworks.length > 1 ? "s" : ""} used: </span><span className="text-gray-400">{project.info.frameworks.join(", ")}</span></p>
            )
          }
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;