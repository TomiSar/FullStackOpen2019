import React from 'react';

const CountryDetails = ({ data, filter, showDetails, country }) => {
    const shownCountríes =
        filter === ''
            ? data
            : data.filter(country => {
                return country.name.indexOf(filter) !== -1;
            });

    // if (country !== '') {
    //     return (
    //         <div>
    //             <div>
    //                 <h1>
    //                     {country.name}
    //                     {country.nativeName}
    //                 </h1>
    //                 <p>capital: {country.capital}</p>
    //                 <p>population: {country.population}</p>
    //                 <p> <img alt="flag" src={country.flag} /> </p>
    //             </div>
    //         </div>
    //     ); } else
    if (shownCountríes.length === 1) {
        return (
            <div>
                {shownCountríes.map(country => (
                    <div key={country.alpha2Code} >
                        <h1>
                            {country.name}
                        </h1>
                        <p>capital {country.capital}</p>
                        <p>population {country.population}</p>
                        <p><img alt="flag" src={country.flag} /></p>
                    </div>
                ))}
            </div>
        )
    } else if (shownCountríes.length > 10) { //Jos ehdon täyttäviä maita on liikaa (yli 10), kehoitetaan tarkentamaan hakuehtoa:
        return <div>Too many matches, specify another filter</div>
    } else {
        return (
            <div>
                {shownCountríes.map(country => (
                    <div key={country.alpha2Code} onclick={() => showDetails(country)} >
                        {country.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default CountryDetails;