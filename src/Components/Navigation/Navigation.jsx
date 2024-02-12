import React, { useContext } from 'react';
import { Button, Container, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../Provider/Provider';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
    const { user ,logOut} = useContext(AuthContext);
    const handleLogout=()=>{
        logOut()
        .then(()=>{}
        )
        .catch(error=>{console.error(error)})
    }
    return (
        <Container>

            <Navbar expand="lg" className="mt-2 bg-body-tertiary rounded">
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                  
                        <Nav
                            className="mx-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/">                          
                              <Nav.Link href="/">Home</Nav.Link>
                            </Link>
                           <Nav.Link href="#action2"><Link to="/weather/:info/:cName/country">All country data
                           </Link></Nav.Link>
                           

                        </Nav>
                        <Form className="d-flex">

                          
                            {
                                user ?
                                    <div className='d-flex'>
                                        <p className='mx-2'>{user.email}</p>
                                    <nav><FaUserCircle style={{ fontSize: "2rem" }} /></nav>
                                    
                                        <Button onClick={handleLogout} className='mx-2' variant="outline-success">Logout</Button>
                                        </div> :
                                    <Link to="/login">
                                     <Button className='mx-2' variant="outline-success">Login</Button>
                                    </Link>
                                   
                            }
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default Navigation;