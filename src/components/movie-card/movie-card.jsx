import React from 'react';
import PropTypes from 'prop-types';
import {Button , Card} from 'react-bootstrap';
import axios from 'axios';

import { Link } from 'react-router-dom';

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
      <Card>
         
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Description}</Card.Text>
            <Link to={`/movies/${movie._id}`}>
            <Button variant="link">Open</Button>
          </Link>
          <Button className="button_card_main-view"
                    style={{ margin: "10px" }}
                    size="sm"
                    type="submit"
                    variant="outline-info"
                    onClick={addtoFavorites}>
                    Favorite it
                  </Button>
          </Card.Body>
      </Card>
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
