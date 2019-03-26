import React, { Component } from 'react';
import Leads from '../Leads';
import './App.css';

export interface IAppProps {}

export interface IAppStateProps {}

export interface IAppDispatchProps {}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Leads />
      </div>
    );
  }
}

export default App;
