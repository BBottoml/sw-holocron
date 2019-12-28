import React, { Component } from 'react';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'


export default class Contact extends Component {
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

        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value

        

        axios({
            method: "POST",
            url: "/api/contact-form",
            data: {
                name: name,
                email: email,
                subject: subject,
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
                    <h1>Contact Us</h1>
                    <p>Need to contact us? Feel free to fill out the form below or email us at swholocron27@gmail.com</p>
                    <hr />

                </div>

                <div>
                    <div className="container">
                        <h3>Contact Us:</h3>
                        <Alert style={{"display": this.state.sending}} variant="warning">Sending...</Alert>
                        <Alert style={{"display": this.state.success}} variant="success">Your message was sent successfully!</Alert>
                        <Alert style={{"display": this.state.failure}} variant="danger">Your message was not sent. Please try again.</Alert>

                        <form onSubmit={this.onSubmit} id="contact-form">
                            <div className="form-group"> 
                            <label>Name: </label>
                            <input type="text"
                                required
                                id="name"
                                className="form-control"
                                /> 
                            </div>
                            <div className="form-group"> 
                            <label>Email: </label>
                            <input  type="text"
                                required
                                id="email"
                                className="form-control"
                                />
                            </div>
                            <div className="form-group">
                            <label>Subject: </label>
                            <input 
                                type="text"
                                id="subject" 
                                required
                                className="form-control"


                                />
                            </div>
                            <div className="form-group">
                            <label>Message: </label>
                            <textarea 
                                type="text" 
                                required
                                id="message"
                                className="form-control"
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