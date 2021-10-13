import React, { Component } from "react";
import axios from "axios";
export default class UserList extends Component{

    state ={
        user : []
    }
    handleInputChange = (e) => {

        const user = e.target.value
        this.setState({
            user : user

        })
    }
    saveUser = (e) => {
        
        e.preventDefault();
        const user = this.state.user
        axios.post('http://localhost:3004/Users/',{user})
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