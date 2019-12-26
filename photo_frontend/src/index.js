import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';
import { Provider }  from 'react-redux';
// import reducer from './store/reducers/clientReducer'; // this one for now but later I need to make it the combinedReducers()

import rootReducer from './store/reducers/'; // <--- it automaticly finds the index

const middlewares = [thunk]

const store = createStore(rootReducer,applyMiddleware(...middlewares));

ReactDOM.render(<Provider store={store}>
                  <App/>  
                </Provider>,
document.getElementById('root'));


serviceWorker.unregister();
