import React, { useEffect, useState } from "react";
import { RecentPostCard } from "../components/RecentPostCard";
import { getRecentPosts } from "../services";

export default function RecentPosts() {
  const [previousPosts, setPreviousPosts] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getRecentPosts().then((result) => {
      setPreviousPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4" id="blog">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
          From My Blog
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brown rounded-full"></span>
        </h2>
        <p className="text-carafe/60 dark:text-sand_dollar/60 text-center max-w-2xl">
          Thoughts on software engineering, web development, and the latest in tech.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dataLoaded &&
          previousPosts.map((post, index) => (
            <RecentPostCard key={index} post={post} />
          ))}
      </div>
      
      <div className="flex justify-center mt-16">
        <a 
          href="/blog" 
          className="group flex items-center gap-2 px-8 py-3 border-2 border-carafe dark:border-sand_dollar text-carafe dark:text-sand_dollar hover:bg-carafe hover:text-sand_dollar dark:hover:bg-sand_dollar dark:hover:text-carafe transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-xs"
        >
          View All Posts
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}
