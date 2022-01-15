import React from 'react';

const Filter = () => {
  return (
    <section>
      <input type='text' placeholder='Serch for a country...'/>

      <select>
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
