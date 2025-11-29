import React from "react";
import Image from "next/image";
import Link from "next/link";

export const PortfolioItem = ({ item, id }) => (
  <div className=" border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan hover:border-brown hover:text-brown transition duration-500 dark:hover:text-brown dark:hover:border-brown">
    <Link href={`/work/${item.slug}`}>
      <div className="h-2/3">
        <img
          src={item.img ? item.img : "/images/placeholder.jpg"}
          alt={item.title}
          className=" w-full h-full object-cover filter grayscale hover:grayscale-0 transition duration-500"
        />
      </div>

      <div className="px-6 py-4 h-1/3">
        <div className="flex justify-between">
          <div className="font-medium text-lg  mb-2">{item.title}</div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border font-medium h-10 ">
            <span
              className={`h-3 w-3 rounded-full  animate-pulse  
      ${item.status === "Live" ? "bg-green" : "bg-red"}
    `}
            />
            {item.status}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          {item.tools.map((tech, i) => (
            <span key={i} className=" px-3 py-1 rounded-md text-xs ">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  </div>
);
