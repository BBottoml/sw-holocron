import React, { Component } from 'react';

export default class Footer extends Component {


    render() {

        return (
            
            <div className="text-center">
                <p style={{"position": "relative", "bottom": "0"}}>
                    &copy; Star Wars Holocron | Built by <a href="https://bradleybottomlee.com">Bradley Bottomlee</a>
                </p>
            </div>
    
        )
    }

}