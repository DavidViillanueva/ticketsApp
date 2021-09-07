import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { preloadsReducer } from '../reducers/preloadsReducer';
import { ticketReducer } from '../reducers/ticketReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

//importamos los reducers
const reducers = combineReducers({
	auth: authReducer,
	ui: uiReducer,
	preload: preloadsReducer,
	tickets: ticketReducer
});

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
