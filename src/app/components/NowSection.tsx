import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, BookOpen, Terminal } from "lucide-react";

const notes = [
  {
    title: "Current Build",
    icon: <Terminal className="w-5 h-5 mr-2 text-rose-500" />,
    content:
      "Working on a full-stack portfolio with animations, dark mode, and a headless CMS integration.",
    tags: ["Next.js", "Framer Motion", "Tailwind", "Shadcn"],
    color: "bg-rose-100 dark:bg-rose-900",
  },
  {
    title: "Reading",
    icon: <BookOpen className="w-5 h-5 mr-2 text-blue-500" />,
    content:
      "Diving deep into system design and distributed computing — reading through real-world architecture blogs.",
    tags: ["Design Patterns", "Redis", "Kafka", "CAP"],
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    title: "Ideas & Notes",
    icon: <Lightbulb className="w-5 h-5 mr-2 text-yellow-500" />,
    content:
      "Thinking about creating a micro-SaaS tool for writing API docs with live previews + AI autogen.",
    tags: ["AI", "Docs-as-Code", "SaaS Idea"],
    color: "bg-yellow-100 dark:bg-yellow-800",
  },
];

const bottomStats = [
  {
    title: "Coding Streak",
    value: "🔥 42 days",
    detail: "Daily GitHub commits",
  },
  {
    title: "Current Stack",
    value: "Next.js + Supabase",
    detail: "Full-stack in TypeScript",
  },
  {
    title: "Music Fuel",
    value: "Lo-fi & Synthwave",
    detail: "Always on during dev",
  },
];

export default function NowSection() {
  return (
    <section id="now" className="py-16 px-4 sm:px-8 md:px-20 lg:px-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        <span className="text-rose-500">What's</span> happening <span className="text-rose-500">now?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {notes.map((note, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`rounded-2xl shadow-md ${note.color} p-6 border border-black/10 dark:border-white/10`}
          >
            <div className="flex items-center mb-2">
              {note.icon}
              <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
                {note.title}
              </h3>
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {note.content}
            </p>
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-white/30 dark:bg-black/30 text-xs px-2 py-1 rounded-full text-gray-800 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {bottomStats.map((stat, idx) => (
          <Card
            key={idx}
            className="bg-white dark:bg-gray-900 shadow border border-black/10 dark:border-white/10 hover:shadow-lg transition-all"
          >
            <CardContent className="p-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                {stat.title}
              </h4>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {stat.detail}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
