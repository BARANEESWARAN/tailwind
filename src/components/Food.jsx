import React, { useState } from 'react'
import { data } from '../data/data'

function Food() {
    const[food,setfood]=useState(data)


    // food filter
const foodFilter=(catagory)=>{

    setfood(
        data.filter((item)=>{
            return item.category===catagory
        })
    )
}



// price filter
const priceFilter=(price)=>{

    setfood(
        data.filter((item)=>{
            return item.price===price
        })
    )
}



  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* fiter rows */}
        <div className='flex flex-col lg:flex-row justify-between'>
        {/* filter types */}
            <div>
<p className='text-gray-600 font-bold'>Filter Types</p>
<div className='flex justify-between  w-full flex-wrap '>
    <button onClick={()=>setfood(data)}  className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white active:bg-orange-600'>All</button>
    <button onClick={()=>foodFilter("burger")} className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>Burger</button>
    <button onClick={()=>foodFilter("pizza")} className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>Pizza</button>
    <button onClick={()=>foodFilter("salad")} className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>Salad</button>
    <button onClick={()=>foodFilter("chicken")} className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>Chicken</button>
</div>
            </div>

  {/* filter prices */}
  <div>
<p className='text-gray-600 font-bold'>Filter Price</p>
<div className='flex justify-between  w-full max-w-[390px]'>
    <button onClick={()=>priceFilter("$")} className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>$</button>
    <button onClick={()=>priceFilter("$$")}  className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>$$</button>
    <button onClick={()=>priceFilter("$$$")} className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>$$$</button>
    <button onClick={()=>priceFilter("$$$$")} className='border-orange-600 text-orange-600 m-2 hover:bg-orange-600 hover:text-white'>$$$$</button>
   
</div>
            </div>

        </div>

         {/* foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
{
food.map((item,index)=>(
    <div key={item.id} className='w-full rounded-lg border shadow-lg hover:scale-105 cursor-pointer duration-300'>
<img src={item.image} alt={item.name} className='w-full h-[200px]  object-cover rounded-t-lg'/>
<div className='px-2 py-2 flex justify-between'>
<p className='font-bold'>{item.name}</p>
<p>
    <span className='bg-orange-600 text-white p-1 rounded-full'>{item.price}</span>
</p>
</div>
    </div>
))
}
        </div>
    </div>
  )
}

export default Food