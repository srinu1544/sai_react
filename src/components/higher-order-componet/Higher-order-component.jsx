import React from 'react'
import Hoc from './Hoc'

function HigherOrderComponent({name}) {
  return (
    <div>
      <center>
     <h1> my darling love me {name}</h1>
      </center>
    </div>
    )
  
}

export default Hoc(HigherOrderComponent)