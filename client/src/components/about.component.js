import React, { Component } from 'react' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import kylo from '../images/kylo.jpeg'
import obi from '../images/obi.jpg'
import solo from '../images/solo.jpeg'
import anakin from '../images/anakin.jpg'

export default class About extends Component {


    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>About Us</h1>
                    <p>Meet the team behind Star Wars Holocron!</p>
                    <hr />
                    <Row>
                        <Col>
                            <Card>
                            <Card.Img variant="top" src={kylo} />
                            <Card.Body>
                                <Card.Title>Josh</Card.Title>
                                <Card.Text>
                                Favorite Star Wars movie: The Force Awakens <br />
                                Favorite Star Wars character: Kylo Ren/Ben Solo
                                </Card.Text>
                                <Button href="https://twitter.com/JWBGMC123" variant="primary">Twitter</Button>
                            </Card.Body>
                            </Card>     
                        </Col>
                        <Col>
                        <Card>
                        <Card.Img variant="top" src={solo} />
                            <Card.Body>
                                <Card.Title>George</Card.Title>
                                <Card.Text>
                                Favorite Star Wars movie: The Empire Strikes Back <br />
                                Favorite Star Wars character: Han Solo
                                </Card.Text>
                                <Button href="https://twitter.com/JWBGMC123" variant="primary">Twitter</Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={anakin} />
                            <Card.Body>
                                <Card.Title>William</Card.Title>
                                <Card.Text>
                                Favorite Star Wars movie: Revenge of the Sith <br />
                                Favorite Star Wars character: Anakin Skywalker
                                </Card.Text>
                                <Button href="https://twitter.com/JWBGMC123" variant="primary">Twitter</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                        <Col>
                        <Card>
                            <Card.Img variant="top" src={obi} />
                            <Card.Body>
                                <Card.Title>Julie</Card.Title>
                                <Card.Text>
                                Favorite Star Wars movie: A New Hope <br />
                                Favorite Star Wars character: Obi-Wan Kenobi
                                </Card.Text>
                                <Button href="https://twitter.com/JWBGMC123" variant="primary">Twitter</Button>
                            </Card.Body>
                        </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}