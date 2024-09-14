import React, { useState } from 'react'
import Search from './Search'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'
function Main8() {

    let [txt,seTxt]  =   useState('')

    let [debounce,setDebounce] = useState(txt)

    let [vidArr,setVidArr] = useState([])

    let [vidId,setVidId] = useState(null)

  return (
    <div className='p-3'>
    <div className="d-flex justify-content-between align-items-center my-4">
        <img height={'70px'} width={'100px'} src=" https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" />
    <Search
     txt={txt}
    seTxt={seTxt}
     />
    
    </div>
      <div className="row">
       {
        vidId ?
        <div className="col-md-7 col-sm-7 m-sm-auto">
        <VideoDetail
        
        vidId={vidId}
        
        />
    </div> 
    :
    ''
       }
   <div className="col-md-5 col-sm-7 m-sm-auto">
    <VideoList
    txt={txt}
    debounce={debounce}
    setDebounce={setDebounce}
    vidArr={vidArr}
    setVidArr={setVidArr}
    setVidId={setVidId}

    />
</div>


      </div>
    </div>
  )
}

export default Main8
