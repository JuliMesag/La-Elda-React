import React from 'react'
import RegistrarCompra from '../componentsCompras/RegistrarCompra'
import TotalSemana from '../componentsCompras/TotalSemana'
import TotalMes from '../componentsCompras/TotalMes'

const Compras = () => {
  return (
    <div>
        <RegistrarCompra />

        <TotalSemana />

        <TotalMes />
    </div>
  )
}

export default Compras