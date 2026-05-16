import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, [slug]);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white dark:bg-[#251b14] border border-tan/10 dark:border-sand_dollar/5 shadow-xl rounded-3xl p-8 lg:p-12 mb-8">
          <h3 className="text-2xl font-bold mb-8 relative pb-4 text-carafe dark:text-sand_dollar">
            {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
            <span className="absolute bottom-0 left-0 w-12 h-1 bg-brown rounded-full"></span>
          </h3>
          <div className="space-y-8">
            {comments.map((comment, index) => (
              <div key={index} className="group relative pl-6 border-l-2 border-tan/20 hover:border-brown transition-colors">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg text-carafe dark:text-sand_dollar">{comment.name}</span>
                    <span className="text-sm font-bold uppercase tracking-wider opacity-40">·</span>
                    <span className="text-xs font-bold uppercase tracking-wider opacity-60">
                      {moment(comment.createdAt).format('MMM DD, YYYY')}
                    </span>
                  </div>
                  <div className="text-lg leading-relaxed text-carafe/80 dark:text-sand_dollar/80 whitespace-pre-line">
                    {parse(comment.comment)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
