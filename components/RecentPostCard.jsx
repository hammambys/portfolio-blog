import React from "react";
import { grpahCMSImageLoader } from "../util";

export const RecentPostCard = ({ post }) => (
  <div className="w-[400px] md:w-auto m-5  border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan hover:border-brown hover:text-brown transition duration-500 dark:hover:text-brown dark:hover:border-brown">
    <a href={`/post/${post.slug}`}>
      <div className="md:h-2/3 h-1/4">
        <img
          loader={grpahCMSImageLoader}
          alt={post.title}
          className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition duration-500"
          src={post.featuredImage.url}
        />
      </div>
      <div className="px-6 py-4 h-1/3">
        <div className="font-bold text-xl  mb-2">{post.title}</div>
      </div>
    </a>
  </div>
);
