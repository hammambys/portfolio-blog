import React from 'react';
import Image from 'next/image';

import { grpahCMSImageLoader } from '../util';

const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-white bg-opacity-50 dark:text-sand_dollar">
    <div className="absolute left-0 right-0 -top-14">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={author.name}
        height={100}
        width={100}
        className="align-middle rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className=" mt-4 mb-4 text-xl font-bold">{author.name}</h3>
    <p className=" text-ls">{author.bio}</p>
  </div>
);

export default Author;
