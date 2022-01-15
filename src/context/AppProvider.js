import { useState, useEffect } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [colorMode, setColorMode] = useState(true);

  const value = { countries, setCountries, colorMode, setColorMode };
  return(
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
