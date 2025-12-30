import React from 'react'

export const Nav = () => {
  return (
    <div>
        <header className='bg-[#7BCAB2] fixed w-full z-50 h-12 shadow-2xl'>
            <ul className='text-center grid grid-flow-col grid-cols-12 gap-4'>
                <li className='col-span-1 col-end-11 row-span-1 text-emerald-50 text-2xl'><a href="/" className='inline-block align-middle'>Inicio</a></li>
                <li className='col-span-1 col-end-12 row-span-1 text-emerald-50 text-2xl'><a href="/Ventas" className='inline-block align-middle'>Ventas</a></li>
            </ul>
        </header>
    </div>
  )
}
