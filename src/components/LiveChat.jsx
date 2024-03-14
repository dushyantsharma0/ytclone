import React from 'react'
import Avatar from 'react-avatar'
import { useSelector } from 'react-redux';

const LiveChat = ( ) => {
  const name=useSelector((state)=>{
    return state.name
  })
  return (
    <>
      <div>
      {
        name.map((index,i)=>{
          return <div key={i} className='flex gap-2 p-3 box-border  whitespace-rap  '>
          <Avatar 
          src={index.avatar}
           size="30" round={true} />
           <h1 className=' font-bold'> {index.name}</h1>
           <h1 className='w-[45%] '>{index.msg}</h1>
     
         </div>
        })
       }
      </div>
    </>
  )
}

export default LiveChat