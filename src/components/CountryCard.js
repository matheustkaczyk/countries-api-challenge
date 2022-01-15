import React from 'react';

const CountryCard = ({ flags, name, population, region, capital }) => {
  console.log(flags, name, population, region, capital)

  return (
    <div className='flag-card'>
      <img src={ flags.png } alt={ `${ name.common } flag` } />
      <h4>{ name.common }</h4>
      <p>Population: { population }</p>
      <p>Region: { region }</p>
      <p>Capital: { capital }</p>
    </div>
  );
};

export default CountryCard;
