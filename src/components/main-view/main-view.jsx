import React from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menubar } from '../navbar/navbar';
import { LoginView } from '../login-view/login-view';
import MovieView from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';
import ProfileView from '../profile-view/profile-view';
import GenreView from '../genre-view/genre-view';
import DirectorView from '../director-view/director-view';
import { Container, Row } from 'react-bootstrap'
import MoviesList from '../movies-list/movies-list';
//redux
import { connect } from 'react-redux';
import { setMovies, setUser } from '../../actions/actions';
import "../main-view/main-view.scss";

class MainView extends React.Component {
  constructor() {
    super();

    this.state = {
      userData: null

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
      this.getUserData(accessToken);
    }
  }

  getMovies(token) {
    axios.get('https://myflixerupper.herokuapp.com/movies', {
      headers: { Authorization: `bearer ${token}` }
    })
      .then(response => {
        this.props.setMovies(response.data);
      })
      .catch((error)=> {
        console.log(error);
      });
  }

  getUserData(token) {
    console.log('get user data');
    const Username = localStorage.getItem('user');
    axios.get(`https://myflixerupper.herokuapp.com/users/${Username}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(response => {
        console.log('user', response.data);
        // Assign the result to the state
        this.setState({ userData: response.data });

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

  addFavorites(movie) {
    let favorites = this.state.userData.FavoriteMovies;
    if (favorites.indexOf(movie) < 0) {
      favorites.push(movie)
    }

    this.setState(prevState => ({
      ...prevState,
      userData: {
        ...prevState.userData,
        FavoriteMovies: favorites
      }
    }));
  }

  removeFavorites(movieId) {
    let currentFav = this.state.userData.FavoriteMovies;
    let favorites = currentFav.filter(mId => {
      return mId !== movieId
    });
    let userData = { ...this.state.userData };
    userData.FavoriteMovies = favorites;
    this.setState({ userData });
  }


  render() {
    let { movies, user } = this.props;
    let userData = this.state;

    return (
      <BrowserRouter>
        <Container>
          <Menubar key={user?.Name} user={user} />
          <Row className="main-view justify-content-md-center">
            <Routes>
              <Route path="/login" element={<LoginView onLoggedIn={user => this.onLoggedIn(user)} />} />
              <Route path="/" element={<MoviesList movies={movies} addFavorite={this.addFavorites} />} />
              <Route path="/movies/:id" element={<MovieView movies={movies} />} />
              <Route path="/register" element={<RegistrationView />} />
              <Route path="/genres/:name" element={<GenreView movies={movies} onBackClick={() => this.props.history.goBack()} />} />
              <Route path="/directors/:name" element={<DirectorView movies={movies} onBackClick={() => this.props.history.goBack()} />} />
              <Route exact path="/users/:username" element={<ProfileView
                user={userData}
                onBackClick={() => this.props.history.goBack()}
                removeFavorites={this.removeFavorites}
              />}
              />
            </Routes>
          </Row>
        </Container>
      </BrowserRouter>

    );
  }
}
let mapStateToProps = (state) => {
  return {
    movies: state.movies,
    user: state.user
  }
}
export default connect(mapStateToProps, { setMovies, setUser })(MainView);
