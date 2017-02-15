import React, { Component } from 'react';

import Home from '../web/Home';
import About from '../web/About';
import Contact from '../web/Contact';

import Footer from '../struct/Footer';

import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        {/* Home Component */}
				<Home/>
        {/* About Component */}
				<About/>
        {/* Contact Component */}
				<Contact/>
        {/* Footer Component */}
      	<Footer/>
      </div>
    );
  }
}

export default App;
