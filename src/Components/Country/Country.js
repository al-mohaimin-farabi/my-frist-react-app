import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,capital,population,region} = props.Country
    return (
        <div className="country">
            <img width='250' height="200" src={flag} alt="" />
            <h4>Country Name: {name}</h4>
            <p>Region: {region}</p>
            <h4>Capital: {capital}</h4>
            <h4>Population: {population}</h4>
        </div>
    );
};

export default Country;