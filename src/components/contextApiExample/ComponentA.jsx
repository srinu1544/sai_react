import React from 'react'
import { useContext } from 'react'
import {store} from './ContextApiExample'

function ComponentA() {

    const [data,setData] = useContext(store)
  return (
    <div>ComponentA {data}</div>
  )
}

export default ComponentA
 