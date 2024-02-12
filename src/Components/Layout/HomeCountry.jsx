import React, { useEffect, useState } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';


import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const HomeCountry = () => {
    const [countryName, setCountryName] = useState('');
    const [countryData, setCountryData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            if (countryName.trim() !== '') {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
                    const data = await response.json();

                    setCountryData(data);
                    console.log(data);
                } catch (error) {
                 
                    console.error('Error fetching country data:', error);
                    setCountryData(null);
                }
            } else {
                setCountryData(null);
            }
        };

        fetchData();
    }, [countryName]);
    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        setCountryName(name);
        console.log(name);

    };

    return (
        <div>
            <Form onSubmit={handleSearch} className="d-flex mt-2">
                {/* Input field on the left side */}
                <FormControl type="text" placeholder="enter country name..." className="mr-2"
                    name='name'//value={countryName}
                // onChange={(e) => setCountryName(e.target.value)}
                />
                <Button className='mx-2' variant="outline-success" type="submit">
                    Search
                </Button>
            </Form>



            {countryData && <Card className=" mt-4 mb-4">
                <Card.Header className='d-flex align-items-center'>
                   
                    <div className='ps-4 flex-grow-1'>

                    </div>
        
                </Card.Header>
                <Card.Body>
                    <Card.Title>{countryData[0].name.common}</Card.Title>
                    <Card.Img variant="top" src={countryData[0].flags.png} />
                    <Card.Text>
                        <h5>Region:{countryData[0].region} </h5>
                        <h5>Official Status:{countryData[0].status}</h5>
                        <h5>Population:{countryData[0].population}</h5>
                        <h5>Capital:{countryData[0].capital[0]}</h5>
                       
                        <Link to={`/weather/info/${countryData[0].name.common}`}>See detailed info....</Link>


                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex">
                    {/* <div className='flex-grow-1'>
          <span>{rating.number}</span>
        </div>

        <div>
          <FaEye />
          <span className='ps-2'>{total_view}</span>
        </div> */}
                </Card.Footer>
            </Card>}





        </div>
    );
};

export default HomeCountry;