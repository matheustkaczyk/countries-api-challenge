import React, { useContext, useEffect } from 'react';

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import globe from '../images/globe.svg';

import AppContext from '../context/AppContext';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(AppContext);

  const handleChange = () => {
    setDarkMode(!darkMode);
  };

  const handleColorModeAdd = () => {
    const header = document.getElementById('header');
    const filter = document.getElementById('filters');
    const main = document.getElementById('main');
    const card = document.getElementById('card');
    const body = document.getElementById('body');

    header.classList.add('lightModeHeader');
    filter.classList.add('lightModeFilters');
    card.classList.add('lightModeCountryCard');
    main.classList.add('lightModeMain');
    body.classList.add('lightModeBody');
  };

  const handleColorModeRemove = () => {
    const element = document.getElementById('header');
    const filter = document.getElementById('filters');
    const main = document.getElementById('main');
    const card = document.getElementById('card');
    const body = document.getElementById('body');

    element.classList.remove('lightModeHeader');
    filter.classList.remove('lightModeFilters')
    card.classList.remove('lightModeCountryCard');
    main.classList.remove('lightModeMain');
    body.classList.remove('lightModeBody')
  };

  useEffect(() => {
    return () => {
      darkMode ? handleColorModeRemove() : handleColorModeAdd();
    }
  }, [darkMode]);

  return(
    <header id='header'>
      <div className='logo'>
        <h3>Where in the world?</h3>
        {/* <img src={ globe } /> */}
      </div>

      { darkMode ? <BsFillMoonFill onClick={ () => handleChange() }/> : <BsFillSunFill onClick={ () => handleChange() } /> }
    </header>
  )
};

export default Header;
