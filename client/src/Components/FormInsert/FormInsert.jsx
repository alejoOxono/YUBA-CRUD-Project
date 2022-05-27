import React from "react"

function FormInsert({handleSubmit, handleForm}) {
    return (
        <React.Fragment>
            <form onChange={(e) => handleForm(e)}>

                <div className="codigo">
                    <label htmlFor="codigo" >Código</label>
                    <input placeholder='código...' type="number" min="0" name="codigo" id="insert-codigo" className="input-insert-codigo" />
                </div>


                <div className="div-departamento">
                    <label htmlFor="departamento">Departamento</label>
                    <input placeholder='departamento...' type="text" name="departamento" id="insert-departamento" className="input-insert-departamento" />
                </div>

                <div className="div-submit">
                    <button type='submit' onClick={(e) => handleSubmit(e)}>Aceptar</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default FormInsert