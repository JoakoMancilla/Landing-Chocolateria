import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const Carousel = () => {
    const videos = [
        "https://lab.webix.cl/wp-content/uploads/2024/10/Chocolate-Doble.mp4",
        "https://lab.webix.cl/wp-content/uploads/2024/10/Frutos-Secos-Doble.mp4",
        "https://lab.webix.cl/wp-content/uploads/2024/10/Queso-Doble.mp4"
    ];

    return (
        <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        className="w-full h-[80vh]"
        >
        {videos.map((src, i) => (
            <SwiperSlide key={i} className="relative">
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            />
            {/* Capa oscura encima (opcional) */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Texto o contenido encima del video */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold">
                    <img src="https://lab.webix.cl/wp-content/uploads/2024/10/Logo-EJJAF-pequeno.png" alt="" />
                Slide {i + 1}
                </h2>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>
    );
}