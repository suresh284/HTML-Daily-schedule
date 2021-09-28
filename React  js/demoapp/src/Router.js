import React from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Photos from './components/Photos'

function Router(){

    return(
        <Switch>

            <Route path="/" component={App}/>
            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Photos" component={Photos}/>

        </Switch>
    )
}

export default Router;