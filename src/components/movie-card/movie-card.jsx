import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../movie-card/movie-card.scss'


export class MovieCard extends React.Component {
  render() {
    const { movie, addFavorites } = this.props;
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    console.log(token, 'token');
    const addtoFavorites = (e) => {
      e.preventDefault();
      console.log('add to Favourite movies');
      axios.post(`https://myflixerupper.herokuapp.com/users/${Username}/favorite/${movie._id}`, {},
        {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(response => {
          console.log(response.data);
          alert("movie added to favourites");
          console.log(movie._id, 'movie id');
          addFavorites(movie._id);
          console.log('after movie id');
        })
        .catch(e => {
          console.log('error adding movie to favourites');
          alert('movie NOT added to favourites');
        });
    };


    return (
      <CardGroup>
        <Card style={{ height: "100%" }} >
          <Card.Img className="card-img-top" src={movie.ImagePath} variant="top" responsive/>
          <Card.Body>
            <Card.Title className="col-17 text-truncate" style={{ fontSize: 16 }}>{movie.Title}</Card.Title>
              <Link to={`/movies/${movie._id}`}>
                <Button variant="danger">View</Button>
              </Link>
              <Button className="button_card_main-view"
                style={{ margin: "10px" }}
                size="sm"
                type="submit"
                variant="warning"
                onClick={addtoFavorites}>
                  Favorite
              </Button>
          </Card.Body>
        </Card>
      </CardGroup>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
      Birthyear: PropTypes.string,
      Deathyear: PropTypes.string
    }),
    Featured: PropTypes.bool,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
  onBackClick: PropTypes.func
};
