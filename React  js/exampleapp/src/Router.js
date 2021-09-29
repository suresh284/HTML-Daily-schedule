import React from 'react';
import {Route, Switch} from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/Contact';
import Photos from './Components/Photos'

function Router(){

    return(
        <Switch>

            <Route path="/About" component={About}/>
            <Route path="/Contact" component={Contact}/>
            <Route path="/Photos" component={Photos}/>

        </Switch>
    )
}

export default Router;