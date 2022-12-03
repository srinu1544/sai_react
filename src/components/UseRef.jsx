import React,{useRef,useEffect} from 'react'

function UseRef() {

  const data = useRef(null);

const submitHandler = e => {
  e.preventDefault();
  console.log(data.current.value);
}

useEffect(()=>{
  data.current.focus()
},[])

  return (
    <div >
    <center>
      <form onSubmit={submitHandler}>
        <input ref={data} type='text' placeholder='enter'></input> <br></br>
        <input type='submit'></input>
      </form>
    </center>
    </div>
  );
}

export default UseRef;