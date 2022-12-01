import React from "react";
import { useEffect,useState } from "react";

function AppContext(){
    useEffect(() => {
      console.log("render")
    }, [])


}
export default AppContext