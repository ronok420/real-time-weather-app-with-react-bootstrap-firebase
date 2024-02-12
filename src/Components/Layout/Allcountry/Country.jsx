import React from 'react';
import { Link } from 'react-router-dom';
import './Countrystyle/country.css';

const Country = (props) => {
    const {area, region, population, name,flags}=props.country;
    return (
        <div className='single-country'>
            <div className='Country' >
            <img src={flags.png} alt="" />
              <h2>Country : {name.common}</h2>
            <h4> Population: {population}</h4>
            <h4> Region: {region}</h4>
            <h4> Area: {area}</h4>
            <Link to={`/weather/info/${name.common}`}>show weather Info ...</Link>
        </div>

            
        </div>
    );
};

export default Country;