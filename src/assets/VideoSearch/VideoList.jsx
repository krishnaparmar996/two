import React, { useEffect } from 'react'
import axios from 'axios'
import VideoItem from './VideoItem'
function VideoList({txt,debounce,setDebounce,vidArr,setVidArr,setVidId}) {

    let key = import.meta.env.VITE_VIDEO_SEARCH_API_KEY
   // console.log(key);
    //get videos using youtube api
let getVideos = async()=>{


    await axios
    .get(`https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=10&q=${debounce}&type=video&key=${key}`)
 .then(val=>setVidArr(val?.data?.items) )
 .catch(err=>console.log(err)
 )


}


   useEffect(()=>{
let timer = setTimeout(()=>{
 setDebounce(txt)
},1000)

return () =>{
    clearTimeout(timer)
}
   },[txt])

useEffect(()=>{
if(debounce){
    getVideos()
}
},[debounce])



  return (
    <div>
          <div className='p-3 bg-danger-subtle rounded-5'>
      {
        vidArr && vidArr.map((ele)=>{
            return <VideoItem key={ele?.id?.videoId}
            ele={ele}
            setVidId={setVidId}
            />
        })
        
        
        
      }
      {
        <h1 className='bg-warning my-3 w-auto text-center text-uppercase w-auto rounded-4 fw-bold  text-success fs-2'>type in search box </h1>
      }
      
    </div>
    </div>
  )
}

export default VideoList
