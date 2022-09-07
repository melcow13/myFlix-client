import { React } from 'react';
import { CardGroup, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { MovieCard } from '../movie-card/movie-card';


export function FavoriteMovies(props) {
  const { favoriteMovieList } = props
  const movies = useSelector((state) => state.movies)

  // export function FavoriteMovies ({favoriteMovieList}) {

  
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

  const faveMovies = movies.filter(mov => favoriteMovieList.indexOf(mov._id) !== -1)

  return (
    <CardGroup>
      <Row xs={1} md={2} className="g-4">
      {faveMovies.map((m) => (
        <Col md={6} style={{ width: '18rem' }}>
          <MovieCard
            movie={m}
          />
        </Col>
      
      ))}
      </Row>
    </CardGroup>



  )

  // return (
  //   <div>
  //     <h2>Favorite Movies</h2>
  //     {faveMovies.map((m) => (
  //       <div key={m._id}>
  //         <img src={m.ImagePath} />
  //         <Link to={`/movies/${m._id}`}>
  //           <h4>{m.Title}</h4>
  //         </Link>
  //         <Button variant="secondary" onClick={() => removeFavorites(m._id)}>Remove From List</Button>
  //       </div>
  //     )
  //     )

  //     }
  //   </div>
  // )
}
