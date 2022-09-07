import { connect } from 'react-redux';
import {React, useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import "../movie-view/movie-view.scss"

const MovieView = ({movies}) => {
  const [movieDetails, setMovieDetails]=useState()
  const params = useParams()

  useEffect(() => {
    const movie = movies.find(m => m._id === params.id)
    setMovieDetails(movie)
  }, [movies, params.id])

  return (
    <div>
      <Card className="cardview" >
        <Card.Img className="mx-auto d-block" variant="top" src={movieDetails?.ImagePath} style={{ objectFit: 'cover', width: '300px',
    justifyContent:'center'}}/>
        <Card.Body>
          <Card.Title className="card-title">{movieDetails?.Title}</Card.Title>
          <Card.Text>{movieDetails?.Description}</Card.Text>
        </Card.Body>
        <Link to={`/directors/${movieDetails?.Director?.Name}`}>
          <Button variant="danger" style={{margin:"10px"}} size='sm'>Director</Button>
        </Link>
        <Link to={`/genres/${movieDetails?.Genre?.Name}`}>
          <Button variant="danger"  style={{margin:"10px"}} size='sm'>Genre</Button>
        </Link>
        <Button style={{margin:"10px"}} size='lg'>Back</Button>
      </Card>
    </div>
  );
}

const mapStateToProps = state => {
  const { movies } = state
  return { movies };
};

export default connect(mapStateToProps)(MovieView);