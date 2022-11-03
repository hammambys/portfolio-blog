import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { grpahCMSImageLoader } from '../util'

export const RecentPostCard = ({post}) => {
  return (
    <div class="w-[370px] m-5 rounded overflow-hidden shadow-lg border-2 border-carafe text-carafe dark:text-sand_dollar dark:border-tan">
<a href={`/post/${post.slug}`}>

      <Image
        loader={grpahCMSImageLoader}
        height={200}
        width={370}
        alt={post.title}
        className=""
        src={post.featuredImage.url}
      />  
  <div class="px-6 py-4">
    <div class="font-bold text-xl  mb-2">{post.title}</div>
    <p class=" text-base ">
      {post.excerpt}
    </p>
  </div>
  
        </a>
</div>
  )
}
