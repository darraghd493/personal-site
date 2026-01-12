"use client";

import { motion } from "framer-motion";
import SectionHeading from "../section-heading";
import { Github, Globe, Code, ArrowRight, CreditCard, AppWindowIcon } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const baseTransition = { duration: 0.8, ease: "easeOut" };

interface Project {
    title: string;
    description: string;
    link: string;
    icons: React.ReactNode[];
}

const projects: Project[] = [
    {
        title: "darragh.website",
        description: "My portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
        link: "https://darragh.website",
        icons: [<Globe key="1" />, <Code key="2" />],
    },
    {
        title: "ether.beer",
        description: "A series of custom pentesting tools for Minecraft anticheats.",
        link: "https://ether.beer",
        icons: [<AppWindowIcon key="1" />, <CreditCard key="2" />],
    },
    {
        title: "lmc-interpreter-web",
        description: "A web-ui for my performant Little Man Computing interpreter.",
        link: "https://darraghd493.github.io/lmc-interpreter-web/",
        icons: [<Globe key="1" />, <Code key="2" />],
    },
    {
        title: "java-tiny-basic",
        description: "A Java implementation of the Tiny BASIC programming language.",
        link: "https://github.com/darraghd493/java-tiny-basic",
        icons: [<Github key="1" />, <Globe key="2" />],
    },
    {
        title: "event-bus",
        description: "A lightweight event bus library for Java applications.",
        link: "https://github.com/darraghd493/event-bus",
        icons: [<Github key="1" />, <Code key="2" />],
    },
    {
        title: "msauth",
        description: "A simple Microsoft authentication library for Minecraft.",
        link: "https://github.com/darraghd493/msauth",
        icons: [<Github key="1" />, <Code key="2" />],
    }
];

export default function ProjectsSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f1f29] via-[#0c1620] to-[#0a1118] text-white overflow-hidden border-t border-white/10">
            {/* More Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-[#61b3c5]/18 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-10rem] right-[-10rem] w-[25rem] h-[25rem] bg-sky-500/18 rounded-full blur-3xl animate-pulse delay-500" />
                <div className="absolute top-[40%] left-[60%] w-[20rem] h-[20rem] bg-cyan-400/12 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <div className="relative z-10 container px-6 py-20 md:px-12 lg:px-20 max-w-5xl md:text-left">
                <div className="space-y-10">
                    <SectionHeading text="Projects" />

                    {/* Intro text */}
                    <motion.p
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ ...baseTransition, delay: 0.15 }}
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
                                key={project.title}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{
                                    ...baseTransition,
                                    delay: i * 0.15,
                                    scale: { type: "spring", stiffness: 300 },
                                }}
                                viewport={{ once: true }}
                                className="bg-[#0f1f29]/80 border border-white/10 backdrop-blur-sm rounded-2xl p-6 w-[280px] text-left shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                                <p className="text-sm text-neutral-400 mb-4">{project.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex space-x-2 text-neutral-300">
                                        {project.icons.map((icon, idx) => (
                                            <span key={`icon-${project.title}-${idx}`} className="w-5 h-5">{icon}</span>
                                        ))}
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-[#61b3c5] hover:underline"
                                    >
                                        View <ArrowRight className="inline-block w-4 h-4 ml-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
