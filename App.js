import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import backgroundImage from './components/layout/pokeballs.png';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Pokemon from './components/pokemons/Pokemon';

class App extends React.Component {
  render() {
   return (
     <Router>
       <div className="App" style={{ background: `url(${backgroundImage})` }}>
         <NavBar />
         <div className="container">
           <Switch>
             <Route exact path="/" component={Dashboard} />
             <Route exact path="/pokemons/:pokeIndex" component={Pokemon} />
           </Switch>
         </div>
       </div>
     </Router>
   )
  }
}

export default App;
