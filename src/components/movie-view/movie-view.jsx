import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MovieView = ({movies}) => {
  const [movieDetails, setMovieDetails]=useState()
  const params = useParams()

  useEffect(() => {
    const movie = movies.find(m => m._id === params.id)
    setMovieDetails(movie)
  }, [])

  return (
    <div>
      <Card>
        {movieDetails?.ImagePath && <Card.Img variant="top" src={movieDetails?.ImagePath} />}
        <Card.Body>
          <Card.Title>{movieDetails?.Title}</Card.Title>
          <Card.Text>{movieDetails?.Description}</Card.Text>
        </Card.Body>
        <Link to={`/directors/${movieDetails?.Director?.Name}`}>
          <Button variant="link">Director</Button>
        </Link>
        <Link to={`/genres/${movieDetails?.Genre?.Name}`}>
          <Button variant="link">Genre</Button>
        </Link>
        <Button>Back</Button>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  const { movies } = state
  return { movies };
};

export default connect(mapStateToProps)(MovieView);