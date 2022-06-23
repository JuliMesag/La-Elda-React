import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const FormularioInventario = () => {

    const nuevoClienteShema = Yup.object().shape({
        nombre: Yup.string().min(3, 'El nombre es muy corto').required('El Nombre del Producto es Obligatorio'),
        categoria: Yup.string().required('La Categoria es Obligatoria'),
        cantidad: Yup.number().integer('No agregue puntos o caracteres especiales').required('La Cantidad es Obligatoria'),
        proveedor: Yup.string().min(3, 'El nombre es muy corto').required('El Nombre del Proveedor es Obligatorio'),
        precioCompra: Yup.number().typeError('El numero no es valido').integer('No agregue puntos o caracteres especiales').required('El Precio de Compra es Obligatorio'),
        precioVenta: Yup.number().typeError('El numero no es valido').integer('No agregue puntos o caracteres especiales').required('El Precio de Venta es Obligatorio'),
    })

    const handleSubmit = (valores) => {
        console.log(valores)
    }

    return (
        <div>
            <div className='grid-form '>
                <div className='izq-form'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkup-list"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="2" />
                        <path d="M9 14h.01" />
                        <path d="M9 17h.01" />
                        <path d="M12 16l1 1l3 -3" />
                    </svg>
                    <h1> Registrar Producto</h1>
                </div>

                <div >
                    <Formik
                        initialValues={{
                            nombre: '',
                            categoria: '',
                            cantidad: '',
                            proveedor: '',
                            precioCompra: '',
                            precioVenta: '',

                        }}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
                        validationSchema={nuevoClienteShema}
                    >
                        {({ errors, touched }) => {
                            //console.log(data)
                            return (

                                <Form className='formulario'>
                                    <div className='espacio-inputs'>
                                        <label>Nombre: </label>
                                        <Field name='nombre' className='field' type='text' id='nombre' placeholder='Nombre del producto' />
                                        {errors.nombre && touched.nombre ? (
                                            <div className='error'>
                                                {errors.nombre}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='espacio-inputs'>
                                        <label>Categoria: </label>
                                        <Field name='categoria' className='field' type='text' id='categoria' placeholder='Ej. Bebidas' />
                                        {errors.categoria && touched.categoria ? (
                                            <div className='error'>
                                                {errors.categoria}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='espacio-inputs'>
                                        <label>Cantidad: </label>
                                        <Field name='cantidad' className='field' type='number' id='cantidad' placeholder='Ej. 55' />
                                        {errors.cantidad && touched.cantidad ? (
                                            <div className='error'>
                                                {errors.cantidad}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='espacio-inputs'>
                                        <label>Proveedor: </label>
                                        <Field name='proveedor' className='field' type='text' id='proveedor' placeholder='Nombre del proveedor' />
                                        {errors.proveedor && touched.proveedor ? (
                                            <div className='error'>
                                                {errors.proveedor}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='espacio-inputs'>
                                        <label>Precio de Compra: </label>
                                        <Field name='precioCompra' className='field' type='number' id='precioCompra' />
                                        {errors.precioCompra && touched.precioCompra ? (
                                            <div className='error'>
                                                {errors.precioCompra}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className='espacio-inputs'>
                                        <label>Precio de venta: </label>
                                        <Field name='precioVenta' className='field' type='number' id='precioVenta' />
                                        {errors.precioVenta && touched.precioVenta ? (
                                            <div className='error'>
                                                {errors.precioVenta}
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

export default FormularioInventario
