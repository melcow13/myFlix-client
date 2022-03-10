import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menubar } from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import MovieView from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import ProfileView from '../profile-view/profile-view';
import  GenreView  from '../genre-view/genre-view';
import DirectorView from '../director-view/director-view';
import { Container, Col, Row, Nav } from 'react-bootstrap'
import MoviesList from '../movies-list/movies-list';
import ProtectedRoutes from '../protected-routes/ProtectedRoutes';

// #0
import { setMovies, setUser } from '../../actions/actions';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null

    }
  }
  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.props.setUser(localStorage.getItem('user'));
      // Below code replaced by code above
      // this.setState({
      //   // user is the Username string
      //   user: localStorage.getItem('user'),
      // });
      this.getMovies(accessToken);
      this.getUser(accessToken);
    }
  }

  getMovies(token) {
    axios.get('https://myflixerupper.herokuapp.com/movies', {
      headers: { Authorization: `bearer ${token}`}
    })
    .then(response=>{
      this.props.setMovies(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }

  getUser(token) {
    console.log('get user data');
    const Username = localStorage.getItem('user');
    axios.get(`https://myflixerupper.herokuapp.com/users/${Username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log('user', response.data);
        // Assign the result to the state
        this.props.setUser({ user: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
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
    let { movies, user } = this.props;
    
    return (
      <BrowserRouter>
        <Container>
          <Menubar key={user?.Name} user={user} />
          <Row className="main-view justify-content-md-center">
            <Routes>
              <Route path="/login" element={<LoginView onLoggedIn={user => this.onLoggedIn(user)} />} />
              <Route element={<ProtectedRoutes user={localStorage.getItem('user')} />}>
                <Route path="/" element={<MoviesList movies={movies}/>} />
                <Route path="/movies/:id" element={<MovieView  movies={movies}/>} />
                <Route path="/register" element={<RegistrationView />} />
                <Route path="/genres/:name" element={<GenreView movies={movies}/>} />
                <Route path="/directors/:name" element={<DirectorView movies={movies}/>} />
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
let mapStateToProps = state =>{
  return {
    movies: state.movies,
    user: state.user
  }
}
export default connect (mapStateToProps, {setMovies, setUser} ) (MainView);
