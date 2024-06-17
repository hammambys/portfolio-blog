import React from "react";
import Image from "next/image";
import { about } from "../data.js";

export default function About() {
  return (
    <div className="container mx-auto px-10 mb-8 " id="about">
      <p className="mb-10 text-center text-3xl ">About Me</p>

      <div className="p-10">
        <div className="flex justify-between">
          <div className="mr-5 p-1 border">
            <Image
              src={about.img}
              width={500}
              height={600}
              className="opacity-75 grayscale "
            />
          </div>
          <div className="m-5">
            <p className="mb-10 ">{about.text}</p>
            <a
              href="/contact"
              className="p-4 bg-carafe text-sand_dollar hover:bg-brown transition duration-500 rounded dark:border  "
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
