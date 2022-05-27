import React, { useState } from "react"
import insertRecord from "../../Modules/insertRecord";
import FormInsert from "../FormInsert/FormInsert"

function Insert() {

    const [record, setRecord] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
        insertRecord(record);
        if(!record?.codigo || !record?.departamento){
            alert('Por favor ingrese todos los datos');
        } else {
            alert('Se ha Ingresado un producto');
            window.location.reload();
        }
    }

    const handleForm = (e) => {
        setRecord({
            ...record,
            [e.target.name]: e.target.value
        });
    }

    return (
        <React.Fragment>
            <FormInsert handleSubmit={handleSubmit} handleForm={handleForm} />
        </React.Fragment>
    )
}

export default Insert