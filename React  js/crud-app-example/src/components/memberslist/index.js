import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './index.css'

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

    deleteUser = (e) => {
        e.preventDefault();
        const id = e.target.id;
        axios.delete('http://localhost:3004/Users/'+id)
        .then(res => {
            console.log(res.data);
            setTimeout(()=>{
                window.location.reload('/')
            },500)
        })

    }


    render(){

        return(

            <div>
            <h1> Members </h1>
            {this.state.Users.map((user) => (
                <div>
                    <li id={user.id}>{user.name}</li>
                    <Link to={'/edituser/'+user.id+'/'+user.name} className='btn'> Edit </Link>
                    <button id={user.id} onClick={this.deleteUser} className='btn'> Delete</button>
                </div>
            ))}
            </div>
        )

    }

   
    
}