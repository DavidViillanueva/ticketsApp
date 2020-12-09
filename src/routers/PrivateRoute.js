import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ isAutenticated, component: Component, ...rest }) => {
	return (
		<Route {...rest} component={props => (isAutenticated ? <Component {...props} /> : <Redirect to="/user/type" />)} />
	);
};

PrivateRoute.propTypes = {
	isAutenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

export default PrivateRoute;
