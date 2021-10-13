import React, { Component } from "react";
import axios from "axios";

export default class Members extends Component{

    state ={
        
        Users : []
    }

    componentDidMount(){
        axios.get('http://localhost:3004/Users')
        .then(res =>{
            console.log(res.data);
        
        this.setState({
            Users : res.data
        })
        console.log(this.state.Users)
    })

    }


    render(){

        return(

            <div>
            <h1> Members </h1>
            {this.state.Users.map((user) => (
            <li id={user.id}>{user.name}</li>
            ))}
            </div>
        )

    }

   
    
}