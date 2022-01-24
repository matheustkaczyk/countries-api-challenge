import React from 'react';

const CountryDetail = (country) => {
  return (
    <div className="country-details" key={ country.name }>
        <img src={ country.flags.svg } alt="country flag" />
        <div>
          <div>
            <h2>{ country.name }</h2>
            <p>Native name: { country.nativeName }</p>
            <p>Population: { country.population }</p>
            <p>Region: { country.region }</p>
            <p>Sub region: { country.subregion }</p>
            <p>Capital: { country.capital }</p>
          </div>
          <div>
            <p>Top level domain: { country.topLevelDomain[0] }</p>
            <p>Currencies: 
              <ul>
                {
                  country.currencies.map((currency) => <li key={currency.code}>{ currency.code }</li>)
                }
              </ul>
            </p>
            <p>Languages:
              <ul>
                { country.languages.map((language) => <li key={language.name}>{language.name}</li>) }
              </ul>
            </p>
          </div>
        </div>
      </div>
  );
};

export default CountryDetail;
