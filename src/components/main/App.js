import React, { Component } from 'react';
import { 
  Link, 
  Element, 
  Events, 
  animateScroll, 
  scrollSpy } from 'react-scroll';

import Home from '../web/Home';
import About from '../web/About';
import Contact from '../web/Contact';

import CurveUp from '../struct/CurveUp';
import Footer from '../struct/Footer';

import './app.css';

class App extends Component {
  componentDidMount() {
    scrollSpy.update();
  }

  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  scrollToTop=()=> {
    animateScroll.scrollToTop();
  }

  render() {
    return (
      <div>

        {/* Home Component */}
        <Element className="element" name="home">
          <Home/>
        </Element>
        <CurveUp/>
        {/* About Component */}
        <Element className="element" name="about">
          <About/>
        </Element>

        {/* Contact Component */}
        <Element className="element" name="contact">
				  <Contact/>
        </Element>

        {/* Footer Component */}
      	<Footer/>

        <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={700}>
          Go to first  inside container
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={700}>
          Go to first  inside container
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={700}>
          Go to first  inside container
        </Link>
 
        <a onClick={this.scrollToTop}>To the top!</a>
        <br/>
        <a onClick={this.scrollToBottom}>To the bottom!</a>
        <br/>
        <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
      </div>
    );
  }
}

export default App;
