import React from 'react'

function VideoDetail({vidId}) {
  return (
    <div className='  p-3  bg-black '>
      <iframe width={'100%'} height={'500px'} src={`https://www.youtube.com/embed/${vidId}`} frameborder="0"></iframe>
    </div>
  )
}

export default VideoDetail
