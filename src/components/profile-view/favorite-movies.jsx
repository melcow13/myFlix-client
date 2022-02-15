import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export function FavoriteMovies (favoriteMovieList) {
    return (
        <div>
                <h2>Favorite Movies</h2>
                {favoriteMovieList.map((movies)=> {
                return (
                    <div key={movies._id}>
                        <img src={movies.ImagePath} />
                        <Link to={`/movies/${movies._id}`}>
                            <h4>Movie Title</h4>
                        </Link>
                        <Button variant="secondary" onClick={()=> removeFav(movie._id)}>Remove From List</Button>
                    </div>
                )
            })
        
        }
            </div>  
    )
}
