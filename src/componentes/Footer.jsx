import React from 'react'

export const Footer = () => {
    return (
        <div className='text-green-50'>
            <section name='formulario' className=' bg-green-50'>
                <div className='relative top-0 z-10 sm:px-4 md:px-8 lg:px-32 xl:px-64 2xl:px-96 md:-mb-16 lg:-mb-32'>
                    <img 
                        src="/Footer.svg" 
                        alt=""
                        className='m-auto w-xl'
                    />
                    <div className='bg-[#68352D] mx-auto p-16 rounded-[5px] grid grid-flow-col grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4'>
                        <div className='col-span-1 text-5xl font-bold border-0 border-red-300 '>
                            <h1 className="tracking-widest">Habla con nosotros</h1>
                        </div>
                        <div className='col-span-1 border-0 border-red-300'>
                            <p>
                                ¿Buscas productos artesanales de calidad?
                                ¡Contáctanos y cotiza lo que necesitas!
                                Estamos listos para ofrecerte lo mejor para tus eventos o momentos especiales.
                            </p>
                        </div>
                        <div className='object-contain col-span-1 border-0 border-red-300'>
                            <input type="text" id='correo' placeholder='Correo Electronico'
                                className='w-full p-1 pl-4 mb-2 border-2 border-green-50 rounded-2xl' />
                            <button className='bg-black rounded-2xl p-1 py-1.5 w-full font-bold hover:bg-[#FF6847] transition-colors duration-300 ease-in-out'>
                                CONTÁCTANOS
                            </button>
                        </div>
                        <img
                            className="hidden object-contain h-full col-span-1 col-start-2 border-0 border-red-300 md:block row-span-full"
                            src="/BarraChocolate.svg"
                            alt=""
                        />
                    </div>
                </div>
            </section>
            <footer className='bg-[#7BCAB2]'>
                <img
                    src="/SeparadorTop.svg"
                    alt=""
                    className='w-full bg-green-50'
                />
                <div className='py-16 sm:px-4 md:px-8 lg:px-32 xl:px-64 2xl:px-96'>
                    <div>
                        <img src="https://lab.webix.cl/wp-content/uploads/2024/10/Logo-EJJAF-Blanco-480x480.png" alt=""
                            className='w-20 border-0 border-red-300' />
                        <h2 className='mt-2 font-bold border-0 border-red-300'>
                            EJJAF | Productos Artesanales
                        </h2>
                    </div>
                    <br />
                    <div className='border-0 border-red-300 '>
                        <p>
                            ¿Buscas productos artesanales de calidad? Contáctanos para más información sobre nuestras delicias,
                            desde quesos libres de gluten hasta frutos secos y chocolates.
                            ¡Estamos aquí para ayudarte a elegir lo mejor para tu paladar!
                        </p>
                    </div>
                    <br />
                    <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
                        <div className='col-span-1 border-0 border-red-300'>
                            <strong>Productos</strong>
                            <ul>
                                <li>Alfajores & Cuchuflis</li>
                                <li>Frutos Secos</li>
                                <li>Quesos</li>
                            </ul>
                        </div>
                        <div className='col-span-1 border-0 border-red-300'>
                            <strong>Contacto</strong>
                            <ul>
                                <li>(255) 352-6258</li>
                                <li>chocolates@EJJAF.cl</li>
                                <li>Pje. El Mandarino, Rancagua, O’Higgins</li>
                            </ul>
                        </div>
                    </div>
                    <div className='justify-items-center'>
                        <hr className='w-full my-4 border-t-2 border-green-50' />
                        <p>&copy; 2025 EJJAF. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
