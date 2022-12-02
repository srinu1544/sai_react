
import React,{createContext,useState} from 'react';
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';


export const store = createContext();



function ContextApiExample() {
  const [data,setData] = useState(11);
return (
    <div >
      <store.Provider value={[data,setData]}>
    <center>
       <ComponentA> </ComponentA>
       <ComponentB></ComponentB>
       <button onClick={() => setData(data+1)}>increment</button>
    </center>
    </store.Provider>
    </div>
  );
}

export default ContextApiExample;
