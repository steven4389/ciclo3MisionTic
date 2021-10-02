import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home"  component={Home}/>
          <Route exact path="/"  component={Login}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
