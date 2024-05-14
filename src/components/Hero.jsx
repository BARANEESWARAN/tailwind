import React from 'react'

function Hero() {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
       
<div className='max-h-[500px] relative'>
     {/* Overlay */}
        <div className='absolute bg-black/40 w-full h-full max-h-[500px] text-gray-200 flex flex-col justify-center space-y-4'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4 '>The <span className='text-orange-500'>Best</span></h1>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold px-4 '> <span className='text-orange-500'> Food</span> Delivered</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src="https://cdn.pixabay.com/photo/2024/04/08/15/00/food-photo-8683703_1280.jpg" alt="img"/>

</div>
    </div>
  )
}

export default Hero