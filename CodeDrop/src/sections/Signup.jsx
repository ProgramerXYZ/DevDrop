import React,{useState,useEffect} from "react";
// import Mascot from '../components/Mascot.jsx';
import logo from '../assets/codedroplogo.jpg'
import {Link} from 'react-router-dom'
import "../App.css";


function Signup(){

 return <section className='signup-cont  min-h-screen flex flex-col  items-center justify-center'> 
     <div className='w-full max-w-sm flex  items-end gap-4 p-3 justify-center '>
      <img className='logo' src={logo}/>
    <h2 className='text-white text-[28px] flex  items-center justify-center font-semibold'>
        CodeDrop
      </h2>
      
      </div>
    <div className='w-full max-w-sm h-[500px] rounded-xl bg-[#12111d] border border-gray-700   flex flex-col p-3 '>
      < article className='text-center w-full p-2 h-[15%]'>
      <h1 className=' text-white font-bold text-[28px]'> Create your account</h1>
      <p className='font-medium text-white opacity-50 text-base'>start sharing in seconds</p>
      </article>
      <form className='flex items-center flex-col h-[65%] justify-center gap-3 w-full p-2'>
       <div className='w-[95%]'>
        <label className='text-xs font-medium text-white'>Full name</label>
        <input type='text' className='w-full rounded h-[45px] border border-gray-700 bg-transparent  px-3 text-white opacity-90 outline-none focus:border-purple-500' 
        placeholder='John Duo'/>
        </div>
        <div className='w-[95%]'>
        <label className='text-xs font-medium text-white' Htmlfor='email'>Email adress</label>
        <input type='email' name='email'className='w-full h-[45px] rounded border border-gray-700 bg-transparent px-3 text-white opacity-90 outline-none focus:border-purple-500' placeholder='you@gmail.com'/>
        </div>
        <div className='w-[95%]'>
        <label className='text-xs font-medium text-white'>Password</label>
        <input type='password'className='w-full h-[45px] rounded border border-gray-700 bg-transparent px-3 text-white opacity-90  text-white outline-none focus:border-purple-500'
        placeholder='At least 8 characters' />
        </div>
        <button className='w-[95%] rounded text-white cursor-pointer bg-violet-600  font-semibold hover:bg-violet-500 transition duration-300 h-[45px]'>Sign up</button>
      </form>
      <div className='h-[20%] text-white flex items-center justify-center gap-[2px]  flex-col '>
      <div className='flex items-center gap-3 w-[85%]'>
         <div className='h-px flex-1 bg-gray-300'>
         </div>
         <span className='text-sm text-gray-500 font-medium'>or</span>
         <div className='h-px flex-1 bg-gray-300'>
        </div>
      </div>
       < button className=" w-[90%] rounded cursor-pointer h-[45px] font-medium hover:scale-[1.01] transition duration-200  border border-gray-700">Continue width Github</button>
       <p className="opacity-70 pt-1 text-base">Don't have an account? <span className='text-violet-600 '><Link to='/Login'>Log in</Link></span></p>
     </div>
    </div>
       
       </section>
}

export default Signup;


