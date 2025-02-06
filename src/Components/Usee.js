
import React, { useEffect, useState } from 'react'

function Usee() {
  const [count, setCount] = useState(0);

  // useEffect(()=>{
  //   alert("counter in changed");
  // }, [count])
  
  useEffect(function (){
    alert("counter in changed");
  }, [count])

  console.log("rendering");

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=> setCount( count +1 )}>Click </button>
    
    </>
  )
}

export default Usee