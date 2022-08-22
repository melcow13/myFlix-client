import {React, useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

const GenreView=({movies, onBackClick})=>{
  const [genreDetails, setGenreDetails]=useState()
  const params = useParams()

  useEffect(()=> {
    const genre = movies.find(m => m.Genre.Name === params.name);
    setGenreDetails(genre)
  },[])

  
    return (
    <div>
    <Card>
        <Card.Body>
            <Card.Title>{genreDetails?.Genre?.Name}</Card.Title>
            <Card.Text>{genreDetails?.Genre?.Description}</Card.Text>
        </Card.Body>
        <Button onClick={()=> {onBackClick(null);}}>Back</Button>
    </Card>
    </div>  
    );
  }


const mapStateToProps = state => {
  const { movies } = state
  return { movies };
};

export default connect(mapStateToProps)(GenreView);