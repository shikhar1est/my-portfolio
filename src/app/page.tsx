import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* HOME */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 sm:p-20 text-center"
      >
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-decimal list-inside text-sm sm:text-base font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logo"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Snoop Doggy Dogg
          </a>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center bg-[#fee2e2] dark:bg-[#1a1a1a] px-6 sm:px-20 py-24"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Projects</h2>
        <p className="max-w-xl text-center text-gray-700 dark:text-gray-300">
          This section will showcase your personal or collaborative work.
        </p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-20 py-24"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-xl text-center text-gray-700 dark:text-gray-300">
          Write a short bio about yourself, your skills, goals, or achievements here.
        </p>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center bg-[#fca5a5] dark:bg-[#111] px-6 sm:px-20 py-24"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact</h2>
        <p className="max-w-xl text-center text-gray-800 dark:text-gray-200">
          Add a form or email link for people to get in touch.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="py-8 flex flex-wrap justify-center gap-6 border-t border-black/10 dark:border-white/10 text-sm text-gray-600 dark:text-gray-400">
        <a href="https://nextjs.org/learn" target="_blank" className="hover:underline">Learn</a>
        <a href="https://vercel.com/templates" target="_blank" className="hover:underline">Examples</a>
        <a href="https://nextjs.org" target="_blank" className="hover:underline">Go to nextjs.org →</a>
      </footer>
    </div>
  );
}
