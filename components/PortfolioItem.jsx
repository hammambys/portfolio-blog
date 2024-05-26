import React from "react";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

export const PortfolioItem = ({ item, id }) => (
  <div className="w-[370px] m-5 rounded overflow-hidden shadow-lg border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan">
    <a href={`/work/${item.slug}`}>
      <Image
        src={item.img ? item.img : "/placeholder.jpg"}
        height={200}
        width={370}
        alt={item.title}
        className=""
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl  mb-2">{item.title}</div>
        <p className=" text-base ">{item.summary}</p>
      </div>
    </a>
  </div>
);
