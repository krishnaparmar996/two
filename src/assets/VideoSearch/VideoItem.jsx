import React from 'react'
 import Card from 'react-bootstrap/Card';

function VideoItem({ele,setVidId}) {
  return (
    <div>
        <Card 
        onClick={()=>setVidId(ele?.id?.videoId)}
        className='my-3' style={{ width: '100%' }}>
      <Card.Img variant="top" src={ele?.snippet?.thumbnails?.medium?.url} />
      <Card.Body>
        <Card.Title>{ele?.snippet?.title}</Card.Title>
       
       </Card.Body>
    </Card>
    </div>
  )
}

export default VideoItem
