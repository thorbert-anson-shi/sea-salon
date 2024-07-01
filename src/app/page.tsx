"use client";

import { Lato } from "next/font/google";
import { motion } from "framer-motion";
import Card from "../components/card";

const lato_bold = Lato({ subsets: ["latin"], weight: "700" });
const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const services: Service[] = [
    {
      title: "Haircuts and Styling",
      src: "/scissors.jpg",
      content:
        "Express yourself with our hairdressers with 10+ years of experience",
      // booking_url: "/booking?name=&email=&date=&time=&service=haircut",
    },
    {
      title: "Manicure and Pedicure",
      src: "/manicure.jpg",
      content: "Keep your hands and feet looking clean and healthy",
      // booking_url: "/booking?name=&email=&date=&time=&service=manicure",
    },
    {
      title: "Facial Treatments",
      src: "/facial.jpg",
      content: "Rejuvenate your skin with our wide array of facial treatments",
      // booking_url: "/booking?name=&email=&date=&time=&service=facial",
    },
  ];

  const contacts: Person[] = [
    {
      name: "Thomas",
      phoneNo: "0812 3456 789",
    },
    {
      name: "Sekar",
      phoneNo: "0816 4829 372",
    },
  ];

  return (
    <div className="h-screen overflow-y-hidden">
      {/* Static elements */}
      <div id="static" className="grid grid-flow-row grid-cols-3">
        <motion.div
          id="cover-container"
          className="relative col-span-2 col-end-2 h-screen overflow-visible bg-neutral-900"
          animate={{ x: -200, opacity: 1 }}
          initial={{ x: -800, opacity: 0 }}
          transition={{ type: "spring", stiffness: 25 }}
        >
          <div
            id="text-container"
            className={`relative z-30 col-start-1 ml-60 h-screen pr-3 text-neutral-300 md:pr-5 md:pt-36`}
          >
            <h1 className={`text-8xl ${lato_bold.className} mb-5`}>
              SEA Salon
            </h1>
            <h2 className={`text-6xl ${lato_reg.className}`}>
              Beauty and Elegance Redefined
            </h2>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          id="carousel-container"
          className="col-span-1 col-start-3 flex flex-row"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 800, opacity: 0 }}
          transition={{ type: "spring", stiffness: 25 }}
        >
          <h1
            className={`${lato_reg.className} w-10 text-wrap pt-10 text-center text-5xl text-white md:pt-48`}
          >
            O u r &nbsp;&nbsp; S e r v i c e s
          </h1>
          <ul
            id="carousel"
            className="pyf-10 flex h-full snap-y snap-proximity flex-col flex-nowrap overflow-y-scroll md:mt-10 md:px-10 md:py-16"
          >
            {services.map((service, index) => (
              <li
                // Flex shrink 0 is needed here to prevent the flex items from shrinking based on the container size
                className="z-20 flex h-4/5 flex-shrink-0 snap-center flex-col items-center justify-center"
                key={index}
              >
                <Card
                  width="80%"
                  height="90%"
                  title={service.title}
                  src={service.src}
                  content={service.content}
                  // booking_url={service.booking_url}
                />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Contacts panel */}
      <motion.div
        id="contact"
        className={`${lato_reg.className} h-[30vh] w-[35vw] rounded-tr-3xl bg-neutral-200 p-3 md:p-5`}
        animate={{ y: -80, opacity: 1 }}
        transition={{ type: "spring", stiffness: 25 }}
        whileHover={{ y: -150 }}
      >
        <h1 className={`${lato_bold.className} text-4xl`}>Contact Us</h1>
        <ul className={`${lato_reg.className} mt-5 flex flex-row flex-nowrap`}>
          {contacts.map((contact, index) => (
            <li
              className="pr-5 text-2xl text-neutral-700"
              style={
                index !== 0
                  ? { borderLeft: "2px solid black", paddingLeft: "1.25rem" }
                  : {}
              }
              key={index}
            >
              {contact.phoneNo} ({contact.name})
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
