import React from 'react';

//filter <=> output 
const CountryFiltering = ({ output, input }) => {
  console.log('filter (output)', output);
  return <input value={output} onChange={input} />
}

export default CountryFiltering;