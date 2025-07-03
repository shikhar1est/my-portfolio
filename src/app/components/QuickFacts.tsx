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
    <section className="py-16 px-6 sm:px-20 ">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-red-400 dark:text-white">
        What I Bring to the Table
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map((fact, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full text-center bg-white dark:bg-[#111] border-none shadow-md dark:shadow-lg">
              <CardContent className="flex flex-col items-center justify-center py-8 px-4 gap-4">
                <div className="text-rose-500">{fact.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {fact.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {fact.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
