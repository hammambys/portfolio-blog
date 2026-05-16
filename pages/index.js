import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import RecentPosts from "../sections/RecentPosts";
import Work from "../sections/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-6 md:px-12 text-carafe dark:text-sand_dollar transition-colors duration-500">
      <section className="min-h-[90vh] flex flex-col justify-center items-center py-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-medium text-brown-200 opacity-90 animate-fade-in">
                Hi, I&lsquo;m Hammem 👋
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Software Engineer <br />
                <span className="text-brown">Building Digital Experiences</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl font-normal max-w-2xl text-opacity-80 leading-relaxed">
              Passionate about turning complex ideas into clean, efficient, and beautiful web, mobile, and desktop applications. 
              Based in Tunis, Tunisia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="#work" 
                className="px-8 py-3 bg-carafe text-sand_dollar rounded-full font-medium hover:bg-brown transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-carafe dark:border-sand_dollar rounded-full font-medium hover:bg-carafe hover:text-sand_dollar dark:hover:bg-sand_dollar dark:hover:text-carafe transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brown to-tan rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative overflow-hidden rounded-full border-4 border-sand_dollar dark:border-carafe shadow-2xl w-48 h-48 md:w-72 md:h-72">
              <Image 
                src="/images/avatar.png" 
                alt="Hammem Ben Younes"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 animate-bounce-down">
          <a href="#about" className="p-2 opacity-60 hover:opacity-100 transition-opacity">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </a>
        </div>
      </section>

      <section id="about" className="py-24">
        <About />
      </section>

      <section id="experience" className="py-24 bg-tan/5 dark:bg-carafe/5 rounded-3xl">
        <Experience />
      </section>

      <section id="work" className="py-24">
        <Work />
      </section>

      <section id="blog" className="py-24">
        <RecentPosts />
      </section>

      <section id="contact" className="py-24">
        <Contact />
      </section>
    </div>
  );
}
