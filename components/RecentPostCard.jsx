import React from "react";
import { grpahCMSImageLoader } from "../util";

export const RecentPostCard = ({ post }) => (
  <div className="w-[400px] md:w-auto border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan hover:border-brown hover:text-brown transition duration-500 dark:hover:text-brown dark:hover:border-brown">
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
        <div className="font-medium text-lg  mb-2">{post.title}</div>
        <div className="flex items-center text-sm dark:text-tan">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="ml-2">
            {post.readTime ? `${post.readTime} min read` : ""}
            </div>
        </div>
      </div>
    </a>
  </div>
);
