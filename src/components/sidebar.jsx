import React from 'react'
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useContext } from 'react';
import { GlobleInfo } from '../App';
const Sidebar = () => {
    const{memuval}=useContext(GlobleInfo)
    const yname=[
       { font: <CiHome className={`${memuval?'text-xl':'text-4xl'}`}/>,text:"Home"},
       { font: <SiYoutubeshorts  className={`${memuval?'text-xl':'text-4xl'}`}/>,text:"Shorts"},
       { font:  <MdOutlineSubscriptions  className={`${memuval?'text-xl':'text-4xl'}`}/>,text:"Subscriptions"},
    
    ];
    const yname2=[
        { font: <CiHome className='text-xl '/>,text:"Home"},
        { font: <SiYoutubeshorts  className='text-xl '/>,text:"Shorts"},
        { font:  <MdOutlineSubscriptions  className='text-xl'/>,text:"Subscriptions"},
        { font: <CiHome className='text-xl '/>,text:"Home"},
        { font: <SiYoutubeshorts  className='text-xl '/>,text:"Shorts"},
        { font:  <MdOutlineSubscriptions  className='text-xl'/>,text:"Subscriptions"},
        { font: <CiHome className='text-xl '/>,text:"Home"},
        { font: <SiYoutubeshorts  className='text-xl '/>,text:"Shorts"},
        { font:  <MdOutlineSubscriptions  className='text-xl'/>,text:"Subscriptions"},
        { font: <CiHome className='text-xl '/>,text:"Home"},
        { font: <SiYoutubeshorts  className='text-xl '/>,text:"Shorts"},
        { font:  <MdOutlineSubscriptions  className='text-xl'/>,text:"Subscriptions"},
        { font: <CiHome className='text-xl '/>,text:"Home"},
        { font: <SiYoutubeshorts  className='text-xl '/>,text:"Shorts"},
        { font:  <MdOutlineSubscriptions  className='text-xl'/>,text:"Subscriptions"},
        { font: <CiHome className='text-xl '/>,text:"Home"},
        { font: <SiYoutubeshorts  className='text-xl '/>,text:"Shorts"},
        { font:  <MdOutlineSubscriptions  className='text-xl'/>,text:"Subscriptions"},
    ]
  return (
     <>
    <div className={`mt-16  ${memuval?'overflow-y-scroll pr-16':'flex  flex-col   pt-20 '} h-[89vh] `}>
        {
            yname.map((item,index)=>{
                return(
                    <div className='flex items-center gap-5 pl-8 py-2 ' key={index}>
                        {item.font}
                        <span className={`text-xs ${memuval?'':'hidden'}`}>{item.text}</span>
                    </div>
                )
            })
        }
        {
            memuval?yname2.map((item,index)=>{
                return(
                    <div className='flex items-center gap-5 pl-8 py-2 ' key={index}>
                        {item.font}
                        <span className={`text-xs ${memuval?'':'hidden'}`}>{item.text}</span>
                    </div>
                )
            }):null
        }
   
    </div>
     </>
  )
}

export default Sidebar