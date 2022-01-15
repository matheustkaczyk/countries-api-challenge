import React, { useContext } from 'react';

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import globe from '../images/globe.svg';

import AppContext from '../context/AppContext';

const Header = () => {
  const { colorMode, setColorMode } = useContext(AppContext);

  const handleChange = () => {
    setColorMode(!colorMode);
  };

  return(
    <header>
      <div className='logo'>
        <h3>Where in the world?</h3>
        <img src={ globe } />
      </div>

      { colorMode ? <BsFillMoonFill onClick={ () => handleChange() }/> : <BsFillSunFill onClick={ () => handleChange() } /> }
    </header>
  )
};

export default Header;
