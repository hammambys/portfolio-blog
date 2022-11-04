import React from 'react';
import Image from 'next/image';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

export const PortfolioItem = ({ item, id }) => (
  <div className="flex  mb-28">
    <div className="w-1/2 mr-8">
      <h1 className="mb-4">Project #{id + 1}</h1>
      <h3 className="font-bold text-2xl mb-8">{item.title}</h3>
      <div className="bg-carafe dark:border text-tan p-5  ">
        <p className="">{item.description}</p>
        <p>Features :</p>
        <ul className="">
          {item.features.map((feature) => (
            <li className="">- {feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex  tools">
        {item.tools.map((tool) => (
          <div className="m-5">
            <span className="text-sand_dollar  p-2   bg-carafe rounded ">{tool}</span>
          </div>
        ))}
      </div>
      <div className="links flex p-5 ">
        {item.link && (
          <a href={item.link} target="_blank" className="mr-5" rel="noreferrer">
            <AiOutlineLink size={30} />
          </a>
        )}
        {item.source && (
          <a href={item.source} target="_blank" rel="noreferrer">
            <AiFillGithub size={30} />
          </a>
        )}

      </div>
    </div>
    <div className="pt-10">
      <a href={item.url} target="_blank" rel="noreferrer">

        <Image
          src={item.img ? item.img : 'placeholder.jpg'}
          alt={item.title}
          width={600}
          height={450}
          unoptimized
          objectFit="fill"
        />
      </a>
    </div>
  </div>
);
