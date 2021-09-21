import React, { Component } from 'react';
import "./index.css"


export default class vennus extends Component {
    constructor(props){
        super(props);
        this.state = {

            "firstname":"",
            "lastname":"",
            'result': ""
        }
    }
    handleInputChange = (e) =>{
        const target= e.target;
        const name= target.name;
        const value= target.value;
        this.setState({

            [name]: value
        })
        console.log(this.state.firstname);
        console.log(this.state.lastname);
    }

    onSubmit = (e) =>{
        const result = parseInt(this.state.firstname) + parseInt(this.state.lastname);
        this.setState({

            result:result
        })

    }



    render(){
        return (
            <div>
                <input  name="firstname" type="text" onChange={this.handleInputChange} value={this.state.firstname} placeholder="First Name"/><br />
                <input  name="lastname" type="text" onChange={this.handleInputChange} value={this.state.lastname} placeholder="Last Name"/><br />
                <button onClick={this.onSubmit}>Submit</button>
                <br /><br />
                <h3 class="name" >{this.state.firstname} {this.state.lastname}</h3>
                <br /><br />
                <h3>{this.state.result}</h3>
            </div>
            
        )
    }
}