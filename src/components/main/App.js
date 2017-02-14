import React, { Component } from 'react';

import Header from '../struct/Header';
import Footer from '../struct/Footer';

import './app.css'

class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
      		{ this.props.children }
      	<Footer/>
      </div>
    );
  }
}

export default App;
