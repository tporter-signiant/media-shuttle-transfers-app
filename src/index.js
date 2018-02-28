import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {responsiveStoreEnhancer} from 'redux-responsive';
import reducer from './reducer';
import ActiveTransfers from './containers/ActiveTransfers';
import 'typeface-roboto';
import './styles.css';

/* eslint-disable no-undef */

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middlewares = [
    thunkMiddleware
];

const enhancers = [
    responsiveStoreEnhancer,
    applyMiddleware(...middlewares)
];

const store = createStore(reducer, composeEnhancers(...enhancers));

ReactDOM.render(
    <Provider store={store}>
        <ActiveTransfers/>
    </Provider>,
    document.getElementById('app')
);
