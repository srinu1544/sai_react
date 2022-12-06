
import React from 'react'
import { useState } from 'react'
import Test from './Test'

function Controlled() {

    const [name,setName] = useState("")


    const onChangeHandler = (e) =>{
        setName(e.target.value)

    } 


  return (
    <div>
        Name : {name} <br></br>
        <input type="text" onChange={onChangeHandler}></input>
        <Test onChangeHandler={onChangeHandler}></Test>
    </div>
  )
}

export default Controlled