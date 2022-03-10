import React, { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap/Card'
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

const GenreView=({movies})=>{
  const [genreDetails, setGenreDetails]=useState()
  const params = useParams()

  useEffect(()=>{
    const genre = movies.find(m => m.Genre.Name === params.name).Genre;
    setGenreDetails(genre)
  },[])

  
    return (
    <Card>
        <Card.Body>
            <Card.Title>{genreDetails.Name}</Card.Title>
            <Card.Text>{genreDetails.Description}</Card.Text>
          </Card.Body>
        <Button onClick={()=> {onBackClick(null);}}>Back</Button>
    </Card>
    );
  }


const mapStateToProps = state => {
  const { movies } = state
  return { movies };
};

export default connect(mapStateToProps)(GenreView);