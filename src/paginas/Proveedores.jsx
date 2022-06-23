import React from 'react'
import { useEffect } from 'react'
import TotalProveedores from '../componentsProveedores/TotalProveedores'
import ConsultarProveedor from '../componentsProveedores/ConsultarProveedor'
import RegistrarProveedor from '../componentsProveedores/RegistrarProveedor'

const Proveedores = () => {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  })

  return (
    <div>
      <TotalProveedores />

      <ConsultarProveedor />

      <RegistrarProveedor />
    </div>
  )
}

export default Proveedores