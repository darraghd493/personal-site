import { motion } from "framer-motion";

interface SectionHeadingProps {
    text: string;
    className?: string;
}

export default function SectionHeading({ text, className = "" }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
                        <h2
                        // uses weird hacky solution: pb-[0.1em]
                            className={`relative inline-block text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#8bd2e0] via-[#61b3c5] to-[#b5e6f0] leading-[1.1] pb-[0.1em] ${className}`}
                        >
                {text}
            </h2>
        </motion.div>
    );
}
