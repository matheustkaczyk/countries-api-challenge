import React, { useEffect, useContext } from 'react';

import AppContext from '../context/AppContext';

import countriesFetch from '../utils/countriesFetch';

import CountryCard from './CountryCard';

const url = 'https://restcountries.com/v3.1/all';

const Main = () => {
  const { countries, setCountries, filterText, filterSelect } = useContext(AppContext);

  useEffect(() => {
    countriesFetch(url)
    .then((response) => response)
    .then((data) => setCountries(data.data))
    .catch((err) => console.error(err));
  }, [setCountries])

  return(
    <main id='main'>
      { countries.length !== 0 && countries
      .filter((country) => country.name.common.includes(filterText))
      .filter((country) => country.region.includes(filterSelect))
      .map((country) => CountryCard(country)) }
    </main>
  )
};

export default Main;