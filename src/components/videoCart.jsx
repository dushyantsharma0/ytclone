import React, { useEffect, useState } from 'react'
import Avatar from 'react-avatar'
import { useContext } from 'react'
import axios from 'axios'
import { GlobleInfo } from '../App'
import { API_KEY } from '../constants/youtube'



const videoCart = (index) => {
     const {memuval}=useContext(GlobleInfo)

     const [channellogo, setchannellogo] = useState()
     const getytChannelsName= async()=>{
             const resp=
             
await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${index.item.snippet.channelId}&key=${API_KEY} `)
        setchannellogo(resp.data.items[0].snippet.thumbnails.high.url)
                }
                

    useEffect(() => {
        getytChannelsName()
      
    }, [])

  return (
   <div className=' sm:m-1 sm:mx-6 m-1 ' >
    <img className={`   w-full rounded-xl  sm:${memuval?'w-80':'w-90'}`} src={index.item.snippet.thumbnails.high.url} alt="" />
   <div className='flex items-center gap-3'>
   <Avatar className= ' sm:ml-1' src={channellogo} size="40" round={true} />

     <div className='pt-3 '> 
     <h1 className='   font-bold sm:w-60'> {index.item.snippet.title}</h1>
<p>{index.item.snippet.channelTitle}</p>
     </div>
   </div>
           
   </div>
  )
}

export default videoCart