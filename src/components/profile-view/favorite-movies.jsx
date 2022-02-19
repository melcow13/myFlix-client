import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export function FavoriteMovies (favoriteMovieList) {

 const [movie, setMovie] = useState(null);
    const params = useParams()

  useEffect(() => {
    if (params.id) {
      getMovies(params.id)
    }
  }, [])


  const getMovies = (id) => {
    axios.get('https://myflixerupper.herokuapp.com/movies/${_id}', {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then(response => {

        if (response?.data?.length > 0) {
          let movieData = response?.data?.find(m => m._id === id);
          setMovie(movieData)
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
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
                        <Button variant="secondary" onClick={()=> removeFav(movie._id)}>Remove From List</Button>
                    </div>
                )
            })
        
        }
            </div>  
    )
}
