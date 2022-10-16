import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-10 mb-8 " id="about">
      <p className="mb-10 text-center text-2xl ">About Me</p>
      <div className="p-10">
        <div className="flex">
          <div className="about_img"></div>
          <div className="">
            <p className="mb-10 ">
              I am an established Software Developer currently studying Computer
              Science. <br></br> Always motivated to learn new skills and my
              main goal is to build software that satisfy my clients needs
            </p>
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
