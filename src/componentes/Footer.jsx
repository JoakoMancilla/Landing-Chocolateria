import React from 'react'

export const Footer = () => {
    return (
        <div className='text-green-50'>
            <section name='formulario' className='bg-green-50'>
                <div className='px-36 md:px-20 lg:px-96'>
                    <img src="https://lab.webix.cl/wp-content/uploads/2024/10/Footer-3-980x260.png" alt=""
                    className='w-xl m-auto'/>
                    <div className='bg-[#68352D] lg:w-[80%] mx-auto p-8 rounded-[5px]'>
                        <h1 className='font-bold text-3xl'>
                            Habla con nosotros
                        </h1>
                        <br/>
                        <p>
                            ¿Buscas productos artesanales de calidad? ¡Contáctanos y cotiza lo que necesitas! Estamos listos para ofrecerte lo mejor para tus eventos o momentos especiales.
                        </p>
                        <br/>
                        <input type="text" id='correo' placeholder='Correo Electronico' 
                        className=' border-2 border-green-50 rounded-2xl p-1 pl-4 w-full mb-2'/>
                        <br/>
                        <button className='bg-black rounded-2xl p-1 py-1.5 w-full font-bold'>CONTÁCTANOS</button>
                    </div>
                </div>
            </section>
            <section name='footer' className='px-36 md:px-20 lg:px-96'>
                Hola Mundo
                <div className=''>
                    <img src="https://lab.webix.cl/wp-content/uploads/2024/10/Logo-EJJAF-Blanco-480x480.png" alt=""
                        className='w-20 border-red-300 border-2' />
                    <h2 className='font-bold border-red-300 border-2 mt-2'>
                        EJJAF | Productos Artesanales
                    </h2>
                </div>
                <br />
                <div>
                    <p>
                        ¿Buscas productos artesanales de calidad? Contáctanos para más información sobre nuestras delicias, desde quesos libres de gluten hasta frutos secos y chocolates. ¡Estamos aquí para ayudarte a elegir lo mejor para tu paladar!
                    </p>
                </div>
                <br />
                <div>
                    <div className='border-red-300 border-2'>
                        <strong>Productos</strong>
                        <ul>
                            <li>Alfajores & Cuchuflis</li>
                            <li>Frutos Secos</li>
                            <li>Quesos</li>
                        </ul>
                    </div>
                    <div className='border-red-300 border-2'>
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
