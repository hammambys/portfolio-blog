import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="bg-white dark:bg-[#251b14] border border-tan/10 dark:border-sand_dollar/5 shadow-lg rounded-3xl p-8 mb-8">
      <h3 className="text-xl font-bold mb-8 relative pb-4 text-carafe dark:text-sand_dollar">
        Categories
        <span className="absolute bottom-0 left-0 w-12 h-1 bg-brown rounded-full"></span>
      </h3>
      <div className="flex flex-col space-y-1">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span className={`cursor-pointer block py-3 px-2 rounded-xl transition-all duration-300 hover:bg-tan/10 dark:hover:bg-sand_dollar/5 text-carafe/80 dark:text-sand_dollar/80 hover:text-brown font-medium`}>
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
