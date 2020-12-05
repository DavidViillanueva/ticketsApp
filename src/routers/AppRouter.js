//importaciones de 3ros
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//utilidades propias
import { firebase } from '../firebase/firebaseConfig';
import { login } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

//componentes propios
import LoginScreen from '../components/auth/LoginScreen';
import AdminScreen from '../components/admin/AdminScreen';
import SelectDeviceScreen from '../components/tickets/SelectDeviceScreen';

const AppRouter = () => {
	const dispatch = useDispatch();

	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async user => {
			if (user?.uid) {
				dispatch(login(user.uid));
				setIsLogged(true);
			} else {
				setIsLogged(false);
			}
		});
	}, [dispatch]);

	return (
		<Router>
			<Switch>
				<PublicRoute path="/login" component={LoginScreen} isAutenticated={isLogged} />

				<PublicRoute path="/select" component={SelectDeviceScreen} isAutenticated={isLogged} />
				<PrivateRoute path="/admin" component={AdminScreen} isAutenticated={isLogged} />

				<Redirect to="/select" />
			</Switch>
		</Router>
	);
};

export default AppRouter;
