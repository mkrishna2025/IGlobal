import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom';

class Test1 extends Component{
  render(){
    return <div> Welcome to Page 1</div>;
  }
}

class Test2 extends Component{
  render(){
    return <div> Welcome to Page 2</div>;
  }
}

class Test3 extends Component{
  render(){
    return <div> Welcome to Page 3</div>;
  }
}

class UnImplemented extends Component{
  render(){
    return <div> Need to be Implemented</div>;
  }
}

/*
/page1 matching with 2 routes and loads Test1 and Test3 components
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/page1" component={Test1} />
        <Route path="/page2" component={Test2} />
        <Route path="/page1" component={Test3} />
      </div>
    );
  }
}*/

/*
preferable to use exact key word for parent node if nested node exists
class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/page1" component={Test1} />
        <Route path="/page2" component={Test2} />
        <Route path="/page1/subpage1" component={Test3} />
      </div>
    );
  }
}
*/

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/page1" component={Test1} />
        <Route path="/page2" component={Test2} />
        <Route path="/page3" component={Test3} />
        <Route path="/*" component={UnImplemented} />
      </Switch>
    );
  }
}

export default App;
