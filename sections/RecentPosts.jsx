import React, { useEffect, useState } from 'react'
import { PostCard } from '../components';
import { RecentPostCard } from '../components/RecentPostCard';
import { getRecentPosts } from '../services';

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
    <div>
        <div className='flex '>
        {dataLoaded && previousPosts.map((post, index) => (
          <RecentPostCard key={index} post={post} />
        ))}        
        </div>
    </div>
  )
}
