import React from 'react'
import bgimg from '../assets/cloud-computing-2-1-removebg-preview.png'
import {BsCloudUpload} from 'react-icons/bs';
import {DiDatabase} from 'react-icons/di';
import {MdOutlineSecurity}  from 'react-icons/md';
import {HiPaperAirplane} from 'react-icons/hi'


function Herocontainer() {
  return (
    <>
    <div name="home" className='h-auto bg-slate-900  w-screen'>
    <div className=' flex flex-col items-center   md:grid grid-cols-2 gap-y-5 '>
        <div className=' w-1/2 mt-20 md:ml-20 text-white'>
       <h1 className='text-6xl font-bold '>Protect Yourself using Bla<span className='text-blue-400'>nk.</span></h1>
       <h2 className='mt-6 text-left md:font-semibold text-md '>India's best cloud services website sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.A nobis exercitationem laborum ratione harum! Ipsum veniam voluptatem eligendi eius ut! <span className='hidden lg:block'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempora deserunt, quos, cumque repellat et nesciunt dolorem ut architecto repellendus, quam id eius. </span></h2>
       <div className='buuton '>
        <button className="p-2 w-56 md:w-64 my-5 font-bold transition hover:bg-slate-900 hover:border  md:rounded-xl bg-blue-400   ">Get started</button>
</div>
</div>
<div className='mt-6 ml-7 md:ml-10 '>
    <img src={bgimg} alt="burigr" className='h-max w-max  '  />
</div>
<div className='col-span-2 max-w-96 m-auto mb-5   '>
     
     <div className='hidden md:flex flex-col items-center content-center rounded-md  bg-slate-200 h-24  shadow-lg  '>
     <div className='mb-2 mt-2'><h2 className='text-center text-lg font-bold'>Services</h2></div>
        <div className='flex items-center content-center  space-x-4 p-2'>
         <div className='flex'>
         <BsCloudUpload className='h-6 text-blue-400'/>
         <p>Cloud update</p>
        </div>
        <div className='flex'>
           <DiDatabase className='h-6 text-blue-400'/>
         <p>Database Documentation</p>
        </div>
        <div className='flex'>
         <MdOutlineSecurity className='h-6 text-blue-400'/>
         <p>App security</p>
        </div>
        <div className='flex'>
         <HiPaperAirplane className='h-6 text-blue-400'/>
         <p>Api services</p>
        </div>
        </div>
        
     </div>
     </div>
    </div>

    </div>
 
   
    

    </>
  )
}

export default Herocontainer
