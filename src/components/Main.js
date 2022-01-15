import React, { useEffect, useContext } from 'react';

import AppContext from '../context/AppContext';

import countriesFetch from '../utils/countriesFetch';

import CountryCard from './CountryCard';

const Main = () => {
  const { countries, setCountries } = useContext(AppContext);

  useEffect(() => {
    countriesFetch()
    .then((response) => response)
    .then((data) => setCountries(data.data))
    .catch((err) => console.error(err));
  }, [])

  return(
    <main>
      { countries.length !== 0 && countries.map((country) => CountryCard(country)) }
    </main>
  )
};

export default Main;