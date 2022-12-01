import React, { Component } from 'react'

export class Input extends Component {
  constructor(props){
    super(props)
    this.inputRef=React.createRef()
  }
    render() {
    return (
    <FrInput ref={this.inputRef}/>
    )
  }
}

export default Input