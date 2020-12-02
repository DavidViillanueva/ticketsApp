import React from 'react';
import useForm from '../../hooks/useForm';

const LoginScreen = () => {
	const [formValues, handleInputChange] = useForm({
		user: '',
		password: '',
	});

	const { user, password } = formValues;

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className="containerCenter">
			<form className="auth__loginBlock" onSubmit={handleSubmit}>
				<h2>Login</h2>

				<input
					type="text"
					autoComplete="off"
					name="user"
					placeholder="User"
					onChange={handleInputChange}
					value={user}
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
