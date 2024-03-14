import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { catageryHandle } from '../store/slices/video'
 
 
const ButtonAll = () => {
 
    const btnname=[
        'All','Arjit Singh','Mixed','Live','B Praak','Arjit Sing','Javascript','Music','Arjit Singh','Mixed','Live','B Praak','Sales','Gaming','phones','news','games','technics',   ]
        // catagery
        const dispatch=useDispatch()
          function getbtnvalue(index){
            dispatch(catageryHandle(index))
               
          }
        //   const swodata=useSelector((state)=>{
        //     return state.video.videos
        //   }
        //    )
        // swodata.map((item)=>{
        //   console.log(item.id.videoId)
        // })
       
        return (
    <div className=' owncsroll   w-[100%] flex gap-4 relative   pl-3 overflow-x-scroll '>
       
        {btnname.map((item,index)=>(
            <button onClick={()=>getbtnvalue(item)} key={index} className=" 
              whitespace-nowrap bg-[#ccc] hover:bg-[#ddd]  text-black font-bold p-2 mt-2 w-fit  rounded">{item}</button>
        ))}
       
    </div>
  )
}

export default ButtonAll