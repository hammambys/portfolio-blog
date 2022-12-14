
import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from 'react-icons/ai';

export const Footer = () => (
  <div className="text-center  h-64 flex items-center justify-center">
    <ul className="flex ">
      <li className="mr-7">
        <a href="https://www.linkedin.com/in/hammam-ben-younes-547869177/" className="w-32" target="_blank" rel="noreferrer">
          <AiFillLinkedin size={50} />
        </a>
      </li>
      <li className="mr-7">
        <a href="https://github.com/hammambys" target="_blank" rel="noreferrer">
          <AiFillGithub size={50} />
        </a>
      </li>
      <li className="">
        <a href="https://www.facebook.com/hammam.bn.younes/" target="_blank" rel="noreferrer">
          <AiFillFacebook size={50} />

        </a>
      </li>

    </ul>
  </div>
);
