import React from 'react'

const TotalSemana = () => {
    return (
        <>
            <div className='buscar-prod'>
                <h2>Total Compras Esta Semana</h2>
    
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th className='id-table'>#</th>
                                <th>Proveedor</th>
                                <th>Producto</th>
                                <th>Cantidad/Lb</th>
                                <th>Precio Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='id-table'>1</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th className='id-table'>2</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <th className='id-table'>3</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
            </div>
        </>
      )
}

export default TotalSemana