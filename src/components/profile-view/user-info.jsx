import React from 'react'
import {Card, Row, Col, Container} from 'react-bootstrap'

function UserInfo ({name, email}) {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <Card.Title> User:{name}</Card.Title>
                        <Card.Title> Email:{email}</Card.Title>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default UserInfo