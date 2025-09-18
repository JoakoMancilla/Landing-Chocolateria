import React from 'react'

export const HeroSec = () => {
    return (
        <div className='bg-[#7BCAB2]'>
            <section className="bg-green-50 flex justify-center pt-15 pb-35">
            <div className="relative w-full h-140 px-4 md:px-8 lg:px-16">
                <img
                className="absolute left-1/2 -translate-x-1/2 w-2xl z-10"
                src="https://lab.webix.cl/wp-content/uploads/2024/10/Aureola.png"
                alt="Aureola"
                />
                <img
                className="absolute left-1/2 -translate-x-1/2 w-9xl z-20 px-16 top-50"
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
            <section className='px-4 md:px-8 lg:px-16'>
                    <h2 className='font-bold text-green-50 text-5xl float-left'>
                        Disfruta de los irresistibles <br/>
                        sabores que conquistan tus <br/>
                        sentidos
                    </h2>
                    <button className='border-3 rounded-2xl border-green-50 text-green-50 p-2 hover:bg-green-50 hover:text-[#7BCAB2]'>
                        Comprar Ahora!
                    </button>
                    <p className='text-green-50 clear-both'>
                        Somos una negocio familiar de <strong>Rancagua</strong>, dedicados a brindarte una experiencia inolvidable
                        para tu paladar, con productos artesanales de la más alta calidad. Ofrecemos una deliciosa 
                        variedad que incluye nuestros irresistibles <em><strong>Alfajores</strong><strong> y Cuchuflís</strong></em>,  <em><strong>Frutos Secos</strong></em> <em><strong>dulces y
                        salados</strong></em>, y un exquisito <em><strong>Queso mantecoso libre de gluten</strong></em>. Cada creación está hecha con amor y cuidado para garantizar el mejor sabor en cada bocado.
                        ¡Visítanos y descubre el auténtico sabor artesanal!
                    </p>
            </section>
        </div>
    )
}
