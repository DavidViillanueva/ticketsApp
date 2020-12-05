import { firebase } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const startLoginWithEmailPassword = (email, password) => {
	return dispatch => {
		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(({ user }) => {
				dispatch(login(user.uid));
			})
			.catch(e => {
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
	type: types.logout,
});
