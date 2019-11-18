import React from 'react';

const FilterCountry = ({ filter, input }) => {
  console.log('filter (output) :', filter);
  return <input value={filter} onChange={input} />;
};

export default FilterCountry;