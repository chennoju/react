import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function AppEffect(){
   const[resourceType,setResourcType]=useState('posts')
   const[items,setItems]=useState([])
   
   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response=>response.json())
    .then(json=>setItems(json))
   },[resourceType])
   return(<>
   
   <div>
    <button onClick={()=>setResourcType("posts")}>post</button>
    <button onClick={()=>setResourcType("users")}>users</button>
    <button onClick={()=>setResourcType("comments")}>comments</button>
    </div>
    <h1>{resourceType}</h1>
    {items.map(item=>{
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
    })}
    </>) 
}
export default AppEffect