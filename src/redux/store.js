import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//Debugger logger
const middlewares = [logger];


//REDUX STORE
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;