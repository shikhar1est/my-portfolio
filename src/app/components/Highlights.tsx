"use client";

import { motion } from "framer-motion";
import { CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FaBolt, FaCode } from "react-icons/fa";
import Link from "next/link";

export default function Highlights() {
  return (
    <section className="py-16 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-full text-left rounded-xl backdrop-blur-md bg-black/30 dark:bg-white/60 border border-white/10 dark:border-black/10 shadow-md dark:shadow-xl transition-all"
        >
          <CardContent className="py-6 px-6 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 dark:text-rose-600 font-semibold">
              <FaBolt size={18} />
              <span>Now Building</span>
            </div>
            <h3 className="text-lg font-semibold text-white dark:text-gray-800">
              Portfolio V2
            </h3>
            <p className="text-sm text-white dark:text-gray-900">
              Next.js · TypeScript · Framer Motion
            </p>
            <Progress value={67} className="h-2 mt-3" />
            <p className="text-sm text-white dark:text-gray-900">
              <span className="font-medium">67% complete</span> — polishing animations.
            </p>
            <p className="text-xs text-white dark:text-gray-900">Updated just now</p>
          </CardContent>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 0, 0, 0.3)" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="h-full text-left rounded-xl backdrop-blur-md bg-black/30 dark:bg-white/60 border border-white/10 dark:border-black/10 shadow-md dark:shadow-xl transition-all"
        >
          <CardContent className="py-6 px-6 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 dark:text-rose-600 font-semibold">
              <FaCode size={18} />
              <span>LeetCode Stats</span>
            </div>
            <p className="text-sm text-gray-300 dark:text-gray-700">
              <strong>Total Solved:</strong> <span className="text-white dark:text-black font-semibold">221</span><br />
              <strong>Easy:</strong> <span className="text-green-400 font-semibold">107</span> ·
              <strong> Medium:</strong> <span className="text-yellow-400 font-semibold">97</span> ·
              <strong> Hard:</strong> <span className="text-red-400 font-semibold">17</span><br />
              <strong>Ranking:</strong> <span className="font-semibold text-white dark:text-black">557025</span>
            </p>
            <Link
              href="https://leetcode.com/shikhar_est"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-rose-400 hover:underline"
            >
              View Profile ↗
            </Link>
          </CardContent>
        </motion.div>
      </div>
    </section>
  );
}
