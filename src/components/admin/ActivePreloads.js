import moment from 'moment';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startDeletePreload } from '../../actions/preloads';
import { unsetActive } from '../../actions/ui';

const ActivePreloads = ({active}) => {

    const dispatch = useDispatch();
    const date = moment( active.date );

    const handleBack = () => {
        dispatch( unsetActive() );
    }

    const handleDelete = () => {
        dispatch( startDeletePreload(active.id) );
    }

    return (
        <>
            <div className="active__card">
                <h1>Cliente</h1>
                <span className="active__cardRow">
                    <h3>Nombre:</h3>
                    <p>{ active.name.trim() }</p>    
                </span>
                <span className="active__cardRow">
                    <h3>Apellido:</h3>
                    <p>{ active.lastname.trim() }</p>
                </span>

                <span className="active__cardRow">
                    <h3>Email:</h3>
                    <p>{ active.email.trim() }</p>
                </span>
            </div>

            <div className="active__card">
                <h1>Equipo</h1>
                <span className="active__cardRow">
                    <h3>Modelo:</h3>
                    <p>{ active.type.trim() } { active.model.trim() }</p>    
                </span>
                <span className="active__cardRow">
                    <h3>Pass:</h3>
                    <p>{ active.pass.trim() }</p>
                </span>
                <span className="active__cardRow">
                    <h3>Problema:</h3>
                    <p>{ active.issue.trim() }</p>
                </span>
                {active.damage &&
                    <span className="active__cardRow">
                        <h3>Golpeado</h3>
                    </span>
                }
                {active.wet &&
                    <span className="active__cardRow">
                        <h3>Mojado</h3>
                    </span>
                }
                <span className="active__cardRow">
                    <h3>Fecha de ingreso:</h3>
                    <p>{ date.format('D MMM YY') }</p>
                </span>

            </div>
            <div className="row al-right">
                {( !active.activeTicket) &&
                    <Link to={`/admin/ticket-add/?q=${ active.id }`}>
                        <button
                            // onClick={ handleActivatePreload }
                            className="btn active__btn"
                        >
                            Activar
                        </button>
                    </Link>

                }
                <button
                    onClick={ handleDelete }
                    className="btn active__btn"
                >
                    Eliminar
                </button>

                <button
                    onClick={ handleBack }
                    className="btn active__btn"
                >
                    Atras
                </button>

            </div>
        </>
    )
}

export default ActivePreloads
