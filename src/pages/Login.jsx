import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container style={{ height: 'calc(100vh - 56px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ maxWidth: '500px', width: '100%' }}>
                <h2 className='text-center'>Login Now</h2>
                <Form style={{ maxWidth: '500px', width: '100%' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Login
                    </Button>
                    <p className='text-center'>New user? <Link to='/signup'> Register now</Link></p>
                </Form>
                <p className='text-center'>-----------or-----------</p>
                <div className='text-center'>
                    <button className='btn btn-primary'>Login With google</button>
                </div>
            </div>
        </Container>
    );
};

export default Login;