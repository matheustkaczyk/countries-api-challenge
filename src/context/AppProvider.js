import { useState } from 'react';

import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [colorMode, setColorMode] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [filterSelect, setFilterSelect] = useState('');

  const value = {
    countries,
    setCountries,
    colorMode,
    setColorMode,
    filterText,
    setFilterText,
    filterSelect,
    setFilterSelect
  };
  return(
    <AppContext.Provider value={ value }>
      { children }
    </AppContext.Provider>
  )
}

export default AppProvider;
