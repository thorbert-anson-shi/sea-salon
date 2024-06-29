import Image from "next/image";
import { Lato } from "next/font/google";

import { motion } from "framer-motion";

const lato_bold = Lato({ subsets: ["latin"], weight: "700" });
const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

type CardProps = {
  width: string;
  height: string;
  title: string;
  content?: string;
  src: string;
};

const Card = ({ width, height, title, content, src }: CardProps) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-start overflow-clip rounded-[2.5rem] bg-neutral-200 antialiased`}
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
        />
      </div>
      <div
        id="text-container"
        className="flex flex-col justify-start p-5 antialiased md:p-7"
      >
        <h1 className={`${lato_bold.className} w-full text-wrap text-3xl`}>
          {title}
        </h1>
        <p className={`${lato_reg.className} text-wrap text-2xl`}>{content}</p>
      </div>
    </motion.div>
  );
};

export default Card;
