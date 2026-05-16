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
    <div className="max-w-6xl mx-auto px-4" id="work">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 relative">
          Featured Work
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-brown rounded-full"></span>
        </h2>
        <p className="text-carafe/60 dark:text-sand_dollar/60 text-center max-w-2xl">
          A selection of my favorite projects, ranging from AI-powered web apps to full-stack e-learning platforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.slice(0, visibleCount).map((item, index) => (
          <PortfolioItem key={index} item={item} id={index} />
        ))}
      </div>
      
      {portfolioItems.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-16">
          <button
            onClick={toggleShowMore}
            className="group flex items-center gap-2 px-8 py-3 border-2 border-brown text-brown hover:bg-brown hover:text-sand_dollar transition-all duration-300 rounded-full font-bold uppercase tracking-widest text-xs"
          >
            {visibleCount >= portfolioItems.length ? "View Less" : "View More Projects"}
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${visibleCount >= portfolioItems.length ? "rotate-180" : "group-hover:translate-y-1"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
