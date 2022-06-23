import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const TotalProveedores = () => {

    const nuevoClienteShema = Yup.object().shape({
        nombre: Yup.string().min(3, 'El nombre es muy corto').required('El Nombre del Proveedor es Obligatorio'),
        categoria: Yup.string().required('La Categoria es Obligatoria'),
        telefono: Yup.number().typeError('El numero no es valido').integer('No agregue puntos o caracteres especiales').required('El Telefono del Proveedor es Obligatorio'),
        direccion: Yup.string().min(3, 'La direccion es muy corta').required('La Direccion del Proveedor es Obligatoria')
    })

    const handleSubmit = (valores) => {
        console.log(valores)
    }

    return (
        <div>
            <div className='grid-form'>
                <div className='izq-form'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="52"
                        height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="7" cy="17" r="2" />
                        <circle cx="17" cy="17" r="2" />
                        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    </svg>
                    <h1>Registrar Proveedor</h1>
                </div>

                <div>
                    <Formik
                        initialValues={{
                            nombre: '',
                            categoria: '',
                            telefono: '',
                            direccion: ''
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
                                        <Field name='nombre' className='field' type='text' id='nombre' placeholder='Nombre del proveedor' />
                                        {errors.nombre && touched.nombre ? (
                                            <div className='error'>
                                                {errors.nombre}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Categoria:</label>
                                        <Field name='categoria' className='field' type='text' id='Categoria' placeholder='Ej. Bebidas' />
                                        {errors.categoria && touched.categoria ? (
                                            <div className='error'>
                                                {errors.categoria}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Telefono:</label>
                                        <Field name='telefono' className='field' type='number' id='telefono' placeholder='Telefono del proveedor' />
                                        {errors.telefono && touched.telefono ? (
                                            <div className='error'>
                                                {errors.telefono}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Direccion:</label>
                                        <Field name='direccion' className='field' type='text' id='direccion' placeholder='Direccion del Proveedor' />
                                        {errors.direccion && touched.direccion ? (
                                            <div className='error'>
                                                {errors.direccion}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Email:</label>
                                        <Field name='email' className='field' type='email' id='email' placeholder='Email del Proveedor' />
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

export default TotalProveedores