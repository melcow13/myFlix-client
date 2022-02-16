
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import {Menubar} from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';

import { Container, Col, Row} from 'react-bootstrap'

export class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
          movies: [],

          selectedMovie: null,

          user: null

        }
    }
    componentDidMount() {
      let accessToken = localStorage.getItem('token');
      if (accessToken !== null) {
        this.setState({
          user: localStorage.getItem('user')
        });
        this.getMovies(accessToken);
      }
    }

    onLoggedIn(authData) {
      console.log(authData);
      this.setState({
        user: authData.user.Username
      });
    
      localStorage.setItem('token', authData.token);
      localStorage.setItem('user', authData.user.Username);
      this.getMovies(authData.token);
    }

    onLoggedOut() {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.setState({
        user: null
      });
    }

    getMovies(token) {
      axios.get('https://myflixerupper.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(response => {
        // Assign the result to the state
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    

    

    

  render() {
    const { movies, user} = this.state;


    return (
    <BrowserRouter>
      <Container>
      <Menubar user={user} />
      
        
        
        <Row className="main-view justify-content-md-center">
        <Routes>
            <Route exact path="/" element={<LoginView/>} render={()=>{
              //if there is no user, the LoginView is rendered. if there is a user logged in, the user details are passed as a prop to the login view
              if (!user) return <Col>
                <LoginView movies={movies} onLoggedIn={user => this.onLoggedIn(user)}/>
              </Col>
              //before the movies have been laoded
              if (movies.length===0) return <div className="main-view" />;
              
              return movies.map(m=>(
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ))
            }}/>        


            <Route path="/movies/:ID" element={<MovieView/>} render ={({match, history})=>{
              return <Col md={8}>
                <MovieView movie={movies.find(m=>m._id === match.params.movieID)} 
                onBackClick={() => history.goBack()}/>
              </Col>
            }} />

            <Route path="/register" element={<RegistrationView/>} render={()=>{
              if (user) return <Redirect to="/" />
              return <Col lg={8} md={8}>
                <RegistrationView />
              </Col>
            }} />
      </Routes>
    </Row>  
    </Container>
  </BrowserRouter> 
  
    );
  }
}

export default MainView;
