// Footer.jsx
import React from 'react';
import { useState, useEffect } from 'react';
import { useViewportScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';


const Footer = ({ theme }) => {
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
  return (
    <footer
    id="footer"
    className={`fixed bottom-0 left-0 right-0 z-50 bg-opacity-95 transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}
      ${theme === 'light' ? 'bg-bglight text-primarydark' : 'bg-bgdark text-primarylight'}`}
  >
    <div className='flex justify-center items-center mb-4'>Find me on</div>
    <div className='flex justify-center'>
      <div className='flex gap-7'>
        <ul className='flex xl:gap-8 sm:gap-0'>
          {/* GitHub Icon */}
          <li><a href="https://github.com/rodzelte" target='__blank'><FontAwesomeIcon icon={faGithub} className='h-4 mr-2' />rodzel.te</a></li>
          {/* LinkedIn Icon */}
          <li><a href="https://www.linkedin.com/in/rodzel-te/" target='__blank'><FontAwesomeIcon icon={faLinkedin} className='h-4 mr-2' />rodzelte</a></li>
          {/* Ko-fi Icon */}
          <li><a href="https://ko-fi.com/rodzelte" target='__blank'><FontAwesomeIcon icon={faMugSaucer} className='h-4 mr-2' />Rodzelte</a></li>
        </ul>
      </div>
    </div> 
    <div className='flex justify-center items-center mt-5'>© Made with Rodzel. Circa 2020.</div> 
  </footer>
  );
}

export default Footer;
