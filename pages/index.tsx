import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-12 md:py-20 bg-pink-50 min-h-screen">
      <h1 className="text-4xl md:text-6xl font-bold text-pink-700 mb-4">
        🎉 Happy 3rd Birthday, Norah! 🎂
      </h1>

      <p className="text-lg md:text-xl text-pink-600 max-w-xl mb-6">
        Three years of cuteness, chaos, and cookie crumbs. Today, we party like
        it&apos;s nap time!
      </p>

      <div className="mb-6">
        <Image
          src="/norah-photo.jpg" // Replace with actual photo
          alt="Norah smiling"
          width={300}
          height={300}
          className="rounded-full shadow-lg border-4 border-pink-300"
        />
      </div>

      <Button
        color="primary"
        radius="full"
        size="lg"
        className="bg-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
        onPress={onOpen}
      >
        🧚 Explore Norah&apos;s Magical World
      </Button>

      {/* Advisory Modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        backdrop="blur"
        className="text-center"
        placement="center"
        
      >
        <ModalContent className="bg-white dark:bg-pink-100 shadow-xl rounded-xl">
          <ModalHeader className="text-2xl text-pink-600 font-bold">
            🎤 Hey Skeeter & Sherwin!
          </ModalHeader>
          <ModalBody className="text-pink-700 text-lg px-6">
            <p>
              Please read this website aloud to our little superstar Norah! 💖
            </p>
            <p>
              There&apos;s laughter, love, and lots of cute photos inside — and
              yes, a game too!
            </p>
            <p>Let&apos;s go make some birthday magic! ✨</p>
          </ModalBody>
          <ModalFooter className="flex justify-center">
            <Link href="/landing">
              <Button color="success" radius="full" size="md" onPress={onClose}>
                🚀 Let&apos;s Go!
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </section>
  );
}
