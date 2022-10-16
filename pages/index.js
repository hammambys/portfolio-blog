import Link from "next/link";
import { useState } from "react";
import About from "../sections/About";
import Contact from "../sections/Contact";
import RecentPosts from "../sections/RecentPosts";
import Work from "../sections/Work";

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-10 text-carafe dark:text-sand_dollar ">
      <div className="grid place-items-center mb-32 h-64 ">
        <div className="text-7xl   p-5">Hi ! I'm Hammem</div>
        <div className="text-xl   p-5">
          Software Developer based in Tunis, Tunisia.
        </div>
        <div className="flex  inset-2/4	 m-5">
          <Link href="/work">
            <span className="m-3 p-4 bg-carafe text-sand_dollar hover:bg-brown  rounded cursor-pointer transition duration-500 dark:border">
              My projects{" "}
            </span>
          </Link>
          <Link href="/about">
            <span className="m-3 p-4 bg-carafe text-sand_dollar hover:bg-brown  rounded cursor-pointer transition duration-500 dark:border">
              About me{" "}
            </span>
          </Link>
        </div>
      </div>
      <section>
        <About />
      </section>
      <section>
        <Work />
      </section>
      <section className="mb-32">
        <div className="mb-8 text-center text-2xl text-carafe">
          Recent Posts
        </div>
        <RecentPosts />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
