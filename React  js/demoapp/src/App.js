//import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';
import Router from './Router';





function App() {

  const user = {

    'username' : 'Rakesh',
    'location' : 'Hyd'



  }


  return (
    <div className="App">
     <AppHeader username={user.username} location={user.location}/>
     <AppBody />
     <AppFooter />    
     <Router />
    </div>
  );
}

export default App;
