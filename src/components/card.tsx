import Image from "next/image";
import { Lato } from "next/font/google";

import { motion } from "framer-motion";

const lato_bold = Lato({ subsets: ["latin"], weight: "700" });
const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

type CardProps = {
  width: string;
  height: string;
  title: string;
  src: string;
};

const Card = ({ width, height, title, src }: CardProps) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-around overflow-clip rounded-[2.5rem] border border-black bg-white antialiased`}
      style={{ width: width, height: height }}
      whileHover={{ scale: 1.05, translateY: 10 }}
    >
      <div id="image-container" className="relative h-1/2 w-full">
        <Image
          src={src}
          fill={true}
          alt="image on card"
          style={{ filter: "grayscale(70%)" }}
          quality={60}
          className="object-cover"
        />
      </div>
      <h1
        className={`${lato_bold.className} h-1/2 w-full text-wrap p-3 text-3xl md:p-5`}
      >
        {title}
      </h1>
    </motion.div>
  );
};

export default Card;
