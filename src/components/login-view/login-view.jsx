import React, {useState} from 'react';
import {Form, Button, Card, CardGroup, Container, Col, Row} from 'react-bootstrap';


export function LoginView(props){
    const [ username, setUsername ] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        props.onLoggedIn(username);
      };

    return(
    <Container>
         <Row>
            <Col>
                <CardGroup>
                    <Card>
                        <Card.Header>Welcome to MyFlixerupper!</Card.Header>
                        <Form>
                            <Form.Group controlid="formUsername">
                                <Form.Label>Username:</Form.Label> 
                                <Form.Control type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
                            </Form.Group>
                            <Form.Group controid="formPassword">
                                Password:
                                <Form.Control type="password" value={password} onChange ={e=>setPassword(e.target.value)}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button>
                            <Button>Register</Button>
                        </Form> 
                    </Card>
                </CardGroup>
            </Col>
         </Row>
    </Container> 
        
    );
}