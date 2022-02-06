import React from 'react';

const CountryDetail = (country) => {
  return (
    <div className="country-card-detail" key={ country.name }>
        <img src={ country.flags.svg } alt="country flag" />
        <div className="country-detail-info">
          <div>
            <h2>{ country.name }</h2>
            <p><span>Native name:</span> { <span>{country.nativeName}</span> }</p>
            <p><span>Population:</span> { <span>{country.population}</span> }</p>
            <p><span>Region:</span> { <span>{country.region}</span> }</p>
            <p><span>Sub region:</span> { <span>{country.subregion}</span> }</p>
            <p><span>Capital:</span> { <span>{country.capital}</span> }</p>
          </div>
          <div>
            <p><span>Top level domain:</span> { country.topLevelDomain[0] }</p>
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
