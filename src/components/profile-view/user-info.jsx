import React from 'react'
import {Card, Row, Col, Container} from 'react-bootstrap'

function UserInfo (props) {
    

    console.log({props})
    
    
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Profile Info</Card.Title>
                        <Card.Text>
                        Username:{props.user.userData.Username}<br/>
                        Email:{props.user.userData.Email}<br/>
                        Name:{props.user.userData.Name}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserInfo