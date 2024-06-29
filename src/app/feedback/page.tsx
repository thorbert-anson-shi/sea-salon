"use client";

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion, useAnimate } from "framer-motion";
import { BottomModal } from "../../components/bottom-modal";

const FeedbackPage = () => {
  const [name, setName] = useState("");
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Stars:", stars);
    console.log("Review:", review);
    // Reset form fields
    setName("");
    setStars(0);
    setReview("");
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: "100%" },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="global-container" className="h-screen w-screen">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="flex w-fit flex-col justify-center space-y-2 rounded-md bg-white p-5 shadow-md"
        >
          <h1 className="self-center">Feedback Form</h1>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border-2 border-gray-300 p-1"
            />
          </div>
          <div>
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
            <input type="radio" hidden={true} />
          </div>
          <div>
            <label htmlFor="review">Review: </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full rounded-md border-2 border-gray-300 p-1"
            />
          </div>
          <button
            type="submit"
            className="w-fit self-end rounded-md bg-neutral-300 px-3 py-2 hover:bg-neutral-400"
          >
            Submit
          </button>
        </form>
      </div>
      <motion.div
        id="alert-modal"
        className="flex h-[10vh] w-[50vw] flex-row items-center justify-between rounded-t-3xl bg-neutral-300 p-5 text-xl md:p-10"
        animate={isOpen ? variants.visible : variants.hidden}
      >
        <p>Thanks for leaving us a review!</p>
        <button
          className="p-3 duration-300 hover:bg-neutral-400"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>
      </motion.div>
    </div>
  );
};

export default FeedbackPage;
