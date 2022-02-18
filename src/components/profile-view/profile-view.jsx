import React from 'react';
import {Form, Card, Container, Col, Row, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import UserInfo from '../profile-view/user-info'
import { FavoriteMovies } from './favorite-movies';
import { UpdateUser } from './update-user';

export class ProfileView extends React.Component{
    constructor() {
        super();
            this.state = {
                Name: null,
                Username: null,
                Password: null,
                Email: null,
                Birthday: null,
                FavoriteMovies: [],
            };
        }
    
        componentDidMount() {
            const accessToken = localStorage.getItem('token');
            this.getUser(accessToken);
        }
    
        onLoggedOut() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.setState({
                user: null,
            });
            window.open('/', '_self');
        }
    
        getUser = (token) => {
            const Username = localStorage.getItem('user');
            axios
                .get(`https://myflixerupper.herokuapp.com/users/${Username}`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    this.setState({
                        Name: response.data.Name,
                        Username: response.data.Username,
                        Password: response.data.Password,
                        Email: response.data.Email,
                        Birthday: response.data.Birthday,
                        FavoriteMovies: response.data.FavoriteMovies,
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        };

        
render () {

    const { Username, Name, Email, } = this.state;
    
    return (
    <div>
        <UserInfo name={Name} email={Email}  />
        <UpdateUser user={this.state.user}/>
    </div>
    )
 }
}