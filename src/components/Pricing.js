import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai';
import {ImCross} from 'react-icons/im';

function Pricing() {
  return (
    <>
    <div name="pricing" className='w-screen md:h-[60vh] h-screen mt-[30rem] relative sm:mt-60 md:mt-0'>
        <div className='h-[700px] w-screen bg-slate-900 pt-10  '>
        <div className='text-white space-y-4 '>
            <h1 className='text-2xl text-center font-lg text-blue-300'>Pricing</h1>
            <p className='text-3xl text-center mt-4 font-bold'>The right price for research</p>
            < p className='text-center '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum blanditiis saepe laborum commodi quasi ipsam dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, quae. harum autem necessitatibus et?</p>

        </div>
         </div>
         <div className='grid grid-rows-2 gap-4 md:flex md:justify-evenly  justify-center items-center   relative -top-96 md:-top-72 '>
            <div className='bg-slate-50 space-y-6 md:space-y-10 py-10 px-10 md:px-20 md:min-w-1/2 md:relative md:mx-auto rounded-2xl shadow-2xl md:h-screen'>
                <p className='bg-blue-400 border inline p-2   rounded-lg'>STANDARD</p>
                <h1 className='text-6xl font-extrabond ' >$49/mo</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptas.</p>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <ImCross className='text-red-500 h-4 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <ImCross className='text-red-500 h-4 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <button className='p-4 bg-black text-blue-50 w-full rounded-lg hover:bg-white hover:border hover:text-blue-400 border-black mt-10 font-bold text-sm'>Get Started</button>
            </div>
            <div className='bg-slate-50 space-y-6 md:space-y-10 py-10 px-10 md:px-20 md:w-1/2 md:relative md:mx-auto  rounded-2xl shadow-2xl md:h-screen '>
                <p className='bg-blue-400 border inline p-2   rounded-lg'>PREMIUM</p>
                <h1 className='text-6xl font-extrabond ' >$89/mo</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptas.</p>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div>
                <div className='flex items-center  space-x-1'>
                    <AiOutlineCheck className='text-green-500 h-6 w-5'/>
                    <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet.</p>
                </div >
              
                <button className=' p-4 bg-black text-blue-50 w-full rounded-lg hover:bg-white hover:border hover:text-blue-400 border-black mt-10 font-bold text-sm'>Get Started</button>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Pricing