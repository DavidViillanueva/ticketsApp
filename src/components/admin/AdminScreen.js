import React from 'react';
import AdminTab from './AdminTab';
import Sidebar from './Sidebar';

const AdminScreen = () => {
	return (
		<>
			<div className="admin__screen">
				<Sidebar />

				<div className="admin__panel">
					<div className="admin__tabs row mt-5">
						<AdminTab title="Precargas nuevas" cant={2} />

						<AdminTab title="Ordenes de trabajo" cant={3} />

						<AdminTab title="Trabajos a entregar" />
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminScreen;
