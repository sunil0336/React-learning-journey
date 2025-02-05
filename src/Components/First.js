import React from 'react'
import './style.css';


function First() {
    const data =['oen', 'two', 'three'];
  return (
    <div>
    <div className='fst'>This is the First Component
        
    </div>
        {data.map((items, idx) => (
            <h1 key={idx}>{items}</h1>
        ))}
    </div>
  )
}

export default First