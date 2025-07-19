"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Coding Judege Backend",
    description:
      "Built a scalable Coding Judge backend with code execution, test evaluation, and plagiarism detection.",
    tech: ["Node.js","MongoDB", "Docker"],
    image: "/images/Trainology.png",
    links: [
      { label: "Live", url: "https://coding-judge-backend-9czr.onrender.com" },
      { label: "GitHub", url: "https://github.com/shikhar1est/coding-judge" },
    ],
  },
  {
    title: "Trainology",
    description:
      "Built an LMS platform using the MERN stack with course and user management.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    image: "/images/v8jjwp1d0qoa1.png",
    links: [
      { label: "Live", url: "https://trainology-project.vercel.app/" },
      { label: "GitHub", url: "https://github.com/shikhar1est/TrainologyProject" },
    ],
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
