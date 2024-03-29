import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, Container, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './login-view.scss';
import axios from 'axios';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    // Declare hook for each input
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

    // validate user inputs
    const validate = () => {
        let isReq = true;
        if (!username) {
            setUsernameErr('Username Required');
            isReq = false;
        } else if (username.length < 2) {
            setUsernameErr('Username must be 2 characters long');
            isReq = false;
        }
        if (!password) {
            setPasswordErr('Password Required');
            isReq = false;
        } else if (password.length < 6) {
            setPassword('Password must be 6 characters long');
            isReq = false;
        }

        return isReq;
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (isReq) {
            /* Send request to the server for authentication */
            axios.post('https://myflixerupper.herokuapp.com/login', {
                Username: username,
                Password: password
            })
                .then(response => {
                    const data = response.data;
                    props.onLoggedIn(data);
                    navigate("/", { replace: true });
                })
                .catch(e => {
                    console.log('no such user')
                });
        }
    };


    return (
        <Container>
            <Row>
                <Col>
                    <Card className="justify-content-center" style={{ textAlign: 'center', display: "inline-block" }}>
                        <Card.Title style={{ textAlign: 'center', margin: 10, fontsize: '20px' }}>Welcome to MyFlixerupper!</Card.Title>
                        <Form style={{ textAlign: 'center', display: "inline-block", color: 'white' }}>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type="text" value={username} placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
                                {usernameErr && <p>{usernameErr}</p>}
                            </Form.Group>
                            <Form.Group controlId="formPassword">
                                Password:
                                <Form.Control type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                                {passwordErr && <p>{passwordErr}</p>}
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                            <Link to={`/register`} className="float-right">
                                <Button variant="info" style={{ color: "white" }} type="button">New here? Click here to Register!</Button>
                            </Link>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
}

LoginView.propTypes = {
    user: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired,
};