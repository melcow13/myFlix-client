import {React, useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {useParams} from 'react-router-dom';

const DirectorView=({movies,onBackClick})=>{
  const [directorDetails, setDirectorDetails]=useState()
  const params = useParams()

  useEffect(()=> {
    const director = movies.find(m => m.Director.Name === params.name);
    setDirectorDetails(director)
  },[movies, params.name])

  
    return (
    <div>
    <Card>
        <Card.Body>
            <Card.Title>{directorDetails?.Director?.Name}</Card.Title>
            <Card.Text>Bio: {directorDetails?.Director?.Bio}</Card.Text>
            <Card.Text>Birth Year: {directorDetails?.Director?.Birth}</Card.Text>
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

export default connect(mapStateToProps)(DirectorView);