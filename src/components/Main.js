import React, { useEffect, useContext } from 'react';

import AppContext from '../context/AppContext';

import countriesFetch from '../utils/countriesFetch';

const Main = () => {
  const { setCountries } = useContext(AppContext);

  useEffect(() => {
    return () => {
      setCountries(countriesFetch);
    }
  }, [])
  
  return(
    <main>
      main
    </main>
  )
};

export default Main;