import { useEffect, useState } from "react";
import { PortfolioItem } from "../components/PortfolioItem";
import { portfolio } from "../data";

export default function Work() {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    setPortfolioItems(portfolio);
  }, []);

  return (
    <div className="container mx-auto w-full min-h-screen   " id="work">
      <h1 className="p-16 text-3xl text-center font-bold">Some of my work</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {portfolioItems.map((item, index) => (
          <PortfolioItem key={index} item={item} id={index} />
        ))}
      </div>
    </div>
  );
}
