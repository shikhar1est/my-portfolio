"use client";

import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { Lightbulb, Code } from "lucide-react";

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Highlights() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="rounded-xl backdrop-blur-md bg-black/30 dark:bg-white/60 border border-white/10 dark:border-black/10 shadow-md dark:shadow-xl transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4 text-rose-500 dark:text-rose-600">
                <Lightbulb size={24} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-800">
                  Problem Solver
                </h3>
              </div>
              <p className="text-sm text-gray-300 dark:text-gray-800">
                I enjoy breaking down complex problems into simple, elegant solutions — whether it's an algorithm, layout, or architecture.
              </p>
            </CardContent>
          </div>
        </motion.div>

        <motion.div
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={cardVariants}
          whileHover={{ scale: 1.05, y: -5 }}
        >
          <div className="rounded-xl backdrop-blur-md bg-black/30 dark:bg-white/60 border border-white/10 dark:border-black/10 shadow-md dark:shadow-xl transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4 text-rose-500 dark:text-rose-600">
                <Code size={24} />
                <h3 className="text-xl font-semibold text-white dark:text-gray-800">
                  Code That Lasts
                </h3>
              </div>
              <p className="text-sm text-gray-300 dark:text-gray-800">
                I write scalable, maintainable, and performant code with a focus on long-term usability and developer experience.
              </p>
            </CardContent>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
