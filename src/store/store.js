import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { preloadsReducer } from '../reducers/preloadsReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//importamos los reducers
const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	preload: preloadsReducer
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
