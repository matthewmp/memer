import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

import store from './store';

import App from './App';
import Upload from './components/Upload';
import Search from './components/Search';
import Background from './components/Background';
import Editor from './components/Editor';



ReactDOM.render(
	<Provider store = {store}>
		<HashRouter>
			<div>
				<Route exact path = '/' component={App} />
				<Route exact path = '/upload' component={Upload} />
				<Route exact path = '/search' component={Search} />
				<Route exact path = '/set-background' component={Background} />
				<Route exact path = '/editor' component={Editor} />
			</div>
		</HashRouter>
	</Provider>, document.getElementById('root')
);

