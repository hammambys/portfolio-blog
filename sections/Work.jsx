import { useEffect, useState } from "react";
import { PortfolioItem } from "../components/PortfolioItem";
import { portfolio } from "../data";

export default function Work() {
  const INITIAL_COUNT = 3;
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  
  useEffect(() => {
    setPortfolioItems(portfolio);
  }, []);

  const toggleShowMore = () => {
    if (visibleCount >= portfolioItems.length) {
      setVisibleCount(INITIAL_COUNT);
    } else {
      setVisibleCount(portfolioItems.length);
    }
  };

  return (
    <div className="container mx-auto w-full    " id="work">
      <h1 className="p-16 text-3xl text-center font-bold">Some of my work</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {portfolioItems.slice(0, visibleCount).map((item, index) => (
          <PortfolioItem key={index} item={item} id={index} />
        ))}
      </div>
      {portfolioItems.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleShowMore}
            className="hover:underline"
          >
            {visibleCount >= portfolioItems.length ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}
