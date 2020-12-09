import React from 'react';
import { Provider } from 'react-redux';
import LoadingScreen from './components/common/LoadingScreen';

import AppRouter from './routers/AppRouter';
import { store } from './store/store';

const TicketsApp = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};

export default TicketsApp;
