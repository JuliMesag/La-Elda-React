import React from 'react'
import { Outlet } from 'react-router-dom'
import Secciones from '../components/Secciones'

const Layout = () => {
  return (
    <>
      <div className='cabecera'>
        <h1>La Elda</h1>
      </div>

      <div className='grid-columnas'>
        <div className='sec-isq'>
          <Secciones />
        </div>


        <div className='overflow'>
          <Outlet />
        </div>

      </div>

    </>
  )
}

export default Layout