import React from 'react'
import { Link } from 'react-router-dom'
import './modifyform.css';


function ModifyForm({ handleUpdate, handleForm, handleDelete, data }) {
    return (
        <React.Fragment>
            <Link to='/'>
                <button className='button-goBack' type='button'>Volver</button>
            </Link>
            <form className='form-modify-container' onChange={(e) => handleForm(e)}>

                <div className="codigo">
                    <label htmlFor="codigo" >Código</label>
                    <input type="number" min="0" name="codigo" defaultValue={data.codigo}
                        id="modify-codigo" className="input-modify" />
                </div>


                <div className="div-departamento">
                    <label htmlFor="departamento">Departamento</label>
                    <input type="text" name="departamento" defaultValue={data.departamento}
                        id="modify-departamento" className="input-modify" />
                </div>

                <div className="div-buttons">
                    <button className="modify-button" type='submit' onClick={(e) => handleUpdate(e)}>Actualizar</button>
                    <button className="modify-button" type='button' onClick={(e) => handleDelete(e)}>Eliminar</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default ModifyForm