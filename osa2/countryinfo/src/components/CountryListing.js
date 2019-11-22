import React from 'react';

const CountryListing = ({ data, filter, showInformation, country }) => {
    const showCountry = filter === '' ? data : data.filter(country => {
        return country.name.indexOf(filter) !== -1;
    })

    if (showCountry.length === 0) {
        return (
            <div>
                {showCountry.map(country => (
                    <div key={country.name}>
                        <h1> {country.name} {country.nativeName} </h1>

                        <p>capital: {country.capital}</p>
                        <p>population: {country.population}</p>
                        <p> <img alt="flag" src={country.flag} /></p>
                    </div>
                ))}
            </div>
        );
    } else if (showCountry.length === 1) {
        return (
            <div>
                {showCountry.map(country => (
                    <div key={country.alpha2Code}>
                        <h1>{country.name}</h1>
                        <p>capital: {country.capital}</p>
                        <p>population: {country.population}</p>
                        <p> <img alt="flag" src={country.flag} /></p>
                    </div>
                ))}
            </div>
        );
    } else if (showCountry.length > 10) {
        return <div>too many matches, specify another filter</div>;
    } else {
        return (
            <div>
                {showCountry.map(country => (
                    <div key={country.alpha2Code} onClick={() => showInformation(country)}>
                        {country.name}
                    </div>
                ))}
            </div>
        );
    }
};

export default CountryListing;
