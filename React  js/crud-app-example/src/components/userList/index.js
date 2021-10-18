import React, { Component } from "react";
import axios from "axios";
export default class UserList extends Component{

    state ={
        user : []
    }
    handleInputChange = (e) => {

        const name = e.target.value
        this.setState({
            user : name

        })
    }
    saveUser = (e) => {
        
        e.preventDefault();
        const name = this.state.user
        axios.post('http://localhost:3004/Users/',{name})
        .then (res => {
            console.log(res.data);
        })
    }

    render(){

        return(

            <div>
            <input type='text' name='user' onChange={this.handleInputChange} placeholder='enter usernaame' />
            <button onClick={this.saveUser}>Submit</button>
            </div>
        )

    }

   
    
}