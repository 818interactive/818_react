import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/main/App';

import Home from './components/web/Home';
import About from './components/web/About';
import Contact from './components/web/Contact';
import Faq from './components/web/Faq';
import Terms from './components/web/Terms';
import PrivacyPolicy from './components/web/PrivacyPolicy';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="/home" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/faq" component={Faq} />
			<Route path="/terms" component={Terms} />
			<Route path="/privacy-policy" component={PrivacyPolicy} />
		</Route>
	</Router>,
  document.getElementById('interactive_root')
);
