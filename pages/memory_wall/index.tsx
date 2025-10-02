import { useState } from "react";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const memories = [
  {
    year: 1,
    image: "/memories/year1-1.jpg",
    caption: "Your first smile &apos;💕",
  },
  {
    year: 1,
    image: "/memories/year1-2.jpg",
    caption: "First Birthday Cake Smash &apos;🎂&apos;",
  },
  {
    year: 2,
    image: "/memories/year2-1.jpg",
    caption: "First beach day &apos;🏖️&apos;",
  },
  {
    year: 2,
    image: "/memories/year2-2.jpg",
    caption: "Learning to ride &apos;🚲&apos;",
  },
  {
    year: 3,
    image: "/memories/year3-1.jpg",
    caption: "Birthday #3 Celebration &apos;🎉&apos;",
  },
  {
    year: 3,
    image: "/memories/year3-2.jpg",
    caption: "Dancing Queen &apos;💃&apos;",
  },
  // Add more photos here
];

export default function MemoryWallPage() {
  // null = All Years
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const filteredMemories =
    selectedYear === null
      ? memories
      : memories.filter((m) => m.year === selectedYear);

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-12 px-4">
        <div className="inline-block max-w-2xl text-center mb-6">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            Norah&apos;s Memory Wall
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A journey of love, laughter, and milestones — celebrating 3 magical
            years of Norah&apos;s life.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 flex-wrap justify-center mb-10">
          <button
            className={`px-4 py-2 rounded-full ${
              selectedYear === null
                ? "bg-pink-500 text-white"
                : "bg-white border border-pink-500 text-pink-500 dark:bg-gray-800 dark:border-pink-400 dark:text-pink-300"
            }`}
            onClick={() => setSelectedYear(null)}
          >
            All Years
          </button>
          {[1, 2, 3].map((year) => (
            <button
              key={year}
              className={`px-4 py-2 rounded-full ${
                selectedYear === year
                  ? "bg-pink-500 text-white"
                  : "bg-white border border-pink-500 text-pink-500 dark:bg-gray-800 dark:border-pink-400 dark:text-pink-300"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              Year {year}
            </button>
          ))}
        </div>

        {/* Memory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full">
          {filteredMemories.map((m, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl shadow-lg overflow-hidden bg-pink-50 dark:bg-pink-900 hover:scale-105 transition-transform"
            >
              <Image
                alt={m.caption}
                className="object-cover w-full h-64"
                height={300}
                src={m.image}
                width={400}
              />
              <p className="text-center text-pink-700 dark:text-pink-200 p-4 font-medium">
                {m.caption}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Message */}
        <div className="mt-12 max-w-xl text-center text-gray-700 dark:text-gray-300">
          <p className="text-lg">
            From your first giggles to your third birthday, Norah, every moment
            with you has been a treasure. We can&apos;t wait to make more
            memories!
          </p>
        </div>
      </section>
    </DefaultLayout>
  );
}
