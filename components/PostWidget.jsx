import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Link from 'next/link';

import { grpahCMSImageLoader } from '../util';
import { getSimilarPosts, getRecentPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white dark:bg-[#251b14] border border-tan/10 dark:border-sand_dollar/5 shadow-lg rounded-3xl p-8 mb-8">
      <h3 className="text-xl font-bold mb-8 relative pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-brown rounded-full"></span>
      </h3>
      <div className="space-y-6">
        {relatedPosts.map((post, index) => (
          <div key={index} className="group flex items-center w-full gap-4">
            <div className="flex-none relative w-16 h-16 rounded-xl overflow-hidden border border-tan/10">
              <Image
                loader={grpahCMSImageLoader}
                alt={post.title}
                layout="fill"
                objectFit="cover"
                unoptimized
                className="transition-transform duration-500 group-hover:scale-110"
                src={post.featuredImage.url}
              />
            </div>
            <div className="flex-grow">
              <p className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>
              <Link href={`/post/${post.slug}`} className="font-bold text-carafe/90 dark:text-sand_dollar/90 group-hover:text-brown transition-colors line-clamp-2 leading-tight">
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostWidget;
