import React, { Component } from "react"

class Contact extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    <li>mobile phone: {this.props.mobileNumber}</li>
                    <li>email: {this.props.email}</li>
                    <li>work phone: {this.props.workPhone}</li>
                </ul>
            </div>
            
        )
    }
}

export default Contact;