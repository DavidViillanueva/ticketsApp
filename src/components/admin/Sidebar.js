import React from 'react';

const Sidebar = () => {
	return (
		<aside className="admin__sidebar">
			<button className="btn admin__sidebarBtn">
				<h3>Activar precarga</h3>
			</button>

			<button className="btn admin__sidebarBtn">
				<h3>Agregar trabajo</h3>
			</button>
			<button className="btn admin__sidebarBtn">
				<h3>Finalizar trabajo</h3>
			</button>
			<button className="btn  admin__sidebarBtnEnd admin__sidebarBtn">
				<h3>Logout</h3>
			</button>
		</aside>
	);
};

export default Sidebar;
