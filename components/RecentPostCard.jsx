import Image from 'next/image';
import React from 'react';
import { grpahCMSImageLoader } from '../util';

export const RecentPostCard = ({ post }) => (
  <div className="w-[370px] m-5 rounded overflow-hidden shadow-lg border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan">
    <a href={`/post/${post.slug}`}>

      <Image
        loader={grpahCMSImageLoader}
        height={200}
        width={370}
        alt={post.title}
        className=""
        src={post.featuredImage.url}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl  mb-2">{post.title}</div>
        <p className=" text-base ">
          {post.excerpt}
        </p>
      </div>

    </a>
  </div>
);
