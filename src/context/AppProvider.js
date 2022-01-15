import { useState, useEffect } from 'react';

import AppContext from './AppContext';

import countriesFetch from '../utils/countriesFetch';

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const value = { countries, setCountries };
  return(
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
