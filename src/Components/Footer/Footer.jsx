import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container style={{marginTop:"100px"}} >
           {/* <footer className="bg-transparent text-dark py-4 border border-dark border-1 text-black">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 style={{color:"red"}}>Weather App</h3>
            <p style={{color:"red"}}>Your go-to source for weather forecasts.</p>
          </div>
          <div className="col-md-4">
            <h3>Download Our App</h3>
            <p>Stay updated on the go.</p>
            <div className="d-flex">
              <a href="#" className="btn btn-outline-dark me-2">App Store</a>
              <a href="#" className="btn btn-outline-dark">Google Play</a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@weatherapp.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="container mt-1">
        <div className="row">
          <div className="col text-center">
            <p style={{color:"red"}}>&copy; 2023 Weather App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer> */}
    <footer className="bg-transparent text-dark py-4 border border-dark border-1 text-black" style={{ backdropFilter: 'blur(10px)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Weather App</h3>
            <p >Your go-to source for weather forecasts.</p>
          </div>
          <div className="col-md-4">
            <h3>Download Our App</h3>
            <p>Stay updated on the go.</p>
            <div className="d-flex">
              <a href="#" className="btn btn-outline-dark me-2">App Store</a>
              <a href="#" className="btn btn-outline-dark">Google Play</a>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Contact Us</h3>
            <p>Email: info@weatherapp.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="container mt-1">
        <div className="row">
          <div className="col text-center">
            <p style={{ color: "red" }}>&copy; 2023 Weather App. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    
    
    

        </Container>
    );
};

export default Footer;