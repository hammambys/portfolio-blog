import Image from "next/image";
import { useEffect, useState } from "react";
import {
  portfolio,
} from "../data";

export default function Work() {
  const [data, setData] = useState([]);

  useEffect(() => {
        setData(portfolio);    
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8   " id="work">
      
      <h1 className="mb-16 text-3xl text-center">Portfolio</h1>      
      <div className="w-full ">
        {data.map((d) => (
          <div className="portfolio-item mb-10">
            <div className="portfolio-item-details">
              
              <h1 className="mb-10">Project #{d.id}</h1>
              <h3 className="font-bold text-2xl">{d.title}</h3>
              <div className="">
                <div className="bg-carafe dark:border p-5 mt-8 mr-8">
                  <p className="text-tan ">{d.description}</p>
                </div>
                <div className="flex  tools">
                    {d.tools.map((tool)=>(
                      <div className="m-5">
                        <span className="text-sand_dollar  p-2   bg-carafe rounded ">{tool}</span>
                      </div>
                    ))}
                </div>
              </div>
              
  
            </div>
            <div className="portfolio-item-img">
               <Image
                src={d.img}
                alt=""
                width={600}
                height={450}
                unoptimized
                />
                
            
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}