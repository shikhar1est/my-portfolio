"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import SkillsAndPhilosophy from "./Skills";

export default function AboutPage() {
  const facts = [
    "I can code for 12 hours straight (with coffee ☕).",
    "Gamer at night — strategy and action are my jam.",
    "Dark mode always. Light mode is for the weak.",
    "Keyboard hoarder. Clicky keys, happy me.",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 flex flex-col items-center text-center">
      <div className="max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white font-geist"
        >
          About Me
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-700 dark:text-gray-300"
        >
          Developer. Thinker. Problem Solver.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-lg rounded-xl p-6"
        >
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300">
            I&apos;m a passionate full-stack developer who loves crafting interactive, scalable, and fast digital experiences. With a background in both front-end and back-end development, I build user-centric interfaces and robust server-side architectures.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-800 dark:text-gray-300">
            Beyond the screen, you&apos;ll find me exploring new tech stacks, solving competitive programming problems, or diving into fantasy worlds like Warhammer and Max Payne.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-sm text-gray-500 dark:text-gray-500"
        >
          Always curious. Always learning.
        </motion.div>
      </div>

      <SkillsAndPhilosophy />

      {/* Fun Facts Section */}
      <div className="mt-20 max-w-[700px] w-full px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
           Fun Facts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          A few quirks and hobbies that keep me ticking.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {facts.map((fact, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full text-center bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-lg rounded-xl transition-colors">
                <CardContent className="flex flex-col justify-center items-center py-6 px-4 text-gray-800 dark:text-gray-200 text-sm">
                  {fact}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
