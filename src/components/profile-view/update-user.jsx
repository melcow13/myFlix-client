import { React, useEffect, useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import axios from 'axios'

function UpdateUser(props) {
    console.log({ props })

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [values, setValues] = useState({
        nameErr: '',
        usernameErr: '',
        passwordErr: '',
        emailErr: ''
    });

    useEffect(() => {
        const { user } = props

        // debugger
        setName(user.userData.Name || "");
        setUsername(user.userData.Username);
        setPassword(user.userData.Password || "");
        setEmail(user.userData.Email || "");
        setBirthday(user.userData.Birthday || "");
    }, [props])

    const validate = () => {
        let isReq = true;
        if (username.length < 5) {
            setValues({ ...values, usernameErr: 'Username must be 5 characters long' })
            isReq = false;
        }
        if (password.length < 6) {
            setValues({ ...values, passwordErr: 'Password must be 6 characters long' });
            isReq = false;
        }
        if (!email.indexOf('@') === -1) {
            setValues({ ...values, emailErr: 'Email is invalid' });
            isReq = false;
        }
        return isReq;
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        if (isReq) {
            axios.put(`https://myflixerupper.herokuapp.com/users/${username}`, {
                Name: name,
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday
            })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert('Successfully Update');
                    window.open('/login', '_self');
                    //the second argument '_self' is necessary so that
                    //the page will open in the current tab
                })
                .catch(e => {
                    console.log('error updating the user');
                    alert('Something wasn\'t entered right');

                });
        }
    };

    return (
            <Form class="border" style={{color:"white", display:"block"}}>
                <h2>Profile</h2>
                <Form.Group controlId="formName" className="update-form-inputs">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
                    {values.nameErr && <p>{values.nameErr} </p>}
                </Form.Group>
                <Form.Group controlid="formUsername" className="update-form-inputs">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    {values.usernameErr && <p>{values.usernameErr} </p>}
                </Form.Group>
                <Form.Group controlId="formPassword" className="update-form-inputs">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {values.passwordErr && <p>{values.passwordErr} </p>}
                </Form.Group>
                <Form.Group controlId="formEmail" className="update-form-inputs">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    {values.emailErr && <p>{values.emailErr} </p>}
                </Form.Group>
                <Form.Group controlId="formBirthday" className="update-form-inputs">
                    <Form.Label>Birthday</Form.Label>
                    <Form.Control type="date" value={birthday} onChange={e => setBirthday(e.target.value)} />
                </Form.Group>
                <br/>
                <Button type="submit" onClick={handleSubmit}>Edit</Button>
            </Form>
    );
}


export default UpdateUser