import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Navbar = ({ toggleTheme, theme }) => {
  const { scrollY } = useViewportScroll();
  const [isHidden, setIsHidden] = useState(false);
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setIsHidden(y > 100);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  // 

  return (
    <motion.nav
      className={`flex justify-between items-center fixed z-50  p-4 w-full ${theme === 'light' ? 'bg-bglight text-primarydark' : 'bg-bgdark text-primarylight'}`}
      style={{ opacity }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='hidden xl:flex 2xl:ml-6 sm:flex'>
      <h1 className={`font-bold  cursor-pointer ${theme === 'light' ? 'text-quaternarydark' : 'text-quaternarylight'}` }>rodzel.dev</h1>
      </div>
   

      <ul className='hidden 2xl:flex justify-center items-center cursor-pointer  space-x-10'>
        <li>
          <Link to="section1" smooth={true} duration={1000}>{theme === 'light' ? 'Start/>' : 'Start/>'}</Link>
        </li>
        <li>
          <Link to="section2" smooth={true} duration={1000}>{theme === 'light' ? 'Projects/>' : 'Projects/>'}</Link>
        </li>
        <li>
          <Link to="footer" smooth={true} duration={1000}>{theme === 'light' ? 'Contact Me />' : 'Contact Me />'}</Link>
        </li>
        <motion.button className={`${theme === 'light' ? 'bg-bglight text-primarydark' : 'bg-bgdark text-primarylight'} hover:bg-blue-700 text-primarydark font-bold py-2 px-4 rounded`} onClick={toggleTheme}>
          Toggle Theme
        </motion.button>
      </ul>
    </motion.nav>
  );
}

export default Navbar;
