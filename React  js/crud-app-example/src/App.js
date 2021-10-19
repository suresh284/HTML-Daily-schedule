import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Members from './components/memberslist';
//import list from './components/memberslist';
import UserList from './components/UserList'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'; 
import EditUsers from './components/EditUsers';
import Navigation from './components/Navigation';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navigation />
        <Switch>
          <Route exact path='/' component={Members} />
          <Route exact path='/userlist' component={UserList} />
          <Route exact path='/edituser/:id/:name' component={EditUsers} />
        </Switch>      
      </Router>      
    </div>
  );
}

export default App;
