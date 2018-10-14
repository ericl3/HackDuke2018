import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Login from "./components/layout/login";
import Register from "./components/layout/register";
import Dashboard from "./components/layout/dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path ="/" component = {Login} />
          <Route exact path ="/register" component = {Register} />
          <Route exact path ="/dashboard" component = {Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
