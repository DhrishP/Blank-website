import React from 'react'

function Support() {
  return (
   <>
        <div name="about" className="h-[122vh] md:h-[60vh] w-screen bg-slate-100  ">
            <div className="max-w-[1280px] mx-auto grid grid-row-3 w-full  space-y-10">
            <div className='mt-20 md:mt-10 '><h1 className='text-center font-bold text-3xl md:text-4xl '>Trusted by developers across the world</h1></div>
            <div className='text-neutral-400 text-lg '><p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur eius atque eaque labore adipisci aperiam quos. Id fugit eos laboriosam!</p></div>
            <div className='grid grid-rows-3 md:grid-cols-3 gap-1 '>
                <div className="py-8 text-blue bg-white shadow-xl border md:flex flex-col items-center justify-center  " ><h2 className='text-center text-blue-600 text-5xl my-2 '>24/7</h2><p className='text-center font-semibold'>Delievery</p> </div>
                <div className="py-8 text-blue bg-white shadow-xl border" ><h2 className='text-center my-2 text-blue-600 text-5xl '>100%</h2><p className='text-center font-semibold'>Completion</p> </div>
                <div className="py-8 text-blue bg-white shadow-xl border" ><h2 className='text-center text-blue-600 text-5xl my-2'>100K</h2><p className='text-center font-semibold'>Transactions</p></div>
            </div>
            </div>
        </div>
      
   </>
  )
}

export default Support