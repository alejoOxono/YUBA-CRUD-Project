import React from "react"
import { Link } from 'react-router-dom'
import './table.css';

function Table({ data }) {
    return (
        <React.Fragment>
            {
                data ?
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Departamento</th>
                                <th>Clik Para <br /> Modificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(el => {
                                    return (
                                        <tr key={el.id}>
                                            <td key={el.id.concat(el.codigo)}>{el.codigo}</td>
                                            <td key={el.id.concat(el.departamento)}>{el.departamento}</td>
                                            <td className="button-column" key={el.id.concat(el.id)} >
                                                <Link to={`/modificar/${el.id}`} state={el}>
                                                    <button className="button-to-modify" type='button'></button>
                                                </Link>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    :
                    <></>
            }
        </React.Fragment>
    )
}

export default Table