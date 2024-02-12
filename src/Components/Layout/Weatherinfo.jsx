import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Weathercss/Weather.css';
import moment from 'moment';
import Marquee from 'react-fast-marquee';


const Weatherinfo = () => {
    const cData = useLoaderData();
   
    console.log("weather ", cData.name);
    const countryName=cData.name;


  

    const [countrydata, setCountrydata] = useState([]);
    // const [matchdata,setMatchdata] =useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://restcountries.com/v3.1/all');
    //             const data = await response.json();
    //             setCountrydata(data);
              
    //         } catch (error) {
    //             console.error('Error fetching country data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);
   

    // const match =countrydata.find(cn => cn.name.common==countryName);
    
   



    
  


    return (
        <div className="container">
            <Marquee className='text-success' speed={50}>
            country name: {cData.name}, temparature: {(cData.main.temp - 273.15).toFixed(2)}°C,
            humidity:{cData.main.humidity}%,sky condition:{cData.weather[0].description}
            </Marquee>
            <div className="wrapper">
                <div className="img_section">
                    <div className="default_info">
                        <h2 className="default_day">{moment().format('dddd')}</h2>
                        <span className="default_date">{moment().format('LL')}</span>
                        {/* <div className="icons">
                            <img src="https://openweathermap.org/img/wn/10d@4x.png" alt="" />
                            <h2 className="weather_temp">{cData.main.temp}°C</h2>
                            <h3 className="cloudtxt">Overcast Clouds</h3>
                        </div> */}
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="content_section">
                 
                    <div class="custom_input">
                        {/* <div className="fake_input" contenteditable="true" placeholder="Weather data"></div> */}
                       
                        <div className="fake_input" style={{padding:"0 0 2% 0"}} placeholder="Weather data"><span style={{fontSize:"35px",fontWeight:"bold"}}>Weather data</span></div>
                       
                        <div className="fake_button" onclick="handleSearch()">Info</div>
                    </div>


                    <div className="day_info">
                        <div className="content">
                            <p className="title">NAME</p>
                            <span className="value">{cData.name}</span>
                        </div>
                        <div className="content">
                            <p className="title">TEMP</p>
                            <span className="value">{(cData.main.temp - 273.15).toFixed(2)}°C</span>

                        </div>
                        <div className="content">
                            <p className="title">humidity</p>
                            <span className="value">{cData.main.humidity}%</span>
                        </div>
                        <div className="content">
                            <p className="title">WIND SPEED</p>
                            <span className="value">{cData.wind.speed} Km/h</span>
                        </div>
                        <div className="content">
                            <p className="title">Weather Status</p>
                            <span className="value">{cData.weather[0].description}</span>
                        </div>
                    </div>

                    <div className="list_content">
                        <ul>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Sat</span>
                                <span className="day_temp">{(cData.main.temp - 273.15).toFixed(2)}°C</span>
                            </li>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Sun</span>
                                <span className="day_temp">{(cData.main.temp - 273.15).toFixed(2)}°C</span>
                            </li>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Mon</span>
                                <span className="day_temp">{(cData.main.temp - 273.15).toFixed(2)}°C</span>
                            </li>
                            <li>
                                <img src="https://openweathermap.org/img/wn/10d@2x.png" />
                                <span>Tues</span>
                                <span className="day_temp">{(cData.main.temp - 273.15).toFixed(2)}°C</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>





    );
};

export default Weatherinfo;