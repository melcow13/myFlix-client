import React from 'react';
import {Card, Button} from 'react-bootstrap/Card'

export class DirectorView extends React.Component {

componentDidMount(){
  document.addEventListener('keypress',event=> {
    console.log(event.key);
  });
}


  render() {
    const { director, onBackClick } = this.props;

    return (
    <Card>
        <Card.Img variant="top" src={director.ImagePath} />
        <Card.Body>
            <Card.Title>{director.Name}</Card.Title>
            <Card.Text>{director.Description}</Card.Text>
            <Card.Subtitle>{director.Birthday} </Card.Subtitle>
          </Card.Body>
        <Button onClick={()=> {onBackClick(null);}}>Back</Button>
    </Card>
    );
  }
}