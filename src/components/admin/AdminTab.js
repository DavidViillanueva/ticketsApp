import React from 'react';

const AdminTab = ({ cant = null, title, onClick, id ,active}) => {

	return (
		<button
			className={(active)?"admin__tab admin__tabActive pointer":"admin__tab pointer"}
			onClick={ (e) => onClick(e,id) }
		>
			{cant !== null && (
				<div 	
					className="admin__tabBubble"
				>
					<h4>{cant}</h4>
				</div>
			)}
			<h3>{title}</h3>
		</button>
	);
};

export default AdminTab;
