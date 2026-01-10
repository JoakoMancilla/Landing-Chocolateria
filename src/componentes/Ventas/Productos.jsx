import React, { useState, useEffect } from 'react'

export const Productos = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (
    <div className="bg-green-50 pt-20 px-4 sm:px-8 sm:pb-8 p-4">
      <h1 className="text-2xl mb-6">Productos</h1>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

        {/* Filtros */}
        <aside className="md:col-span-1 bg-white h-fit p-4 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Filtros</h2>

          <fieldset className="space-y-2">
            <legend className="sr-only">Tipo de chocolate</legend>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="tipo"
                value="Chocolate Negro"
                className="accent-amber-600"
              />
              Chocolate Negro
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="tipo"
                value="Chocolate Blanco"
                className="accent-amber-600"
              />
              Chocolate Blanco
            </label>
          </fieldset>
        </aside>


        {/* Productos */}
        <section className="md:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(product => (
              <div
                key={product.id}
                className="bg-white p-4 rounded-2xl shadow hover:shadow-lg transition "
              >
                <div className='bg-gray-100 rounded-xl py-2 mb-2'>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-32 object-contain mx-auto mb-4 "
                  />
                </div>

                <h3 className="text-sm font-medium line-clamp-2">
                  {product.title}
                </h3>

                <p className="text-lg text-emerald-700 font-semibold mt-4">
                  ${product.price}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
