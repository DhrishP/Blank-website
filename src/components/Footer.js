import React from 'react'
import {BsFacebook} from'react-icons/bs';
import {AiFillGithub, AiFillInstagram} from'react-icons/ai';
import {BsInstagram} from'react-icons/bs';
import {AiOutlineTwitter} from'react-icons/ai';
import {AiFillLinkedin} from'react-icons/ai';

function footer() {
  return (
    <>
   
    <div className='bg-slate-900  w-full'>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-6 ">
          <div className="box-1 text-white space-y-2 mt-4 md:mt-6">
            <h2 className='font-bold text-xl'>Solutions</h2>
            <ul className='space-y-2'>
              <li>Marketing </li>
              <li>Analysis</li>
              <li>Data</li>
              <li>Cloud</li>
            </ul>
</div>
          <div className="box-1 text-white space-y-2 mt-4 md:mt-6">
            <h2 className='font-bold text-xl'>Suport</h2>
            <ul className='space-y-2'>
              <li>Pricing </li>
              <li>Documentations</li>
              <li>Queries</li>
              <li>API status</li>
            </ul>
</div>
          <div className="box-1 text-white space-y-2 md:mt-6">
            <h2 className='font-bold text-xl'>Company</h2>
            <ul className='space-y-2'>
              <li>About </li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Partners</li>
            </ul>
</div>
          <div className="box-1 text-white space-y-2 md:mt-6">
            <h2 className='font-bold text-xl'>Legal</h2>
            <ul className='space-y-2'>
              <li>Privacy </li>
              <li>Terms</li>
              <li>Conditions</li>
              <li>Policies</li>
            </ul>
</div>
          <div className="box-5 text-white mt-2 mb-2 col-span-2 space-y-3 md:col-span-2">
            <h1 className='font-bold text-2xl text-center'>SUSCRIBE TO OUR NEWSLETTER</h1>
            <p className='text-center'>To get more information and weekly updates.</p>
            <input type="email"  className='w-[95%] md:w-3/4  md:rounded-lg text-black block mx-auto h-10'placeholder='Enter your email.' />
            <button className='w-[95%] md:w-3/4  md:rounded-lg block mx-auto h-10 hover:bg-slate-900 hover:border bg-blue-500 font-semibold  text-sm '>Subscribe</button>
          </div>
          <div className="box-6"></div>
        </div>
        <hr className='my-2' />
        <div className='text-gray-400 '>
          <p className='text-center my-4'>Made by Dhrish Parekh. All rights reserved</p>
          <div className='flex space-x-4 justify-evenly'>
          <BsFacebook className='w-7 h-10 cursor-pointer'/>
          <BsInstagram className='w-7 h-10 cursor-pointer'/>
          <AiFillGithub  className='w-7 h-10 cursor-pointer'><a href="https://github.com/DhrishP"></a></AiFillGithub>
          <AiOutlineTwitter className='w-8 h-10 cursor-pointer'/>
          <AiFillLinkedin className='w-8 h-10 cursor-pointer'/>
          </div>
        </div>
    </div>
    </>
  )
}

export default footer