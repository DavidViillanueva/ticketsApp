import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/auth';

const Sidebar = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(startLogout());
	};

	return (
		<aside className="admin__sidebar">
			<button className="btn admin__sidebarBtn">
				
				<h3>Activar precarga</h3>
			</button>

			{/* AdminRouter */}
			<Link to="/admin/ticket-add">
				<button className="btn admin__sidebarBtn">
					<h3>Agregar trabajo</h3>
				</button>
			</Link>


			<button className="btn admin__sidebarBtn">
				<h3>Finalizar trabajo</h3>
			</button>
			<button className="btn  admin__sidebarBtnEnd admin__sidebarBtn" onClick={handleLogout}>
				<h3>Logout</h3>
			</button>
		</aside>
	);
};

export default Sidebar;
