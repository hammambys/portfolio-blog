import React from "react";
import moment from "moment";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-two":
        return (
          <h2 key={index} className="text-2xl lg:text-3xl font-bold mb-6 mt-8 text-carafe dark:text-sand_dollar">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-xl lg:text-2xl font-bold mb-4 mt-6 text-carafe dark:text-sand_dollar">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-6 font-normal text-lg leading-relaxed text-carafe/80 dark:text-sand_dollar/80">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-lg lg:text-xl font-bold mb-4 mt-6 text-carafe dark:text-sand_dollar">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <div className="my-10 overflow-hidden rounded-2xl shadow-xl" key={index}>
            <img
              key={index}
              alt={obj.title}
              height={obj.height}
              width={obj.width}
              src={obj.src}
              className="w-full object-cover"
            />
            {obj.altText && <p className="text-center mt-4 text-sm opacity-60 italic">{obj.altText}</p>}
          </div>
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white dark:bg-[#251b14] border border-tan/10 dark:border-sand_dollar/5 shadow-xl rounded-3xl overflow-hidden mb-12">
      <div className="relative aspect-video lg:aspect-[21/9] overflow-hidden">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="w-full h-full object-cover grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carafe/60 to-transparent"></div>
      </div>

      <div className="p-8 lg:p-12">
        <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-tan/10">
          <div className="flex items-center gap-3">
            <img
              alt={post.author.name}
              height="40px"
              width="40px"
              className="rounded-full border-2 border-brown/20"
              src={post.author.photo.url}
            />
            <div>
              <p className="text-sm font-bold uppercase tracking-wider opacity-60 leading-none mb-1">Author</p>
              <p className="font-bold text-lg leading-none">{post.author.name}</p>
            </div>
          </div>
          <div className="h-10 w-px bg-tan/20 hidden md:block"></div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wider opacity-60 leading-none mb-1">Published</p>
            <div className="flex items-center gap-2 font-bold text-lg leading-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight text-carafe dark:text-sand_dollar">
          {post.title}
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item),
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
