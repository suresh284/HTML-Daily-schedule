import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
export default class Navigation extends Component{


    render(){

        return(

           <div class="Nav">
               <ul>
               <li><Link to='/' class='Link'>Home</Link></li>
               <li><Link to='/About' class='Link'>About</Link></li>
               <li><Link to='/Contact' class='Link'>Contact</Link></li>
               <li><Link to='/Players' class='Link'>Players</Link></li>
           </ul>
           </div>
        )
    }



}