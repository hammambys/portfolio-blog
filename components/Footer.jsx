import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <div className='text-center  h-64 flex items-center justify-center'>
      <ul className="flex ">
          <li className='mr-5'>
            <a href="https://www.linkedin.com/in/hammam-ben-younes-547869177/"  target="_blank">
              <Image 
              src="https://img.icons8.com/ios-glyphs/60/000000/linkedin-circled--v1.png" 
              width={45}
               height={45} />
            </a>
          </li>
          <li className='mr-5'>
            <a href="https://github.com/hammambys"  target="_blank">
              <Image 
              src="https://img.icons8.com/ios-glyphs/60/000000/github.png" 
              width={45}
               height={45} />
            </a>
          </li>
          <li className='mr-5'>
            <a href="https://www.facebook.com/hammam.bn.younes/"  target="_blank">
              <Image 
              src="https://img.icons8.com/ios-glyphs/60/000000/facebook-new.png" 
              width={45}
               height={45} />
            </a>
          </li>
        
        </ul>
    </div>
  )
}
