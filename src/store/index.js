/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export const store = createStore(createReducer, applyMiddleware(thunk));
