import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import devToolsEnhancer from 'remote-redux-devtools';

import snapshotReducer from './snapshot-reducers';
import counterReducer from './counter-reducers';

const RootReducer=combineReducers({
    snapshot:snapshotReducer, 
    counter:counterReducer});

const logger = store => {
    return next => {
        return action => {
            console.log("[middleware] before dispatching", action, store.getState());
            const result = next(action);
            console.log("[middleware] after dispatching", action, store.getState());
            return result
        }
    }
}

const customEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(
 RootReducer, /* preloadedState, */
 customEnhancers(applyMiddleware(logger)),
);
/* eslint-enable */
console.log(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
