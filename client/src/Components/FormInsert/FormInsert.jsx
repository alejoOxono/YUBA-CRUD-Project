import React from "react"
import './forminsert.css';

function FormInsert({handleSubmit, handleForm}) {
    return (
        <React.Fragment>
            <form className="form-insert" onChange={(e) => handleForm(e)}>

                <div className="div-input">
                    <label htmlFor="codigo" >Código</label>
                    <input placeholder='código...' type="number" min="0" name="codigo" id="insert-codigo" className="input-insert" />
                </div>


                <div className="div-input">
                    <label htmlFor="departamento">Departamento</label>
                    <input placeholder='departamento...' type="text" name="departamento" id="insert-departamento" className="input-insert" />
                </div>

                <div className="div-input">
                    <button type='submit' onClick={(e) => handleSubmit(e)}>Aceptar</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default FormInsert