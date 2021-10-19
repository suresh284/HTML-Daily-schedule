import React from "react";
import {Link} from 'react-router-dom'
import './index.css'
export default function Navigation() {
    
    return(
        <div className='Navigation'>
            <ul>
                <li><Link to ={'/'} className='navlinks'>All users list</Link></li>
                <li><Link to ={'/userlist'} className='navlinks'>Add user</Link></li>
            </ul>
        </div>
    )
}