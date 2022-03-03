import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class MovieView extends React.Component {
  render() {
    const {movie} = this.props;
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

  }

  
  

  

export default MovieView;