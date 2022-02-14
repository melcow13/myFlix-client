import React from 'react';
import Card from 'react-bootstrap/Card'

export class MovieView extends React.Component {

componentDidMount(){
  document.addEventListener('keypress',event=> {
    console.log(event.key);
  });
}


  render() {
    const { movie, onBackClick } = this.props;

    return (
    <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Description}</Card.Text>
            <Card.Subtitle>{movie.Director} </Card.Subtitle>
          </Card.Body>
        <button onClick={()=> {onBackClick(null);}}>Back</button>
    </Card>
    );
  }
}