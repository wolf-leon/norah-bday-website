"use client";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Image from "next/image";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { History } from 'lucide-react'; 

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
            src="/norah-photo.jpg"
            alt="Norah smiling"
            width={300}
            height={300}
            className="rounded-full shadow-lg border-4 border-pink-300"
          />
    <br></br>
          {/* Inline "We love you 3000 " */}
         <div className="flex flex-col items-center justify-center leading-tight">
          <p className="text-4xl font-semibold text-pink-600 dark:text-pink-400">
            WE LOVE YOU
          </p>
          <br></br>
          <p className="flex items-center justify-center gap-2">
            <NumberTicker
              value={3000}
              className="text-5xl font-bold text-red-500"
            />
            <span className="text-3xl">❤️</span>
          </p>
        </div>

          <TextGenerateEffect words={words} />
          
        </div>
         <br></br>
      <Link href="/memories">
       <Button
        color="primary"
        radius="full"
        size="lg"
        className="bg-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
        startContent={<History size={20} />}
      >
         Let&apos;s fall back a little and relive the memories!
      </Button>
      </Link>
      <br></br>

      </section>
    </DefaultLayout>
  );
}
