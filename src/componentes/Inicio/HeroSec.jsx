import React from 'react'

export const HeroSec = () => {
    return (
        <div>
            <section className="flex justify-center pb-16 bg-green-50 pt-15">
                <div className="relative w-full px-4 h-140 md:px-8 lg:px-16">
                    <img
                        className="absolute z-10 -translate-x-1/2 left-1/2 w-2xl"
                        src="https://lab.webix.cl/wp-content/uploads/2024/10/Aureola.png"
                        alt="Aureola"
                    />
                    <img
                        className="absolute z-20 -translate-x-1/2 lg:w-3/4 md:px-16 left-1/2 top-80 md:top-50"
                        src="https://lab.webix.cl/wp-content/uploads/2024/10/Sombras.png"
                        alt="Sombras"
                    />
                    <img
                        className="absolute z-30 pt-40 -translate-x-1/2 left-1/2 w-xl slide-top"
                        src="https://lab.webix.cl/wp-content/uploads/2024/10/Alfajor.png"
                        alt="Alfajor"
                    />
                </div>
            </section>
            <img className='w-full bg-green-50' src="/SeparadorTop.svg" alt="" />
            <section className='sm:px-4 md:px-8 lg:px-32 xl:px-64 2xl:px-96'>
                <div className="grid grid-flow-col grid-rows-2 gap-4">
                    <div className="col-span-2 row-span-1 border-red-300 border-0 z-40">
                        <h2 className='float-left text-5xl font-bold text-green-50'>
                            Disfruta de los irresistibles <br />
                            sabores que conquistan tus <br />
                            sentidos
                        </h2>
                    </div>
                    <div className="col-span-2 border-red-300 border-0">
                        <p className='text-green-50'>
                            Somos una negocio familiar de <strong>Rancagua</strong>, dedicados a brindarte una experiencia inolvidable
                            para tu paladar, con productos artesanales de la más alta calidad. Ofrecemos una deliciosa
                            variedad que incluye nuestros irresistibles <em><strong>Alfajores</strong><strong> y Cuchuflís</strong></em>,  <em><strong>Frutos Secos</strong></em> <em><strong>dulces y
                                salados</strong></em>, y un exquisito <em><strong>Queso mantecoso libre de gluten</strong></em>. Cada creación está hecha con amor y cuidado para garantizar el mejor sabor en cada bocado.
                            ¡Visítanos y descubre el auténtico sabor artesanal!
                        </p>
                    </div>
                    <div className="row-span-2 border-red-300 border-0 lg:px-24 z-40">
                        <button className="border-3 rounded-2xl border-green-50 text-green-50 my-14 p-2  hover:bg-green-50 hover:text-[#7BCAB2] transition-colors duration-300 ease-in-out">
                        Comprar Ahora!
                        </button>
                    </div>
                </div>
            </section>
            <img className='w-full bg-green-50' src="/SeparadorBot.svg" alt="" />
        </div>
    )
}
