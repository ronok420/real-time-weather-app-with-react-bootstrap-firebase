import React, { useEffect, useState } from 'react';
import Country from './Country';
import './Countrystyle/country.css';


const Allcountry = () => {
    const [countries,setCountries]=useState([]);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))


    },[])
    return (
        <div>
             <div > 
            <h1> Total country found in the data: {countries.length}</h1>
            <div  className='country-container'>
            {
                
                countries.map( country =>  <Country country={country}  key={country.cca3} >  </Country>)
            }
            </div>
           
        </div>

        </div>
    );
};

export default Allcountry;