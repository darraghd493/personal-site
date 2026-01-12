"use client";

import { motion, easeInOut } from "framer-motion";
import SectionHeading from "../section-heading";
import { Github, Mail } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const baseTransition = { duration: 0.8, ease: easeInOut };

interface Contact {
    name: string;
    link: string;
    icon: React.ReactNode;
}

const contacts: Contact[] = [
    {
        name: "Email",
        link: "mailto:me@darragh.website",
        icon: <Mail />,
    },
    {
        name: "GitHub",
        link: "https://github.com/darraghd493",
        icon: <Github />,
    },
];

export default function ContactMeSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a1118] via-[#0c1620] to-[#0f1f29] text-white border-t border-white/10 overflow-hidden">
            <div className="container px-6 py-20 md:px-12 lg:px-20 max-w-5xl relative z-10 text-center md:text-left space-y-10">
                <SectionHeading text="Contact Me" />
                {/* Intro text */}
                <motion.p
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ ...baseTransition, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-neutral-300 leading-relaxed text-lg sm:text-xl md:text-2xl mx-auto md:mx-0"
                >
                    I&apos;m always open to discussing new projects, or opportunities to be part of your visions.
                    Feel free to reach out to me through any of the platforms below!
                </motion.p>
                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center md:justify-start">
                    {contacts.map((contact, i) => (
                        <motion.a
                            key={i}
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                                ...baseTransition,
                                delay: 0.15,
                                scale: { type: "spring", stiffness: 400, damping: 20 },
                            }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 bg-[#0f1f29]/80 hover:bg-[#61b3c5]/20 transition-colors border border-[#61b3c5]/30 hover:border-[#61b3c5]/60 rounded-lg px-5 py-3 justify-center w-full sm:w-auto"
                        >
                            <span className="w-5 h-5 text-[#8bd2e0]">{contact.icon}</span>
                            <span className="text-[#d8f0f6] font-medium">{contact.name}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
