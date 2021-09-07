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
import UserRouter from './UserRouter';
import LoadingScreen from '../components/common/LoadingScreen';
import AdminRouter from './AdminRouter';

const AppRouter = () => {
	const dispatch = useDispatch();

	const [isLogged, setIsLogged] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		firebase.auth().onAuthStateChanged(async user => {
			if (user?.uid) {
				dispatch(login(user.uid));
				setIsLogged(true);
				setLoading( false );
			} else {
				setIsLogged(false);
				setLoading(false);
			}
		});
	}, [dispatch,setLoading,setIsLogged]);

	if( loading ){
		return(
			<LoadingScreen />
		)
	}

	return (
		<Router>
			<Switch>
				<PublicRoute path="/login" component={LoginScreen} isAutenticated={isLogged} />

				<PublicRoute path="/user" component={ UserRouter } isAutenticated={isLogged} />

				<PrivateRoute path="/admin" component={AdminRouter} isAutenticated={isLogged} />

				<Redirect to="/admin" />
			</Switch>
		</Router>
	);
};

export default AppRouter;
