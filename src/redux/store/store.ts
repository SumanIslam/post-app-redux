import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import { postReducer } from '../reducers/postReducer';

// combine middleware
const middlewares = [reduxThunk]

export const store = createStore(postReducer, composeWithDevTools(applyMiddleware(...middlewares)));