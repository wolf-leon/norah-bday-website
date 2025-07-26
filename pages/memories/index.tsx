import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { History } from "lucide-react";
import {Image} from "@heroui/image";
import {Divider} from "@heroui/divider";

const family = [
  {
    name: "Papa Bear",
    role: "Sherwin - Forever Hero & Favorite Storyteller",
    image: "/temp.jpg", 
  },
  {
    name: "Mama bear",
    role: "Skeeter - Comfort, Guidance & Heart",
    image: "/temp.jpg",
  },
  {
    name: "Pookie Bear",
    role: "Nina Rose - Partner in Crime & Best Friend",
    image: "/temp.jpg",
  },
];

export default function MemoriesPage() {
  return (
    <DefaultLayout>
      {/* Family Section */}
      <section className="pt-4 pb-16 px-4 md:px-10 w-full">
       <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-pink-600 dark:text-pink-300">
            Loving Family
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            The amazing people who surround her with love, laughter, and endless support every day.
          </p>
          
          <br></br>

          <div className="mt-6 flex justify-center">
            <Image
              alt="Family photo"
              src="/temp.jpg" // Make sure the path is correct
              width={600}
              height={400}
              className="rounded-lg shadow-md mb-6"
            />

          <br></br>
         

          </div>
        </div>


      
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {family.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-pink-700 dark:text-pink-200">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
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
            Every smile, every moment, every little memory—let&apos;s rewind time and relive the journey that made today so special.
          </p>

          <Link
            href="https://drive.google.com/file/d/1Errfz2Vjz_5cngzs4SZTtyQsOrq-Tmw8/view?usp=sharing"
            isExternal
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
            className="w-full h-full"
            src="https://drive.google.com/file/d/1Errfz2Vjz_5cngzs4SZTtyQsOrq-Tmw8/preview"
            allow="autoplay"
            allowFullScreen
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
             A Message from Special People
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Some heartfelt words await from those who love her dearly — Her Amazing Godparents.
          </p>

          <Link
            href="/wishes"
          >
            <Button
              className="mt-6 bg-gradient-to-tr from-pink-500 to-yellow-500 shadow-lg text-white"
            >
             Lets See What they Have → 
            </Button>
          </Link>
        </div>

      </section>

   
    </DefaultLayout>
  );
}
