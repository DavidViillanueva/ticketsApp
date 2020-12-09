import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { startNewPreload } from '../../actions/preloads';
import useForm from '../../hooks/useForm';

const DeviceInfoScreen = () => {

	const dispatch = useDispatch();

	const [damage, setDamage] = useState(false);
	const [wet, setWet] = useState(true);

	const [ formValues , handleInputChange ] = useForm({
		name:'david',
		lastname:'villanueva',
		model:'nokia1100',
		pass:'123',
		issue:'no se apaga nunca',
	})

	const { name ,lastname ,model ,pass ,issue } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch( startNewPreload(name,lastname,model,pass,damage,wet,issue) );
	}

    return (
        <div className="containerCenter">
            <form className="forms__formColumn" onSubmit={ handleSubmit }>
				<h2>Start preload</h2>
                <input
					type="text"
					autoComplete="off"
					name="name"
					placeholder="Name"
					onChange={handleInputChange}
					value={ name }
				/>
                <input
					type="text"
					autoComplete="off"
					name="lastname"
					placeholder="Lastname"
					onChange={handleInputChange}
					value={ lastname }
				/>
                <input
					type="text"
					autoComplete="off"
					name="model"
					placeholder="Model"
					onChange={handleInputChange}
					value={ model }
				/>
                <input
					type="text"
					autoComplete="off"
					name="pass"
					placeholder="Pass"
					onChange={handleInputChange}
					value={ pass }
				/>
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
                <input
					type="text"
					autoComplete="off"
					name="issue"
					placeholder="Issue"
					onChange={handleInputChange}
					value={issue}
				/>

				<button
					type="submit"
					className="btn forms__btn"
				>
					Get preload
				</button>
            </form>
        </div>
    )
}

export default DeviceInfoScreen
