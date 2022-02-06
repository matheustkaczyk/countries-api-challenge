import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import AppContext from '../context/AppContext';
import history from '../utils/history';

import Header from '../components/Header';
import CountryDetail from '../components/CountryDetail';

import countriesFetch from '../utils/countriesFetch';

const AppDetails = () => {
  let { name: N } = useParams();
  const url = `https://restcountries.com/v2/name/${N}`;

  const {
    countryDetails,
    setCountryDetails,
    setFilterText,
    setFilterSelect
  } = useContext(AppContext);

  useEffect(() => {
    countriesFetch(url)
    .then((response) => response)
    .then((data) => setCountryDetails(data.data));
  }, [N]);

  const handleButton = () => {
    history.back();
    setFilterText('');
    setFilterSelect('');
  }

  return (
    countryDetails && 
    <div className="country-details">
      <button className="detail-btn" onClick={ () => handleButton() } type="button">Back</button>
      { countryDetails.slice(0, 1).map((country) => CountryDetail(country)) }
    </div>
  );
};

export default AppDetails;
