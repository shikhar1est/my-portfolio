"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-20 text-center"
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white"
      >
        Hey, I am <span className="text-rose-500">Shikhar</span>
        <br />
        <span className="text-xl sm:text-2xl font-medium text-gray-900 dark:text-gray-300 mt-4 block">
          I turn ideas into <span className="underline decoration-rose-400">products</span> <br />
          and build stuff that actually works.
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 max-w-2xl text-base sm:text-lg text-gray-900 dark:text-gray-300"
      >
        Passionate about clean code, user-first design, and building scalable apps with modern web
        stacks like <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>TailwindCSS</strong>.
        I don’t just build apps — I build polished experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href="http://localhost:3000/projects"
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-6 rounded-full transition-all shadow-md"
        >
          View Projects
        </Link>
        <Link
          href="http://localhost:3000/contact"
          className="border border-rose-500 hover:bg-rose-100 dark:hover:bg-rose-900 text-rose-500 font-semibold py-2 px-6 rounded-full transition-all shadow-md"
        >
          Get in Touch
        </Link>
      </motion.div>

      {/* See Highlights */}
      <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1 }}
  className="mt-12"
>
  <button
    onClick={() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }}
    className="group inline-flex items-center gap-2 text-rose-500 hover:text-rose-600 transition font-medium text-base sm:text-lg focus:outline-none"
  >
    See Highlights
    <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
  </button>
</motion.div>
    </section>
  );
};

export default Hero;
