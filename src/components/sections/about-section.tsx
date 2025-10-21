"use client";

import { motion } from "framer-motion";
import SectionHeading from "../section-heading";

export default function AboutSection() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-neutral-950 text-white border-t border-white/10 overflow-hidden">
            <div className="container px-6 py-20 md:px-12 lg:px-20 max-w-5xl relative z-10 text-center md:text-left space-y-10">
                <SectionHeading text="About Me" />
                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-6 text-neutral-300 leading-relaxed text-lg sm:text-xl md:text-2xl"
                >
                    <p>
                        I have had a long-lasting passion for technology and software development
                        which I have been pursuing for several years, being deeply fascinated by
                        what is possible with just code from a <i>very</i> young age.
                    </p>
                    <p>
                        I enjoy solving complex problems, designing clean user interfaces, and generally
                        exploring all aspects of software development.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
