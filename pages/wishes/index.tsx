import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";

export default function GodparentsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center mb-6">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            Wishes From GodParents
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Godfather Profile */}
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-blue-50 dark:bg-blue-900">
            <Image
              src="/temp.jpg" // Replace with actual path
              alt="Godfather"
              width={150}
              height={150}
              className="mb-4 rounded-xl object-cover"
            />
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white">Shennoy Da Costa</h2>
            <span className="text-lg text-blue-600 dark:text-blue-300 mb-3 mt-3">Padrin - The GodFather🔥</span>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Always cool, always kind — your guide through fun and life.
            </p>
            <Link
              href="https://drive.google.com/your-godfather-video-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition"
            >
              Watch Video
            </Link>
          </div>

          {/* Godmother Profile */}
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-2xl bg-pink-50 dark:bg-pink-900">
            <Image
              src="/temp.jpg" // Replace with actual path
              alt="Godmother"
              width={150}
              height={150}
              className="mb-4 rounded-xl object-cover"
            />
            <h2 className="text-2xl font-bold text-pink-900 dark:text-white">Patricia Cabral</h2>
            <span className="text-lg text-pink-600 dark:text-pink-300 mb-3 mt-3">Madrin - The GodMother ❤️</span>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              Full of love and sparkle — your fairy in real life.
            </p>
            <Link
              href="https://drive.google.com/your-godmother-video-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-5 py-2 rounded-xl hover:bg-pink-600 transition"
            >
              Watch Video
            </Link>
          </div>
        </div>
      </section>

      <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

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

          <Link
            href="/leon_message"
          >
            <Button
              className="mt-6 bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg text-white"
            >
             Game Time → 
            </Button>
          </Link>
        </div>

      </section>

    </DefaultLayout>
  );
}
