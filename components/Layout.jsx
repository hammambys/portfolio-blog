import React, { useState } from 'react';
import { Footer } from './Footer';
import Header from './Header';

function Layout ({ children }) { 
  
  const [darkMode, setDarkMode] = useState(true);
  return(

  <div className={` ${darkMode && "dark"}`} >
    <div className='bg-sand_dollar dark:bg-carafe transition duration-500'>
    <button className='sticky top-0' onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? "ON" : "OFF"}
    </button>
    <Header />
    {children}
    <Footer />
    </div>
  </div>

);
  }
export default Layout;
