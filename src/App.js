import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Clock from './Clock';
import LoginControl from './LoginControl';
import FilterableProductTable from './ProductTable';
import DiscussionApp from './components/DiscussionApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
            <LoginControl />
            <hr/>
            <Clock name="sun" />
            <Clock name="may" />
            <hr/>
            <FilterableProductTable />
            <hr/>
            <DiscussionApp />
        </div>
      </div>
    );
  }
}

export default App;
