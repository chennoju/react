import React, { memo,useState } from 'react'
import { useEffect } from 'react'

const AppuseState = memo(() => {
    const [bool,setBool]=useState(false)
    const [count,setCount]=useState(0)
    const calling=()=>{
      return bool+" "+count
    }
  useEffect(()=>{
    setBool(prevBool=>true)
    setCount(prevCount=>prevCount-1)
    setCount(prevCount=>prevCount-1)
    console.log(calling())

  },[])
  return(<>
  </>)
})

export default AppuseState