import Image from "next/image";
import { Lato } from "next/font/google";

import { motion } from "framer-motion";
import Link from "next/link";

const lato_bold = Lato({ subsets: ["latin"], weight: "700" });
const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

type CardProps = {
  width: string;
  height: string;
  title: string;
  content: string;
  src: string;
  // booking_url: string;
};

const Card = ({
  width,
  height,
  title,
  content,
  src,
  // booking_url,
}: CardProps) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-start overflow-clip rounded-[2.5rem] bg-white antialiased`}
      style={{ width: width, height: height }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      <div id="image-container" className="relative h-1/2 w-full">
        <Image
          src={src}
          fill={true}
          alt="image on card"
          // style={{ filter: "grayscale(70%)" }}
          quality={60}
          className="object-cover"
          priority={true}
        />
      </div>
      <div
        id="text-container"
        className="flex h-1/2 flex-col justify-start p-5 antialiased md:p-7"
      >
        <h1 className={`${lato_bold.className} w-full text-wrap text-3xl`}>
          {title}
        </h1>
        <p className={`${lato_reg.className} text-wrap text-2xl`}>{content}</p>
        <div className="flex grow-[2] flex-col items-start justify-end">
          <Link href="/booking">
            <button className="flex flex-row flex-nowrap items-center rounded-sm bg-neutral-200 p-3 hover:bg-neutral-400 hover:text-white hover:underline md:rounded-md">
              <p className={`${lato_reg.className} w-full text-center text-xl`}>
                Book a session
              </p>
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
