import { Link } from "@heroui/link";

import { Head } from "./head";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer
        className="w-full flex flex-col items-center justify-center py-3  text-center"
        style={{ backgroundColor: "#F4C2C2" }}
      >
        <div
          className="text-lg font-bold"
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#000",
          }}
        >
          Norah&apos;s Glow, Watch Her Grow !
        </div>
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            marginBottom: "20px",
            padding: "0 20px",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "#000", textDecoration: "none" }}>
            Home
          </Link>
          <Link
            href="/memories"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Memories
          </Link>
          <Link
            href="/memory_wall"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Gallery
          </Link>
          <Link
            href="/fun_game"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Game
          </Link>
          <Link
            href="/leon_message"
            style={{ color: "#000", textDecoration: "none" }}
          >
            Message From Leon
          </Link>
        </nav>
        <div
          className="text-sm"
          style={{ color: "#000", textDecoration: "none" }}
        >
          &copy; {new Date().getFullYear()} Norah Anne. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
