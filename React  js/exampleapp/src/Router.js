import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';
import Players from './Components/Players';
import PlayersContainer from './Container/PlayersContainer';
export default class Router extends Component{
    state = {
        players:[
            {
                'id':1,
                'Name':'Ronaldo',
                'img':'ronaldo.jpg'

            },
            {
                'id':2,
                'Name':'Messi',
                'img':'Messi.jpg'

            },
            {
                'id':3,
                'Name':'Neymar',
                'img':'neymar.jpg'

            },
            {
                'id':4,
                'Name':'Robert',
                'img':'robert.jpg'

            },
            {
                'id':5,
                'Name':'Lampard',
                'img':'lampard.jpg'

            }
        ]
    }
    render(){
    return(
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/About" Component={About}/>
                <Route exact path="/Contact" Component={Contact}/>
                <Route exact path="/Players" render={(props) => <Players {...props} players={this.state.players}/>}/>
                <Route exact path='/Players/:id/:Name/:img' render={PlayersContainer} />
                          
            </Switch>
        </div>
            
        )
    }
}
