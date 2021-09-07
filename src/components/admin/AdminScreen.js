import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadPreloads } from '../../actions/preloads';
import { startLoadTickets } from '../../actions/tickets';
import LoadingScreen from '../common/LoadingScreen';
import Active from './Active';
import AdminTab from './AdminTab';
import List from './List';
import Sidebar from './Sidebar';

const AdminScreen = () => {

	const dispatch = useDispatch();
	const { preloads } = useSelector(state => state.preload)
	const { tickets } = useSelector(state => state.tickets);
	const { active } = useSelector(state => state.ui);

	const [activeList, setActiveList] = useState('preloads');


	const handleClick = (e, id) => {
		if( id === 0)
			setActiveList('preloads');
		if( id === 1) 
			setActiveList('tickets');
		if( id === 2)
			setActiveList('done')
	}
	
	useEffect(() => {
		
		dispatch( startLoadTickets() );
		dispatch( startLoadPreloads() );

	}, [dispatch])


	const handleList = (items) => {
		if(!items)
			return <h1>No Elements</h1>
		if( items.length > 0)
			return <List items={ items } />
		if( items.length === 0)
			return <LoadingScreen />
	}
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
									active = {(activeList === 'preloads')?true:false}
								/>
								<AdminTab 
									title="Ordenes de trabajo" 
									cant={tickets.length}
									onClick={ handleClick } 
									id={1}
									active = {(activeList === 'tickets')?true:false}
								/>

								<AdminTab 
									title="Trabajos a entregar" 
									onClick={ handleClick }
									id={2}
									active = {(activeList === 'done')?true:false}
								/>
							</div>
			
							{(activeList === 'preloads') &&
								handleList(preloads)
							}
							
							
							{(activeList === 'tickets') &&
								handleList(tickets)
							}
							{(activeList === 'done') &&
								handleList(undefined)
							}


						</div>
				}

			</div>
		</>
	);
};

export default AdminScreen;
