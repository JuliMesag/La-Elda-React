import React from 'react'
import RegistrarCliente from '../componentsClientes/RegistrarCliente'
import ConsultarCliente from '../componentsClientes/ConsultarCliente'
import TotalClientes from '../componentsClientes/TotalClientes'

const Clientes = () => {
  return (
    <div>
        <RegistrarCliente />

        <ConsultarCliente />

        <TotalClientes />
    </div>
  )
}

export default Clientes