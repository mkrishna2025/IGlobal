import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './containers/home.js';
import ContactUs from './containers/contactus';

import { Route, Switch } from 'react-router-dom';

class Login extends Component{
  render(){
    return <div> Welcome to Login</div>;
  }
}

class UnImplemented extends Component{
  render(){
    return <div> Need to be Implemented</div>;
  }
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;
