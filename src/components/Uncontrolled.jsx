import React from 'react'
import { useRef } from 'react'

function Uncontrolled() {

    const inputRef = useRef(" ");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert(inputRef.current.value)
    }

    return (
        <div>

       
       
            <form onSubmit={onSubmitHandler}>
            <input type="text" ref={inputRef} ></input> <br></br>
       <input type="submit"  value="submit"></input>
            </form>
        </div>
    )
}

export default Uncontrolled