import axios from "axios";
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        axios.get('https://myflixerupper.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then(response => {
                setMovies(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h2>Movies List</h2>
            <Row className="main-view justify-content-md-center">
                {
                    movies.map(m => (
                        <Col key={m._id} md={4}>
                            <MovieCard movie={m} />
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}

export default Movies;