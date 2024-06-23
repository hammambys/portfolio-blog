import Link from "next/link";
import About from "../sections/About";
import Contact from "../sections/Contact";
import RecentPosts from "../sections/RecentPosts";
import Work from "../sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-10 mb-10 text-carafe dark:text-sand_dollar ">
      <section className="flex justify-between align-items-center">
        <div className="mb-32 p-8">
          <div className="text-7xl pb-5">Hi ! I&lsquo;m Hammem 👋</div>
          <div className="text-xl py-5">
            Software Engineer, also building amazing websites and apps for my
            clients ✨
          </div>
          <div className="flex">
            Based in Tunis, Tunisia{" "}
            {/*<img
              src="tunisia-flag.png"
              alt="Tunisia flag"
              width={40}
              height={40}
              className="ml-5"
  />*/}
          </div>
          {/*<div className="flex inset-2/4 m-5">
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
</div>*/}
        </div>
        <div className="">
          <div>
            <Image src="/avatar.png" width={200} height={200} />
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Work />
      </section>
      <section className="mb-32">
        <RecentPosts />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
