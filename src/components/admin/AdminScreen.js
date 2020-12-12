import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadPreloads } from '../../actions/preloads';
import LoadingScreen from '../common/LoadingScreen';
import Active from './Active';
import AdminTab from './AdminTab';
import List from './List';
import Sidebar from './Sidebar';

const AdminScreen = () => {

	const dispatch = useDispatch();
	const { preloads } = useSelector(state => state.preload)
	const { active } = useSelector(state => state.ui);


	const handleClick = (e, id) => {

	}

	useEffect(() => {

		dispatch( startLoadPreloads() );

	}, [dispatch])

	return (
		<>
			<div className="admin__screen">
				<Sidebar />

				{(active) 
					?
						<Active />
					:
						<div className="admin__panel">
							<div className="admin__tabs row mt-5">
								<AdminTab 
									title="Precargas" 
									cant={ preloads.length }
									onClick={ handleClick } 
									id={0}
								/>
								<AdminTab 
									title="Ordenes de trabajo" 
									cant={3}
									onClick={ handleClick } 
									id={1}
								/>

								<AdminTab 
									title="Trabajos a entregar" 
									onClick={ handleClick }
									id={2}
								/>
							</div>
			
							{(preloads.length>0)?
								<List items={ preloads } />
								:
								<LoadingScreen />

							}
						</div>
				}

			</div>
		</>
	);
};

export default AdminScreen;
