
import React from 'react';
import axios from 'axios';
import { Container, Col, Row} from 'react-bootstrap'


import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
          movies: [],

          selectedMovie: null,

          user: null

        }
    }
  
    componentDidMount(){
      axios.get('https://myflixerupper.herokuapp.com/movies')
      .then(response =>{
        this.setState(
          {
            movies:response.data
          });
      })
        .catch(error=>{
          console.log(error);
        });
    }
      
    setSelectedMovie(newSelectedMovie) {
      this.setState({
        selectedMovie: newSelectedMovie
      });
    }

    onLoggedIn(user){
      this.setState({
        user
      });
    }

    

  render() {
    const { movies, selectedMovie, user} = this.state;

    if(!user) return<LoginView on LogggedIn={user=>this.onLoggedIn(user)} />;

    if (movies.length === 0) return <div className="main-view"/>;

    return (
    <div className="main-view">
    {selectedMovie
      ? (
        <Row className="justify-content-md-center">
          <Col md={8}>
            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          </Col>
        </Row>
      )
      : movies.map(movie => (
        <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
      ))
    }
  </div>
    );
  }
}

export default MainView;
