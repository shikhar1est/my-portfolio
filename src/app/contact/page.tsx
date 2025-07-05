"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="py-20 px-4 sm:px-6 flex justify-center">
      <div className="max-w-6xl w-full grid sm:grid-cols-2 gap-8">
        {/* Left: Send a message */}
        <Card className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-lg rounded-xl h-full">
          <CardContent className="p-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Send me a message
            </h2>

            <form
  action="https://formspree.io/f/mwpbjpdj"
  method="POST"
  className="space-y-4"
>
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />

  <input
    type="text"
    name="name"
    required
    placeholder="Your Name"
    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  />
  <input
    type="email"
    name="email"
    required
    placeholder="Your Email"
    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
  />
  <textarea
    name="message"
    required
    placeholder="Your Message"
    className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-32"
  ></textarea>
  <button
    type="submit"
    className="mt-2 px-6 py-3 bg-red-600 text-white rounded-lg font-semibold animate-pulse-slow"
  >
    Send Message
  </button>
</form>
          </CardContent>
        </Card>

        {/* Right: Connect + Quote */}
        <Card className="bg-white/60 dark:bg-[#111]/60 backdrop-blur-md border border-gray-200 dark:border-gray-800 shadow-md dark:shadow-lg rounded-xl h-full flex flex-col justify-between">
          <CardContent className="p-6 flex flex-col gap-6 h-full">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                Connect
              </h2>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Want to collaborate or just say hi? Feel free to drop a message or follow me online.
              </p>

              <div className="mt-4 flex gap-4 text-2xl text-rose-500 dark:text-rose-400">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              </div>

              <p className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                Email me at:{" "}
                <span className="font-medium text-rose-500 dark:text-rose-400">
                  shikharr521@gmail.com
                </span>
              </p>
            </div>

            <blockquote className="mt-auto pt-4 text-md sm:text-lg text-gray-700 dark:text-gray-300 italic font-geist-mono leading-relaxed">
              “Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all,
              love of what you are doing or learning to do.” <br />
              <span className="mt-2 block text-right text-rose-500 font-semibold">— Pelé</span>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
