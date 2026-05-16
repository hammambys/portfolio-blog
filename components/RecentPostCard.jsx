import React from "react";
import { grpahCMSImageLoader } from "../util";

export const RecentPostCard = ({ post }) => (
  <div className="group relative bg-white dark:bg-[#251b14] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-tan/10 dark:border-sand_dollar/5 flex flex-col h-full transform hover:-translate-y-2">
    <a href={`/post/${post.slug}`}>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          loader={grpahCMSImageLoader}
          alt={post.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
          src={post.featuredImage.url}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carafe/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-sand_dollar font-bold flex items-center gap-2">
            Read Post
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-4">
        <h3 className="font-bold text-xl leading-tight group-hover:text-brown transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <div className="flex items-center text-sm text-carafe/60 dark:text-sand_dollar/60 mt-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{post.readTime ? `${post.readTime} min read` : "Quick read"}</span>
        </div>
      </div>
    </a>
  </div>
);
