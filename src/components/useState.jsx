import React,{useState} from "react";

function AppCount(){
  /*  const[state,setState]=useState(()=>{
     console.log("running")
        return {count:4,theme:"blue"}
    })*/
    function calling(){
        console.log("running")
        return {count:4,theme:"blue"}
    }
    const[state,setState]=useState(()=>calling())
    const count=state.count
    const theme=state.theme
    function decrementCount(){
        setState(prevState=>{
        return{...prevState,count:prevState.count-1}
})

    }
    function incrementCount(){
        setState(prevState=>{
            return{...prevState,count:prevState.count+1}
        })
    }
        return(<>
        
        <button onClick={decrementCount}>-</button>
        <h1>{state.count}</h1>
        <button onClick={incrementCount}>+</button>
        </>);
    
}
export default AppCount