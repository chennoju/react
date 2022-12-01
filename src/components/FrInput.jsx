import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

    const Fr=React.forwardRef((props,ref)=>{
        return (
            <div>
                <input type="text" ref={ref} />
            </div>
        )
    })