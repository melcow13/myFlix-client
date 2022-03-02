import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MovieView = (props) => {
  const movies = props
  const { id } = useParams();
  const movie = movies.find((m) => m._id === id)
  
  

  return (
    <div>
      <Card>
        {movie?.ImagePath && <Card.Img variant="top" src={movie?.ImagePath} />}
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