import { Lato } from "next/font/google";
import "./globals.css";

import Image from "next/image";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: "700" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav
          className={`${lato.className} fixed left-0 right-0 top-0 z-10 flex flex-row justify-center border-b-[1px] border-b-gray-400 bg-gray-900 text-gray-300`}
        >
          <div
            id="container"
            className="flex w-full flex-row items-center justify-center space-x-5 p-5 md:w-3/5"
          >
            <div id="logo" className="flex grow flex-row self-start">
              <Link href="/">
                <Image src="sea.svg" alt="Hello" width={64} height={64} />
              </Link>
            </div>

            {/* Links to other pages */}
            <Link href="" className="hover:underline">
              About Us
            </Link>
            <Link href="" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </nav>
        <div
          id="bg"
          className="fixed z-[-1] h-screen w-screen bg-gray-900"
        ></div>
        {children}
      </body>
    </html>
  );
}
