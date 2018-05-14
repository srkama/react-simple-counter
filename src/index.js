import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
// import devToolsEnhancer from 'remote-redux-devtools';

import snapshotReducer from './snapshot-reducers';
import counterReducer from './counter-reducers';

const RootReducer=combineReducers({
    snapshot:snapshotReducer, 
    counter:counterReducer});

/* eslint-disable no-underscore-dangle */
const store = createStore(
 RootReducer, /* preloadedState, */
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
console.log(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
