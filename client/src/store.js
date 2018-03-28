import { createStore, compose, applyMiddleware } from 'redux';
import applyMiddleware from 'redux-devise-axios'; //for token auth
import axios from 'axios';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const options = { axios };

const enhancers = compose(
  applyMiddleware(thunk, applyMiddleware(options)),
  window.devToolsExtension ?
    window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
