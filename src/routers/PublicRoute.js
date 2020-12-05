import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ isAutenticated, component: Component, ...rest }) => {
	return (
		<Route {...rest} component={props => (!isAutenticated ? <Component {...props} /> : <Redirect to="/admin" />)} />
	);
};

PublicRoute.propTypes = {
	isAutenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};

export default PublicRoute;
