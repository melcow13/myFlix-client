import React, {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

import './registration-view.scss';
import axios from 'axios'

export function RegistrationView(props){
    const [ username, setUsername ] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail ] = useState('');
    const [birthday, setBirthday ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://myflixerupper.herokuapp.com/users',{
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        })
        .then(response =>{
            const data = response.data;
            console.log(data);
            window.open('/','_self');
            //the second argument '_self' is necessary so that
            //the page will open in the current tab
        })
        .catch(e=>{ console.log('error registering the user');
        alert('Something wasn\'t entered right');

        });
        
    };

    return(
        <Form>
            <Form.Group controlid="formUsername">
            <Form.Label>Username</Form.Label>
                <Form.Control type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
            </Form.Group>

            <Form.Group controlid="formPassword">
             <Form.Label>Password: </Form.Label> 
                <input type="password" value={password} onChange ={e=>setPassword(e.target.value)}/>
            </Form.Group>

            <Form.Group controlid="formEmail">
             <Form.Label>Email: </Form.Label>  
                <Form.Control type="email" value={email} onCHange={e=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group>
            <Form.Label>Birthday</Form.Label>
                <input type="date" value={birthday} onChang={e=>setBirthday(e.target.value)}/>
            </Form.Group>

            <Button type="submit" onClick={handleSubmit}>Submit</Button>
        </Form>
    );
}