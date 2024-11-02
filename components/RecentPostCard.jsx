import Image from 'next/image';
import React from 'react';
import { grpahCMSImageLoader } from '../util';

export const RecentPostCard = ({ post }) => (
  <div className=" m-5 rounded overflow-hidden shadow-lg border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan">
    <a href={`/post/${post.slug}`}>
      <div className='h-2/3'>

      <img
        loader={grpahCMSImageLoader}
        
        alt={post.title}
        className="object-cover w-full h-full filter grayscale"
        src={post.featuredImage.url}
      />
      </div>
      <div className="px-6 py-4 h-1/3">
        <div className="font-bold text-xl  mb-2">{post.title}</div>
        
      </div>

    </a>
  </div>
);
