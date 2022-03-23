import {React, useState, useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {Link, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';

export function FavoriteMovies (props) {
  const {favoriteMovieList } = props
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

  const faveMovies = movies.filter(mov => {favoriteMovieList.indexOf(mov._id) !== -1})
    return (
        <div>
                <h2>Favorite Movies</h2>
                {favoriteMovieList.map((m)=> {
                return (
                    <div key={m._id}>
                        <img src={movie.ImagePath} />
                        <Link to={`/movies/${movie._id}`}>
                            <h4>Movie Title</h4>
                        </Link>
                        <Button variant="secondary" onClick={()=> removeFavorites(movie._id)}>Remove From List</Button>
                    </div>
                )
            })
        
        }
            </div>  
    )
}
