import { useEffect, useState } from "react";
import { experience } from "../data";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experience);
  }, []);

  return (
    <div>
    <h1 className="py-16 text-3xl text-center">Experience</h1>

      {experiences.map((experience, index) => (
        <div key={index} className="space-y-2">
          <p className="text-sm text-gray-400">{experience.date}</p>
          <h3 className="text-xl font-semibold">
            {experience.title} ·{" "}
            <span className="text-indigo-400">{experience.company}</span>
          </h3>
          <p className="text-gray-300">{experience.description}</p>
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
                className=" px-3 py-1 rounded-md text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-6">
        <a href="resume.pdf" className=" hover:underline" target="_blank">
          View Full Résumé
        </a>
      </div>
    </div>
  );
}
