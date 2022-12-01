import React, { Component } from 'react';
class Form  extends Component {
   constructor(props){
    super(props)
    this.inputRef=React.createRef()
    this.state={
        username:'',
        topic :'react'
    }
    this.userHandler=this.userHandler.bind(this)
    this.topicHandler=this.topicHandler.bind(this)
   }

   userHandler =(event)=>{
    this.setState({
        username:event.target.value
    });
   }

   topicHandler =(event)=>{
    this.setState({
        topic:event.target.value
    })
}
handleSubmit=(event)=>{
   alert(`${this.state.username}+" "+${this.state.topic}`)
   event.preventDefault()//dont refresh the page
}
componentDidMount(){
    this.inputRef.current.focus()
    console.log(this.inputRef)
}
handleRef=()=>{
alert(this.inputRef.current.value)
}
    render() { 
        return (
            <div>
                <div>
            <label>firstname</label>
            <input type="text" ref={this.inputRef}></input>
            <button onClick={this.handleRef}>click</button>
            </div>

            
            <form onSubmit={this.handleSubmit}>
                <div>
            <label>username</label>
            <input type="text" value={this.state.username} onChange={this.userHandler}></input>
            </div>

            
            

            <div>

                
                <label>select</label>
                <select value={this.state.topic} onChange={this.topicHandler}>
                    <option value="react">react</option>
                    <option value="vue">vue</option>
                    <option value="angular">angular</option>
                </select>
            </div>
            <button type="submit">submit</button>
            </form>
            
            </div>
        );
    }
}
 
export default Form ;