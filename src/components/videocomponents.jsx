import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS } from '../constants/youtube'
import { API_KEY } from '../constants/youtube'
import axios from 'axios'
import VideoCart from './videoCart'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { videoHandle } from '../store/slices/video'

const videoArea = () => {

  // const [item, setitem] = useState([])
  const item=useSelector((state)=>{
    return state.video.videos
  })
  const setectvideo=useSelector((state)=>{
    return state.video.catagery
  })
// console.log( "this is ",setectvideo.video.catagery)
  // todo: =>  using fetch method
  // const fetchyoutube = async() =>{
  //    const data=await fetch(YOUTUBE_VIDEOS)
  //     const result=await data.json()
  //     console.log(result)
  // }
  const fetchyoutube= async()=>{
    const response = await axios.get(YOUTUBE_VIDEOS)
    
    // console.log(response?.data?.items)
    // setitem(response?.data?.items)
  } 
  const  dispatch=useDispatch()
  const setcatagryvideo= async() => {
    const video=  await axios.get(`
    https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=
    ${setectvideo}&type=video&key=${API_KEY}`)
      dispatch((videoHandle(video?.data?.items)) )
     
   }
 
 
  
  useEffect(() => {
  // fetchyoutube()
  setcatagryvideo()
  console.log('anaa')
  }, [setectvideo])
 
  
  
  
  return (
    <div>
       <div className=' owncsroll overflow-y-scroll grid grid-cols-3  mt-7 h-[77vh]'>

       {item.map((item)=>(
          <Link key={item.id.videoId} to={`/watch?v=${item.id.videoId}`}> <VideoCart  item={item}/></Link>
       ))}
    
      
       </div>
        
    </div>
  )
}

export default videoArea