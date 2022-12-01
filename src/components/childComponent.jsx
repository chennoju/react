import React, { Component } from 'react'
import ParentComponent from './parentComponent';
class ChildComponent extends Component {
  
    render() { 
        return (
            <button onClick={()=>this.props.greetHandler("hi hello")}>greet parent</button>
        );
    }
}
 
export default ChildComponent;