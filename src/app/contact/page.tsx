"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useState } from "react";
import { toast } from "sonner";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/moqgdkpr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } catch {
      toast.error("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 flex flex-col items-center text-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg rounded-xl p-8 flex flex-col justify-between"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-geist">
            Send me a message
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              aria-label="Your Email"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-32"
              aria-label="Your Message"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold animate-pulse-slow disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Connect + Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-lg rounded-xl p-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 font-geist">
              Connect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Want to collaborate or just say hi? Follow me on these platforms or email directly.
            </p>
            <div className="flex justify-center gap-6 text-2xl text-gray-800 dark:text-gray-200">
              <a
                href="https://github.com/shikharr521"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="hover:text-red-600 transition-transform hover:scale-110" />
              </a>
              <a
                href="https://linkedin.com/in/shikharr521"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="hover:text-red-600 transition-transform hover:scale-110" />
              </a>
              <a
                href="https://twitter.com/shikharr521"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="hover:text-red-600 transition-transform hover:scale-110" />
              </a>
            </div>

            <div className="mt-8 text-sm text-gray-600 dark:text-gray-400">
              Email me directly:
              <br />
              <span className="font-medium text-gray-800 dark:text-gray-200">
                shikharr521@gmail.com
              </span>
            </div>

            <blockquote className="mt-8 text-md italic text-gray-700 dark:text-gray-300">
              "The best way to predict the future is to invent it." — <span className="font-semibold">Alan Kay</span>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
