import React from 'react';
import {Card, Button} from 'react-bootstrap/Card'

export class GenreView extends React.Component {

componentDidMount(){
  document.addEventListener('keypress',event=> {
    console.log(event.key);
  });
}


  render() {
    const { genre, onBackClick } = this.props;

    return (
    <Card>
        <Card.Body>
            <Card.Title>{genre.Name}</Card.Title>
            <Card.Text>{genre.Description}</Card.Text>
          </Card.Body>
        <Button onClick={()=> {onBackClick(null);}}>Back</Button>
    </Card>
    );
  }
}