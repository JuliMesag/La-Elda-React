import React from 'react'

const ConsultarCliente = () => {
    return (
        <>
            <div className='buscar-prod'>

                <div className='centrado'>
                    <h2>Consultar Cliente</h2>
                </div>

                <form className='grid-consultar'>
                    <div >
                        <label htmlFor="">Nombre: </label>
                        <input type="text" />

                        <div className='espacio-inputs'>
                            <label htmlFor="">Telefono: </label>
                            <input type="tel" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Direccion: </label>
                        <input type="text" />
                        
                        <div className='espacio-inputs'>
                            <label htmlFor="">Email: </label>
                            <input type="email" />
                        </div>
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
                                <th>Telefono</th>
                                <th>Direccion</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
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

export default ConsultarCliente