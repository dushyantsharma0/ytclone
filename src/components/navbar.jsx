import React, { useEffect, useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import Avatar from 'react-avatar';
import { FaSearch } from "react-icons/fa";
import { useContext } from 'react';
import { GlobleInfo } from '../App';
import { useDispatch } from 'react-redux';
import { catageryHandle } from '../store/slices/video';


const Navbar = () => {
  const [size, setsize] = useState(40)
  
  const {menuvalue}=useContext(GlobleInfo)
  const dispatch=useDispatch()
  const [inputvalue , setinputvalue ] = useState('')
  function sendinputvalue(){
      dispatch(catageryHandle(inputvalue))
      setinputvalue('')
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(catageryHandle(inputvalue))
      setinputvalue('')
    }
  };
      
  return (
    <div  className='flex sm:justify-between fixed w-[100%]  bg-white ' >
      <h1 className='  logo z-10    top-10  sm:top-7 text-xl left-24 sm:left-60 absolute'>Tiger-Coder</h1>
    <div className=' sm:pl-6 flex items-center sm:gap-4'>
      <IoMdMenu className=' hidden sm:block sm:text-3xl' onClick={()=>menuvalue()}/> 
     <img className=' sm:w-32 w-10 ' src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="" />
     </div>
    <div className='flex items-center w-1/2 '> 
    <div className=' ml-3 mt-1 flex items-center  h-[10px]   sm:w-10/12 sm:h-10  border border-gray-400 rounded-l-full p-4'>
      <input onKeyDown={handleKeyPress} value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)} 
       type="text" className=' w-[130px]   outline-none sm:w-full text-xl' placeholder='Search'  /></div>
    <button  onClick={sendinputvalue}   className='mt-1 flex items-center h-[34px] justify-center w-20 sm:h-10 border border-gray-400 rounded-r-full bg-slate-100'>
      <FaSearch className='sm:text-xl' /></button>
    </div>
    <div className='  sm:pr-6 flex items-center sm:gap-6'> <IoIosNotificationsOutline className=' hidden sm:block sm:text-3xl'/>
     <MdOutlineVideoCall className={` hidden sm:block  sm:text-3xl`}/>
     <Avatar className='ml-7 sm:ml-0' src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944' size={size} round={true} />
     </div>

    </div>
  )
}

export default Navbar