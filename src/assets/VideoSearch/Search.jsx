import React from 'react'
import Form from 'react-bootstrap/Form';


function Search({txt,seTxt}) {
  return (
    <div>
       <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
       className='my-4 w-100 m-auto'
       placeholder='SEARCH.......'
        value={txt}
        onChange={(e)=>seTxt(e.target.value)}
        
        />
    </div>
  )
}

export default Search
