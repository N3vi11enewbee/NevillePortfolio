'use client'

import Link from 'next/link';
import { useState } from "react";

export default function Home() {
  const [hoveredItem, setHoveredItem] = useState<"about" | "projects" | "experience" | null>(null);
  
  const info = {
    about: "This is about me information.",
    projects: "This is projects information.",
    experience: "This is experience information.",
  };

  return (
    <main className="flex flex-col min-h-screen p-24 bg-gradient-to-b from-zinc-200 to-transparent dark:from-inherit dark:to-inherit">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="text-5xl font-bold text-black dark:text-white">
          Neville Parmar
        </div>

        <div className="flex space-x-8 text-2xl text-black dark:text-white">
          <Link href="/about">
            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => setHoveredItem('about')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              About Me
            </div>
          </Link>
          <Link href="/projects">
            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => setHoveredItem('projects')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Projects
            </div>
          </Link>
          <Link href="/experience">
            <div
              className="hover:underline cursor-pointer"
              onMouseEnter={() => setHoveredItem('experience')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Experience
            </div>
          </Link>
        </div>
      </div>

      {hoveredItem && (
        <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded shadow-lg text-black dark:text-white">
          {info[hoveredItem]}
        </div>
      )}
    </main>
  );
}
