import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Avatar from 'react-avatar'
import axios from 'axios'
import { API_KEY } from '../constants/youtube'
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";

import { BsThreeDots } from "react-icons/bs";
const Videoare = () => {
    const [videoDetail , setVideoDetail ] = useState(null)
    const [myparams] = useSearchParams()
    const url=myparams.get('v')
  

    const getsinglevideodetail= async()=>{
        const detail=  await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${url}&key=${API_KEY}`)
            // console.log( detail?.data?.items[0])
            setVideoDetail(detail?.data?.items[0])
    } 
     
  
    
    useEffect(() => {
    getsinglevideodetail()

    }, [])
    // console.log( 'this is ',videoDetail)
  return (
  <>
    <div className=' mt-[5rem] ml-4'>
        <div>
        <iframe width="900"
 height="450"
  src={`https://www.youtube.com/embed/${url}?&autoplay=1`}
   title="YouTube video player"
   
    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
     gyroscope; picture-in-picture; web-share"
      allowFullScreen></iframe>
        </div>
       <div>
        {
            videoDetail?.snippet?
            
           <div>
             <h1 className=' font-bold '> {videoDetail?.snippet?.title}</h1>
           <div className='flex  justify-between items-center'>
           <div className='flex items-center mt-2 gap-3'>
            <Avatar src={videoDetail?.snippet?.thumbnails?.high?.url} size="40" round={true} />
    
                <h1>{videoDetail?.snippet?.channelTitle} </h1>
                <button className=' bg-black text-white py-3 px-6 rounded-3xl'>Subscribe</button>
            </div>
            <div className='flex  gap-2'> 
            <div className='flex '>
             <button className=' hover:bg-[#ddd]  w-20 h-10 bg-[#ccc]
              flex justify-center items-center rounded-l-full gap-2 text-[17px] pl-1 '> <AiOutlineLike/> 
               {videoDetail.statistics.likeCount}</button>
             <button  className=' hover:bg-[#ddd] w-14 h-10 bg-[#ccc] flex justify-center items-center rounded-r-full'> <BiDislike/></button>

            </div>
            <button  className=' hover:bg-[#ddd]   w-24 h-10 bg-[#ccc] flex justify-center items-center rounded-full'> <IoIosShareAlt/> Share</button>
            <button  className=' hover:bg-[#ddd]   w-28 h-10 bg-[#ccc] flex justify-center items-center rounded-full'> <MdOutlineFileDownload/> Download</button>
            <button  className=' mr-3 hover:bg-[#ddd]   w-10 h-10 bg-[#ccc] flex justify-center items-center rounded-full'> <BsThreeDots/></button>        
            </div>
           </div>
           <div>
            <div className=' p-3  rounded-xl mb-52 mt-2 ml-1 w-[730px] h-20 bg-[#ccc]' >
                <p>{videoDetail.statistics.viewCount} views </p>
            </div>
           </div>
           </div>
           
            :null


        }
      
       </div>
   

    </div>
  </>
  )
}

export default Videoare