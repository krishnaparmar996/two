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
          <div className='bg-warning p-3'>
      {
        vidArr && vidArr.map((ele)=>{
            return <VideoItem key={ele?.id?.videoId}
            ele={ele}
            setVidId={setVidId}
            />
        })
      }
    </div>
    </div>
  )
}

export default VideoList
