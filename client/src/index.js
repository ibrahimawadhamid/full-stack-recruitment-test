import 'bpk-stylesheets';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

import SearchHandlerReducer from './store/reducers/SearchHandler';
import App from './components/App';

// noinspection ES6ModulesDependencies
// noinspection ES6ModulesDependencies
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null : compose;
const store = createStore(SearchHandlerReducer, composeEnhancers(
  applyMiddleware(thunk)
));
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

