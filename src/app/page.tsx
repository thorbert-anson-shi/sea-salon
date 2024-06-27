"use client";

import Image from "next/image";
import { Lato } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../components/card";
import { useEffect, useRef } from "react";

const lato_bold = Lato({ subsets: ["latin"], weight: "700" });
const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const containerRef = useRef(null);

  // the ref is used to be able to define the scroll container
  const { scrollYProgress } = useScroll({ container: containerRef });
  const scaleDown = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const scaleUp = useTransform(scrollYProgress, [0, 0.5], [0.7, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);

  const sections = [
    { title: "Haircuts and Styling", src: "/scissors.jpg" },
    { title: "Manicure and Pedicure", src: "/manicure.jpg" },
    { title: "Facial Treatments", src: "/facial.jpg" },
  ];

  useEffect(() => {
    console.log(scrollYProgress.get());
  }, []);

  return (
    // h-screen is needed here to allow the snap points to work correctly
    <div className="h-screen w-screen overflow-y-scroll" ref={containerRef}>
      {/* Section for hero elements */}
      <motion.section
        id="hero"
        className="flex h-screen flex-col items-center justify-center space-y-2 py-12 md:space-y-10"
      >
        <Image
          src="sea.svg"
          alt="SEA Salon"
          width={400}
          height={250}
          className="w-1/2 md:w-1/4"
        />
        <h1
          className={`${lato_bold.className} text-4xl text-white antialiased md:text-7xl`}
        >
          SEA Salon
        </h1>
        <h2
          className={`${lato_reg.className} text-3xl text-white antialiased md:text-5xl`}
        >
          Beauty and Elegance Redefined
        </h2>
      </motion.section>

      {/* Section for services */}
      <motion.section
        id="services"
        className="mx-auto h-screen w-3/5 pt-[4.5rem]"
        style={{ scale: scaleUp, y: y }}
      >
        <h1
          className={`${lato_bold.className} my-3 text-center text-3xl text-white md:my-5 md:text-5xl`}
        >
          Our Services
        </h1>
        <ul
          id="carousel"
          className="flex h-4/5 snap-x snap-mandatory flex-row flex-nowrap overflow-x-scroll"
        >
          {sections.map((section, index) => (
            <li
              // Flex shrink 0 is needed here to prevent the flex items from shrinking based on the container size
              className="flex w-1/3 flex-shrink-0 snap-center flex-col items-center"
              key={index}
            >
              <Card
                width="80%"
                height="60%"
                title={section.title}
                src={section.src}
              />
            </li>
          ))}
        </ul>
      </motion.section>
    </div>
  );
}
