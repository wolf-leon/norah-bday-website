import { useState } from "react";
import { Image } from "@heroui/image";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const memories = [
  {
    year: 1,
    image: "/norah-family-photo.png",
    caption: "Happy Sweet Family 💕",
  },
  {
    year: 3,
    image: "/norah-photo-1.jpg",
    caption: "Sassy girl 🎀",
  },
  {
    year: 1,
    image: "/norah-photo-2.png",
    caption: "Happy time with my Godpa!🌞",
  },
  {
    year: 3,
    image: "/norah-photo-3.jpg",
    caption: "With My Mama bear 💕",
  },
  {
    year: 3,
    image: "/norah-photo-4.jpg",
    caption: "With My Papa bear 💕",
  },
  {
    year: 1,
    image: "/norah-photo-42.jpeg",
    caption: "Forever in my heart, my beloved late grandma 💕",
  },
  {
    year: 1,
    image: "/norah-photo-5.png",
    caption: "Godpa smooching me 😘",
  },
  {
    year: 1,
    image: "/norah-photo-6.png",
    caption: "Godpa trying to pack me for International Trip ✈️",
  },
  {
    year: 3,
    image: "/norah-photo-7.jpeg",
    caption: "Celebrating Grandma Bday 🎂",
  },
  {
    year: 3,
    image: "/norah-photo-8.jpeg",
    caption: "Swim time with Grandpa 🌴",
  },
  {
    year: 2,
    image: "/norah-photo-9.jpeg",
    caption: "Playing Time 🧸",
  },
  {
    year: 3,
    image: "/norah-photo-10.jpeg",
    caption: "Gangsta Look 😎",
  },
  {
    year: 3,
    image: "/norah-photo-11.jpeg",
    caption: "With my Pookie sister 💕",
  },
  {
    year: 3,
    image: "/norah-photo-12.jpeg",
    caption: "My First International Trip ✈️",
  },
  {
    year: 2,
    image: "/norah-photo-13.jpeg",
    caption: "Looking Cute for the Camera 📸",
  },
  {
    year: 2,
    image: "/norah-photo-14.jpeg",
    caption: "Ice Cream Time 🍦",
  },
  {
    year: 1,
    image: "/norah-photo-15.jpeg",
    caption: "With my Great Grandmother Miss her 💕",
  },
  {
    year: 1,
    image: "/norah-photo-25.jpeg",
    caption: "Movie Night With my Godma 📺",
  },
  {
    year: 1,
    image: "/norah-photo-36.jpeg",
    caption: "With my Godma who loves me dearly 💕",
  },
  {
    year: 3,
    image: "/norah-photo-16.jpeg",
    caption: "Play time With Ninu 🧩",
  },
  {
    year: 2,
    image: "/norah-photo-17.jpeg",
    caption: "With my Grandpa, Mia and Nina 💕",
  },
  {
    year: 2,
    image: "/norah-photo-18.jpeg",
    caption: "Celebrating my Grandpa Bday and gradma holding me 💕",
  },
  {
    year: 2,
    image: "/norah-photo-19.jpeg",
    caption: "Felt cute, Never Deleting this Feeling 😏",
  },
  {
    year: 1,
    image: "/norah-photo-22.jpeg",
    caption: "Colouring Time 🖍️",
  },
  {
    year: 2,
    image: "/norah-photo-21.jpeg",
    caption: "Sister Time 📸",
  },
  {
    year: 2,
    image: "/norah-photo-23.jpeg",
    caption: "Resort Time 🍹",
  },
  {
    year: 2,
    image: "/norah-photo-24.jpeg",
    caption: "Bonding Sister Time 💕",
  },
  {
    year: 2,
    image: "/norah-photo-26.jpeg",
    caption: "Game Time 📸",
  },
  {
    year: 1,
    image: "/norah-photo-27.jpeg",
    caption: "Bike Riding with Uncle Roger 🏍️",
  },
  {
    year: 2,
    image: "/norah-photo-28.jpeg",
    caption: "Uncle put me to Sleep 😴",
  },
  {
    year: 1,
    image: "/norah-photo-29.jpeg",
    caption: "My First Great Grandmother Blessing 😇",
  },
  {
    year: 1,
    image: "/norah-photo-30.jpeg",
    caption: "Chill Time with Uncle Roger 🔥",
  },
  {
    year: 1,
    image: "/norah-photo-31.jpeg",
    caption: "With Grandpa in Formals 💕",
  },
  {
    year: 1,
    image: "/norah-photo-32.jpeg",
    caption: "Cozy Sleep Time with Papa bear 😴",
  },
  {
    year: 1,
    image: "/norah-photo-33.jpeg",
    caption: "Play Time with Mia 🔥",
  },
  {
    year: 1,
    image: "/norah-photo-34.jpeg",
    caption: "Picture with Godpa and Kaitlyn ✈️",
  },
  {
    year: 1,
    image: "/norah-photo-35.jpeg",
    caption: "Play Time with Kaitlyn 🔥",
  },
  {
    year: 3,
    image: "/norah-photo-37.jpeg",
    caption: "Toy Shopping ⚽",
  },
  {
    year: 3,
    image: "/norah-photo-38.jpeg",
    caption: "Feeling Happy 😀",
  },
  {
    year: 3,
    image: "/norah-photo-39.jpeg",
    caption: "Cousin time 📸",
  },
  {
    year: 1,
    image: "/norah-photo-41.jpeg",
    caption: "Up time with Grandma 🚀",
  },
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
