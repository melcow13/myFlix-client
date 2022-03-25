import { React, useState, useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MovieCard } from '../movie-card/movie-card';


export function FavoriteMovies(props) {
  const { favoriteMovieList } = props
  const movies = useSelector((state) => state.movies)

  // export function FavoriteMovies ({favoriteMovieList}) {

  const [movie] = useState();
  //  const params = useParams()

  // useEffect(() => {
  //  if (params.id) {
  //  getMovies(params.id)
  //   }
  // }, [])


  //const getMovies = (id) => {
  //  axios.get('https://myflixerupper.herokuapp.com/movies/${_id}', {
  //  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
  //   })
  // .then(response => {

  // if (response?.data?.length > 0) {
  // let movieData = response?.data?.find(m => m._id === id);
  // setMovie(movieData)
  // }
  // })
  //  .catch(function (error) {
  // console.log(error);
  //  });
  // }

  const faveMovies = movies.filter(mov => favoriteMovieList.indexOf(mov._id) !== -1)

  return (
    <Col md={3}>
      {faveMovies.map((m) => (
        <MovieCard
          movie={m}
        />
      ))}
    </Col>

  )

  return (
    <div>
      <h2>Favorite Movies</h2>
      {faveMovies.map((m) => (
        <div key={m._id}>
          <img src={m.ImagePath} />
          <Link to={`/movies/${m._id}`}>
            <h4>{m.Title}</h4>
          </Link>
          <Button variant="secondary" onClick={() => removeFavorites(m._id)}>Remove From List</Button>
        </div>
      )
      )

      }
    </div>
  )
}
