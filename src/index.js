import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import store from './store';

import App from './App';
import Upload from './components/Upload';
import Background from './components/Background';
import Editor from './components/Editor';

ReactDOM.render(
	<Provider store = {store}>
		<Router>
			<div>
				<Route exact path = '/' component={App} />
				<Route exact path = '/upload' component={Upload} />
				<Route exact path = '/set-background' component={Background} />
				<Route exact path = '/editor' component={Editor} />
				
			</div>
		</Router>
	</Provider>, document.getElementById('root')
);

