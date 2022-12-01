import React, { Component } from 'react'
import axios from 'axios' 
class ApiFetch extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response=>response.json())
      .then(json=>setItems(json))`   `
    } 
  render() {
    const {posts} =this.state
    return (
      <div>ApiFetch
        {
            posts.length?
            posts.map(post=><div key={post.id}>{post.title}</div>):
            null
        }
      </div>
    )
  }
}
export default ApiFetch