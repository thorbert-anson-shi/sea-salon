"use client";

import { useState } from "react";
import { getAvailableSessions, makeReservation } from "@/api_routes";
import { Service } from "@prisma/client";
import { motion } from "framer-motion";

import { Lato } from "next/font/google";

const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

export default function BookingPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name === "" || phoneNo === "" || !date || !session) {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const response = makeReservation(
      name!,
      phoneNo!,
      service!,
      date!,
      session!,
    );

    console.log(response);

    setName("");
    setPhoneNo("");
    setService(Service.HS);
    setAvailableSessions([]);
  };

  const [availableSessions, setAvailableSessions] = useState<number[]>();

  const [name, setName] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [service, setService] = useState<Service>(Service.HS);
  const [date, setDate] = useState<Date>();
  const [session, setSession] = useState<number>();

  const handleAvailabilityChange = async (date: Date, service: Service) => {
    let availableSessions = await getAvailableSessions(date, service);
    setAvailableSessions(() => availableSessions);
    setSession(availableSessions[0]);
  };

  return (
    <motion.div
      className={`${lato_reg.className} flex h-screen w-screen flex-col items-center justify-center`}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-5 rounded-3xl bg-white p-10 md:text-lg"
        onLoad={() => {
          const currentTime = new Date();

          currentTime.setHours(0);
          currentTime.setMinutes(0);
          currentTime.setSeconds(0);
          currentTime.setMilliseconds(0);

          setDate(currentTime);
          handleAvailabilityChange(currentTime, service);
        }}
      >
        <h1 className="text-3xl">Book an Appointment</h1>

        <div className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            className="rounded-md border-2 border-gray-300 p-1"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Phone Number:</label>
          <input
            type="tel"
            id="phoneNo"
            name="phoneNo"
            value={phoneNo}
            className="rounded-md border-2 border-gray-300 p-1"
            onChange={(e) => setPhoneNo(e.target.value)}
            pattern="[0-9]{7,15}"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="service">Service:</label>
          <select
            name="service"
            id="service"
            value={service}
            className="rounded-md border-2 border-gray-300 p-1"
            onChange={(e) => {
              const selectedService = e.target.value as Service;
              setService(selectedService);
              handleAvailabilityChange(date!, selectedService);
            }}
          >
            <option value={Service.HS}>Haircuts and Styling</option>
            <option value={Service.MP}>Manicure and Pedicure</option>
            <option value={Service.FT}>Facial Treatments</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="rounded-md border-2 border-gray-300 p-1"
            onChange={(e) => {
              const selectedDate = new Date(e.target.value);
              setDate(selectedDate);
              handleAvailabilityChange(selectedDate, service);
            }}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="time">Time:</label>
          <select
            name="time"
            id="time"
            className="rounded-md border-2 border-gray-300 p-1"
            onChange={(e) => setSession(parseInt(e.target.value))}
          >
            {availableSessions?.map((session) => (
              <option key={session} value={session}>
                {session + 8 + ":00 - " + (session + 9) + ":00"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center">
          <button
            type="submit"
            className="w-4/5 rounded-md border-2 border-gray-300 bg-neutral-200 p-1 hover:bg-neutral-300"
          >
            Submit
          </button>
        </div>
      </form>
    </motion.div>
  );
}
