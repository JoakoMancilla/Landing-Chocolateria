import React from 'react'

export const HeroSec = () => {
    return (
        <div>
            <section className="bg-green-50 flex justify-center pt-15 pb-35">
                <div className="relative w-full h-140 px-4 md:px-8 lg:px-16">
                    <img
                    className="absolute left-1/2 -translate-x-1/2 w-2xl z-10"
                    src="https://lab.webix.cl/wp-content/uploads/2024/10/Aureola.png"
                    alt="Aureola"
                    />
                    <img
                    className="absolute left-1/2 -translate-x-1/2 w-3/4 z-20 px-16 top-50"
                    src="https://lab.webix.cl/wp-content/uploads/2024/10/Sombras.png"
                    alt="Sombras"
                    />
                    <img
                    className="absolute left-1/2 -translate-x-1/2 w-xl z-30 pt-40 slide-top"
                    src="https://lab.webix.cl/wp-content/uploads/2024/10/Alfajor.png"
                    alt="Alfajor"
                    />
                </div>
            </section>

            <section className='px-36 md:px-20 lg:px-96'>
                <div class="grid grid-flow-col grid-rows-2 gap-4">
                <div class="col-span-2 row-span-1 border-red-300 border-2 z-40"><h2 className='float-left font-bold text-green-50 text-5xl'>
                        Disfruta de los irresistibles <br/>
                        sabores que conquistan tus <br/>
                        sentidos
                    </h2></div>
                <div class="col-span-2 border-red-300 border-2"><p className='text-green-50'>
                        Somos una negocio familiar de <strong>Rancagua</strong>, dedicados a brindarte una experiencia inolvidable
                        para tu paladar, con productos artesanales de la más alta calidad. Ofrecemos una deliciosa 
                        variedad que incluye nuestros irresistibles <em><strong>Alfajores</strong><strong> y Cuchuflís</strong></em>,  <em><strong>Frutos Secos</strong></em> <em><strong>dulces y
                        salados</strong></em>, y un exquisito <em><strong>Queso mantecoso libre de gluten</strong></em>. Cada creación está hecha con amor y cuidado para garantizar el mejor sabor en cada bocado.
                        ¡Visítanos y descubre el auténtico sabor artesanal!
                    </p></div>
                <div class="row-span-2 border-red-300 border-2 lg:px-24 z-40"><button className='border-3 rounded-2xl border-green-50 text-green-50 my-14 p-2 hover:bg-green-50 hover:text-[#7BCAB2]'>
                        Comprar Ahora!
                    </button></div>
                </div>
            </section>
        </div>
    )
}
