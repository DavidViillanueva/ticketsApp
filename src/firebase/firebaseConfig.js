import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCbekMHf9x177X4SpdN03lItACpxtUU4tU',
	authDomain: 'ticketsapp-a17bc.firebaseapp.com',
	projectId: 'ticketsapp-a17bc',
	storageBucket: 'ticketsapp-a17bc.appspot.com',
	messagingSenderId: '828650312381',
	appId: '1:828650312381:web:949be31986688375895dd4',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
