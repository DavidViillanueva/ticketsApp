import React from 'react';

const AdminTab = ({ cant = null, title }) => {
	return (
		<div className="admin__tab pointer">
			{cant !== null && (
				<div className="admin__tabBubble">
					<h4>{cant}</h4>
				</div>
			)}
			<h3>{title}</h3>
		</div>
	);
};

export default AdminTab;
