import { useRouter } from "next/router";
import { portfolio } from "../../data";
import Link from "next/link";

export default function ProjectDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const project = portfolio.find((proj) => proj.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="container mx-auto p-6 flex justify-center  text-carafe dark:text-sand_dollar">
      <div className="w-3/4  border-2">
        {project.img && (
          <div className="">
            <img
              src= {"/images/" + project.img}
              alt={project.title}
              className="w-full h-64 object-cover opacity-40"
            />
          </div>
        )}
        <div className="p-6 font-normal">
        <div className="   flex items-center justify-center">
              <div className="text-2xl bg-white	 font-bold mb-8">
                {project.title}
              </div>
            </div>
          <p className="text-gray-700 text-lg mb-4 ">{project.description}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index} className="text-gray-700 ">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">Tools</h2>
            <div className="flex flex-wrap">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 rounded-full px-4 py-2 mr-2 mb-2"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            {project.source && (
              <a
                href={project.source}
                className="bg-black hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.source}
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link}
              </a>
            )}
          </div>

          <div className="mt-8">
            <Link href="/#work"  className="text-white">
               <p>← Back to projects</p> 
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
