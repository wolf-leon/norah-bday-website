"use client";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { History } from "lucide-react";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { siteConfig } from "@/config/site";

const words = `Three years ago, a precious little bundle of joy came into our world. Since then, every smile, giggle, and hug has made life brighter. Today, we celebrate you — our shining star. Happy Birthday, little one! We love you so much, Snugglebug! 🎉💕`;

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col items-center justify-center text-center gap-4 max-w-lg">
          {/* Stylized name */}
          <h1
            className={`${title()} text-4xl font-extrabold bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md`}
          >
            {siteConfig.name}
          </h1>

          <Image
            alt="Norah smiling"
            className="rounded-full shadow-lg border-4 border-pink-300"
            height={400}
            src="/norah-photo-10.jpeg"
            width={300}
          />
          <br />
          {/* Inline "We love you 3000 " */}
          <div className="flex flex-col items-center justify-center leading-tight">
            <p className="text-4xl font-semibold text-pink-600 dark:text-pink-400">
              WE LOVE YOU
            </p>
            <br />
            <p className="flex items-center justify-center gap-2">
              <NumberTicker
                className="text-5xl font-bold text-red-500"
                value={3000}
              />
              <span className="text-3xl">❤️</span>
            </p>
            <br />
            <p className="text-4xl font-semibold text-pink-600 dark:text-pink-400">
              Boss Baby!
            </p>
          </div>

          <TextGenerateEffect words={words} />
        </div>
        <br />
        <Link href="/memories">
          <Button
            className="bg-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
            color="primary"
            radius="full"
            size="lg"
            startContent={<History size={20} />}
          >
            Let&apos;s relive the memories!
          </Button>
        </Link>
        <br />
      </section>
    </DefaultLayout>
  );
}
