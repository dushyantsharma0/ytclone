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
    <div className=' ml-2 w-[100wh] mt-[5rem] sm:ml-4'>
        <div>
        <iframe className='  h-60 w-[100wh] sm:w-full sm:h-[450px]'
 
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
             <h1 className=' w-[350px] font-bold '> {videoDetail?.snippet?.title}</h1>
           <div className='sm:flex  justify-between items-center'>
           <div className='flex items-center sm:mt-2 sm:gap-3'>
            <Avatar className='mr-3 sm:mr-0' src={videoDetail?.snippet?.thumbnails?.high?.url} size="40" round={true} />
    
                <h1 className=' sm:text-xl text-[15px]'>{videoDetail?.snippet?.channelTitle} </h1>
                <button className='  ml-5  sm:ml-0 bg-black text-white py-3 px-6 rounded-3xl'>Subscribe</button>
            </div>
            <div className='   flex  sm:mt-1 mt-2 justify-center gap-2'> 
            <div className='flex '>
             <button className=' hover:bg-[#ddd]  w-15 sm:w-20 h-10 bg-[#ccc]
              flex justify-center items-center rounded-l-full gap-2 sm:text-[17px] text-[13px] pl-1 '> <AiOutlineLike/> 
               {videoDetail.statistics.likeCount}</button>
             <button  className=' hover:bg-[#ddd] w-10 sm:w-14 h-10 bg-[#ccc] flex justify-center items-center rounded-r-full'> <BiDislike/></button>

            </div>
            <button  className=' hover:bg-[#ddd] w-15  text-[12px] p-2 sm:text-[17px] sm:w-24 h-10 bg-[#ccc] flex justify-center items-center rounded-full'> <IoIosShareAlt/> Share</button>
            <button  className=' hover:bg-[#ddd]  text-[14px] p-1 w-20 sm:w-28 h-10 bg-[#ccc] flex justify-center items-center rounded-full'> <MdOutlineFileDownload/> Download</button>
            <button  className=' hidden  mr-3 hover:bg-[#ddd]   w-10 h-10 bg-[#ccc] sm:flex justify-center items-center rounded-full'> <BsThreeDots/></button>        
            </div>
           </div>
           <div>
            <div className=' w-[300px] sm:block p-3  rounded-xl mb-52 mt-2 ml-1 sm:w-[730px] h-20 bg-[#ccc]' >
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