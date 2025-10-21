"use client";

import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import { Github, Globe, Code, ArrowRight, CreditCard, AppWindowIcon } from "lucide-react";

interface Project {
    title: string;
    description: string;
    link: string;
    icons: React.ReactNode[];
}

const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "My portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
        link: "https://darragh.website",
        icons: [<Globe />, <Code />],
    },
    {
        title: "Ether",
        description: "A series of custom pentesting tools for Minecraft anticheats.",
        link: "https://ether.beer",
        icons: [<AppWindowIcon />, <CreditCard />],
    },
    {
        title: "lmc-interpreter-web",
        description: "A web-ui for my performant Little Man Computing interpreter.",
        link: "https://darraghd493.github.io/lmc-interpreter-web/",
        icons: [<Globe />, <Code />],
    },
    {
        title: "java-tiny-basic",
        description: "A Java implementation of the Tiny BASIC programming language.",
        link: "https://github.com/darraghd493/java-tiny-basic",
        icons: [<Github />, <Globe />],
    },
    {
        title: "event-bus",
        description: "A lightweight event bus library for Java applications.",
        link: "https://github.com/darraghd493/event-bus",
        icons: [<Github />, <Code />],
    },
    {
        title: "msauth",
        description: "A simple Microsoft authentication library for Minecraft.",
        link: "https://github.com/darraghd493/msauth",
        icons: [<Github />, <Code />],
    }
];

export default function ProjectsSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-neutral-900/50 text-white overflow-hidden border-t border-white/10">
            {/* More Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10rem] right-[-10rem] w-[25rem] h-[25rem] bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500" />
                <div className="absolute top-[40%] left-[60%] w-[20rem] h-[20rem] bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="relative z-10 container px-6 py-20 md:px-12 lg:px-20 max-w-5xl md:text-left">
                <div className="space-y-10">
                    <SectionHeading text="Projects" />

                    {/* Intro text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-neutral-300 leading-relaxed text-lg sm:text-xl md:text-2xl mx-auto md:mx-0"
                    >
                        I&apos;ve worked on a variety of projects — here are some of my personal highlights that
                        showcase my technical and creative skills.
                    </motion.p>

                    {/* Project Cards */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{
                                    opacity: { delay: i * 0.2, duration: 0.8 },
                                    scale: { type: "spring", stiffness: 300 },
                                    y: { delay: i * 0.2, duration: 0.8 },
                                }}
                                viewport={{ once: true }}
                                className="bg-neutral-800/50 border border-white/10 backdrop-blur-sm rounded-2xl p-6 w-[280px] text-left shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-2 text-neutral-300">
                                        {project.icons.map((icon, idx) => (
                                            <span key={idx} className="w-5 h-5">{icon}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-purple-400 hover:underline"
                                    >
                                        View <ArrowRight className="inline-block w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <motion.a
                            href="https://github.com/darraghd493"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#a855f7", // purple-400
                                color: "#171717", // neutral-900
                            }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                opacity: { delay: 0.2, duration: 0.8 },
                                scale: { type: "spring", stiffness: 300 },
                                y: { delay: 0.2, duration: 0.8 },
                            }}
                            className="inline-block px-6 py-3 border border-purple-400 text-purple-400 rounded-full"
                        >
                            View More on GitHub
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}
