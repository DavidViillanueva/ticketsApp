import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';


import { startLoginWithEmailPassword } from '../../actions/auth';
import { setErrorMessage } from '../../actions/ui';
import useForm from '../../hooks/useForm';

const LoginScreen = () => {


	const dispatch = useDispatch();
	const { msgError, loading } = useSelector(state => state.ui)

	const [formValues, handleInputChange] = useForm({
		email: 'email@test.com.ar',
		password: '123456',
	});

	const { email, password } = formValues;

	const handleSubmit = e => {
		e.preventDefault();
		if( isFormValid()) {
			dispatch(startLoginWithEmailPassword(email, password));
		}
	};
	
	const isFormValid = () => {
		if( !validator.isEmail(email)) {
			dispatch( setErrorMessage('Email invalid') );
			return false;
		}

		return true;
	}

	return (
		<div className="containerCenter">
			<form className="forms__formColumn" onSubmit={handleSubmit}>
				<h2>Login</h2>
				{msgError &&
					<div className="msg msgError">
						<p>{ msgError }</p>
					</div>
				}
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

				{(loading)
					?(
						<div className="forms__btn centerDiv">
							<div className="loadingIconSmall loadingIconDark loading"></div>
						</div>
					)
					:(
						<button type="submit" className="btn forms__btn">
							Login
						</button>
					)
				}
			</form>
		</div>
	);
};

export default LoginScreen;
