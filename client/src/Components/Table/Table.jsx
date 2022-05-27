import React from "react"
import { Link } from 'react-router-dom'

function Table({ data }) {
    return (
        <React.Fragment>
            {
                data ?
                    <table>
                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Departamento</th>
                                <th>Modificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(el => {
                                    return (
                                        <tr key={el.id}>
                                            <td key={el.id.concat(el.codigo)}>{el.codigo}</td>
                                            <td key={el.id.concat(el.departamento)}>{el.departamento}</td>
                                            <td key={el.id.concat(el.id)} >
                                                <Link to={`/modificar/${el.id}`} state={el}>
                                                    <button type='button'></button>
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