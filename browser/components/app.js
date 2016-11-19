import React, { Component } from 'react';
import Navbar from '../containers/navbar';
import Test from '../containers/test';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Test />
      	{this.props.children}
      </div>
    );
  }
}
