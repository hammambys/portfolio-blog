import React from "react";
import Image from "next/image";
import Link from "next/link";

export const PortfolioItem = ({ item, id }) => (
  <div className="group relative bg-white dark:bg-[#251b14] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-tan/10 dark:border-sand_dollar/5 flex flex-col h-full transform hover:-translate-y-2">
    <Link href={`/work/${item.slug}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={item.img ? item.img : "/images/placeholder.jpg"}
          alt={item.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carafe/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <span className="text-sand_dollar font-bold flex items-center gap-2">
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow space-y-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-bold text-xl leading-tight group-hover:text-brown transition-colors">
            {item.title}
          </h3>
          <span className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border
            ${item.status === "Live" 
              ? "bg-green/10 text-green border-green/20" 
              : item.status === "In Progress" 
                ? "bg-yellow/10 text-yellow border-yellow/20" 
                : "bg-red/10 text-red border-red/20"}
          `}>
            <span className={`h-2 w-2 rounded-full animate-pulse
              ${item.status === "Live" ? "bg-green" : item.status === "In Progress" ? "bg-yellow" : "bg-red"}
            `} />
            {item.status}
          </span>
        </div>

        <p className="text-sm text-carafe/70 dark:text-sand_dollar/70 line-clamp-2 leading-relaxed">
          {item.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
          {item.tools.map((tech, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-tan/10 dark:bg-sand_dollar/5 rounded-md text-[10px] font-bold uppercase tracking-widest text-brown"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  </div>
);
