import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import LiveChat from './LiveChat';
import { Facknames } from '../api/facknames'
import { Fackmassige } from '../api/facknames';
import { FackPic } from '../api/facknames';
import { GlobleInfo } from '../App';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { nameHandle } from '../store/slices/name';
const Chatsection = () => {
  const [sendselfmsg , setSendselfmsg ] = useState('')
   const dispatch=useDispatch()
    const {data}=useContext(GlobleInfo)

const getfacknames = () =>{
     dispatch(nameHandle({name:Facknames(),msg:Fackmassige(),avtar:FackPic()}))
}
 useEffect(() => {
  const time=setInterval(() => {
    getfacknames()
   
  }, 1000);
  return () => clearInterval(time);
 }, [])

    function sendmsg(){
      dispatch(nameHandle({name:'Tiger-Coder',msg:sendselfmsg,avtar:FackPic()}))
      setSendselfmsg('')
    }
  return (
    <>
     <div className=' hidden  sm:block sm:ml-4 sm:mt-20 '>
        <div className=' rounded-xl relative   w-[23vw] h-[80vh] bg-[#ddd] border-2  border-[#000000]  '>
          
          <div  className='flex  justify-between w-full h-fit   border-b border-[#000000] p-4'>
          <h1>Top chat</h1>
          <div className='flex gap-3 '>
          <BsThreeDotsVertical className='text-2xl'/>
           <RxCross2  className='text-2xl'/>
          </div>
        
          </div>
          <div className=' h-[73%]  w-full'>
         
          <div  className=' w-full h-full  flex flex-col-reverse overflow-y-scroll'>
          <LiveChat/>
          </div>
                  
            
         
           
        
          </div>
          <div  className=' absolute bottom-0 w-full h-fi border-t border-[#000000] p-3 px-5' >
             <div className='flex gap-1' >
             <input value={sendselfmsg} onChange={(e)=>setSendselfmsg(e.target.value)} type="text" placeholder='Chat....' className='w-full outline-none  border-none rounded-2xl  p-1 pl-2  bg-[#ccc]' />
             <button onClick={sendmsg}><IoSend className='text-2xl'/></button>
             </div>

            </div>
        </div>
     </div>
    </>
  )
}

export default Chatsection