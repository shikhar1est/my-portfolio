"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Wrench,
  Database,
  Languages,
  Palette,
  Cloud,
  Settings,
  Boxes,
} from "lucide-react";

export default function SkillsAndPhilosophy() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        { label: "React.js", icon: Code2 },
        { label: "Next.js", icon: Code2 },
        { label: "TailwindCSS", icon: Palette },
        { label: "Framer Motion", icon: Palette },
      ],
    },
    {
      title: "Backend",
      skills: [
        { label: "Node.js", icon: Wrench },
        { label: "Express.js", icon: Wrench },
        { label: "Spring Boot", icon: Wrench },
        { label: "Firebase", icon: Cloud },
      ],
    },
    {
      title: "Database",
      skills: [
        { label: "MongoDB", icon: Database },
        { label: "PostgreSQL", icon: Database },
        { label: "MySQL", icon: Database },
      ],
    },
    {
      title: "Languages",
      skills: [
        { label: "JavaScript", icon: Languages },
        { label: "Java", icon: Languages },
        { label: "Rust", icon: Settings },
        { label: "C/C++", icon: Cloud },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 flex flex-col items-center text-center">
      <div className="max-w-5xl w-full space-y-16">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-10">
            Skills & Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {categories.map((category, i) => (
              <div key={i} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white text-center">
                  {category.title}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-center gap-2 p-3 bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm dark:shadow-md"
                      >
                        <Icon size={18} className="text-rose-500 dark:text-rose-600" />
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                          {skill.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-lg rounded-xl p-6"
        >
          <div className="flex items-center justify-center gap-3 text-rose-500 dark:text-rose-600 mb-4">
            <Languages size={22} />
            <span className="text-xl font-semibold">Philosophy</span>
          </div>
          <p className="text-lg italic text-gray-800 dark:text-gray-300">
            “Elegance in code isn&apos;t just about brevity — it&apos;s about clarity,
            purpose, and empathy for the next developer.”
          </p>
        </motion.div>
      </div>
    </section>
  );
}
