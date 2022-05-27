import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import deleteRecord from '../../Modules/deleteRecord';
import updateRecord from '../../Modules/updateRecord';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ModifyForm from '../ModifyForm/ModifyForm';
import './modify.css';

function Modify() {
    const data = useLocation().state;
    const navigate = useNavigate()

    const [update, setUpdate] = useState({
        id: data.id,
        codigo: data.codigo,
        departamento: data.departamento
    })
    
    const handleForm = (e) => {
        setUpdate({
            ...update,
            [e.target.name]: e.target.value
        });
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        updateRecord(update);
        alert('Se ha actualizado un producto');
        navigate('/');
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteRecord(data.id);
        alert('Se ha borrado un producto');
        navigate('/');
    }

    return (
        <div className='modify-container'>
            
            <div className="header-container">
            <Header />
            </div>
            
            <div className="modify-form-container">
            <ModifyForm handleUpdate={handleUpdate} handleForm={handleForm} handleDelete={handleDelete} data={data}/>
            </div>

            <div className="footer-coontainer">
            <Footer />
            </div>
        </div>    
    )
}

export default Modify