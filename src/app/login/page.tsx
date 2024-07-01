"use client";

import { Lato } from "next/font/google";
import { useState } from "react";

import { createSHA256Hash, createUser } from "./data";

const lato_bold = Lato({ subsets: ["latin"], weight: "700" });
const lato_reg = Lato({ subsets: ["latin"], weight: "400" });

export const LoginPage = () => {
  // TODO: Hash password on client to pass to server
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (name === "" || email === "" || phoneNo === "" || password === "") {
      alert("Please fill out all fields before submitting.");
      return;
    }

    const hashedPW = await createSHA256Hash(password);

    const response = await createUser(name, email, phoneNo, hashedPW);
    console.log(response);

    // Reset form fields
    setName("");
    setEmail("");
    setPhoneNo("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <form
        className={`${lato_reg.className} flex h-fit w-fit flex-col items-center space-y-5 bg-white p-10 text-lg shadow-md`}
        onSubmit={handleSubmit}
      >
        <h1 className={`${lato_bold.className} text-3xl`}>Log in</h1>
        <div id="name-input" className="flex flex-col">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="w-full rounded-md border-2 border-gray-300 px-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div id="email-input" className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="w-full rounded-md border-2 border-gray-300 px-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div id="phone-num-input" className="flex flex-col">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="tel"
            id="phoneNo"
            pattern="[0-9]{7,15}"
            className="w-full rounded-md border-2 border-gray-300 px-1"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div id="password-input" className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border-2 border-gray-300 px-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col self-end">
          <button
            type="submit"
            className="mt-5 rounded-md bg-neutral-300 px-3 py-2 hover:bg-neutral-400"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
