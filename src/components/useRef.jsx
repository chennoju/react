import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function AppRef(){
    const [name,setName]=useState('')
    const count=useRef(0)
    const inputRef=useRef()
    useEffect(()=>{
        count.current=count.current+1
    })
    function focus(){
        inputRef.current.focus()
    }
    return(
        <>
        <input ref={inputRef} type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <div>My Name {name}</div>
        <div> I render {count.current}</div>
        <button onClick={focus}>focus</button>
        </>
    )
}
export default AppRef