import React from 'react'

const ConsultaInventario = () => {
    return (
        <>
            <div className='buscar-prod'>

                <div className='centrado'>
                    <h2>Consultar Producto</h2>
                </div>

                <form className='grid-consultar'>
                    <div > 
                        <label htmlFor="">Nombre: </label>
                        <input type="text" />

                        <div className='espacio-inputs'>
                           <label htmlFor="">Categoria: </label>
                            <input type="text" /> 
                        </div>
                    </div>

                    <div>
                        <label htmlFor="">Proveedor: </label>
                        <input type="text" />
                    </div>
                </form>

                <div className='boton-centrado' >
                    <input type="submit" className='boton' value='Consultar' />
                </div>

                <div className='tbody-form'>
                    <table>
                        <thead>
                            <tr>
                                <th className='id-table'>#</th>
                                <th>Nombre</th>
                                <th>Categoria</th>
                                <th>Cantidad</th>
                                <th>Proveedor</th>
                                <th>Precio de compra</th>
                                <th>Precio de venta</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
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

export default ConsultaInventario