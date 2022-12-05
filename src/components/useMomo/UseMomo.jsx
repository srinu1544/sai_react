import React from 'react'
import { useState,useMemo } from 'react'

function UseMomo() {

     const [counter,setCounter] = useState(0);
     const [nunber, setNumber] = useState(5);

      const factNum = useMemo(()=>fact(nunber),[nunber]);

      //normal calling
      //const factNum = fact(nunber)




return (
    <div>
        <center>
            <button onClick={() => setCounter(counter+1)}>count increment</button> <br></br>
            <button onClick={() => setNumber(nunber+1)}>fact increment</button> <br></br>
            Counter : {counter} <br></br>
            factorial : {factNum} 
        </center>
    </div>
  )
}


const fact = (n) => {
    let answer = 1;
    for(var i=n;i>=1;i--) {
        answer = answer*i
    }
    console.log("factoril calling")
    return answer

}



export default UseMomo