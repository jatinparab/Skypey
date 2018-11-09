import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Main from './Main'
import store from './store'
import  _ from "lodash"
import './App.css';

class App extends Component {
  render() {
    const { contacts } = store.getState();
    return (
      <div className="App">
        <Sidebar contacts={_.values(contacts)}  />
        <Main />
      </div>
    );
  }
}

export default App;
