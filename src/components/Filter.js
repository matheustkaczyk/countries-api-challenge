import React from 'react';

const Filter = () => {
  return (
    <section className='filters-section'>
      <input type='text' placeholder='Serch for a country...'/>

      <select>
        <option hidden disabled selected value>Filter by region</option>
        <option>Africa</option>
        <option>America</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </section>
  )
};

export default Filter;
