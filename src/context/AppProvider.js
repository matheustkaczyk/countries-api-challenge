import { useState } from 'react';

import AppContext from './AppContext';

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
