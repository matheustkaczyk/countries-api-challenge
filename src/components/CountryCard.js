import React from 'react';

const CountryCard = ({ flags, name, population, region, capital }) => {
  console.log(flags, name, population, region, capital)

  return (
    <div className='country-card'>
      <img src={ flags.png } alt={ `${ name.common } flag` } />
      <div>
        <h4>{ name.common }</h4>
        <p>Population: { population }</p>
        <p>Region: { region }</p>
        <p>Capital: { capital }</p>
      </div>
    </div>
  );
};

export default CountryCard;
