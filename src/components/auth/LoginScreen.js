import React from 'react';
import { useDispatch } from 'react-redux';
import { startLoginWithEmailPassword } from '../../actions/auth';
import useForm from '../../hooks/useForm';

const LoginScreen = () => {
	const dispatch = useDispatch();

	const [formValues, handleInputChange] = useForm({
		email: 'email@test.com.ar',
		password: '123456',
	});

	const { email, password } = formValues;

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(startLoginWithEmailPassword(email, password));
	};

	return (
		<div className="containerCenter">
			<form className="auth__loginBlock" onSubmit={handleSubmit}>
				<h2>Login</h2>

				<input
					type="text"
					autoComplete="off"
					name="email"
					placeholder="Email"
					onChange={handleInputChange}
					value={email}
				/>

				<input
					type="password"
					name="password"
					autoComplete="off"
					placeholder="Password"
					onChange={handleInputChange}
					value={password}
				/>

				<button type="submit" className="btn auth__btn">
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginScreen;
