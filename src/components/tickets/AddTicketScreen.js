import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import queryString from 'query-string';

import useForm from '../../hooks/useForm'
import { startActiveTicket } from '../../actions/tickets';
import { InputAdornment, MenuItem, TextField } from '@material-ui/core';

const AddTicketScreen = ({history}) => {
	const location = useLocation()
	const { preloads } = useSelector( state => state.preload )
	const dispatch = useDispatch();
	
	const { q = '' } = queryString.parse( location.search );

	let initialValues = {
		name:'',
		lastname:'',
		email: '',
		model:'',
		pass:'',
		issue:'',
        price: '',
        state: ''
	}
	const [damage, setDamage] = useState(false);
	const [wet, setWet] = useState(false);
	const [state, setState] = useState('');
	const [type, setType] = useState();

	if( q !== '' ) {

		console.log(q)
		const active = preloads.find( (preload) => (
			preload.id === q

		))
		console.log( active)
		if( active ){
			initialValues = {
				name: active.name,
				lastname: active.lastname,
				email: active.email,
				model: active.model,
				pass:active.pass,
				issue: active.issue,
				price: '',
			};
		}

	}

	const [ formValues , handleInputChange ] = useForm(initialValues)

	const { name, lastname, model, pass, issue, email, price } = formValues;


	const handleStateChange = (e) => {
		setState(e.target.value);
	}

	const handleTypeChange = (e) => {
		setType(e.target.value);
	}

    const handleSubmit = (e) => {
		e.preventDefault()
		// dispatch(startActiveTicket( {...formValues,state,wet,damage,type,id: q }) )

		history.push('/admin');
    }

    return (
        <div className="containerCenter">
			<form className="forms__formColumn2" nSubmit={handleSubmit} noValidate autoComplete="off">
				<TextField 
				color="secondary"
					label="Nombre"
					name="name"
					value={ name }
					onChange={ handleInputChange }
				/>
				<TextField 
					label="Apellido"
					name="lastname"
					value={ lastname }
					onChange={ handleInputChange }
				/>
				<TextField 
					label="Email"
					name="email"
					value={ email }
					onChange={ handleInputChange }
				/>
				<TextField 
					label="presupuesto"
					name="price"
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>,
					  }}
					value={ price }
					onChange={ handleInputChange }
				/>
				<TextField 
					label="Modelo"
					name="model"
					value={ model }
					onChange={ handleInputChange }
				/>
				<TextField 
					label="Contraseña"
					name="pass"
					value={ pass }
					onChange={ handleInputChange }
				/>

				<TextField
						id="standard-select-currency"
						select
						label="Select"
						value={state}
						onChange={handleStateChange}
						helperText="Please select your currency"
				>
					<MenuItem value="En cola de trabajo">En cola de trabajo</MenuItem>
					<MenuItem value="En Proceso">En Proceso</MenuItem>
					<MenuItem value="En Distribuidor">En Distribuidor</MenuItem>
					<MenuItem value="Para entrega">Para entrega</MenuItem>
				</TextField>

				<div className="forms__row">
					<p>Se Golpeo? </p>
					<input
						type="checkbox"
						name="damage"
						checked={ damage }
						onChange={ () => setDamage(!damage) }
					/>
				</div>
				<div className="forms__row">
					<p> Se Mojo? </p>
					<input
                        type="checkbox"
						name="wet"
						checked={ wet }
                        onChange={ () => setWet(!wet) }
                    />
                </div>

				<TextField
					id="filled-multiline-static"
					label="Detalles"
					multiline
					rows={4}
					name="issue"
					defaultValue={issue}
					onChange={handleInputChange}
					variant="filled"
				/>		

				<button
					type="submit"
					className="btn forms__btn"
				>
					Activar ticket
				</button>
			</form>
        </div>
    )
}

export default AddTicketScreen
