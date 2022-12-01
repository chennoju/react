import React,{useReducer} from 'react'
/*
function reducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}    
        default:
            return state    
    }
}
function AppRecuder(){
    
  const [state,dispacher]=useReducer(reducer,{count:0})
  function increment(){
    dispacher({type:'increment'})
  }
  function decrement(){
    dispacher({type:'decrement'})
  }
  return(<>
  
  <button onclick={decrement}>minus</button>
  <h1>{state}</h1>
  <button onclick={increment}>+</button>
  </>)

}
export default AppRecuder */