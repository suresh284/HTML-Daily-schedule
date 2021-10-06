import React from 'react';
import {Link} from 'react-router-dom';
import './index.css' 
export default function PlayersContainer(props){

    

    return(
        <div>
            <h2>Player details</h2>
           
            <h3>{props.match.params.Name}</h3>
            <img src={require('../../Components/Assets/images/' +props.match.params.img).default} alt=''/>

            <h1><Link to ='/Players'>Back</Link></h1>
            

        </div>
        
    )

 }

