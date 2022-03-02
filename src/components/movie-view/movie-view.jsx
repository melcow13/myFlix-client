import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const MovieView = (props) => {
  const movie = props.movies.find(m => m._id === ownProps.match.params.id)
  

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