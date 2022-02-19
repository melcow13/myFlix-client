import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menubar } from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import ProfileView from '../profile-view/profile-view';

import { Container, Col, Row, Nav } from 'react-bootstrap'
import Movies from '../movies-list/movies-list';
import ProtectedRoutes from '../protected-routes/ProtectedRoutes';

export class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      user: null

    }
  }
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken) {
      this.setState({
        user: localStorage.getItem('user')
      });
    }
  }

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });

    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
  }


  render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
        <Container>
          <Menubar key={user?.Name} user={user} />
          <Row className="main-view justify-content-md-center">
            <Routes>
              <Route path="/login" element={<LoginView onLoggedIn={user => this.onLoggedIn(user)} />} />
              <Route element={<ProtectedRoutes user={localStorage.getItem('user')} />}>
                <Route path="/" element={<Movies />} />
                <Route path="/movies/:Title" element={<MovieView  />} />
                <Route path="/register" element={<RegistrationView />} />
                <Route path="/users/:username" element={<ProfileView
                  user={this.state.user}
                  onBackClick={() => history.goBack()}
                />}
                />
              </Route>
            </Routes>
          </Row>
        </Container>
      </BrowserRouter>

    );
  }
}

export default MainView;

