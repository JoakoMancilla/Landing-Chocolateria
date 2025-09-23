import React from 'react';

export const MapSec = () => {
    return (
        <div className='bg-green-50'>
            <div className='relative py-16 overflow-hidden sm:px-4 md:px-8 lg:px-32 xl:px-64 2xl:px-96'>
                <h1 className="font-bold text-[#333333] pt-4 pb-16 text-3xl text-center">
                    ¡Visítanos en Rancagua!
                </h1>
                <div className='relative'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.6739111540082!2d-70.7600867235201!3d-34.18025393525919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96634324325ba689%3A0xd5f6eee1e76c84be!2sPje.%20El%20Mandarino%2C%20Rancagua%2C%20O%27Higgins!5e0!3m2!1ses!2scl!4v1730044595436!5m2!1ses!2scl"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className='mb-16'
                    ></iframe>
                    <img
                        className="absolute top-0 left-0 z-10 w-32 -translate-x-2/3 -translate-y-2/3 md:w-48 lg:w-64"
                        src="https://lab.webix.cl/wp-content/uploads/2024/10/25-480x480.png"
                        alt=""
                    />
                    <img
                        className="absolute top-0 right-0 z-10 w-32 translate-x-2/3 -translate-y-2/3 md:w-48 lg:w-64"
                        src="https://lab.webix.cl/wp-content/uploads/2024/10/Flecha-3-480x480.png"
                        alt=""
                    />
                    <img
                        className="absolute bottom-0 right-0 z-10 w-20 translate-x-3/4 translate-y-5/7 md:w-28 lg:w-40"
                        src="https://lab.webix.cl/wp-content/uploads/2024/10/24-480x480.png"
                        alt=""
                    />
                    <img
                        className="absolute bottom-0 left-0 z-10 w-32 -translate-x-1/1 translate-y-5/7 md:w-48 lg:w-64"
                        src="https://lab.webix.cl/wp-content/uploads/2024/10/Flecha-1-480x480.png"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};