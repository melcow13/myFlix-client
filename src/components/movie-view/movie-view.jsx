import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MovieView = (props) => {
  const [movie, setMovie] = useState(null);
  const params = useParams()

  useEffect(() => {
    if (params.id) {
      getMovies(params.id)
    }
  }, [])


  const getMovies = (id) => {
    axios.get('https://myflixerupper.herokuapp.com/movies/', {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(response => {

        if (response?.data?.length > 0) {
          let movieData = response?.data?.find(m => m._id === id);
          setMovie(movieData);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{movie?.Title}</Card.Title>
          <Card.Text>{movie?.Description}</Card.Text>
        </Card.Body>
        <Link to={`/directors/${movie?.Director?.Name}`}>
          <Button variant="link">Director</Button>
        </Link>
        <Link to={`/genres/${movie?.Genre?.Name}`}>
          <Button variant="link">Genre</Button>
        </Link>
        <Button>Back</Button>
      </Card>
    </div>
  );
}



export default MovieView;