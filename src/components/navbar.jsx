import React, { useState } from 'react'
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
    <div  className='flex justify-between fixed w-[100%]  bg-white ' >
    <div className=' pl-6 flex items-center gap-4'>
      <IoMdMenu className='text-3xl' onClick={()=>menuvalue()}/> 
     <img width={'104px'} src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg" alt="" />
     </div>
    <div className='flex items-center w-1/2 '> 
    <div className='flex items-center   w-10/12 h-10  border border-gray-400 rounded-l-full p-4'>
      <input onKeyDown={handleKeyPress} value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}  type="text" className='outline-none w-full text-xl' placeholder='Search'  /></div>
    <button  onClick={sendinputvalue}   className=' flex items-center justify-center w-20 h-10 border border-gray-400 rounded-r-full bg-slate-100'>
      <FaSearch className='text-xl' /></button>
    </div>
    <div className=' pr-6 flex items-center gap-6'> <IoIosNotificationsOutline className='text-3xl'/>
     <MdOutlineVideoCall className='text-3xl'/>
     <Avatar src='https://www.befunky.com/images/wp/wp-2021-01-linkedin-profile-picture-after.jpg?auto=avif,webp&format=jpg&width=944' size="40" round={true} />
     </div>

    </div>
  )
}

export default Navbar