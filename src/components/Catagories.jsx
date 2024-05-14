import React, { useState } from 'react'
import { categories } from '../data/data'

function Catagories() {
    const [catagory,setCatagory]=useState(categories)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='font-bold text-orange-600 text-4xl text-center'>Top Rated Menu Items</h1>
        {/* catagories */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
{
    catagory.map((item,index)=>(
        <div key={item.id} className='bg-gray-100 p-4 rounded-lg flex justify-between items-center hover:scale-105 cursor-pointer duration-300'>
<h2 className='font-bold sm:text-xl'>{item.name}</h2>
<img className='w-20' src={item.image} alt={item.name}/>
        </div>
    ))
}
        </div>
    </div>
  )
}

export default Catagories