import React from 'react';
import { Link } from 'react-router-dom';

const SelectDeviceScreen = ({ history }) => {

	return (
		<div className="containerCenter user__container">
			<Link to={`/user/deviceInfo/iphone`}>
				<div className="user__optionDevice" name="iphone">
						<i className="fas fa-mobile-alt fa-4x"></i>
						Iphone
				</div>
			</Link>

			<Link to={`/user/deviceInfo/macbook`}>
				<div className="user__optionDevice" name="macbook">
						<i className="fas fa-laptop fa-4x"></i>
						MacBook
				</div>
			</Link>
		</div>
	);
};

export default SelectDeviceScreen;
