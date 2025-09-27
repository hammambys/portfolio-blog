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
    <div className="container mx-auto p-10 flex justify-center  text-carafe dark:text-sand_dollar">
      <div className="w-3/4  border-2">
        <div className="p-14 font-normal">
          <div className="text-center">
            <div className="text-2xl font-bold mb-8">{project.title}</div>
            <div>
              <div className="font-normal text-center text-lg my-4">
                {project.summary}
              </div>
            </div>
            <div className="py-8 border-b">
              {project.link && (
                <div className="font-semibold mb-2">
                  <div>Website link 🔗</div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="hover:underline "
                  >
                    {project.link}
                  </a>
                </div>
              )}
              {project.source && (
                <div className="font-semibold mb-2">
                  <div>Github link 🔗</div>
                  <a
                    href={project.source}
                    target="_blank"
                    className="hover:underline "
                  >
                    {project.source}
                  </a>
                </div>
              )}
            </div>
          </div>
          <p className=" text-lg my-8 ">{project.description}</p>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-6">Features</h2>
            <ul className="list-disc list-inside">
              {project.features.map((feature, index) => (
                <li key={index} className="text-lg">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full mb-4"
              />
            ))}
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-6">Tech stack</h2>
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

          <div className="mt-8">
            <Link href="/#work" className="text-white hover:underline">
              <p className="">← Back to projects</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
