import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import RecentPosts from "../sections/RecentPosts";
import Work from "../sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto p-10 text-carafe dark:text-sand_dollar ">
      <section className="flex justify-center align-items-center h-screen">
        <div className="mb-32 p-8">
          <div className="text-7xl pb-5">Hi ! I&lsquo;m Hammem 👋</div>
          <div className="text-xl py-5">
            Software Engineer, also building amazing websites and apps for my
            clients ✨
          </div>
          <div className="flex">Based in Tunis, Tunisia </div>
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
        <Experience />
      </section>
      <section>
        <Work />
      </section>
      <section className="h-screen">
        <RecentPosts />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}
