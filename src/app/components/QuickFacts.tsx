"use client";

import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { BookOpen, Music, Zap, Rocket } from "lucide-react";

const facts = [
  {
    icon: <BookOpen size={32} />,
    title: "Currently Learning",
    description: (
      <>
        <p className="text-sm text-white dark:text-gray-900 mb-2">
          Database Management Systems
        </p>
        <Progress value={50} className="h-2" />
        <p className="text-xs text-gray-300 dark:text-gray-600 mt-1">50% complete</p>
      </>
    ),
  },
  {
    icon: <Music size={32} />,
    title: "Listening To",
    description: (
      <p className="text-sm text-white dark:text-gray-900">
        Podcasts about Ancient Warfare
      </p>
    ),
  },
  {
    icon: <Zap size={32} />,
    title: "Current Activity",
    description: (
      <p className="text-sm text-white dark:text-gray-900">
        Practicing Data Structures & Algorithms in Java
      </p>
    ),
  },
  {
    icon: <Rocket size={32} />,
    title: "Exploring",
    description: (
      <p className="text-sm text-white dark:text-gray-900">
        Diving into Rust.
      </p>
    ),
  },
];

export default function QuickFacts() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Live Snapshots
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
                  {fact.description}
                </CardContent>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
