"use client";

import { motion } from "framer-motion";

function HeroContent() {
  return (
    <div>
      <h1 className="relative z-0 font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight">
        <motion.span
          role="img"
          className="absolute -top-14 sm:-left-10 md:-left-20 md:-top-16 origin-[70%_70%] -z-1 hidden lg:inline cursor-pointer"
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        >
          👋
        </motion.span>
        I&apos;m Darragh
      </h1>

      <p className="text-neutral-400 text-lg sm:text-xl md:text-2xl max-w-xl md:max-w-2xl sm:ml-6">
        A Computer Science student/enthusiast based in the{" "}
        <span className="text-neutral-200 font-medium">UK</span>.
      </p>
    </div>
  );
}

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-950 to-neutral-900 text-white overflow-hidden relative py-20">
            {/* Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-[-200px] right-[15%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute top-[30%] left-[10%] w-[350px] h-[350px] bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-500" />
            </div>

            {/* Content */}
            <div className="container px-6 md:px-12 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <HeroContent />
                </motion.div>
            </div>
        </section>
    );
}
