import React from 'react'
import Image from 'next/image';


export const PortfolioItem = ({item}) => {
  return (
    <div className="flex justify-between mb-16">
            <div className="">
              <h1 className="mb-4">Project #{item.id}</h1>
              <h3 className="font-bold text-2xl mb-8">{item.title}</h3>
              <div className="">
                <div className="bg-carafe dark:border text-tan p-5  mr-8">
                  <p className="">{item.description}</p>
                  <p>Features :</p>
                  <ul className=''>
                    {item.features.map((feature)=>(
                        <li className=''>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex  tools">
                    {item.tools.map((tool)=>(
                      <div className="m-5">
                        <span className="text-sand_dollar  p-2   bg-carafe rounded ">{tool}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="">
              <a href={item.url} target="_blank">

               <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={450}
                unoptimized
                />
              </a>
            </div>            
          </div>
  )
}
