"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Built with Next.js, TypeScript, TailwindCSS, and Framer Motion. Responsive, fast, and elegant.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    image: "/images/HALO.jpg",
    links: [
      { label: "Live", url: "https://your-live-link.com" },
      { label: "GitHub", url: "https://github.com/your-repo" },
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce app with cart, payments, and admin dashboard using MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/RDR2.jpg",
    links: [
      { label: "GitHub", url: "https://github.com/your-ecommerce-repo" },
    ],
  },
  {
    title: "Blog CMS",
    description:
      "Markdown-based blog with content management using Sanity.io and Next.js.",
    tech: ["Next.js", "Sanity", "TailwindCSS"],
    image: "/images/MAXPAYNE.jpg",
    links: [
      { label: "Live", url: "https://your-blog-live.com" },
      { label: "GitHub", url: "https://github.com/blog-repo" },
    ],
  },
  {
    title: "Chat App",
    description:
      "Real-time chat app with WebSocket and Firebase integration. Smooth UI with auth and dark mode.",
    tech: ["React", "Firebase", "WebSocket"],
    image: "/images/WARHAMMER.jpg",
    links: [],
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white font-geist">
            Projects
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-400">
            A glimpse into some things I&apos;ve built — clean code, functional design, and performance in mind.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full flex flex-col bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-lg rounded-xl transition-colors">
                <CardContent className="p-4 flex flex-col gap-4">
                  <div className="w-full h-44 relative rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-rose-500/10 text-rose-500 dark:text-rose-400 px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {project.links?.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-rose-500 dark:text-rose-400 hover:underline"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
