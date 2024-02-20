import React, { useState, useEffect } from 'react';
import Navbar from './components/Header/Navbar';
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer';

const App = () => {
  const [theme, setTheme] = useState(() => {
    // Get the theme preference from local storage or use the default theme
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Apply the theme when the component mounts and on theme change
    if (theme === 'light') {
      document.body.style.backgroundColor = 'rgb(205, 250, 219)'; // Light background color
      
    } else {
      document.body.style.backgroundColor = 'rgb(7, 15, 43)'; // Dark background color 
    }

    // Store the theme preference in local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle the theme
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <div className='block'><Navbar toggleTheme={toggleTheme} theme={theme} /></div>
      <div className='block'><Main toggleTheme={toggleTheme} theme={theme}/></div>
      <div className='block'><Footer toggleTheme={toggleTheme} theme={theme}/></div>
    </div>
  );
};

export default App;
