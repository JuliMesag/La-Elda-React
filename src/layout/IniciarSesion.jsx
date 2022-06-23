import React from 'react'
import '../styles/styles.css'

const IniciarSesion = () => {

  return (
    <>
      <div className='contenedor centrado'>

        <h1>La Elda</h1>
        
        
        <form action="">
          <label>Iniciar Sesión</label>

          <div>
            <p>Usuario</p>
            <input type="text" id='usuario'/>
          </div>
          <div>
            <p>Contraseña</p>
            <input type="password"/>
          </div>
          <a href='/inicio'>
            <input className='boton' type="button" value='Ingresar' />
          </a>
        </form>

      </div>
    </>
  )
}

export default IniciarSesion
