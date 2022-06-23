import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const RegistrarCliente = () => {
    const nuevoClienteShema = Yup.object().shape({
        nombre: Yup.string().min(3, 'El nombre es muy corto').required('El Nombre del Cliente es Obligatorio')
    })

    const handleSubmit = (valores) => {
        console.log(valores)
    }

    return (
        <div>
            <div className='grid-form'>
                <div className='izq-form'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg>
                    <h1>Registrar Cliente</h1>
                </div>

                <div>
                    <Formik
                        initialValues={{
                            nombre: '',
                        }}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
                        validationSchema={nuevoClienteShema}

                    >
                        {({ errors, touched }) => {
                            return (
                                <Form className='formulario'>
                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Nombre:</label>
                                        <Field name='nombre' className='field' type='text' id='nombre' placeholder='Nombre del Cliente' />
                                        {errors.nombre && touched.nombre ? (
                                            <div className='error'>
                                                {errors.nombre}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Telefono:</label>
                                        <Field name='telefono' className='field' type='number' id='telefono' placeholder='Telefono del Cliente' />
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Direccion:</label>
                                        <Field name='direccion' className='field' type='text' id='direccion' placeholder='Direccion del Cliente' />
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Email:</label>
                                        <Field name='email' className='field' type='email' id='email' placeholder='Email del Cliente' />
                                    </div>

                                    <div className='boton-centrado'>
                                        <input className='boton' type="submit" value='Registrar' />
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default RegistrarCliente
