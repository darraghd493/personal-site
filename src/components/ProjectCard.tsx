import { Project } from "@/type/Project";
import { motion } from "motion/react";
import Image from "next/image";

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <motion.a
      key={project.name}
      className="flex flex-col items-center border border-[var(--foreground-alpha)] bg-[var(--background-alpha)] rounded-lg shadow-[0px_0px_32px_rgba(0,0,0,0.6)] backdrop-blur-[6px] md:max-w-xl"
      href={project.url ? project.url : "#" + project.name.replace(/ /g, "-")}
      id={project.name.replace(/ /g, "-")}
      
      initial={{ opacity: 0, y: 32 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.1 * index,
        },
      }}
      viewport={{
        margin: "-64px",
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <div>
        {
          project.image && (
            <Image unoptimized src={project.image} className="object-cover w-full rounded-t-lg h-96 md:h-[16rem]
            " width={512} height={512} alt="" />
          )
        }

        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {project.name}
          </h5>
          <p className="mb-3 font-normal dark:text-gray-400">
            {project.description.join(" ")}
          </p>

          <p><span className="font-bold">Created:</span> <span className="dark:text-gray-400">{project.date}</span></p>
          <p><span className="font-bold">Type:</span> <span className="dark:text-gray-400">{project.type}</span></p>
          
          {
            project.info.languages && (
              <p><span className="font-bold">Language{project.info.languages.length > 1 ? "s" : ""} used: </span><span className="dark:text-gray-400">{project.info.languages.join(", ")}</span></p>
            )
          }

          {
            project.info.frameworks && (
              <p><span className="font-bold">Framework{project.info.frameworks.length > 1 ? "s" : ""} used: </span><span className="dark:text-gray-400">{project.info.frameworks.join(", ")}</span></p>
            )
          }
        </div>
      </div>
    </motion.a>
  );
}

export default ProjectCard;