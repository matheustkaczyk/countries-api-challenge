import React from 'react';

const CountryDetail = (country) => {
  return (
    <div className="country-card" key={ country.name }>
        <img src={ country.flags.svg } alt="country flag" />
        <div className="country-detail-info">
          <div>
            <h2>{ country.name }</h2>
            <p>Native name: { <span>{country.nativeName}</span> }</p>
            <p>Population: { <span>{country.population}</span> }</p>
            <p>Region: { <span>{country.region}</span> }</p>
            <p>Sub region: { <span>{country.subregion}</span> }</p>
            <p>Capital: { <span>{country.capital}</span> }</p>
          </div>
          <div>
            <p>Top level domain: { country.topLevelDomain[0] }</p>
            <span>Currencies:
              <ul>
                {
                  country.currencies.map((currency) => <li key={currency.code}>{ currency.code }</li>)
                }
              </ul>
            </span>
            <span>Languages:
              <ul>
                { country.languages.map((language) => <li key={language.name}>{language.name}</li>) }
              </ul>
            </span>
          </div>
        </div>
      </div>
  );
};

export default CountryDetail;
