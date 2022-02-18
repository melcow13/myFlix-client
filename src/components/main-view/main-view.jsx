
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {Menubar} from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import { ProfileView } from '../profile-view/profile-view';

import { Container, Col, Row, Nav} from 'react-bootstrap'

export class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
          movies: [],

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
          <Route exact path="*" element={user? <LoginView onLoggedIn={user => this.onLoggedIn(user)}/> : <Navigate to ="/"/>} />
          <Route path="/login" element={<LoginView onLoggedIn={user => this.onLoggedIn(user)}/>}/> 
                
          <Route path="/" element={movies.map(m => (
                    <MovieCard user={user} movie={m} />
                )) }/>    
            
            
            
            <Route path="/movies/:movieId" render={({ match, history }) => {
                if (!user) return 
                <Col>
                  <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                </Col>
              
               if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} user={user} onBackClick={() => history.goBack()} />
              </Col>
            }} />

            <Route path="/directors/:name" render={({ match, history }) => {

                if ( !user ) 
                return (
                  <Col>
                    <LoginView onLoggedIn={ (user) => this.onLoggedIn(user) } />
                  </Col>
                );
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <DirectorView Director={movies.find((m) => m.Director.Name === match.params.name).Director}  onBackClick={() => history.goBack()} />
              </Col>
            }
            } />

            <Route path="/genres/:name" render={({ match, history }) => {
                 if (!user) return 
                 <Col>
                   <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                 </Col>
               
                if (movies.length === 0) return <div className="main-view" />;
                 if ( !user ) 
                 return (
                   <Col>
                     <LoginView onLoggedIn={ (user) => this.onLoggedIn(user) } />
                   </Col>
                 );
              if (movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <GenreView Genre={movies.find((m) => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
              </Col>
            }
            } />

            <Route path="/register" element={<RegistrationView />} />
                
             

            <Route  path="/users/:username" element={<ProfileView
               user = {this.state.user}
               movies = {movies}
                onBackClick={() => history.goBack()} />}
              />
      </Routes>
      </Row>  
    </Container>
  </BrowserRouter> 
  
    );
  }
}

export default MainView;
