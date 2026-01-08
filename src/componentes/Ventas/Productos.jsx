import React, {useState, useEffect} from 'react'

export const Productos = () => {

  const [data, setData] = useState(null);

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())            
            .then(data=>setData(data))
  },[]);



  return (
    <div className='bg-green-50 pt-20'>
      <h1 className='text-2xl p-4 px-0'>
        Productos:
      </h1>
        <ol>
          {data?.map((products) => (
            <li key={products.id} className='bg-emerald-100 p-2 m-2 rounded-2xl w-2xs h-40 float-left'>
              <img src={products.image} className='h-10 w-10 self-center'/>
              <h3>{products.title}</h3>
              <p>Precio: ${products.price}</p>
            </li>
          ))}
        </ol>
    </div>
  );
}
