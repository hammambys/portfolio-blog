import { useEffect, useState } from "react";
import { experience } from "../data";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experience);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
          Experience
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brown rounded-full"></span>
        </h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative pl-8 md:pl-0"
          >
            {/* Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-tan/30 md:hidden"></div>
            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-brown md:hidden"></div>

            <div className="md:grid md:grid-cols-4 md:gap-8">
              <div className="md:col-span-1 mb-2 md:mb-0">
                <span className="text-sm font-semibold text-brown-200 uppercase tracking-wider">
                  {exp.date}
                </span>
              </div>
              
              <div className="md:col-span-3">
                <div className="flex flex-col space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-brown transition-colors">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-2"
                    >
                      {exp.title}
                      <span className="text-carafe/40 dark:text-sand_dollar/40 font-medium">·</span>
                      <span className="text-carafe/70 dark:text-sand_dollar/70">{exp.company}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </h3>
                  
                  <p className="text-lg font-normal leading-relaxed text-carafe/80 dark:text-sand_dollar/80">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-tan/10 dark:bg-sand_dollar/5 border border-tan/20 dark:border-sand_dollar/10 rounded-full text-xs font-medium text-brown transition-colors hover:bg-tan/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 pt-10 border-t border-tan/20 flex flex-col items-center">
        <a 
          href="resume.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-brown text-brown hover:bg-brown hover:text-sand_dollar transition-all duration-300 rounded-full font-bold"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View Full Résumé
        </a>
      </div>
    </div>
  );
}
