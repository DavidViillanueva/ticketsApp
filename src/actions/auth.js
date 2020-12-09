import { firebase } from '../firebase/firebaseConfig';
import { types } from '../types/types';
import { finishLoading, startLoading } from './ui';

export const startLoginWithEmailPassword = (email, password) => {
	return dispatch => {
	dispatch( startLoading() );
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid));
				dispatch( finishLoading());
			})
			.catch(e => {
				dispatch( finishLoading());
				console.log(e);
			});
	};
};

export const startLogout = () => {
	return async dispatch => {
		await firebase.auth().signOut();
		dispatch(logout);
	};
};

//acciones internas

export const login = uid => ({
	type: types.login,
	payload: {
		uid,
	},
});

export const logout = () => ({
	type: types.logout
});
