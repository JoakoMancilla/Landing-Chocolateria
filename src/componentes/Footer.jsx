import React from 'react'

export const Footer = () => {
    return (
        <div className='text-green-50'>
            <section name='formulario' className='bg-green-50'>
                <div className='px-36 md:px-20 lg:px-96'>
                    <img src="/Footer.svg" alt=""
                        className='w-xl m-auto' />
                    <div className='bg-[#68352D] mx-auto p-16 rounded-[5px]
                    grid grid-flow-col grid-cols-2 grid-rows-3 gap-4'>
                        <div className='col-span-1 font-bold text-5xl border-red-300 border-2 '>
                            <h1 className="tracking-widest">Habla con nosotros</h1>
                        </div>
                        <div className='col-span-1 border-red-300 border-2'>
                            <p>¿Buscas productos artesanales de calidad? ¡Contáctanos y cotiza lo que necesitas! Estamos listos para ofrecerte lo mejor para tus eventos o momentos especiales.</p>
                        </div>
                        <div className='col-span-1 border-red-300 border-2 object-contain'>
                            <input type="text" id='correo' placeholder='Correo Electronico'
                                className=' border-2 border-green-50 rounded-2xl p-1 pl-4 w-full mb-2' />
                            <button className='bg-black rounded-2xl p-1 py-1.5 w-full font-bold'>CONTÁCTANOS</button>
                        </div>
                        <img className='col-span-1 col-start-2 row-span-full border-red-300 border-2 h-full object-contain' src="/BarraChocolate.svg" alt="" />
                    </div>
                </div>
            </section>
            <section name='footer' className='py-16 md:px-20 lg:px-96'>
                <div className=''>
                    <img src="https://lab.webix.cl/wp-content/uploads/2024/10/Logo-EJJAF-Blanco-480x480.png" alt=""
                        className='w-20 border-red-300 border-2' />
                    <h2 className='font-bold border-red-300 border-2 mt-2'>
                        EJJAF | Productos Artesanales
                    </h2>
                </div>
                <br />
                <div className=' border-red-300 border-2'>
                    <p>
                        ¿Buscas productos artesanales de calidad? Contáctanos para más información sobre nuestras delicias, desde quesos libres de gluten hasta frutos secos y chocolates. ¡Estamos aquí para ayudarte a elegir lo mejor para tu paladar!
                    </p>
                </div>
                <br />
                <div class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
                    <div className='col-span-1 border-red-300 border-2'>
                        <strong>Productos</strong>
                        <ul>
                            <li>Alfajores & Cuchuflis</li>
                            <li>Frutos Secos</li>
                            <li>Quesos</li>
                        </ul>
                    </div>
                    <div className='col-span-1 border-red-300 border-2'>
                        <strong>Contacto</strong>
                        <ul>
                            <li>(255) 352-6258</li>
                            <li>chocolates@EJJAF.cl</li>
                            <li>Pje. El Mandarino, Rancagua, O’Higgins</li>
                        </ul>
                    </div>
                </div>
                <div>
                </div>
            </section>
        </div>
    )
}
