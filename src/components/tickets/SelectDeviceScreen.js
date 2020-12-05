import React from 'react';

const SelectDeviceScreen = () => {
	const handleSetDevice = e => {
		console.log(e.target);
	};

	return (
		<div className="containerCenter">
			<div className="user__optionDevice" onClick={handleSetDevice} name="iphone">
				<i className="fas fa-mobile-alt fa-4x"></i>
				Iphone
			</div>

			<div className="user__optionDevice" onClick={handleSetDevice} name="macbook">
				<i className="fas fa-laptop fa-4x"></i>
				MacBook
			</div>
		</div>
	);
};

export default SelectDeviceScreen;
