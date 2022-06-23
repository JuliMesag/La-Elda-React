import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Secciones = () => {

    const location = useLocation()
    const urlActual = location.pathname

    return (
        <>
            <div >
                <div className='navegacion'>
                    <Link className={`${urlActual === '/inicio' ? 'color1' : 'color2'} `} to="/inicio"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-checkup-list"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="2" />
                        <path d="M9 14h.01" />
                        <path d="M9 17h.01" />
                        <path d="M12 16l1 1l3 -3" />
                    </svg> Inventario</Link>

                    <Link className={`${urlActual === '/inicio/proveedores' ? 'espacio-clientes color1' : 'espacio-clientes color2'} `} to="/inicio/proveedores"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-truck" width="52"
                        height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="7" cy="17" r="2" />
                        <circle cx="17" cy="17" r="2" />
                        <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
                    </svg> Proveedores</Link>


                    <Link className={`${urlActual === '/inicio/clientes' ? 'espacio-clientes color1' : 'espacio-clientes color2'} `} to="/inicio/clientes"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                    </svg> Clientes</Link>


                    <Link className={`${urlActual === '/inicio/Ventas' ? 'espacio-clientes color1' : 'espacio-clientes color2'} `} to="/inicio/Ventas"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-businessplan"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <ellipse cx="16" cy="6" rx="5" ry="3" />
                        <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                        <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                        <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                        <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                        <path d="M5 15v1m0 -8v1" />
                    </svg> Ventas</Link>


                    <Link className={`${urlActual === '/inicio/compras' ? 'espacio-clientes color1' : 'espacio-clientes color2'} `} to="/inicio/compras"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-money"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                        <rect x="9" y="3" width="6" height="4" rx="2" />
                        <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                        <path d="M12 17v1m0 -8v1" />
                    </svg> Compras</Link>


                    <Link className={`${urlActual === '/inicio/Informes' ? 'espacio-clientes color1' : 'espacio-clientes color2'} `} to="/inicio/Informes"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-line"
                        width="52" height="52" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000"
                        fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <line x1="4" y1="19" x2="20" y2="19" />
                        <polyline points="4 15 8 9 12 11 16 6 20 10" />
                    </svg> Informes</Link>
                </div>

            </div>
        </>
    )
}

export default Secciones