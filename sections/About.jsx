import React from "react";
import Image from "next/image";
import { about } from "../data.js";

export default function About() {
  return (
    <div className="md:h-screen" id="about">
      <p className="py-10 text-center text-3xl font-bold ">About Me</p>

      <div className="p-10">
        <div className="md:flex justify-center">
          <div className="md:w-1/4 mr-5 p-1 border">
            <img
              src={about.img}
              
              className="opacity-75 grayscale hover:opacity-100 hover:grayscale-0 transition duration-500 object-cover"
            />
          </div>
          <div className="md:w-1/2 m-5">
            <p style={{ whiteSpace: "pre-line" }} className="mb-10 font-normal text-lg">{about.text}</p>
            <a
              href="#contact"
              className="p-4 bg-carafe text-sand_dollar hover:bg-brown transition duration-500 rounded dark:border flex justify-center "
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
