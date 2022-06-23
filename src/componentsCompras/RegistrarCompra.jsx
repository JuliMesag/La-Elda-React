import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const RegistrarCompra = () => {
    const nuevoClienteShema = Yup.object().shape({
        nombre: Yup.string().min(3, 'El nombre es muy corto').required('El Nombre del Proveedor es Obligatorio'),
        producto: Yup.string().required('El Nombre del Producto es Obligatorio'),
        cantidad: Yup.number().integer('No agregue puntos o caracteres especiales').required('La Cantidad en libras es Obligatoria'),
        total: Yup.number().integer('No agregue puntos o caracteres especiales').required('El Precio Total es Obligatorio')
    })

    const handleSubmit = (valores) => {
        console.log(valores)
    }

    return (
        <div>
            <div className='grid-form'>
                <div className='izq-form'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-money"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="2" />
                        <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                        <path d="M12 17v1m0 -8v1" />
                    </svg>
                    <h1>Registrar Compra</h1>
                </div>

                <div>
                    <Formik
                        initialValues={{
                            nombre: '',
                            producto: '',
                            cantidad: '',
                            total: ''
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
                                        <label htmlFor="">Nombre Proveedor:</label>
                                        <Field name='nombre' className='field' type='text' id='nombre' placeholder='Ingresa Nombre del Proveedor' />
                                        {errors.nombre && touched.nombre ? (
                                            <div className='error'>
                                                {errors.nombre}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Producto:</label>
                                        <Field name='producto' className='field' type='text' id='producto' placeholder='Producto Comprado' />
                                        {errors.producto && touched.producto ? (
                                            <div className='error'>
                                                {errors.producto}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Cantidad Libras:</label>
                                        <Field name='cantidad' className='field' type='number' id='cantidad' placeholder='Cantidad comprada en libras' />
                                        {errors.cantidad && touched.cantidad ? (
                                            <div className='error'>
                                                {errors.cantidad}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className='espacio-inputs'>
                                        <label htmlFor="">Precio Total:</label>
                                        <Field name='total' className='field' type='number' id='total' placeholder='Precio Total del Producto' />
                                        {errors.total && touched.total ? (
                                            <div className='error'>
                                                {errors.total}
                                            </div>
                                        ) : null}
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

export default RegistrarCompra