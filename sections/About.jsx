import React from "react";
import Image from "next/image";
import { about } from "../data.js";

export default function About() {
  return (
    <div id="about" className="max-w-6xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
          About Me
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brown rounded-full"></span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20 px-4">
        <div className="w-full md:w-2/5 lg:w-1/3">
          <div className="relative group">
            <div className="absolute -inset-4 bg-tan/20 rounded-2xl -rotate-6 transition-transform group-hover:rotate-0 duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5]">
              <img
                src={about.img}
                alt="Hammem"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-3/5 lg:w-2/3 space-y-6">
          <p 
            style={{ whiteSpace: "pre-line" }} 
            className="text-lg md:text-xl font-normal leading-relaxed text-carafe/90 dark:text-sand_dollar/90"
          >
            {about.text}
          </p>
          
          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-carafe text-sand_dollar hover:bg-brown transition-all duration-300 rounded-lg font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Let's Talk
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
