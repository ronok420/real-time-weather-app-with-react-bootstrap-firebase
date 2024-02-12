import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../Provider/Provider';


const Login = () => {
    const [success,setSuccess] =useState('');
    const [error,setError] =useState('');
    const { signInuser, logInwithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/weather/info'


    const handleGoogleLogin = () => {
        logInwithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error);
            })
    }


    const handleLogin = event => {
        setError('');
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInuser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
                form.reset();
                setSuccess("login success");
            })
            .catch(error => {
                console.error(error);
                setError("please give correct password");
            })


    }
    return (
        <Container className='w-50 mx-auto mt-4'>
            <Form onSubmit={handleLogin}>
                <h2>Please Login to see detailed weather data</h2>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="acccept terms and condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button><br />
                <Button onClick={handleGoogleLogin} className='mt-2' variant="outline-success"><FaGoogle />Login with Google</Button> <br />

                <Form.Text className="text-muted text-black">
                    Don't have an account? <Link to="/register" style={{fontSize:"30px",color:"blue"}} className="">Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-muted ">
                    {success}
                </Form.Text>
               
                <div style={{color:"red"}}>
                {error}
                </div>
            </Form>

        </Container>
    );
};

export default Login;