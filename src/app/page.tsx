'use client';

import Background from "@/components/Backgroud";
import DarkModeButton from "@/components/DarkModeButtion";
import MotionImage from "@/components/MotionImage";
import ProjectCard from "@/components/ProjectCard";
import TopButton from "@/components/TopButton";
import { Project, ProjectType } from "@/type/Project";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaYoutube, FaTwitter, FaGithub, FaDiscord, FaChevronDown } from "react-icons/fa6";

interface Social {
  name: string;
  icon: IconType;
  url: string;
}

const socials: Social[] = [
  {
    name: "YouTube",
    icon: FaYoutube,
    url: "https://www.youtube.com/@darraghd493",
  },
  {
    name: "Twitter",
    icon: FaTwitter,
    url: "https://x.com/darraghd493",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/darraghd493",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    url: "https://discord.com/invite/gEtvkkv8sD",
  },
]

const projects: Project[] = [
  {
    name: "Fentanyl",
    description: [
      "A premium Minecraft cheat developed with logevity in mind, featuring a wide range of modules and customisation options.",
      "Additionally, coinciding with the project, several open-source projects have been released to assist it's development.",
    ],
    url: "https://fentanyl.dev",
    image: "/images/projects/1/1.png",
    date: "Unknown - Present",
    type: ProjectType.PAID_PRODUCT,
    info: {
      languages: [
        "Java",
        "Typescript",
      ],
      frameworks: [
        "LWJGL",
        "Express",
        "React",
        "Next.js",
      ],
    },
  },
  {
    name: "darragh's Clicker v1",
    description: [
      "An autoclicker designed to bypass heurisitic autoclicker detections within Minecraft anticheats.",
      "Looking back, the clicker was surpassed expectations, bypassing all major anticheats at the time.",
      "Reminisents of the algorithm are still used in modern projects of mine today.",
    ],
    image: "/images/projects/2/1.png",
    date: "January 2024",
    type: ProjectType.LOST_SOURCE,
    info: {
      languages: [
        "C++",
      ],
      frameworks: [
        "Windows API",
        "ImGui",
      ],
    },
  },
  {
    name: "darragh's Clicker v2",
    description: [
      "A slowly developed and backburnered rewrite of the darragh's Clicker v1.",
    ],
    type: ProjectType.CLOSED_SOURCE,
    image: "/images/projects/3/1.png",
    date: "October 2024",
    info: {
      languages: [
        "C++",
      ],
      frameworks: [
        "Windows API",
        "ImGui",
      ],
    },
  }
];

export default function Home() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("dark");
  }, []);

  return (
    <div>
      <Background />
      <div className="flex gap-4 fixed top-[1rem] right-[1rem]">
        <TopButton />
        <DarkModeButton />
      </div>
      
      {/* Main */}
      <main className="container mx-auto">
        {/* Hero */}
        <div className="flex flex-col gap-4 justify-center items-center h-screen">
          <div className="flex justify-center items-center">
            <MotionImage
              src="/images/profile-icon.png" alt="darragh's profile picture." width={128} height={128}
              className="rounded-full"
              initial={{ rotateZ: "0deg" }}
              animate={{ rotateZ: "360deg" }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity
              }}
            />
            <h1 className="text-6xl p-4">
              <motion.span
                className="font-bold text-white"
                initial={{
                  textShadow: "2px 2px 0 #078d70, 4px 4px 0 #98e8c1, 6px 6px 0 #ffffff, 8px 8px 0 #7bade2, 10px 10px 0 #3d1a78",
                }}
                whileHover={{
                  textShadow: "4px 4px 0 #078d70, 8px 8px 0 #98e8c1, 12px 12px 0 #ffffff, 16px 16px 0 #7bade2, 20px 20px 0 #3d1a78",
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                darragh
              </motion.span>
              <br></br>
              <span className="text-shadow text-[#555] shadow-[#444] dark:text-gray-400 dark:shadow-gray-600">.website</span>
            </h1>
          </div>
          <div className="flex gap-2 justify-center items-center dark:text-gray-400">
            {
              socials.map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noreferrer">
                  <social.icon size={32} />
                </a>
              ))
            }
          </div>
          {/* Scroll down for more */}
          <motion.div
              className="absolute bottom-4 animate-bounce text-gray-300 dark:text-white"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: isAtTop ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              <a href="#about">
                <FaChevronDown size={32} />
              </a>
          </motion.div>
        </div>
        {/* About me */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-center py-24"
          id="about"
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.2,
          }}
        >
          <h2 className="text-4xl font-bold">About me</h2>
          <p className="dark:text-gray-400 text-center">
            Hello! I&apos;m Darragh - a 16 year old student taking their A-Levels, including Computer Science. 
          </p>
        </motion.div>
        {/* Projects */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-center py-24"
          id="projects"
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.2,
          }}
        >
          <h2 className="text-4xl font-bold">Projects</h2>
          <p className="dark:text-gray-400 text-center">
            Here are some of the projects I&apos;ve worked on.
          </p>
          <div className="flex flex-row gap-6 flex-wrap justify-center">
            {
              projects.map((project) => (
                <ProjectCard key={project.name} project={project} index={projects.indexOf(project)} />
              ))
            }
          </div>
          <p className="dark:text-gray-400 text-center pt-4">
            For more projects, check out my{" "}
            <a
              href="https://github.com/darraghd493"
              target="_blank"
              rel="noreferrer"
              className="underline" 
            >
              GitHub
            </a>.
          </p>
        </motion.div>
        {/* Contact */}
        <motion.div
          className="flex flex-col gap-4 justify-center items-center py-24"
          id="contact"
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.1,
            duration: 0.2,
          }}
        >
          <h2 className="text-4xl font-bold">Contact</h2>
          <p className="dark:text-gray-400 text-center">
            If you&apos;d like to contact me, you can do so through any of my socials:
          </p>
          {
            socials.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="dark:text-gray-400 flex gap-2 items-center"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2 + 0.2 * socials.indexOf(social),
                  },
                }}
                whileHover={{
                  scale: 1.1,
                  transition: {
                    delay: 0,
                  }
                }}
                transition={{
                  duration: 0.2
                }}
              >
                <social.icon size={32} /> - {social.name}
              </motion.a>
            ))
          }
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="row-start-3 gap-6">
        <div className="flex gap-6 p-2 flex-wrap items-center justify-center">
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Next.js
            </a>.
          </p>
          <p>
            Made with ❤️ by{" "}
            <a
              href="https://darragh.website"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Darragh
            </a>.
          </p>
          <a
            href="https://github.com/darraghd493/personal-site"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            View source
          </a>
        </div>
      </footer>
    </div>
  );
}
