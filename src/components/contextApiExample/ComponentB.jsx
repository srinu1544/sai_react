import React from 'react'
import { useContext } from 'react'
import {store} from './ContextApiExample'



function ComponentB() {
    const [data,setData] = useContext(store)
  return (
    <div>ComponentB {data}</div>
  )
}

export default ComponentB