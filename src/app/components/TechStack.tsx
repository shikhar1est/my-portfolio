"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiGithub,
  SiSpring,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaRust } from "react-icons/fa6";
import { CardContent } from "@/components/ui/card";

const technologies = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "React", icon: SiReact },
  { name: "Rust", icon: FaRust },
  { name: "GitHub", icon: SiGithub },
  { name: "Spring Boot", icon: SiSpring },
  { name: "Java", icon: FaJava },
];

export default function TechStack() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
           Tech Stack
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {technologies.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-full text-center rounded-xl backdrop-blur-md bg-black/30 dark:bg-white/60 border border-white/10 dark:border-black/10 shadow-md dark:shadow-xl transition-colors">
                  <CardContent className="flex flex-col items-center justify-center py-8 px-4 gap-4">
                    <div className="text-white dark:text-gray-800">
                      <Icon size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-white dark:text-gray-800">
                      {tech.name}
                    </h3>
                  </CardContent>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
