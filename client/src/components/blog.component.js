import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default class Blog extends Component {

    render() {
        return(
            <Jumbotron>
            <h1>Patience you must have, my young padawan...</h1>
                <p>
                    The Blog is still a work in progress! Stay tuned for more information.
                    In the meantime, be sure to follow us on Twitter for any and all updates.
                </p>
                <p>
                <Link to="/">
                    <Button variant="warning">Take me Home</Button>
                </Link>
                </p>
            </Jumbotron>

        )
    }
    
}