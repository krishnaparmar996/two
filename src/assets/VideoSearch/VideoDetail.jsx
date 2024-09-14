import React from 'react'

function VideoDetail({vidId}) {
  return (
    <div className='bg-warning p-3'>
      <iframe width={'100%'} height={'500px'} src={`https://www.youtube.com/embed/${vidId}`} frameborder="0"></iframe>
    </div>
  )
}

export default VideoDetail
