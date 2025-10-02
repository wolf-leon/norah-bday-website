import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

export default function MessageFromMePage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center py-16 px-6 min-h-screen bg-white dark:bg-gray-900">
        <h1
          className={`${title()} text-4xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent mb-8`}
        >
          A Message From Your FAV Uncle 💛
        </h1>

        <div className="w-full max-w-3xl border border-gray-300 dark:border-gray-700 rounded-2xl p-10 shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent text-center mb-6">
            AVOI MUGE MAII! - NORAH IS 3
          </h2>

          <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 text-center leading-relaxed font-semibold">
            ✨ Happy Birthday, Baby Norah! ✨
          </p>

          <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

          <p className="text-lg md:text-xl text-gray-800 dark:text-gray-100 text-center leading-relaxed font-semibold">
            I hope your day is filled with smiles, cake, and all the magic you
            deserve. You bring so much joy everywhere you go — and I just know
            you&apos;re going to do amazing things!
            <br />
            <br />
            I wish you laughter, big dreams, and all the fun in the world. And
            hey... I trust you to always be kind, curious, and full of life —
            just the way you are.
            <br />
            <br />
            Of course, you already know I&apos;m your favourite uncle (no
            debates 😎). Call me, message me, or just send a big emoji blast —
            I&apos;m always just a tap away!
            <br />
            <br />
            Sending you the biggest high-five and a whole bunch of hugs...
            <br />
            <br />
            KEEP SLAAAAYYYING PRINCESS!!!!!!👸
          </p>

          <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

          <p className="mt-10 text-4xl italic font-bold text-pink-500 dark:text-pink-400 text-center">
            — Lulu 🫶
          </p>
        </div>
      </section>

      <Divider className="my-8 w-1/2 mx-auto bg-pink-300 dark:bg-pink-500 h-0.5" />

      <section className="flex flex-col items-center justify-center px-4 py-10 md:py-16">
        <div className="text-center max-w-2xl">
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            🎈 Pop the Balloons! - Game Time
          </h1>

          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            A quick and fun little game just for you!
          </p>

          <p className="mt-6 text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400">
            Rules are simple: Pop 50 balloons… and you win! 🎉
          </p>

          <Link href="/fun_game">
            <Button className="mt-6 bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg text-white hover:scale-105 transition-transform">
              Let&apos;s Pop! →
            </Button>
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
