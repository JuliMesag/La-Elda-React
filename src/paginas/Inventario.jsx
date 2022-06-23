import React from 'react'
import FormularioInventario from '../components/FormularioInventario'
import ConsultaInventario from '../components/ConsultaInventario'
import TotalProductos from '../components/TotalProductos'

const Inventario = () => {
  return (
    <div>
        <FormularioInventario />

        <ConsultaInventario />

        <TotalProductos />
    </div>

  )
}

export default Inventario