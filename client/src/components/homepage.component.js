import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import backimg from '../images/backgroung-omg.jpg'


export default class HomePage extends Component {

    render() {
        const jumbotronStyle1 = {
            "backgroundImage": `url(${backimg})`,
            "backgroundPosition": "50% 90%",
            "color": "white", 
        }
        const jumbotronStyle2 = {
            "backgroundColor": "black",
            "color": "yellow",
            "marginBottom": "0"
        }
        return(
            <div>
                <Jumbotron style={jumbotronStyle1}>
                    <div className="text-center">
                        <h1>Hello There!</h1>
                        <div className="container">
                            <p>
                            We are Star Wars Holocron, a Twitter account started in August 2017. 
                            We love all of Star Wars and aim to spread positivity about it in the 
                            fan community. We post quotes, trivia facts, behind the scenes photos, 
                            shots, news, and characters of the day from all of the movies and TV shows. 
                            We also run other twitter accounts dedicated to Marvel, DC, and horror films. 
                            This account is run by 4 individuals: Josh, George, William, and Julie. Want to contact us? 
                            Try tweeting or emailing us! Thanks and May The Force Be With You!
                            </p>
                        </div>
                        <p className="buttons">
                        <Link to="/about">
                            <Button variant="primary">About Us</Button>
                        </Link>
                        </p>
                    </div>
                </Jumbotron>
        

                <div className="container">
                    <h3>Recent Content:</h3>
                    <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="sw_holocron"
                        noHeader
                        noFooter
                        noScrollbar
                        noBorders
                        placeholder="Executing Order 66..."
                        options={{height: 600}}
                    />
                </div>

                <Jumbotron style={jumbotronStyle2}>
                        <h1><b>Now young Skywalker...</b></h1>
                            <p>
                                Be sure to follow us on Twitter for the best Star Wars trivia, factoids, and artwork!
                            </p>
                        <p>
                            <a href="https://twitter.com/sw_holocron">
                                <Button variant="warning"><i className="fab fa-twitter">&nbsp;</i>@SW_Holocron</Button>
                            </a>
                        </p>

                </Jumbotron>

                <div style={{
                    "marginTop": "2%"
                }}>
                    <div className="text-center">
                        <h3>Before you go...</h3>    
                        <p>Be sure to check out our other accounts!</p><hr />     
                    </div>
                </div>
                <Row>
                    <Col>    
                        <div className="selfCenter spaceBetween fullWidth">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="mar_tesseract"
                                noHeader
                                noFooter
                                noScrollbar
                                noBorders
                                placeholder="I can do this all day..."
                                options={{height: 400}}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="selfCenter spaceBetween standardWidth">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="DCMotherbox"
                                noHeader
                                noFooter
                                noScrollbar
                                noBorders
                                placeholder="You either die a hero, or live long enough to see yourself become a villain..."
                                options={{height: 400}}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="selfCenter spaceBetween standardWidth">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="horrornecronom"
                                noHeader
                                noFooter
                                noScrollbar
                                noBorders
                                placeholder="Here's Johnny!..."
                                options={{height: 400}}
                            />
                        </div>
                    </Col>
                </Row>

            </div>

        )
    }

}