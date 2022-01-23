import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ flags, name, population, region, capital }) => {
  return (
    <Link key={ name.common } to={ `/${ name.common }` }>
      <div id='card' className='country-card'>
        <img src={ flags.png } alt={ `${ name.common } flag` } />
        <div>
          <h4>{ name.common }</h4>
          <p><span>Population:</span> { population.toLocaleString(undefined) }</p>
          <p><span>Region:</span> { region }</p>
          <p><span>Capital:</span> { capital || 'No capital' }</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
