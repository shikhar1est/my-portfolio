// src/components/Footer.tsx
"use client";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Shikhar Rai. All rights reserved.</p>

        <div className="flex gap-6 mt-4 sm:mt-0 text-xl text-gray-700 dark:text-gray-300">
          <a href="https://github.com/shikhar1est" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-rose-500 transition" />
          </a>
          <a href="www.linkedin.com/in/shikhar-rai-5667652a5" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-rose-500 transition" />
          </a>
          <a href="https://twitter.com/Breaker5x" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-rose-500 transition" />
          </a>
          <a href="https://instagram.com/kyayaarshikharr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-rose-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}
