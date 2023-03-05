import React from 'react'
import Bg from '../assets/bg-5.jpg';
import {AiOutlineArrowRight} from 'react-icons/ai';
import {BsFillTelephoneOutboundFill} from 'react-icons/bs';
import {HiSupport} from 'react-icons/hi';
import {HiOutlineChip} from 'react-icons/hi';


function Services() {
  return (
   
   <div name="support" className='w-screen md:max-h-screen '>
    <div className='h-[700px] w-screen bg-gray-900/90 absolute' >
      <img src={Bg} className="w-full h-full object-cover mix-blend-overlay" alt="" />
    </div>
      <div className='max-w-[1240px] h-full text-white relative top-5 '>
        <div className='lg:ml-[15.9rem] xl:ml-[17rem]'>
            <h2 className='text-white text-center lg:text-5xl lg font-semibold text-4xl'>Support</h2>
            <h2 className='text-white my-10 text-center font-bold text-5xl'>Finding the right team</h2>
           
            <p className='text-white text-center my-4 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus debitis eveniet laudantium velit fugiat! Fugiat nobis officia nulla! Aperiam voluptates doloribus, eveniet repudiandae explicabo numquam quae eligendi consectetur. Tenetur, ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, consequuntur. <span className='hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim fuga consequuntur veritatis neque, aperiam fugiat nulla sapiente nostrum quis laudantium.</span></p> 
            </div>
      </div>
     
      <div className='relative mx-auto  text-white max-w-[1280px] mt-32 gap-2 grid grid-rows-3 md:grid-cols-3 md:mx-auto md:bottom-[-45px]  '>
      <div className='border rounded-md mx-2 shadow-lg'>
        <div className='bg-white text-black rouded-t-lg  '>
          <div className='bg-blue-600 rounded-lg text-2xl w-16 h-16 flex items-center justify-center relative top-[-15px] left-4' >
          <BsFillTelephoneOutboundFill className='text-white' />
          </div>
          <h2 className='mt-4 mx-4 font-bold text-2xl'>Sales</h2>
          <p className=' font-semibold mx-2  py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorem magnam doloremque neque minima necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, amet?</p>
        </div>
        <div className='flex flex-row bg-slate-300 h-10 text-blue-600 items-center rounded-b-lg py-6 shadow-lg '>
          <p className='text-bold mx-2 cursor-pointer  '>Contact us </p>
          <AiOutlineArrowRight className='h-[1.6rem]'/>
        </div>
        </div>
        <div className='border rounded-md mx-2 shadow-lg'>
        <div className='bg-white text-black rouded-t-lg  '>
          <div className='bg-blue-600 rounded-lg text-2xl w-16 h-16 flex items-center justify-center relative top-[-15px] left-4' >
          <HiSupport className='text-white text-3xl' />
          </div>
          <h2 className='mt-4 mx-4 font-bold text-2xl'>Techincal Support</h2>
          <p className=' font-semibold mx-2  py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorem magnam doloremque neque minima necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, amet?</p>
        </div>
        <div className='flex flex-row bg-slate-300 h-10 text-blue-600 items-center rounded-b-lg py-6 shadow-lg '>
          <p className='text-bold mx-2 cursor-pointer  '>Contact us </p>
          <AiOutlineArrowRight className='h-[2em]'/>
        </div>
        </div>
        <div className='border rounded-md mx-2 shadow-lg '>
        <div className='bg-white text-black rouded-t-lg mx-auto  '>
          <div className='bg-blue-600 rounded-lg text-2xl w-16 h-16 flex items-center justify-center relative top-[-15px] left-4' >
          <HiOutlineChip className='text-white text-3xl' />
          </div>
          <h2 className='mt-4 mx-4 font-bold text-2xl'>Media Inquiries</h2>
          <p className=' font-semibold mx-2  py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, dolorem magnam doloremque neque minima necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, amet?</p>
        </div>
        <div className='flex flex-row bg-slate-300 h-10 text-blue-600 items-center rounded-b-lg py-6 shadow-lg '>
          <p className='text-bold mx-2 cursor-pointer  '>Contact us </p>
          <AiOutlineArrowRight className='h-[1.6rem]'/>
        </div>
        </div>
      </div>
    
   </div>
   
   
   
  )
}

export default Services