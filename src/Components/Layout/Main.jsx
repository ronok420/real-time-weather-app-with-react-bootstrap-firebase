import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Left from './Left';
import Right from './Right';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div><Header></Header>
        <Navigation></Navigation>
        <Container>
                <Row>
                    <Col lg={2}>
                    </Col>
                    <Col lg={8}><Outlet></Outlet>
                    </Col>
                    <Col lg={2}>
                    </Col>
                    {/* <Right></Right> */}
                </Row>
              
            </Container>

        <Footer></Footer>
            
            
        </div>
    );
};

export default Main;