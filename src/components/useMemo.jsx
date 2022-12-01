import React from 'react'
import { useEffect } from 'react'
import { useState,useMemo } from 'react'
function AppMemo(){
    const [number,setNumber]=useState("1")
    const [dark,setDark]=useState(false)
    const doubleNumber=useMemo(()=>{
        return   slowFunction(parseInt(number))
    },[number])
  
    const themeStyles= useMemo(()=>{
    return {
        backgroundColor:dark?'black':'white',
        color:dark?'white':'black'
    }
    },[dark])
    useEffect(()=>{
        console.log("theme changed")
    },[themeStyles])
    return (
        <div>
        <input type="text" value={number} onChange={(e)=>{setNumber((e.target.value))}}/>
        <button onClick={()=>setDark(prevDark=>!prevDark)}>change theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

  
function slowFunction(num){

    {
    setTimeout(() => {
        this.setState({ render : !this.state.render })
     }, 100000);
    }
    return num*2

}
export default AppMemo
