import React from 'react'

function Test(props) {
  return ( 
    <div>
        <input type="text" onChange={props.onChangeHandler}></input>
    </div>
  )
}

export default Test