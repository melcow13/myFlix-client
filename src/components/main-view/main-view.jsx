
import React from 'react';
import axios from 'axios';

<<<<<<< HEAD
=======
import { LoginView } from '../login-view/login-view';
>>>>>>> main
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


export class MainView extends React.Component {
    constructor(){
        super();
        this.state = {
          movies: [],
<<<<<<< HEAD
          selectedMovie: null
=======
          selectedMovie: null,
          user: null
>>>>>>> main
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
      
<<<<<<< HEAD
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }
=======
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
>>>>>>> main
    

  render() {
    const { movies, selectedMovie, user} = this.state;

    if(!user) return<LoginView on LogggedIn={user=>this.onLoggedIn(user)} />;

    if (movies.length === 0) return <div className="main-view"/>;

    return (
      <div className="main-view">
        {selectedMovie
          ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
          : movies.map(movie => (
            <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
          ))
        }
      </div>
    );
  }
}

export default MainView;
