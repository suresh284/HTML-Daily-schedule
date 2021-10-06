import React from "react";
import {Link} from 'react-router-dom';
export default function Players (props){

        const renderPlayers= () => {
    
            return props.players.map((player) =>(
                <li><Link to={"/Players/" +player.id+ "/" +player.Name+ "/" +player.img}> {player.Name}</Link></li>
            ))
        }
    
        return(
            <div>
                 <h2> Team Memebers </h2>
                 <br/> 
                 <ul> 
                 {renderPlayers()} 
                 </ul>
            </div>       
        )
    }


    //