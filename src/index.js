import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import fillingManagementReducer from './reduxStore/reducers/fillingManagementReducer';
import pageManagementReducer from './reduxStore/reducers/pageManagementReducer';
import {Provider} from 'react-redux';

const rootReducer = combineReducers({
    fillingManagement: fillingManagementReducer, 
    pageManagement: pageManagementReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
