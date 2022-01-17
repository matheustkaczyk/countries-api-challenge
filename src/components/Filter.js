import React, { useContext } from 'react';

import AppContext from '../context/AppContext';

const Filter = () => {
  const { setFilterText, setFilterSelect } = useContext(AppContext);

  const handleTextInput = ({ target }) => {
    setFilterText(target.value);
  };

  const handleSelectInput = ({ target }) => {
    setFilterSelect(target.value);
  };

  return (
    <section id='filters' className='filters-section'>
      <input onChange={ (e) => handleTextInput(e) } type='text' placeholder='Serch for a country...'/>

      <select onChange={ (e) => handleSelectInput(e) }>
        <option selected value="">Filter by region</option>
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
