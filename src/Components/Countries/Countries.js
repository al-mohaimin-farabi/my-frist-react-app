import React, { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h3>Country Found: {countries.length}</h3>
            <div className= "countries-container">
                {
                countries.map(country => <Country
                key={country.alpha3Code}
                Country={country}
                ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;