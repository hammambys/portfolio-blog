import React,{useState} from "react";
import Link from "next/link";

function Header ({sendDataToParent})  {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode =()=> {
    const newMode = !darkMode;

    setDarkMode(newMode)
    sendDataToParent(newMode); // Call the function and pass data
    
  }
  return <div className="container mx-auto p-5 mb-8 scroll-smooth  transition-colors">
    <div className="border-b w-full inline-block border-carafe dark:border-sand_dollar pb-8 flex justify-between">
      <div className="hidden lg:block">
      <button
          type="button"
          className=" top-0 absolute"
          onClick={handleDarkMode}
        >
          {darkMode && (
            <div className="pt-4">
              <svg
                enableBackground="new 0 0 512 512"
                height="50px"
                viewBox="0 0 512 512"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
                className=" text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown cursor-pointer"
                fill="currentColor"
              >
                <path d="M349.852,343.15c-49.875,49.916-131.083,49.916-181,0c-49.916-49.918-49.916-131.125,0-181.021  c13.209-13.187,29.312-23.25,47.832-29.812c5.834-2.042,12.293-0.562,16.625,3.792c4.376,4.375,5.855,10.833,3.793,16.625  c-12.542,35.375-4,73.666,22.25,99.917c26.209,26.228,64.5,34.75,99.916,22.25c5.792-2.062,12.271-0.582,16.625,3.793  c4.376,4.332,5.834,10.812,3.771,16.625C373.143,313.838,363.06,329.941,349.852,343.15z M191.477,184.754  c-37.438,37.438-37.438,98.354,0,135.771c40,40.021,108.125,36.416,143-8.168c-35.959,2.25-71.375-10.729-97.75-37.084  c-26.375-26.354-39.333-61.771-37.084-97.729C196.769,179.796,194.039,182.192,191.477,184.754z" />
              </svg>
            </div>
          )}
          {!darkMode && (
            <div className="pt-4">
              <svg
                enableBackground="new 0 0 512 512"
                height="48px"
                viewBox="0 0 512 512"
                width="48px"
                xmlns="http://www.w3.org/2000/svg"
                className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown cursor-pointer"
                fill="currentColor"
              >
                <path d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z" />
              </svg>
            </div>
          )}
        </button>
      </div>
      <div className="flex flex-col  sm:flex-row  items-center justify-center">
        <Link href="/">
          <span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle    cursor-pointer font-bold">
            Home
          </span>
        </Link>
        <Link href="/#about">
          <span className=" text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-0 sm:ml-16 cursor-pointer font-bold">
            About
          </span>
        </Link>
        <Link href="/#work">
          <span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-0 sm:ml-16   cursor-pointer font-bold">
            Work
          </span>
        </Link>
        <Link href="/#contact">
          <span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-0 sm:ml-16   cursor-pointer font-bold">
            Contact
          </span>
        </Link>
        <Link href="/blog">
          <span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-0 sm:ml-16   cursor-pointer font-bold">
            Blog
          </span>
        </Link>
      </div>

      <div className="text-center flex items-center justify-center ">
        <ul className="flex  hidden sm:block">
          <li className="mr-7">
            <a
              href="https://www.linkedin.com/in/hammem-ben-younes-547869177/"
              className="w-32 text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown cursor-pointer"
              target="_blank"
            >
              <svg
                height="40"
                viewBox="0 0 512 512"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-386.892,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Zm-288.985,423.278l0,-225.717l-75.04,0l0,225.717l75.04,0Zm270.539,0l0,-129.439c0,-69.333 -37.018,-101.586 -86.381,-101.586c-39.804,0 -57.634,21.891 -67.617,37.266l0,-31.958l-75.021,0c0.995,21.181 0,225.717 0,225.717l75.02,0l0,-126.056c0,-6.748 0.486,-13.492 2.474,-18.315c5.414,-13.475 17.767,-27.434 38.494,-27.434c27.135,0 38.007,20.707 38.007,51.037l0,120.768l75.024,0Zm-307.552,-334.556c-25.674,0 -42.448,16.879 -42.448,39.002c0,21.658 16.264,39.002 41.455,39.002l0.484,0c26.165,0 42.452,-17.344 42.452,-39.002c-0.485,-22.092 -16.241,-38.954 -41.943,-39.002Z" />
              </svg>
            </a>
          </li>
          <li className="mr-7">
            <a
              href="https://github.com/hammambys"
              className="w-32  text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown cursor-pointer"
              target="_blank"
            >
              <svg
                className="bi bi-github"
                fill="currentColor"
                height="40"
                viewBox="0 0 16 16"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </li>
          <li className="mr-7">
            <a
              href="https://www.facebook.com/hammam.bn.younes/"
              className="w-32  text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown cursor-pointer"
              target="_blank"
            >
              <svg
                height="40"
                viewBox="0 0 512 512"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M449.446,0c34.525,0 62.554,28.03 62.554,62.554l0,386.892c0,34.524 -28.03,62.554 -62.554,62.554l-106.468,0l0,-192.915l66.6,0l12.672,-82.621l-79.272,0l0,-53.617c0,-22.603 11.073,-44.636 46.58,-44.636l36.042,0l0,-70.34c0,0 -32.71,-5.582 -63.982,-5.582c-65.288,0 -107.96,39.569 -107.96,111.204l0,62.971l-72.573,0l0,82.621l72.573,0l0,192.915l-191.104,0c-34.524,0 -62.554,-28.03 -62.554,-62.554l0,-386.892c0,-34.524 28.029,-62.554 62.554,-62.554l386.892,0Z" />
              </svg>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
};
export default Header;