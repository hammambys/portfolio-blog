import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { grpahCMSImageLoader } from "../util";

const PostCard = ({ post }) => (
  <div className="group relative bg-white dark:bg-[#251b14] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-tan/10 dark:border-sand_dollar/5 flex flex-col mb-12 transform hover:-translate-y-1">
    <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={post.title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
        layout="fill"
        src={post.featuredImage.url}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-carafe/80 via-carafe/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
      
      <div className="absolute bottom-0 left-0 p-6 lg:p-10 w-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-sand_dollar/30">
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt={post.author.name}
                layout="fill"
                objectFit="cover"
                src={post.author.photo.url}
              />
            </div>
            <span className="text-sand_dollar text-sm font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-2 text-sand_dollar/80 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </div>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight group-hover:text-sand_dollar transition-colors">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h2>
      </div>
    </div>

    <div className="p-8 lg:p-10 space-y-6">
      <p className="text-lg text-carafe/70 dark:text-sand_dollar/70 font-normal leading-relaxed">
        {post.excerpt}
      </p>
      
      <div className="pt-2">
        <Link href={`/post/${post.slug}`}>
          <span className="inline-flex items-center px-8 py-3 bg-carafe text-sand_dollar hover:bg-brown transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-xs cursor-pointer shadow-md hover:shadow-lg">
            Continue Reading
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  </div>
);

export default PostCard;
