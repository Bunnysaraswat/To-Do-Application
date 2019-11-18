import React from 'react';
//import logo from './logo.svg';
import Login from "./components/login";
import {Route,BrowserRouter,Switch, Link} from "react-router-dom";

import './App.css';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Switch>
      <Route exact path="/" exact component={Login} />
      <Route exact path="/dashboard" exact component={Dashboard} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
