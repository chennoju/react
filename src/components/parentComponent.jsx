import React, { Component } from 'react'
import ChildComponent from './childComponent';
class ParentComponent extends Component {
   constructor(props){
    super(props);
    this.state={
        messsage:"calling from parent"
    }
    this.greetparent=this.greetparent.bind(this)
   }
   greetparent(childname){
    this.setState({messsage:"call from child"}); 
   console.log(this.state.messsage+" "+childname);
   }

    render() { 
        return (
            <div>
       <ChildComponent greetHandler={this.greetparent}/>
       </div>
        );
    }
}
 
export default ParentComponent;