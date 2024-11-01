import { useEffect, useState } from "react";
import { experience } from "../data";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experience);
  }, []);

  return (
    <div className="">
    <h1 className="py-16 text-3xl text-center">Experience</h1>
      <div className="">

      {experiences.map((experience, index) => (
        <div key={index} className=" flex justify-around w-1/2">
          <div className="w-1/2">

            <p className="text-sm text-gray-400">{experience.date}</p>
          </div>
          <div>

          <h3 className="">
            {experience.title} ·{" "}
            <span className="">{experience.company}</span>
          </h3>
          <p className="font-normal">{experience.description}</p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            {experience.platform && (
              <span className="text-white px-3 py-1 rounded-md text-xs">
                {experience.platform}
              </span>
            )}
            {experience.project && (
              <span className=" text-white px-3 py-1 rounded-md text-xs">
                {experience.project}
              </span>
            )}
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
      <div className="mt-6">
        <a href="resume.pdf" className=" hover:underline" target="_blank">
          View Full Résumé
        </a>
      </div>
            </div>
    </div>
  );
}
