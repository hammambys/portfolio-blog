import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import RecentPosts from "../sections/RecentPosts";
import Work from "../sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-10 text-carafe dark:text-sand_dollar ">
      <section className=" h-screen">
        <div className="flex justify-center align-items-center">
          <div className="mb-32 p-8">
            <div className="text-5xl pb-5 ">Hi ! I&lsquo;m Hammem 👋</div>
            <div className="text-xl py-5 font-normal">
              Software Engineer, also building amazing websites and apps for my
              clients ✨
            </div>
            <div className="font-normal">Based in Tunis, Tunisia </div>
          </div>
          <div>
            <div>
              <Image src="/images/avatar.png" width={200} height={200} />
            </div>
          </div>
        </div>

          <div className="flex justify-center">
            <a href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-8 h-8 animate-bounce-down"
              >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
                />
            </svg>
                </a>
          </div>

      </section>
      <section>
        <About />
      </section>
      <section className="flex justify-center">
        <Experience />
      </section>
      <section>
        <Work />
      </section>
      <section>
        <RecentPosts />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
