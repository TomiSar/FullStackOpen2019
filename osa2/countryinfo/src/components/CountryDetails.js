import React from 'react';

const CountryDetails = ({ data, filter, showDetails, country }) => {
    const ShownCountry =
        filter === '' ? data : data.filter(country => {
            return country.name.indexOf(filter) !== -1;
        });
    return (
        <div>
            <h1>
                
            </h1>
        </div>
    )
}

export default CountryDetails;