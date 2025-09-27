import { useEffect, useState } from "react";
import { experience } from "../data";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experience);
  }, []);

  return (
    <div className="">
    <h1 className="py-16 text-3xl text-center font-bold">Experience</h1>
      <div className="">

      {experiences.map((experience, index) => (
        <div key={index} className=" flex justify-around md:w-1/2 mb-10 hover:bg-[#d6c0b0] dark:hover:bg-[#6e513b] p-3 transition duration-500 rounded ">
          <div className="w-1/3 font-bold">
            
            <p className="text-sm">{experience.date}</p>
          </div>
          <div className="w-2/3">

          <h3 className="mb-3 ">
            <a href={experience.link} target="_blank" className="hover:underline font-bold">{experience.title} ·{" "}
            <span className="">{experience.company}</span></a>
          </h3>
          <p className="font-normal">{experience.description}</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className=" px-3 py-1 rounded-md text-xs "
              >
                {tech}
              </span>
            ))}
          </div>
          </div>
        </div>
      ))}
      <div className="mt-6 flex items-center gap-4 justify-center md:justify-start">
        <img src="./images/pdf_icon.png" alt="pdf_icon" className="w-10"/>
        <a href="resume.pdf" className=" hover:underline" target="_blank">
          View Full Résumé
        </a>
      </div>
            </div>
    </div>
  );
}
