import React, { useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { Link, animateScroll as scroll, } from 'react-scroll'





function Navbar() {
    const [click,setlick] = useState(false)
  return (
   <>
    <nav className="nav bg-slate-200 w-screen h-20  flex">
        <div className='  grow  flex space-x-6 '>
            <div className='flex items-center mr-6'>
            <h1 className='font-bold text-4xl md:text-6xl '>Bla<span className='text-blue-400'>nk</span>.</h1>
            </div>
            <ul className='hidden md:flex space-x-8 items-center  justify-center '>
                {/* <li className="text-xl font-bold  cursor-pointer hover:text-blue-400   transition-all">Home</li>
                <li className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-all ">About</li>
                <li className="text-xl font-bold cursor-pointer  hover:text-blue-400 transition-all">Support</li>
                <li className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-all ">Platforms</li>
                <li className="text-xl font-bold cursor-pointer hover:text-blue-400 transition-all ">Pricing</li> */}
                          <li className='text-xl font-bold  cursor-pointer hover:text-blue-400   transition-all'><Link to="home" smooth={true} duration={500}>Home</Link></li>
                            <li className='text-xl font-bold  cursor-pointer hover:text-blue-400   transition-all'><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                            <li className='text-xl font-bold  cursor-pointer hover:text-blue-400   transition-all'><Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                            <li className='text-xl font-bold  cursor-pointer hover:text-blue-400   transition-all'><Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                             <li className='text-xl font-bold  cursor-pointer hover:text-blue-400   transition-all'><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            </ul>
        </div>
        <div className="hamburger h-20 w-20  md:hidden">
         <HiOutlineMenu className='w-10 h-10 relative top-5 left-2 cursor-pointer' onClick={()=>{setlick(!click)}}/>
        </div>
        <div className="hidden md:flex items-center   ">
        <button className="button px-2 w-24 bg-blue-400 rounded-xl h-10 font-semibold text-md text-white hover:scale-110 hover:text-slate-900 transition ">
                    Sign Up
        </button>
        <button className="button px-2 w-24 bg-black rounded-xl h-10 font-semibold text-md mr-10 ml-5 text-white hover:scale-110 hover:text-slate-400 transition ">
                    Sign in
        </button>
        </div>
    </nav>
    <div className='  '>
        <ul className={click?'bg-slate-900 p-4 flex items-center flex-col border-b-2 space-y-2  ':'hidden'} >
            <li className="w-max mt-1 bg-slate-900 font-semibold text-md  flex items-center align-center border-b-2 border-black text-blue-400    "><Link onClick={()=>{setlick(!click)}} to="home" smooth={true} duration={500}>Home</Link></li>
            <li className="w-max bg-slate-900 font-semibold flex items-center  border-b-2 border-black text-blue-400   "><Link onClick={()=>{setlick(!click)}} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
            <li className="w-max bg-slate-900 font-semibold flex items-center border-b-2 border-black text-blue-400 "><Link onClick={()=>{setlick(!click)}} to="support" smooth={true} offset={-50} duration={500}>Support</Link> </li>
            <li className="w-max bg-slate-900 font-semibold flex items-center border-b-2 border-black  mt-2 text-blue-400 "><Link onClick={()=>{setlick(!click)}} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
            <li className="w-max bg-slate-900  font-semibold flex items-center border-b-2 border-black mb-5 mt-2 text-blue-400 "><Link onClick={()=>{setlick(!click)}} to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
            <button className='w-[95%] rounded-lg bg-blue-400 h-10 font-semibold'>Sign in</button>
            <button className='w-[95%] rounded-lg bg-slate-200  h-10 font-semibold'>Sign up</button>
        </ul>
    </div>
   </>
  )
}

export default Navbar
