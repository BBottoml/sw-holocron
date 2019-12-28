import React, { Component } from 'react';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'


export default class Content extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            success: "none",
            failure: "none",
            sending: "none"
        }
    }


    onSubmit(e) {
        e.preventDefault() 

        this.setState({
            sending: ""
        })

        const handle = document.getElementById('handle').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value
        

        axios({
            method: "POST",
            url: "/api/content-form",
            data: {
                handle: handle,
                email: email,
                message: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
               // alert("Message Sent."); 
                this.setState({
                    success: "",
                    sending: "none"
                })
                this.resetForm()
            }else if(response.data.msg === 'fail'){
               // alert("Message failed to send.")
               this.setState({
                failure: "",
                sending: "none"
            })
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render() {
        return(
            <div>

                <div className="text-center">
                    <h1>Submitting Content</h1>
                    <p>Want to have your content featured on Star Wars Holocron? Please fill out the form below</p>
                    <p>Content we're looking for: factoids, trivia, artwork (your personal), or anything interesting!</p>
                    <hr />

                </div>

                <div>
                    <div className="container">
                        <h3>Submit Content:</h3>
                        <Alert style={{"display": this.state.sending}} variant="warning">Submitting...</Alert>
                        <Alert style={{"display": this.state.success}} variant="success">Your content has been submitted successfully!</Alert>
                        <Alert style={{"display": this.state.failure}} variant="danger">Your content was not submitted. Please try again.</Alert>
                        <form onSubmit={this.onSubmit} id="contact-form">
                            <div className="form-group"> 
                            <label>Twitter handle: </label>
                            <input type="text"
                                required
                                className="form-control"
                                id="handle"
                                /> 
                            </div>
                            <div className="form-group"> 
                            <label>Email: </label>
                            <input  type="text"
                                required
                                className="form-control"
                                id="email"
                                />
                            </div>
                            <div className="form-group">
                            <label>Submission (please provide download links to any necessary media in form of Dropbox, Google Drive): </label>
                            <textarea 
                                type="text" 
                                required
                                className="form-control"
                                id="message"
                                rows="10"


                                />
                            </div>

                            <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}