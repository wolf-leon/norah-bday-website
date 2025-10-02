import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { History } from "lucide-react";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const family = [
  {
    name: "Papa Bear",
    role: "Sherwin - Forever Hero & Favorite Storyteller",
    image: "/norah-photo-4.jpg",
  },
  {
    name: "Mama bear",
    role: "Skeeter - Comfort, Guidance & Heart",
    image: "/norah-photo-3.jpg",
  },
  {
    name: "Pookie Bear",
    role: "Nina Rose - Partner in Crime & Best Friend",
    image: "/norah-photo-40.png",
  },
];

export default function MemoriesPage() {
  return (
    <DefaultLayout>
      {/* Family Section */}
      <section className="pt-4 pb-16 px-4 md:px-10 w-full">
        <div className="text-center mb-10">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            The Loving Family
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            The amazing people who surround her with love, laughter, and endless
            support every day.
          </p>

          <br />

          <div className="mt-6 flex justify-center">
            <Image
              alt="Family photo"
              className="rounded-lg shadow-md mb-6"
              height={300}
              src="/norah-family-photo.png" // Make sure the path is correct
              width={400}
            />

            <br />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {family.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  alt={member.name}
                  className="object-cover w-full h-full"
                  height={128}
                  src={member.image}
                  width={128}
                />
              </div>
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-200">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-6">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            The Godparents
          </h1>
          <br />
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Showering All of thier Love Forever
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Godfather Profile */}
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-blue-50 dark:bg-blue-900">
            <Image
              alt="Godfather"
              className="mb-4 rounded-xl object-cover"
              height={180}
              src="/norah-photo-5.png" // Replace with actual path
              width={150}
            />
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white">
              Shennoy Da Costa
            </h2>
            <span className="text-lg text-blue-600 dark:text-blue-300 mb-3 mt-3">
              Padrin - The GodFather🔥
            </span>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Always cool, always kind — your guide through fun and life.
            </p>
          </div>

          {/* Godmother Profile */}
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-pink-50 dark:bg-pink-900">
            <Image
              alt="Godmother"
              className="mb-4 rounded-xl object-cover"
              height={180}
              src="/norah-photo-36.jpeg" // Replace with actual path
              width={150}
            />
            <h2 className="text-2xl font-bold text-pink-900 dark:text-white">
              Patricia Cabral
            </h2>
            <span className="text-lg text-pink-600 dark:text-pink-300 mb-3 mt-3">
              Madrin - The GodMother ❤️
            </span>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Full of love and sparkle — your fairy in real life.
            </p>
          </div>
        </div>
      </section>

      <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-6">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            The GrandParents
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Stories, Hugs, and Endless Love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-blue-50 dark:bg-blue-900">
            <Image
              alt="Godfather"
              className="mb-4 rounded-xl object-cover"
              height={180}
              src="/norah-photo-31.jpeg" // Replace with actual path
              width={150}
            />
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white">
              Peter Cabral
            </h2>
            <span className="text-lg text-blue-600 dark:text-blue-300 mb-3 mt-3">
              Vovo - Grandfather
            </span>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Always full of stories, laughter, and wise advice.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-blue-50 dark:bg-blue-900">
            <Image
              alt="Godfather"
              className="mb-4 rounded-xl object-cover"
              height={180}
              src="/norah-photo-8.jpeg" // Replace with actual path
              width={150}
            />
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white">
              Aleixo Da Costa
            </h2>
            <span className="text-lg text-blue-600 dark:text-blue-300 mb-3 mt-3">
              Grandpa - Grandfather
            </span>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Fills your world with love, hugs, and support.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-pink-50 dark:bg-pink-900">
            <Image
              alt="Godmother"
              className="mb-4 rounded-xl object-cover"
              height={180}
              src="/norah-photo-7.jpeg" // Replace with actual path
              width={150}
            />
            <h2 className="text-2xl font-bold text-pink-900 dark:text-white">
              Joyce Da Costa
            </h2>
            <span className="text-lg text-pink-600 dark:text-pink-300 mb-3 mt-3">
              Grandma - Grandmother
            </span>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Full of warmth, laughter, and endless hugs.
            </p>
          </div>
        </div>
      </section>

      <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

      {/* Special Picture Section */}
      <section className="flex flex-col items-center justify-center px-4 py-10 md:py-16">
        <div className="text-center max-w-2xl">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            Your Own Name Logo
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Here&apos;s a special Logo just for you. You can download it to keep
            forever!
          </p>

          {/* Download Button */}
          <a
            download
            className="mt-6 inline-block bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg text-white font-semibold px-6 py-3 rounded-lg transition hover:scale-105"
            href="/norah-logo.jpeg" // Replace with your picture path
          >
            Download Picture 📥
          </a>
        </div>

        {/* Picture Display */}
        <div className="mt-6 flex justify-center">
          <Image
            isBlurred
            alt="Norah Special Picture"
            className="rounded-lg shadow-md mb-6"
            height={400}
            src="/norah-logo.jpeg" // Replace with your picture path
            width={400}
          />
        </div>
      </section>

      <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

      {/* Memories Section */}
      <section className="flex flex-col items-center justify-center px-4 py-10 md:py-16">
        <div className="text-center max-w-2xl">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            Memories
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Every smile, every moment, every little memory—let&apos;s rewind
            time and relive the journey that made today so special.
          </p>

          <Link
            isExternal
            href="https://drive.google.com/file/d/1Errfz2Vjz_5cngzs4SZTtyQsOrq-Tmw8/view?usp=sharing"
          >
            <Button
              className="mt-6 bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg text-white"
              startContent={<History size={18} />}
            >
              Video not loading? Click to view it on Google Drive
            </Button>
          </Link>
        </div>

        {/* Embedded Video */}
        <div className="mt-10 w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg">
          <iframe
            allowFullScreen
            allow="autoplay"
            className="w-full h-full"
            src="https://drive.google.com/file/d/1Errfz2Vjz_5cngzs4SZTtyQsOrq-Tmw8/preview"
            title="Memories Video"
          />
        </div>
      </section>

      <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

      {/* GodParent people Section */}
      <section className="flex flex-col items-center justify-center px-4 py-10 md:py-16">
        <div className="text-center max-w-2xl">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            Something Exciting Ahead!
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A Small Note and Fun Game incoming!
          </p>

          <Link href="/leon_message">
            <Button className="mt-6 bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg text-white">
              Let&apos;s Go →
            </Button>
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
