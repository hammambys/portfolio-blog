import React from 'react';

import Link from 'next/link';

const Header = () => (
  <div className="container mx-auto px-10 mb-8">
    <div className="border-b w-full inline-block border-carafe dark:border-sand_dollar py-8">

      <div className="flex items-center justify-center">
        <Link href="/"><span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-16  cursor-pointer font-bold">Home</span></Link>
        <Link href="#about"><span className=" text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-16  cursor-pointer font-bold">About</span></Link>
        <Link href="#work"><span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-16  cursor-pointer font-bold">Work</span></Link>
        <Link href="#contact"><span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-16  cursor-pointer font-bold">Contact</span></Link>
        <Link href="/blog"><span className="text-carafe dark:text-sand_dollar hover:text-brown dark:hover:text-brown mt-2 align-middle  ml-16  cursor-pointer font-bold">Blog</span></Link>
      </div>
    </div>
  </div>
);
export default Header;
