"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, Code, Cpu, Users } from "lucide-react";

const facts = [
  {
    icon: <Lightbulb size={32} />,
    title: "Creative Thinker",
    description: "Love solving complex problems with simple and intuitive design.",
  },
  {
    icon: <Code size={32} />,
    title: "Full Stack Dev",
    description: "Next.js, TypeScript, Node.js — I build scalable web apps.",
  },
  {
    icon: <Cpu size={32} />,
    title: "Performance-Driven",
    description: "Optimized for speed, SEO, and great user experience.",
  },
  {
    icon: <Users size={32} />,
    title: "Team Collaborator",
    description: "Great communicator who thrives in fast-paced environments.",
  },
];

export default function QuickFacts() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          What I Bring to the Table
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="h-full text-center rounded-xl backdrop-blur-md bg-black/30 dark:bg-white/60 border border-white/10 dark:border-black/10 shadow-md dark:shadow-xl transition-colors">
                <CardContent className="flex flex-col items-center justify-center py-8 px-4 gap-4">
                  <div className="text-rose-400 dark:text-rose-500">{fact.icon}</div>
                  <h3 className="text-lg font-semibold text-white dark:text-gray-900">
                    {fact.title}
                  </h3>
                  <p className="text-sm text-gray-300 dark:text-gray-700">
                    {fact.description}
                  </p>
                </CardContent>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
