import React, { useEffect, useState } from 'react'

const Fn = () => {
    const [name,setName]=useState("");
    const[age,setAge]=useState(0);
    const [width,setWidth]=useState(window.innerWidth);
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth);
        })

    },[width])
  return (
    <div>
<input value={name} onChange={e=>setName(e.target.value)}/>
<button onClick={()=>setAge(c=>c-1)}>+</button>
{width}
    </div>
  )
}

export default Fn