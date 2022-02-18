import React from 'react'
import {Card, Row, Col, Container, Button} from 'react-bootstrap'

function UserInfo ({name, email}) {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Title> User:{name}</Card.Title>
                        <Card.Text> Email:{email}</Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserInfo