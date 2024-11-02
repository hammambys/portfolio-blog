import React from "react";
import Image from "next/image";
import Link from "next/link";

export const PortfolioItem = ({ item, id }) => (
  <div className=" m-5 border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan ">
    <Link href={`/work/${item.slug}`}>
    <div className="h-2/3">

      <img
        src={item.img ?   item.img : "/images/placeholder.jpg"}
        alt={item.title}
        className=" w-full h-full object-cover filter grayscale"
      />
    </div>

      <div className="px-6 py-4 h-1/3">
        <div className="font-bold text-xl  mb-2">{item.title}</div>
      </div>
    </Link>
  </div>
);
