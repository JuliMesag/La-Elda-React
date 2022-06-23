import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IniciarSesion from './layout/IniciarSesion'
import Layout from './layout/Layout'
import Inventario from './paginas/Inventario'
import Proveedores from './paginas/Proveedores'
import Clientes from './paginas/Clientes'
import Ventas  from './paginas/Ventas'
import Compras  from './paginas/Compras'
import Informes  from './paginas/Informes'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<IniciarSesion />} />
        </Route>

        <Route path='/inicio' element={<Layout />}>
          <Route index element={<Inventario />} />
          <Route path='proveedores' element={<Proveedores />} />
          <Route path='clientes' element={<Clientes />} />
          <Route path='ventas' element={<Ventas />} />
          <Route path='compras' element={<Compras />} />
          <Route path='informes' element={<Informes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
