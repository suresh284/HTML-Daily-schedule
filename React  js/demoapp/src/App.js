//import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';
import AppFooter from './components/AppFooter';


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
    </div>
  );
}

export default App;
