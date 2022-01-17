import React from 'react';

const CountryCard = ({ flags, name, population, region, capital }) => {
  return (
    <div id='card' key={ name.common } className='country-card'>
      <img src={ flags.png } alt={ `${ name.common } flag` } />
      <div>
        <h4>{ name.common }</h4>
        <p><span>Population:</span> { population.toLocaleString(undefined) }</p>
        <p><span>Region:</span> { region }</p>
        <p><span>Capital:</span> { capital || 'No capital' }</p>
      </div>
    </div>
  );
};

export default CountryCard;
