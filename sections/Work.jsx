import { useEffect, useState } from "react";
import { PortfolioItem } from "../components/PortfolioItem";
import {
  portfolio,
} from "../data";

export default function Work() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
        setPortfolioItems(portfolio);    
  }, []);

  return (
    <div className="container mx-auto  mb-8 w-full   " id="work">
      <h1 className="mb-16 text-3xl text-center">Portfolio</h1>      
        {
          portfolioItems.map((item,index)=>(
            <PortfolioItem key={index}  item={item} />
          ))
        }
    </div>
  );
}