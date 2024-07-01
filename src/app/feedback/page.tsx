"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Lato } from "next/font/google";
import { createReview } from "@/api_routes";

const lato_bold = Lato({ subsets: ["latin"], weight: "700" });
const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

const FeedbackPage = () => {
  // const [reviews, setReviews] = useState<Review[]>([]);

  const [name, setName] = useState("");
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "" || stars === 0 || review === "") {
      setModalText("Please fill out all fields before submitting.");
    } else {
      setModalText("Thanks for leaving us a review!");

      createReview(name, stars, review);

      // Reset form fields
      setName("");
      setStars(0);
      setReview("");
    }

    setIsOpen(true);
    console.log(isOpen);
  };

  // Modal settings
  const variants = {
    visible: { opacity: 1, y: "-100%" },
    hidden: { opacity: 0, y: "100%" },
  };
  const [isOpen, setIsOpen] = useState(false);

  const [modalText, setModalText] = useState("Thanks for leaving us a review!");

  return (
    <div id="global-container" className="h-screen w-screen overflow-hidden">
      <motion.div
        id="form-container"
        className="flex h-full w-full flex-col items-center justify-center"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <form
          onSubmit={handleSubmit}
          className={`${lato_bold.className} flex w-[20vw] flex-col justify-center space-y-5 rounded-md bg-white p-5 text-xl shadow-md`}
        >
          <h1 className="self-center text-3xl">Feedback Form</h1>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`${lato_reg.className} w-full rounded-md border-2 border-gray-300 p-1`}
            />
          </div>
          <div>
            <label htmlFor="stars">How would you rate our service?</label>
            <div id="stars" className="flex flex-row">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar
                  key={star}
                  size={48}
                  color={star <= stars ? "gold" : "gray"}
                  onClick={() => setStars(star)}
                  // allow user to unclick a star by right-clicking
                  onContextMenu={(e) => {
                    e.preventDefault();
                    setStars(star - 1);
                  }}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
            <input name="stars" type="radio" hidden={true} />
          </div>
          <div>
            <label htmlFor="review">Leave your thoughts here: </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className={`${lato_reg.className} w-full rounded-md border-2 border-gray-300 p-1`}
            />
          </div>
          <button
            type="submit"
            className={`${lato_reg.className} w-fit self-end rounded-md bg-neutral-300 px-3 py-2 hover:bg-neutral-400`}
          >
            Submit
          </button>
        </form>
      </motion.div>
      <motion.div
        id="alert-modal"
        className={`${lato_reg.className} flex h-[10vh] w-[50vw] flex-row items-center justify-between rounded-t-3xl bg-neutral-300 p-3 text-xl md:p-5`}
        animate={isOpen ? variants.visible : variants.hidden}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <p>{modalText}</p>
        <button
          className="aspect-square h-full rounded-full duration-300 hover:bg-neutral-400"
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
      </motion.div>
    </div>
  );
};

export default FeedbackPage;
