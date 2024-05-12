import Link from "next/link";
import About from "../sections/About";
import Contact from "../sections/Contact";
import RecentPosts from "../sections/RecentPosts";
import Work from "../sections/Work";

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-10 text-carafe dark:text-sand_dollar ">
      <section className="flex justify-between">
        <div className="mb-32 h-64 pl-5">
          <div className="text-7xl py-5">Hi ! I&lsquo;m Hammem 👋</div>
          <div className="text-xl py-5">
            Software Engineer, also building amazing websited for my clients ✨
          </div>
          <div className="flex">
            Based in Tunis, Tunisia{" "}
            <img
              src="tunisia-flag.png"
              alt="Tunisia flag"
              width={40}
              height={40}
              className="ml-5"
            />
          </div>
          <div className="flex inset-2/4 m-5">
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
        <div>avatar</div>
      </section>

      <section>
        <About />
      </section>
      <section>
        <Work />
      </section>
      <section className="mb-32">
        <div className="mb-8 text-center text-2xl ">Recent Posts</div>
        <RecentPosts />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
